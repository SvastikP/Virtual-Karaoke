//Server
//app.js
// Backend
const http = require("http");
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Socket.io: allow client origin (React dev server typically runs on 3000)
const io = new Server(server, {
  cors: { origin: "http://localhost:3000" }
});

app.use(cors());
app.use(express.json());

// Store room ids, participants, chat messages, and queue
const rooms = {};
const MAX_MESSAGES_PER_ROOM = 100;
const MAX_USERS_PER_ROOM = 15;

function getPublicPerformer(performer) {
  if (!performer) return null;
  return {
    socketId: performer.socketId,
    username: performer.username,
    upvotes: performer.upvotes
  };
}

// Create a room
app.post("/create-room", (_req, res) => {
  const roomId = Math.random().toString(36).substring(2, 8);
  rooms[roomId] = {
    users: [],
    messages: [],
    queue: [],
    performer: null,
    nowPlaying: null
  };
  res.json({ roomId });
});

// Check if room exists (for join)
app.post("/join-room", (req, res) => {
  const { roomId } = req.body;
  const exists = !!rooms[roomId];
  res.json({ exists });
});

// Song catalog (in production you might load from DB or config)
const SONGS = [
  { id: "1", title: "Song One", artist: "Artist A", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: "2", title: "Song Two", artist: "Artist B", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: "3", title: "Song Three", artist: "Artist C", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];
app.get("/songs", (_req, res) => res.json(SONGS));

// Socket.io: client connects and joins a room by roomId
io.on("connection", (socket) => {
  let currentRoom = null;
  let currentUsername = null;

  socket.on("join-room", ({roomId, username}) => {
    if (!rooms[roomId]) return;
    const room = rooms[roomId];

    //15 users per room
    if (room.users.length >= MAX_USERS_PER_ROOM) {
      socket.emit("room-full");
      return;
    }

    currentRoom = roomId;
    currentUsername = username;

    //Add this user to room's user list and join sockets room
    room.users.push({ socketId: socket.id, username });
    socket.join(roomId);

    //Send new user a list of all existing peers in room
    //Used to create webRTC connections
    const existingPeers = room.users
      .filter(u => u.socketId !== socket.id)
      .map(u => ({ socketId: u.socketId, username: u.username }));
    socket.emit("existing-peers", existingPeers);

    // Send current chat history and queue so the new client is in sync
    socket.emit("chat-history", rooms[roomId].messages);
    socket.emit("queue-updated", rooms[roomId].queue);
    socket.emit("performer-updated", getPublicPerformer(rooms[roomId].performer));
    socket.emit("queue-updated", rooms[roomId].queue || []);
    
    if (room.nowPlaying) {
      socket.emit("play-song", { song: room.nowPlaying });
    }


    socket.to(roomId).emit("user-joined", { socketId: socket.id, username });
  });

  //Forward offer to targeted peer
  //Session description used to detail how to communicate
  socket.on("webrtc-offer", ({ targetSocketId, offer, username }) => {
    io.to(targetSocketId).emit("webrtc-offer", { fromSocketId: socket.id, offer, username });
  });

  //Foward answer to peer who sent the offer
  //Session description used to answer back if offer can be worked on
  socket.on("webrtc-answer", ({ targetSocketId, answer }) => {
    io.to(targetSocketId).emit("webrtc-answer", { fromSocketId: socket.id, answer });
  });

  //Foward ICE candiates to the correct peer
  socket.on("webrtc-ice-candidate", ({ targetSocketId, candidate }) => {
    io.to(targetSocketId).emit("webrtc-ice-candidate", { fromSocketId: socket.id, candidate });
  });

  socket.on("chat-message", ({ roomId, username, text }) => {
    if (!rooms[roomId] || !text?.trim()) return;
    const msg = { username, text: text.trim(), id: Date.now().toString() };
    rooms[roomId].messages.push(msg);
    if (rooms[roomId].messages.length > MAX_MESSAGES_PER_ROOM) {
      rooms[roomId].messages.shift();
    }
    io.to(roomId).emit("chat-message", msg);
  });

  socket.on("queue-add", ({ roomId, song, username }) => {
    if (!rooms[roomId]) return;
    const room = rooms[roomId];
    if (!room.queue) room.queue = [];
    if (room.queue.find(q => q.id === song.id)) return; // no dupes
    room.queue.push({ ...song, addedBy: username });
    io.to(roomId).emit("queue-updated", room.queue);
  });

  socket.on("queue-remove", ({ roomId, songId }) => {
    if (!rooms[roomId]) return;
    rooms[roomId].queue = (rooms[roomId].queue || []).filter(q => q.id !== songId);
    io.to(roomId).emit("queue-updated", rooms[roomId].queue);
  });

  socket.on("play-song", ({ roomId, song }) => {
    if (!rooms[roomId]) return;

    rooms[roomId].nowPlaying = song;   // <-- store current song
    io.to(roomId).emit("play-song", { song });
  });

  socket.on("player-control", ({ roomId, action, time }) => {
    // action: "play" | "pause" | "seek"
    socket.to(roomId).emit("player-control", { action, time });
  });

  socket.on("performer-upvote", ({ roomId }) => {
    if (!rooms[roomId] || !rooms[roomId].performer) return;

    const performer = rooms[roomId].performer;

    // No self-upvotes: performer cannot vote for their own performance.
    if (performer.socketId === socket.id) return;

    // One vote per user per performance.
    if (performer.voterSocketIds.includes(socket.id)) return;

    performer.voterSocketIds.push(socket.id);
    performer.upvotes += 1;
    io.to(roomId).emit("performer-updated", getPublicPerformer(performer));
  });

  socket.on("disconnect", () => {
    if (currentRoom && rooms[currentRoom]) {
      if (rooms[currentRoom].performer?.socketId === socket.id) {
        rooms[currentRoom].performer = null;
        io.to(currentRoom).emit("performer-updated", null);
      }
      rooms[currentRoom].users = rooms[currentRoom].users.filter(u => u.socketId !== socket.id);
      io.to(currentRoom).emit("user-left", { socketId: socket.id });
    }
  });
});

if (require.main === module) {
  server.listen(4000, () => console.log("Server running on port 4000"));
}

module.exports = { app, server, rooms };
