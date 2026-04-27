#Create Karaoke database
#Database format id, title, video_url, duration
import sqlite3
import csv

conn = sqlite3.connect("karaoke.db")
cur = conn.cursor()

cur.execute("""
CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    video_url TEXT NOT NULL,
    duration REAL
)
""")

with open("karaoke.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        cur.execute(
            "INSERT INTO songs (title, video_url, duration) VALUES (?, ?, ?)",
            (row["Title"], row["Video url"], float(row["Duration in minutes"]))
        )

conn.commit()
conn.close()