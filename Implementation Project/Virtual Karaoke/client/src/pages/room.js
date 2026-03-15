import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:4000";
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:4000";

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

    s.emit("join-room", roomId);

    return () => {
      s.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleRemoveFromQueue = (queueItemId) => {
    if (!socket) return;
    socket.emit("queue-remove", { roomId, queueItemId });
  };

  return (
    <div className="room-container">
      <h1 className="title">Room: {roomId}</h1>

      <div className="room-main">
        <div className="room-media">
          <Webcam
            audio={true}
            className="camera-preview"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "user"
            }}
          />
          <div className="button-container">
            <button type="button" onClick={handleLeaveRoom}>Leave Room</button>
          </div>
        </div>

        <div className="songs-panel">
          <div className="panel-title">Songs</div>
          <ul className="songs-list">
            {songs.map((song) => (
              <li key={song.id} className="song-item">
                <span className="song-info">{song.title} — {song.artist}</span>
                <div className="song-actions">
                  <button
                    type="button"
                    className={"btn-preview " + (previewSongId === song.id ? "active" : "")}
                    onClick={() => handlePreview(song)}
                  >
                    {previewSongId === song.id ? "Stop" : "Preview"}
                  </button>
                  <button type="button" className="btn-add" onClick={() => handleAddToQueue(song)}>
                    Add to queue
                  </button>
                </div>
                {previewSongId === song.id && song.previewUrl && (
                  <audio
                    ref={audioRef}
                    src={song.previewUrl}
                    autoPlay
                    onEnded={handlePreviewEnded}
                    controls
                    className="preview-audio"
                    aria-label={"Preview of " + song.title}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="queue-panel">
          <div className="panel-title">Queue</div>
          <ul className="queue-list">
            {queue.length === 0 ? (
              <li className="queue-empty">No songs in queue</li>
            ) : (
              queue.map((item) => (
                <li key={item.id} className="queue-item">
                  <span className="queue-info">{item.title} — {item.artist}</span>
                  <span className="queue-added">added by {item.addedBy}</span>
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => handleRemoveFromQueue(item.id)}
                    title="Remove from queue"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="chat-panel">
          <div className="chat-title">Chat</div>
          <ul className="chat-messages">
            {messages.map((msg) => (
              <li key={msg.id} className="chat-message">
                <span className="chat-username">{String(msg.username) + ": " + String(msg.text)}</span>
              </li>
            ))}
            <li ref={messagesEndRef} />
          </ul>
          <form className="chat-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              className="chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={500}
            />
            <button type="submit" className="chat-send">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Room;
