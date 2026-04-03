from fastapi import FastAPI
import sqlite3
import yt_dlp

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
def get_stream(video_url: str):
    try:
        ydl_opts = {
            "format": "bestvideo+bestaudio/best",
            "quiet": True,
            "exec": "node",  # <-- ADD THIS LINE
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_url, download=False)

            # Some videos return formats instead of a direct URL
            if "url" in info:
                stream_url = info["url"]
            else:
                # Pick the best available format
                formats = info.get("formats", [])
                if not formats:
                    return {"error": "No formats available"}
                stream_url = formats[-1]["url"]

            return {
                "title": info.get("title"),
                "stream_url": stream_url
            }

    except Exception as e:
        return {"error": str(e)}
