//Server
//TestSongs.js
import { useState, useRef } from "react";
import allSongs from "./songs";

function TestSongs() {
  const [search, setSearch] = useState("");
  const [queue, setQueue] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const iframeRef = useRef(null);

  const songs = search
    ? allSongs.filter(song =>
        song.title.toLowerCase().includes(search.toLowerCase())
      )
    : allSongs;

  const addToQueue = (song) => {
    if (!queue.find(q => q.id === song.id)) {
      setQueue(prev => [...prev, song]);
    }
  };

  const removeFromQueue = (songId) => {
    setQueue(prev => prev.filter(q => q.id !== songId));
  };

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const playFromQueue = (song) => {
    setCurrentSong(song);
    removeFromQueue(song.id);
  };

  const getYouTubeId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Song Library</h1>

      {/* Player */}
      {currentSong && (
        <div style={{ marginBottom: "24px", background: "#111", borderRadius: "10px", padding: "12px" }}>
          <p style={{ color: "#fff", margin: "0 0 8px", fontWeight: "bold" }}>
            Now Playing: {currentSong.title}
          </p>
          <video
            width="100%"
            height="360"
            controls
            autoPlay
            style={{ borderRadius: "8px", display: "block", background: "black" }}
            src={
              currentSong.video_url.startsWith("http://localhost:9000")
                ? currentSong.video_url
                : `http://localhost:5000/songs/stream?video_url=${encodeURIComponent(currentSong.video_url)}`
            }
          />
        </div>
      )}

      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>

        {/* Song Library */}
        <div style={{ flex: 2 }}>
          <input
            type="text"
            placeholder="Search songs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: "8px", width: "100%", marginBottom: "12px", fontSize: "16px", boxSizing: "border-box" }}
          />
          <p style={{ color: "#666", marginBottom: "12px" }}>
            Showing {songs.length} of {allSongs.length} songs
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, maxHeight: "60vh", overflowY: "auto" }}>
            {songs.map(song => (
              <li key={song.id} style={{ padding: "10px", marginBottom: "8px", border: "1px solid #ddd", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ fontSize: "14px" }}>{song.title}</strong>
                  <br />
                  <span style={{ fontSize: "12px", color: "#666" }}>{song.duration} min</span>
                </div>
                <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                  <button
                    onClick={() => playSong(song)}
                    style={{ padding: "6px 10px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}
                  >
                    Play
                  </button>
                  <button
                    onClick={() => addToQueue(song)}
                    disabled={!!queue.find(q => q.id === song.id)}
                    style={{ padding: "6px 10px", background: queue.find(q => q.id === song.id) ? "#ccc" : "#2e7d32", color: "#fff", border: "none", borderRadius: "6px", cursor: queue.find(q => q.id === song.id) ? "default" : "pointer", fontSize: "12px" }}
                  >
                    {queue.find(q => q.id === song.id) ? "In Queue" : "+ Queue"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Queue */}
        <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", minWidth: "220px" }}>
          <div style={{ padding: "10px 14px", background: "#f0f0f0", fontWeight: "bold", borderBottom: "1px solid #ddd" }}>
            Queue ({queue.length})
          </div>
          {queue.length === 0 ? (
            <p style={{ padding: "14px", color: "#888", fontStyle: "italic", margin: 0 }}>No songs in queue</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, maxHeight: "60vh", overflowY: "auto" }}>
              {queue.map((song, index) => (
                <li key={song.id} style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>
                  <div style={{ fontSize: "13px", fontWeight: "500", marginBottom: "6px" }}>
                    {index + 1}. {song.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>{song.duration} min</div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      onClick={() => playFromQueue(song)}
                      style={{ padding: "4px 8px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "11px" }}
                    >
                      Play
                    </button>
                    <button
                      onClick={() => removeFromQueue(song.id)}
                      style={{ padding: "4px 8px", background: "#fff", color: "#c62828", border: "1px solid #ef9a9a", borderRadius: "5px", cursor: "pointer", fontSize: "11px" }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

export default TestSongs;