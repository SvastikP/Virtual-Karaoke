# Jira Implementation Plan – Virtual Karaoke

Plan for the five room features: chat, song preview, add/view/remove queue.

---

## Current state

- **Backend:** Express on port 4000; in-memory `rooms[roomId] = { users: [] }`; REST only (create-room, join-room). No WebSockets.
- **Client:** Room page shows room ID, webcam, and Leave. No real-time connection to server once in the room.

---

## 1. Chat system in rooms

**Goal:** Everyone in a room can send and see messages in real time.

**Approach:** Add **Socket.io** on server and client so the server can broadcast messages to all clients in a room.

| Layer   | Work |
|--------|------|
| **Server** | Install `socket.io`, attach to HTTP server. On client connect, have client “join” a Socket.io room by `roomId`. On event `chat:message` (payload: `{ roomId, userId/username, text }`), validate room, optionally store last N messages in `rooms[roomId].messages`, then `io.to(roomId).emit('chat:message', payload)`. |
| **Client** | Install `socket.io-client`. In Room page, connect to server and `socket.emit('join-room', roomId)`. Maintain `messages` state; on `chat:message` append to state. Render message list and an input + Send button that emits `chat:message`. |

**Dependencies:** Chat and shared queue both need Socket.io; implementing Socket.io once supports both.

---

## 2. Preview songs

**Goal:** Users can preview songs (e.g. 30-second clip or full track) before adding to queue.

**Approach:** Define a **song catalog** (e.g. in server or client) with at least: `id`, `title`, `artist`, `previewUrl` (or `audioUrl`). Add a “Songs” / “Browse” UI in the room that lists songs; each row has a “Preview” control that plays the preview (e.g. HTML5 `<audio>` or a small player component).

| Layer   | Work |
|--------|------|
| **Data** | Song list: start with a static JSON array (or GET `/songs`). Preview URLs can be placeholders (e.g. public sample MP3s) or later integrate a music API. |
| **Client** | Song list component in Room; “Preview” button/icon per song that sets `<audio src={previewUrl} />` and plays; optional 30s stop or “Stop preview” button. |

**Note:** If you don’t have real preview URLs yet, use placeholder URLs or a few public domain clips so the UI and “add to queue” flow can be built.

---

## 3. Add song to queue

**Goal:** User can add a song (from the catalog) to the room’s shared queue.

| Layer   | Work |
|--------|------|
| **Server** | Extend `rooms[roomId]` with `queue: []`. Each item: `{ id, songId, title, artist, addedBy?, addedAt? }`. Socket.io event `queue:add` with `{ roomId, song }`; server pushes to `rooms[roomId].queue` and broadcasts updated queue to the room (e.g. `io.to(roomId).emit('queue:updated', queue)`). |
| **Client** | From song list (or preview), “Add to queue” button that emits `queue:add` with the selected song. Listen for `queue:updated` and set local state so the queue view stays in sync. |

---

## 4. View shared queue

**Goal:** Everyone in the room sees the same queue (order and contents).

| Layer   | Work |
|--------|------|
| **Server** | On socket `join-room`, after adding the socket to the Socket.io room, send current queue: `socket.emit('queue:updated', rooms[roomId].queue || [])`. All queue changes already broadcast `queue:updated` (from add/remove). |
| **Client** | Room page keeps `queue` state; render a “Queue” section that lists items (title, artist, optional “Remove”). When `queue:updated` is received, replace `queue` state with the payload. |

---

## 5. Remove song from queue

**Goal:** A user can remove a song from the shared queue (e.g. own request or any item).

| Layer   | Work |
|--------|------|
| **Server** | Socket.io event `queue:remove` with `{ roomId, index }` or `{ roomId, songQueueId }`. Validate room and index/id, splice/remove from `rooms[roomId].queue`, then broadcast `queue:updated` with the new array. |
| **Client** | “Remove” (or trash icon) on each queue row; onClick emit `queue:remove` with the item’s index or id. No need to update state manually if server broadcasts `queue:updated`; the listener will update the shared queue view. |

---

## Suggested implementation order

1. **Socket.io setup** – Server: attach Socket.io, handle `join-room` by `roomId`. Client: connect and join room by `roomId`. (Required for chat and queue.)
2. **Room data model** – Add `messages` and `queue` to `rooms[roomId]`; send `queue` and optionally last `messages` on join.
3. **Chat** – Server: `chat:message` → store + broadcast. Client: message list + input, listen for `chat:message`.
4. **Song catalog** – Static list + GET `/songs` or import in client; add “Browse / Songs” UI in room.
5. **Preview** – Play preview in client (e.g. `<audio>` + Preview button per song).
6. **Queue add** – `queue:add` on server, “Add to queue” in client, `queue:updated` listener.
7. **Queue view** – “Queue” panel that renders `queue` state (already driven by `queue:updated`).
8. **Queue remove** – `queue:remove` on server, Remove button per item in queue UI.

---

## Tech summary

| Need              | Solution |
|-------------------|----------|
| Real-time sync    | Socket.io (server + client) |
| Chat storage      | In-memory `rooms[roomId].messages` (optional cap, e.g. 100) |
| Queue storage     | In-memory `rooms[roomId].queue` |
| Song catalog      | Static JSON or GET `/songs` |
| Preview playback  | HTML5 `<audio>` and preview URLs |

After this, you can copy the plan into Jira as subtasks or link this file in each issue.
