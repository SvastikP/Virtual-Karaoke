import { useState, useEffect, useRef , useCallback} from "react";
import Webcam from "react-webcam";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:4000";
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:4000";
const MAX_USERS = 15;

//STUN servers used by webRTC to communicate
const ICE_SERVERS = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ],
};

//Display a user's video
function VideoTile({ stream, username, isSelf }) {
  const videoRef = useRef(null);

  useEffect(() => {
    //When stream changes, attach to the video element
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="video-tile" data-self={isSelf}>
      <video ref={videoRef} autoPlay playsInline muted={isSelf} className="video-el" />
      <div className="video-label">{isSelf ? `${username} (You)` : username}</div>
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
  const [songs, setSongs] = useState([]);
  const [queue, setQueue] = useState([]);
  const [previewSongId, setPreviewSongId] = useState(null);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);

  const localStreamRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const peersRef = useRef({});
  const [peers, setPeers] = useState({});

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  //Sync users
  const updatePeers = useCallback(() => {
    setPeers({ ...peersRef.current });
  }, []);

  //Create webRTC connection between users
  const createPeerConnection = useCallback((targetSocketId, targetUsername, socketInstance) => {
    const pc = new RTCPeerConnection(ICE_SERVERS);

    //attach local tracks(auido & video) so remote peer recieves stream
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => {
        pc.addTrack(track, localStreamRef.current);
      });
    }

    //Create empty stream to add new users to video grid
    const remoteStream = new MediaStream();
    peersRef.current[targetSocketId] = { pc, stream: remoteStream, username: targetUsername };
    updatePeers();

    //Add user to empty stream
    pc.ontrack = (e) => {
      e.streams[0].getTracks().forEach(track => remoteStream.addTrack(track));
      peersRef.current[targetSocketId] = { ...peersRef.current[targetSocketId], stream: remoteStream };
      updatePeers();
    };

    //Forward ice to the empty stream 
    pc.onicecandidate = (e) => {
      if (e.candidate) {
        socketInstance.emit("webrtc-ice-candidate", { targetSocketId, candidate: e.candidate });
      }
    };

    //unexpeceted disconnects
    pc.onconnectionstatechange = () => {
      if (["disconnected", "failed", "closed"].includes(pc.connectionState)) {
        delete peersRef.current[targetSocketId];
        updatePeers();
      }
    };

    return pc;
  }, [updatePeers]);

  //get camera and mic
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        localStreamRef.current = stream;
        setLocalStream(stream);
      })
      .catch(err => console.error("Media error:", err));

    return () => {
      localStreamRef.current?.getTracks().forEach(t => t.stop());
    };
  }, []);



  useEffect(() => {
    fetch(API_BASE + "/songs")
      .then((res) => res.json())
      .then(setSongs)
      .catch(() => setSongs([]));
  }, []);

  useEffect(() => {
    const s = io(SOCKET_URL);
    setSocket(s);

    s.on("chat-history", (history) => setMessages(Array.isArray(history) ? history : []));
    s.on("chat-message", (msg) => setMessages((prev) => [...prev, msg]));
    s.on("queue-updated", (q) => setQueue(Array.isArray(q) ? q : []));

    s.on("play-song", ({ streamUrl }) => {
      const player = document.getElementById("karaoke-player");
      if (player) {
        player.src = streamUrl;
        player.play().catch(err => console.error("Autoplay blocked:", err));
      }
    });

    s.on("connect", () => { s.emit("join-room", { roomId, username }); });
    
    s.on("room-full", () => {
      alert("Room is full (max 15 users).");
      navigate("/");
    });

    //Initiate offer as existing user
    s.on("user-joined", async ({ socketId: remoteId, username: remoteUsername }) => {
      const pc = createPeerConnection(remoteId, remoteUsername, s);
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        s.emit("webrtc-offer", { targetSocketId: remoteId, offer, username });
      } catch (err) { console.error("Offer error:", err); }
    });

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

    //Reiceve answer from peer that user sent offer to
    s.on("webrtc-answer", async ({ fromSocketId, answer }) => {
      const entry = peersRef.current[fromSocketId];
      if (entry?.pc) {
        try { await entry.pc.setRemoteDescription(new RTCSessionDescription(answer)); }
        catch (err) { console.error("Set answer error:", err); }
      }
    });

    //Reieve and apply ICE candidate from any peer
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

  const handlePreview = (song) => {
    if (previewSongId === song.id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPreviewSongId(null);
      return;
    }
    setPreviewSongId(song.id);
  };

  const handlePreviewEnded = () => {
    setPreviewSongId(null);
  };

  const handleAddToQueue = (song) => {
    if (!socket) return;
    socket.emit("queue-add", {
      roomId,
      song: { id: song.id, title: song.title, artist: song.artist },
      username
    });
  };

  const handlePlayNow = async (song) => {
    if (!socket) return;

    socket.emit("play-now", {
      roomId,
      videoUrl: song.video_url || song.videoUrl
    });
  };

  const fetchStreamUrl = async (videoUrl) => {
    try {
      const res = await fetch(`http://localhost:5000/songs/stream?video_url=${encodeURIComponent(videoUrl)}`);
      const data = await res.json();
      return data.stream_url;
    } catch (err) {
      console.error("Stream fetch error:", err);
      return null;
    }
  };

  const handleRemoveFromQueue = (queueItemId) => {
    if (!socket) return;
    socket.emit("queue-remove", { roomId, queueItemId });
  };

  const peerEntries = Object.entries(peers);
  const totalTiles = 1 + peerEntries.length;
  const gridCols = totalTiles <= 1 ? 1 : totalTiles <= 4 ? 2 : totalTiles <= 9 ? 3 : 4;



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
          <video
            id="karaoke-player"
            className="karaoke-player"
            controls
            autoPlay
            style={{ width: "100%", marginBottom: "12px", borderRadius: "8px" }}
          />
          <div className="video-grid" style={{ "--cols": gridCols }}>
            {localStream
              ? <VideoTile stream={localStream} username={username} isSelf={true} />
              : <div className="video-tile no-stream"><div className="video-label">{username} (You)</div><div className="no-cam">📷</div></div>
            }
            {peerEntries.map(([socketId, { stream, username: peerName }]) => (
              <VideoTile key={socketId} stream={stream} username={peerName} isSelf={false} />
            ))}
          </div>
        </div>

        <div className="sidebar">
          <div className="side-panel">
            <div className="panel-title">Queue</div>
            <ul className="panel-list">
              {queue.length === 0 ? (
                <li className="panel-empty">No songs in queue</li>
              ) : (
                queue.map(item => (
                  <li key={item.id} className="queue-item">
                    <span className="q-title">{item.title}</span>
                    <span className="q-artist">{item.artist}</span>
                    <span className="q-by">by {item.addedBy}</span>
                    <button className="btn-remove" onClick={() => handleRemoveFromQueue(item.id)}>✕</button>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="side-panel">
            <div className="panel-title">Songs</div>
            <ul className="panel-list">
              {songs.map(song => (
                <li key={song.id} className="song-item">
                  <div className="song-meta">
                    <span className="s-title">{song.title}</span>
                    <span className="s-artist">{song.artist}</span>
                  </div>
                  <div className="song-btns">
                    <button
                      className={"btn-preview " + (previewSongId === song.id ? "active" : "")}
                      onClick={() => handlePreview(song)}
                    >
                      {previewSongId === song.id ? "■" : "▶"}
                    </button>

                    <button className="btn-add" onClick={() => handleAddToQueue(song)}>+</button>

                    <button className="btn-add" style={{ background: "#1976d2" }} onClick={() => handlePlayNow(song)}>
                      Play
                    </button>
                  </div>
                  {previewSongId === song.id && song.previewUrl && (
                    <audio ref={audioRef} src={song.previewUrl} autoPlay onEnded={() => setPreviewSongId(null)} controls className="preview-audio" />
                  )}
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
