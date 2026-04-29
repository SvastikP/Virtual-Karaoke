//Server
//room.js
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import allSongs from "./songs";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:4000";
const MAX_USERS = 15;

//STUN servers used by webRTC to communicate
const ICE_SERVERS = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ],
};

//Check if a song url is a local file or a youtube link
function isLocalUrl(url) {
  return url?.startsWith("http://localhost") || url?.startsWith("http://127.");
}

//Extract youtube video id from url
function getYouTubeId(url) {
  return url?.match(/[?&]v=([^&]+)/)?.[1] || null;
}

//Smart player - renders a <video> for local files, <iframe> for YouTube
function KaraokePlayer({ song, onControl }) {
  const videoRef = useRef(null);
  const suppressRef = useRef(false); //prevent echo-back when applying remote control

  //When song changes load it into the video element if local
  useEffect(() => {
    if (!song) return;
    if (isLocalUrl(song.video_url) && videoRef.current) {
      videoRef.current.src = song.video_url;
      videoRef.current.play().catch(() => {});
    }
  }, [song]);

  //Broadcast play event to other room members
  const handlePlay = () => {
    if (suppressRef.current) return;
    onControl("play", videoRef.current?.currentTime);
  };

  //Broadcast pause event to other room members
  const handlePause = () => {
    if (suppressRef.current) return;
    onControl("pause", videoRef.current?.currentTime);
  };

  //Called by parent to apply a remote play/pause without re-broadcasting
  KaraokePlayer.applyControl = (action, time) => {
    const v = videoRef.current;
    if (!v) return;
    suppressRef.current = true;
    if (time !== undefined) v.currentTime = time;
    if (action === "play") v.play().catch(() => {});
    if (action === "pause") v.pause();
    setTimeout(() => { suppressRef.current = false; }, 300);
  };

  //Empty state before any song is selected
  if (!song) {
    return (
      <div style={{
        width: "100%", aspectRatio: "16/9", background: "#111",
        borderRadius: "8px", marginBottom: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#555", fontSize: "14px"
      }}>
        No song playing
      </div>
    );
  }

  //Local mp4 - use native video element so play/pause sync works
  if (isLocalUrl(song.video_url)) {
    return (
      <video
        ref={videoRef}
        className="karaoke-player"
        controls
        autoPlay
        onPlay={handlePlay}
        onPause={handlePause}
        style={{ width: "100%", marginBottom: "12px", borderRadius: "8px", aspectRatio: "16/9" }}
      />
    );
  }

  //YouTube link - use iframe embed
  const videoId = getYouTubeId(song.video_url);
  if (videoId) {
    return (
      <iframe
        id="karaoke-player"
        className="karaoke-player"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        style={{ width: "100%", marginBottom: "12px", borderRadius: "8px", aspectRatio: "16/9", border: "none" }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  }

  //Fallback for any other direct video url
  return (
    <video
      ref={videoRef}
      src={song.video_url}
      className="karaoke-player"
      controls
      autoPlay
      onPlay={handlePlay}
      onPause={handlePause}
      style={{ width: "100%", marginBottom: "12px", borderRadius: "8px", aspectRatio: "16/9" }}
    />
  );
}

//Display a user's video
function VideoTile({ stream, username, isSelf, isPerformer }) {
  const videoRef = useRef(null);

  useEffect(() => {
    //When stream changes, attach to the video element
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={"video-tile" + (isPerformer ? " performer-tile" : "")} data-self={isSelf}>
      <video ref={videoRef} autoPlay playsInline muted={isSelf} className="video-el" />
      <div className="video-label">
        {isSelf ? `${username} (You)` : username}
        {isPerformer ? " • Singing" : ""}
      </div>
    </div>
  );
}

function Room() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [username] = useState(() => "User_" + Math.random().toString(36).substring(2, 6));
  const [songSearch, setSongSearch] = useState("");
  const filteredSongs = songSearch
    ? allSongs.filter(s => s.title.toLowerCase().includes(songSearch.toLowerCase()))
    : allSongs;
  const [queue, setQueue] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null); //currently playing song object
  const messagesEndRef = useRef(null);

  const localStreamRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const peersRef = useRef({});
  const [peers, setPeers] = useState({});

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [selfSocketId, setSelfSocketId] = useState(null);
  const [performer, setPerformer] = useState(null);

  //Sync users
  const updatePeers = useCallback(() => {
    setPeers({ ...peersRef.current });
  }, []);

  //Create webRTC connection between users
  const createPeerConnection = useCallback(
    (targetSocketId, targetUsername, socketInstance) => {
      const pc = new RTCPeerConnection(ICE_SERVERS);

      // Attach local tracks
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => {
          pc.addTrack(track, localStreamRef.current);
        });
      }

      // Create empty remote stream
      const remoteStream = new MediaStream();
      peersRef.current[targetSocketId] = {
        pc,
        stream: remoteStream,
        username: targetUsername,
      };
      updatePeers();

      pc.ontrack = e => {
        e.streams[0].getTracks().forEach(track => remoteStream.addTrack(track));
        peersRef.current[targetSocketId] = {
          ...peersRef.current[targetSocketId],
          stream: remoteStream,
        };
        updatePeers();
      };

      pc.onicecandidate = e => {
        if (e.candidate && socketInstance) {
          socketInstance.emit("webrtc-ice-candidate", {
            targetSocketId,
            candidate: e.candidate,
          });
        }
      };

      pc.onconnectionstatechange = () => {
        if (["disconnected", "failed", "closed"].includes(pc.connectionState)) {
          delete peersRef.current[targetSocketId];
          updatePeers();
        }
      };

      return pc;
    },
    [updatePeers]
  );



  //Get camera and mic
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        localStreamRef.current = stream;
        setLocalStream(stream);

        Object.values(peersRef.current).forEach(({ pc }) => {
          stream.getTracks().forEach(track => {
            pc.addTrack(track, stream);
          });
        });
      })
      .catch(err => console.error("Media error:", err));

    return () => {
      localStreamRef.current?.getTracks().forEach(t => t.stop());
    };
  }, []);

  useEffect(() => {
    const s = io(SOCKET_URL);
    setSocket(s);

    s.on("chat-history", (history) => setMessages(Array.isArray(history) ? history : []));
    s.on("chat-message", (msg) => setMessages((prev) => [...prev, msg]));

    //Queue is now server-synced - all room members share the same queue
    s.on("queue-updated", (q) => setQueue(Array.isArray(q) ? q : []));
    s.on("performer-updated", (nextPerformer) => setPerformer(nextPerformer || null));

    //Play a song - broadcast to all room members so everyone sees the same song
    s.on("play-song", ({ song }) => {
      setNowPlaying(song);
    });

    //Sync play/pause for local video files across all room members
    s.on("player-control", ({ action, time }) => {
      KaraokePlayer.applyControl?.(action, time);
    });

    s.on("connect", () => {
      setSelfSocketId(s.id);
      s.emit("join-room", { roomId, username });
    });

    s.on("room-full", () => {
      alert("Room is full (max 15 users).");
      navigate("/");
    });

    //Initiate offer as existing user
    s.on("user-joined", ({ socketId: remoteId, username: remoteUsername }) => {
      // If our camera/mic is NOT ready yet, wait until it is
      if (!localStreamRef.current) {
        const interval = setInterval(() => {
          if (localStreamRef.current) {
            clearInterval(interval);
            createOfferToNewUser(remoteId, remoteUsername);
          }
        }, 100);
        return;
      }
      // If camera is ready, create offer immediately
      createOfferToNewUser(remoteId, remoteUsername);
    });

    async function createOfferToNewUser(remoteId, remoteUsername) {
      const pc = createPeerConnection(remoteId, remoteUsername, s);
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        s.emit("webrtc-offer", {
          targetSocketId: remoteId,
          offer,
          username,
        });
      } catch (err) {
        console.error("Offer error:", err);
      }
    }

    //Server tells who is in the room and awaiting offers
    s.on("existing-peers", (existingPeers) => {
      existingPeers.forEach(({ socketId: remoteId, username: remoteUsername }) => {
        createPeerConnection(remoteId, remoteUsername, s);
      });
    });

    //Recieve offer, and give answer
    s.on("webrtc-offer", async ({ fromSocketId, offer, username: remoteUsername }) => {
      let entry = peersRef.current[fromSocketId];
      const pc = entry ? entry.pc : createPeerConnection(fromSocketId, remoteUsername, s);
      try {
        await pc.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        s.emit("webrtc-answer", { targetSocketId: fromSocketId, answer });
      } catch (err) { console.error("Answer error:", err); }
    });

    //Recieve answer from peer that user sent offer to
    s.on("webrtc-answer", async ({ fromSocketId, answer }) => {
      const entry = peersRef.current[fromSocketId];
      if (entry?.pc) {
        try { await entry.pc.setRemoteDescription(new RTCSessionDescription(answer)); }
        catch (err) { console.error("Set answer error:", err); }
      }
    });

    //Receive and apply ICE candidate from any peer
    s.on("webrtc-ice-candidate", async ({ fromSocketId, candidate }) => {
      const entry = peersRef.current[fromSocketId];
      if (entry?.pc && candidate) {
        try { await entry.pc.addIceCandidate(new RTCIceCandidate(candidate)); }
        catch (err) { console.error("ICE error:", err); }
      }
    });

    //Clean connection
    s.on("user-left", ({ socketId: remoteId }) => {
      const entry = peersRef.current[remoteId];
      if (entry) {
        entry.pc.close();
        delete peersRef.current[remoteId];
        updatePeers();
      }
    });

    return () => {
      Object.values(peersRef.current).forEach(({ pc }) => pc.close());
      peersRef.current = {};
      s.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleMic = () => {
    const enabled = !micOn;
    localStreamRef.current?.getAudioTracks().forEach(t => (t.enabled = enabled));
    setMicOn(enabled);
  };

  const toggleCam = () => {
    const enabled = !camOn;
    localStreamRef.current?.getVideoTracks().forEach(t => (t.enabled = enabled));
    setCamOn(enabled);
  };

  const handleLeaveRoom = () => {
    navigate("/");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || !socket) return;
    socket.emit("chat-message", { roomId, username, text });
    setInputText("");
  };

  //Add song to the shared server-side queue
  const handleAddToQueue = (song) => {
    if (!socket) return;
    socket.emit("queue-add", { roomId, song, username });
  };

  //Remove a song from the shared queue by id
  const handleRemoveFromQueue = (songId) => {
    if (!socket) return;
    socket.emit("queue-remove", { roomId, songId });
  };

  //Play a song immediately and broadcast to all room members
  //Also removes it from the queue if it was queued
  const handlePlayNow = (song) => {
    if (!socket) return;
    socket.emit("play-song", { roomId, song, username });
    socket.emit("queue-remove", { roomId, songId: song.id });
  };

  //Broadcast local video play/pause so all members stay in sync
  const handlePlayerControl = (action, time) => {
    if (!socket) return;
    socket.emit("player-control", { roomId, action, time });
  };

  const handleUpvotePerformer = () => {
    if (!socket || !performer) return;
    socket.emit("performer-upvote", { roomId });
  };

  const peerEntries = Object.entries(peers);
  const totalTiles = 1 + peerEntries.length;
  const gridCols = totalTiles <= 1 ? 1 : totalTiles <= 4 ? 2 : totalTiles <= 9 ? 3 : 4;
  const isSelfPerformer = performer?.socketId === selfSocketId;
  const inQueue = (id) => queue.some(q => q.id === id);

  return (
    <div className="room-root">
      <header className="room-header">
        <div className="room-header-left">
          <span className="room-logo">🎵</span>
          <span className="room-id-badge">Room: {roomId}</span>
          <span className="room-count">{totalTiles} / {MAX_USERS}</span>
        </div>
        <div className="room-header-right">
          <button className={"ctrl-btn " + (micOn ? "ctrl-on" : "ctrl-off")} onClick={toggleMic}>
            {micOn ? "🎙️" : "🔇"}
          </button>
          <button className={"ctrl-btn " + (camOn ? "ctrl-on" : "ctrl-off")} onClick={toggleCam}>
            {camOn ? "📷" : "🚫"}
          </button>
          <button className="ctrl-btn ctrl-leave" onClick={handleLeaveRoom}>Leave</button>
        </div>
      </header>

      <div className="room-body">

        <div className="video-grid-wrap">
          <div className="performer-bar">
            {performer ? (
              <>
                <span className="performer-name">{performer.username} is performing</span>
                <span className="performer-upvotes">Upvotes: {performer.upvotes}</span>
                {!isSelfPerformer && (
                  <button type="button" className="btn-upvote" onClick={handleUpvotePerformer}>
                    Upvote
                  </button>
                )}
              </>
            ) : (
              <span className="performer-name">No one is currently performing</span>
            )}
          </div>

          {/* Smart player - auto switches between local video and YouTube iframe */}
          <KaraokePlayer song={nowPlaying} onControl={handlePlayerControl} />

          <div className="video-grid" style={{ "--cols": gridCols }}>
            {localStream
              ? <VideoTile stream={localStream} username={username} isSelf={true} isPerformer={isSelfPerformer} />
              : <div className="video-tile no-stream"><div className="video-label">{username} (You)</div><div className="no-cam">📷</div></div>
            }
            {peerEntries.map(([socketId, { stream, username: peerName }]) => (
              <VideoTile
                key={socketId}
                stream={stream}
                username={peerName}
                isSelf={false}
                isPerformer={performer?.socketId === socketId}
              />
            ))}
          </div>
        </div>

        <div className="sidebar">
          <div className="side-panel">
            {/* Queue count matches TestSongs style */}
            <div className="panel-title">
              Queue <span style={{ fontWeight: "normal", fontSize: "12px", opacity: 0.6 }}>({queue.length})</span>
            </div>
            <ul className="panel-list">
              {queue.length === 0 ? (
                <li className="panel-empty">No songs in queue</li>
              ) : (
                queue.map(item => (
                  <li key={item.id} className="queue-item">
                    <div>
                      <span className="q-title">{item.title}</span>
                      <span className="q-by" style={{ display: "block", fontSize: "11px", opacity: 0.6 }}>
                        Added by {item.addedBy}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                      <button className="btn-add" style={{ background: "#1976d2" }} onClick={() => handlePlayNow(item)}>
                        Play
                      </button>
                      <button className="btn-remove" onClick={() => handleRemoveFromQueue(item.id)}>✕</button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="side-panel">
            {/* Song count shows filtered vs total like TestSongs */}
            <div className="panel-title">
              Songs <span style={{ fontWeight: "normal", fontSize: "12px", opacity: 0.6 }}>
                ({filteredSongs.length}{songSearch ? ` of ${allSongs.length}` : ""})
              </span>
            </div>
            <div style={{ padding: "8px" }}>
              <input
                type="text"
                placeholder="Search songs..."
                value={songSearch}
                onChange={e => setSongSearch(e.target.value)}
                style={{ width: "100%", padding: "6px 8px", fontSize: "13px", boxSizing: "border-box", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>
            <ul className="panel-list">
              {filteredSongs.map(song => (
                <li key={song.id} className="song-item">
                  <div className="song-meta">
                    <span className="s-title">{song.title}</span>
                    <span className="s-artist">{song.duration} min</span>
                  </div>
                  <div className="song-btns">
                    {/* Grey out + button if song is already in queue */}
                    <button
                      className="btn-add"
                      onClick={() => handleAddToQueue(song)}
                      disabled={inQueue(song.id)}
                      style={{ opacity: inQueue(song.id) ? 0.4 : 1 }}
                    >+</button>
                    <button className="btn-add" style={{ background: "#1976d2" }} onClick={() => handlePlayNow(song)}>
                      Play
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="side-panel chat-panel">
            <div className="panel-title">Chat</div>
            <ul className="chat-messages">
              {messages.map(msg => (
                <li key={msg.id} className="chat-msg">
                  <span className="chat-user">{msg.username}</span>
                  <span className="chat-text">{msg.text}</span>
                </li>
              ))}
              <li ref={messagesEndRef} />
            </ul>
            <form className="chat-form" onSubmit={handleSendMessage}>
              <input type="text" className="chat-input" placeholder="Say something..." value={inputText} onChange={e => setInputText(e.target.value)} maxLength={500} />
              <button type="submit" className="chat-send">↑</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Room;