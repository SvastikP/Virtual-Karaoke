#Server
#csv_to_js.py
import csv
import json

songs = []
with open("karaoke.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for i, row in enumerate(reader, start=1):
        songs.append({
            "id": i,
            "title": row["Title"],
            "video_url": row["Video url"],
            "duration": float(row["Duration in minutes"])
        })

js_content = "const songs = " + json.dumps(songs, indent=2) + ";\n\nexport default songs;"

with open("songs.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Done! {len(songs)} songs written to songs.js")