#Server
#songs_api.py
from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
import sqlite3
import yt_dlp
import json

app = FastAPI()

def get_db():
    conn = sqlite3.connect("karaoke.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.get("/songs")
def list_songs(order: str = "asc"):
    conn = get_db()
    cur = conn.cursor()

    if order == "desc":
        cur.execute("SELECT * FROM songs ORDER BY title DESC")
    else:
        cur.execute("SELECT * FROM songs ORDER BY title ASC")

    return [dict(row) for row in cur.fetchall()]

@app.get("/songs/search")
def search_songs(q: str):
    conn = get_db()
    cur = conn.cursor()

    cur.execute("SELECT * FROM songs WHERE title LIKE ?", (f"%{q}%",))
    return [dict(row) for row in cur.fetchall()]

@app.get("/songs/stream")
def stream(video_url: str):
    ydl_opts = {
        "quiet": True,
        "skip_download": True,
        "format": "bv*+ba/best",
        "http_headers": {
            "User-Agent": "Mozilla/5.0",
        },
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_url, download=False)

            fmt = None
            for f in info["formats"]:
                if f.get("acodec") != "none" and f.get("vcodec") != "none" and f.get("url"):
                    fmt = f
                    break

            if not fmt:
                raise HTTPException(status_code=500, detail="No suitable format found")

            stream_url = fmt["url"]

        # Proxy the stream through FastAPI
        r = requests.get(stream_url, stream=True, headers={"User-Agent": "Mozilla/5.0"})
        if r.status_code != 200:
            raise HTTPException(status_code=500, detail="Failed to fetch video stream")

        return StreamingResponse(
            r.iter_content(chunk_size=1024 * 64),
            media_type="video/mp4"
        )

    except Exception as e:
        print("yt-dlp error:", e)
        raise HTTPException(status_code=500, detail="Failed to get stream URL")
    
@app.get("/local_songs")
def local_songs():
    with open("local_songs.json") as f:
        return json.load(f)