---

# **Virtual Karaoke**

A real‑time, multi‑user karaoke platform,  
where users can join rooms, stream their cameras, queue songs, and sing together with synchronized playback.

---

## **Credits**

### **Designed By**
- Michael Ahmadi  
- Jacob Gepp  
- Bhumit Patel  
- Jayanth Podapati  

### **Implemented By**
- Vinny Manara  
- Jinghui Pang  
- Svastik Patel  

---

## **About YouTube Playback**

YouTube’s permissions and embedded playback restrictions **do not allow direct video playback inside custom WebRTC applications**.  
Because of this, **YouTube videos will not play automatically** inside Virtual Karaoke.

To use these songs, you must **download the videos locally** and serve them from your own machine.

### Recommended Playlist  
Download songs from this playlist:

[https://www.youtube.com/watch?v=sPMA1tqWuf4&list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R](https://www.youtube.com/watch?v=sPMA1tqWuf4&list=PL8D4Iby0Bmm94U_rwuJuocyC1xFoPTd5R)

---

## **Using Local MP4 Karaoke Videos**

### **1. Create a folder for downloaded songs**
Example:
```
/Users/yourname/karaoke-videos
```

Download MP4 files into this folder using tools like **yt-dlp**, **4K Video Downloader**, etc.

---

### **2. Run a local HTTP server in that folder**

#### Python (recommended)
```
cd /Users/yourname/karaoke-videos
python3 -m http.server 9000
```

Your videos will now be available at:
```
http://localhost:9000/<filename>.mp4
```

#### Node.js alternative
```
npx http-server /Users/yourname/karaoke-videos -p 9000
```

---

### **3. Update the API to use your local MP4 files**

Replace any YouTube URLs with:
```
http://localhost:9000/<your-video>.mp4
```

Example:
```json
{
  "id": "song1",
  "title": "Bohemian Rhapsody",
  "video_url": "http://localhost:9000/bohemian.mp4"
}
```

The Smart Player will automatically detect and play local MP4 files.

---

## 🐳 **How to Run Virtual Karaoke (Docker)**

### **Prerequisites**
- Install **Docker Desktop**
- Ensure Docker Desktop is running

---

### **1. Navigate to the project root**
```
cd Virtual Karaoke
```

---

### **2. Build and start the client + server**
```
docker compose up --build
```

---

### **3. When containers are ready, you should see**
```
server-1  | Server running on port 4000
client-1  | Client running on port 3000
```

---

### **4. Open your browser**
- Virtual Karaoke App:  
  **http://localhost:3000**

- Song Library API:  
  **http://localhost:5000/songs**

- Test Song Library:  
  **http://localhost:3000/test-songs**

---

### **5. Stop the app**
Press:
```
Ctrl + C
```

---
