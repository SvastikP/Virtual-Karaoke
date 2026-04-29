const songs = [
  {
    "id": 1,
    "title": "Ed Sheeran - Perfect (Karaoke Version)",
    "video_url": "http://localhost:9000/Ed%20Sheeran%20-%20Perfect.mp4",
    "duration": 4.93
  },
  {
    "id": 2,
    "title": "Frozen - Let It Go (Idina Menzel) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ifCAfAzOBJM",
    "duration": 3.98
  },
  {
    "id": 3,
    "title": "John Legend - All of Me (Karaoke With Backing Vocals)",
    "video_url": "https://www.youtube.com/watch?v=kr8wPkdHFA0",
    "duration": 4.85
  },
  {
    "id": 4,
    "title": "Celine Dion - My Heart Will Go On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cdgU8YmD3Kc",
    "duration": 5.68
  },
  {
    "id": 5,
    "title": "Elvis Presley - Can't Help Falling In Love (Karaoke Version)",
    "video_url": "http://localhost:9000/Elvis%20Presley%20-%20Can%27t%20Help%20Falling%20In%20Love.mp4",
    "duration": 3.57
  },
  {
    "id": 6,
    "title": "Lady Gaga - Always Remember Us This Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9sVKwwSvvLw",
    "duration": 3.68
  },
  {
    "id": 7,
    "title": "Lady Gaga, Bradley Cooper - Shallow (A Star Is Born) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_nHT_k9Rswc",
    "duration": 3.75
  },
  {
    "id": 8,
    "title": "Christina Perri - A Thousand Years (Karaoke With Backing Vocals)",
    "video_url": "https://www.youtube.com/watch?v=j1V33b2ZEIo",
    "duration": 5.02
  },
  {
    "id": 9,
    "title": "Billie Eilish - lovely (with Khalid) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CGXeSUtbhFk",
    "duration": 3.57
  },
  {
    "id": 10,
    "title": "Lewis Capaldi - Someone You Loved (Karaoke Version)",
    "video_url": "http://localhost:9000/Lewis%20Capaldi%20-%20Someone%20You%20Loved.mp4",
    "duration": 3.38
  },
  {
    "id": 11,
    "title": "Lukas Graham - 7 Years (Karaoke Version)",
    "video_url": "http://localhost:9000/Lukas%20Graham%20-%207%20Years.mp4",
    "duration": 4.27
  },
  {
    "id": 12,
    "title": "Alexandra Burke - Hallelujah (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e3C8Nh3DIwA",
    "duration": 3.93
  },
  {
    "id": 13,
    "title": "Calum Scott - You Are The Reason (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zMcfZyb5wCo",
    "duration": 3.77
  },
  {
    "id": 14,
    "title": "Whitney Houston - I Have Nothing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CS1Xf9hfUCk",
    "duration": 5.38
  },
  {
    "id": 15,
    "title": "Jessie J - Flashlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pdheWX4oO1A",
    "duration": 3.65
  },
  {
    "id": 16,
    "title": "Queen - Bohemian Rhapsody (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9Lxm0iSnKNc",
    "duration": 6.25
  },
  {
    "id": 17,
    "title": "Auli'i Cravalho - How Far I'll Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a5LOjg1EiAk",
    "duration": 3.18
  },
  {
    "id": 18,
    "title": "TONES & I - DANCE MONKEY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=an0JKXnnrAY",
    "duration": 3.83
  },
  {
    "id": 19,
    "title": "Ed Sheeran - Shape Of You (Karaoke Version)",
    "video_url": "http://localhost:9000/Ed%20Sheeran%20-%20Shape%20Of%20You.mp4",
    "duration": 4.3
  },
  {
    "id": 20,
    "title": "Rihanna - Diamonds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7DzQs7dpNL8",
    "duration": 4.08
  },
  {
    "id": 21,
    "title": "Alicia Keys - If I Ain't Got You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M5Q0eiMzup0",
    "duration": 4.37
  },
  {
    "id": 22,
    "title": "Ed Sheeran - Photograph (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XpXe2mXmhp0",
    "duration": 4.62
  },
  {
    "id": 23,
    "title": "Ruth B - Lost Boy (Karaoke Version)",
    "video_url": "http://localhost:9000/Ruth%20B%20-%20Lost%20Boy.mp4",
    "duration": 4.92
  },
  {
    "id": 24,
    "title": "ABBA - Dancing Queen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WHayJZ3eMcE",
    "duration": 4.27
  },
  {
    "id": 25,
    "title": "Sia - Chandelier (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b3iox_qUaUE",
    "duration": 3.9
  },
  {
    "id": 26,
    "title": "Justin Bieber ft. Ludacris - Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1a5SWpp9Wfg",
    "duration": 3.97
  },
  {
    "id": 27,
    "title": "Sam Smith - I'm Not The Only One (Classic Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XcZX89Z0nVA",
    "duration": 4.28
  },
  {
    "id": 28,
    "title": "The Greatest Showman - A Million Dreams (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3f2X_gIJ_u4",
    "duration": 4.77
  },
  {
    "id": 29,
    "title": "Billie Eilish - idontwannabeyouanymore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DUWfL7U-StI",
    "duration": 3.78
  },
  {
    "id": 30,
    "title": "Billie Eilish - idontwannabeyouanymore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DUWfL7U-StI",
    "duration": 3.78
  },
  {
    "id": 31,
    "title": "Ed Sheeran - Thinking Out Loud (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Dd9W3PthynU",
    "duration": 4.92
  },
  {
    "id": 32,
    "title": "Olivia Rodrigo - drivers license (Karaoke Version)",
    "video_url": "http://localhost:9000/Olivia%20Rodrigo%20-%20drivers%20license.mp4",
    "duration": 4.28
  },
  {
    "id": 33,
    "title": "The Greatest Showman - Never Enough (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0nxmS92MiSM",
    "duration": 3.82
  },
  {
    "id": 34,
    "title": "Jason Mraz - I'm Yours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kn8YiDSYcq4",
    "duration": 4.45
  },
  {
    "id": 35,
    "title": "Alicia Keys - Girl On Fire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rSWHCZoX2mE",
    "duration": 4.07
  },
  {
    "id": 36,
    "title": "David Guetta ft. Sia - Titanium (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=32LB2DR_JM0",
    "duration": 4.23
  },
  {
    "id": 37,
    "title": "Miley Cyrus - The Climb (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FL9Hcz85CGw",
    "duration": 4.27
  },
  {
    "id": 38,
    "title": "Meghan Trainor ft. John Legend - Like I'm Gonna Lose You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mawPX4US1l4",
    "duration": 3.98
  },
  {
    "id": 39,
    "title": "Taylor Swift - Blank Space (Backing Track)",
    "video_url": "https://www.youtube.com/watch?v=EuOp_2Zcr8E",
    "duration": 4.2
  },
  {
    "id": 40,
    "title": "James Arthur - Say You Won't Let Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jb2T4ZXL6R4",
    "duration": 4.12
  },
  {
    "id": 41,
    "title": "Taylor Swift - You Belong With Me (Backing Track)",
    "video_url": "https://www.youtube.com/watch?v=5B_dHpwfBXE",
    "duration": 4.22
  },
  {
    "id": 42,
    "title": "Sia - Snowman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WWu83Z4pqss",
    "duration": 2.97
  },
  {
    "id": 43,
    "title": "The Little Mermaid - Part Of Your World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wnWKoEATxh8",
    "duration": 3.77
  },
  {
    "id": 44,
    "title": "Alan Walker - Faded (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xf5rgfur4gw",
    "duration": 3.63
  },
  {
    "id": 45,
    "title": "Imagine Dragons - Believer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sfbCZw_c2Zs",
    "duration": 3.75
  },
  {
    "id": 46,
    "title": "Whitney Houston - I Will Always Love You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8kotNQ07ZEw",
    "duration": 5.07
  },
  {
    "id": 47,
    "title": "Let Her Go  - Passenger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ug_OM0WzVmA",
    "duration": 4.38
  },
  {
    "id": 48,
    "title": "Radiohead - Creep (Karaoke Version)",
    "video_url": "http://localhost:9000/Radiohead%20-%20Creep.mp4",
    "duration": 4.3
  },
  {
    "id": 49,
    "title": "Camila Cabello ft. Young Thug - Havana (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dd2nfgicFds",
    "duration": 3.97
  },
  {
    "id": 50,
    "title": "Adele - Make You Feel My Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x8SpSPBeeUE",
    "duration": 3.7
  },
  {
    "id": 51,
    "title": "Rihanna - Stay ft. Mikky Ekko (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bhGqtMsp0-w",
    "duration": 4.27
  },
  {
    "id": 52,
    "title": "Anna Kendrick - Cups (Pitch Perfect's \"When I'm Gone) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mNL7iE-CxXA",
    "duration": 2.68
  },
  {
    "id": 53,
    "title": "P!nk ft. Nate Ruess - Just Give Me A Reason (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SJVH11MFY7I",
    "duration": 4.37
  },
  {
    "id": 54,
    "title": "Luis Fonsi, Daddy Yankee ft. Justin Bieber - Despacito (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jRpDuEgqQQQ",
    "duration": 4.37
  },
  {
    "id": 55,
    "title": "Daniel Caesar ft. H.E.R. - Best Part (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=otKYi0rYYx8",
    "duration": 3.78
  },
  {
    "id": 56,
    "title": "Jessie J ft. B.o.B - Price Tag (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hyB4iyq2tmw",
    "duration": 4.1
  },
  {
    "id": 57,
    "title": "Backstreet Boys - I Want It That Way (Karaoke Version)",
    "video_url": "http://localhost:9000/Backstreet%20Boys%20-%20I%20Want%20It%20That%20Way.mp4",
    "duration": 4.2
  },
  {
    "id": 58,
    "title": "Kelly Clarkson - Because Of You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WWJyJGY1T2M",
    "duration": 4.03
  },
  {
    "id": 59,
    "title": "The Cranberries - Zombie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m8CEEkqQiiY",
    "duration": 5.28
  },
  {
    "id": 60,
    "title": "Frank Sinatra - My Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tAEek8nO11c",
    "duration": 4.88
  },
  {
    "id": 61,
    "title": "Adele - Someone Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BPRoNqB2XK8",
    "duration": 5.03
  },
  {
    "id": 62,
    "title": "Taylor Swift - Love Story (Backing Track)",
    "video_url": "https://www.youtube.com/watch?v=ZqY3eONjX5k",
    "duration": 4.25
  },
  {
    "id": 63,
    "title": "Lionel Richie - Stuck On You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s8CszZUic4w",
    "duration": 3.45
  },
  {
    "id": 64,
    "title": "Charlie Puth - One Call Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1hx2ynaUaHY",
    "duration": 3.87
  },
  {
    "id": 65,
    "title": "Adele - Rolling In The Deep (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LOd3u6FtkAk",
    "duration": 4.12
  },
  {
    "id": 66,
    "title": "Tangled - I See The Light (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FLgWioSXAQU",
    "duration": 3.93
  },
  {
    "id": 67,
    "title": "Goo Goo Dolls - Iris (Karaoke Version)",
    "video_url": "http://localhost:9000/Goo%20Goo%20Dolls%20-%20Iris.mp4",
    "duration": 3.93
  },
  {
    "id": 68,
    "title": "Calum Scott - Dancing On My Own (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DvEXv4Shx7s",
    "duration": 4.9
  },
  {
    "id": 69,
    "title": "The Calling - Wherever You Will Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sTGFkbjK3IU",
    "duration": 3.62
  },
  {
    "id": 70,
    "title": "Olivia Rodrigo - traitor (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wvpoGzmd5v4",
    "duration": 4.22
  },
  {
    "id": 71,
    "title": "One Direction - Night Changes (Karaoke Version)",
    "video_url": "http://localhost:9000/One%20Direction%20-%20Night%20Changes.mp4",
    "duration": 4.1
  },
  {
    "id": 72,
    "title": "Miley Cyrus - Wrecking Ball (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S78RmvtH79Y",
    "duration": 4.0
  },
  {
    "id": 73,
    "title": "ZAYN, Zhavia Ward - A Whole New World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OfwnWaFP_bc",
    "duration": 4.25
  },
  {
    "id": 74,
    "title": "Aerosmith - I Don't Want To Miss A Thing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s9Qc54Jp-6M",
    "duration": 5.63
  },
  {
    "id": 75,
    "title": "Beyonce - If I Were A Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=56kZ5BYfO6E",
    "duration": 4.45
  },
  {
    "id": 76,
    "title": "Demi Lovato - Stone Cold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yFOxf2Y0H1g",
    "duration": 3.85
  },
  {
    "id": 77,
    "title": "Sam Smith - Stay With Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7C8034DlmIM",
    "duration": 3.2
  },
  {
    "id": 78,
    "title": "Little Mix ft. Jason Derulo - Secret Love Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FWJtQj_Okpc",
    "duration": 4.78
  },
  {
    "id": 79,
    "title": "Olivia Newton John - Hopelessly Devoted To You from \"Grease\" (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jF4xOhCdrlo",
    "duration": 3.33
  },
  {
    "id": 80,
    "title": "Andra Day - Rise Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J_E1mLcgYq4",
    "duration": 4.67
  },
  {
    "id": 81,
    "title": "Sam Smith - Lay Me Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UuGannvDvQk",
    "duration": 4.1
  },
  {
    "id": 82,
    "title": "Frozen 2 - Into The Unknown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9rnQFsbDa3o",
    "duration": 3.65
  },
  {
    "id": 83,
    "title": "Naomi Scott - Speechless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wqE5j1TQWVs",
    "duration": 3.62
  },
  {
    "id": 84,
    "title": "Vance Joy - Riptide (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XWq1hK6XtjU",
    "duration": 3.77
  },
  {
    "id": 85,
    "title": "John Denver - Take Me Home, Country Roads (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7aNW9hRKYA8",
    "duration": 3.63
  },
  {
    "id": 86,
    "title": "Meghan Trainor - Dear Future Husband (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ny2EbG0ddx4",
    "duration": 3.52
  },
  {
    "id": 87,
    "title": "Keane - Somewhere Only We Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l5shwZTwHec",
    "duration": 4.22
  },
  {
    "id": 88,
    "title": "Eric Clapton - Wonderful Tonight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WDXiPavQjNg",
    "duration": 3.8
  },
  {
    "id": 89,
    "title": "4 Non Blondes - What's Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oLShwvZopls",
    "duration": 5.25
  },
  {
    "id": 90,
    "title": "Simple Plan - Perfect (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5f15CcwlluQ",
    "duration": 4.85
  },
  {
    "id": 91,
    "title": "Jessie J, Ariana Grande and Nicki Minaj - Bang Bang (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u1OG4gBcPaA",
    "duration": 3.63
  },
  {
    "id": 92,
    "title": "Wham! - Last Christmas (Single Edit) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kaBRnhxPLdE",
    "duration": 4.9
  },
  {
    "id": 93,
    "title": "Ysabelle - I Like You So Much, You'll Know It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wHrs4LjdKw4",
    "duration": 3.72
  },
  {
    "id": 94,
    "title": "John Lennon - Imagine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MR70Dg0_o1A",
    "duration": 3.43
  },
  {
    "id": 95,
    "title": "Rod Stewart - I Don't Want To Talk About It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BdReRY0VIRg",
    "duration": 4.83
  },
  {
    "id": 96,
    "title": "Lil Nas X ft. Billy Ray Cyrus - Old Town Road (Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=exPFJVbIz0c",
    "duration": 2.9
  },
  {
    "id": 97,
    "title": "John Legend - All Of Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6VoT-KrseHA",
    "duration": 4.78
  },
  {
    "id": 98,
    "title": "Ellie Goulding - Love Me Like You Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tW0UjwMOQz8",
    "duration": 4.6
  },
  {
    "id": 99,
    "title": "OneRepublic - Counting Stars (Karaoke Version)",
    "video_url": "http://localhost:9000/OneRepublic%20-%20Counting%20Stars.mp4",
    "duration": 4.6
  },
  {
    "id": 100,
    "title": "Bon Jovi - Always (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RBgimRYxorE",
    "duration": 6.25
  },
  {
    "id": 101,
    "title": "Frank Sinatra - Fly Me To The Moon (Karaoke Version)",
    "video_url": "http://localhost:9000/Frank%20Sinatra%20-%20Fly%20Me%20To%20The%20Moon.mp4",
    "duration": 2.77
  },
  {
    "id": 102,
    "title": "The Chainsmokers ft. Halsey - Closer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r0A_1UbB70o",
    "duration": 4.23
  },
  {
    "id": 103,
    "title": "Britney Spears - ...Baby One More Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PYpU2TxIzAM",
    "duration": 4.12
  },
  {
    "id": 104,
    "title": "Taylor Swift - Back To December (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VHpK1i6XnkY",
    "duration": 5.47
  },
  {
    "id": 105,
    "title": "gnash - i hate u, i love u (feat. Olivia O'Brien) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_Bti9H8Y24U",
    "duration": 4.48
  },
  {
    "id": 106,
    "title": "Shawn Mendes, Camila Cabello - Sen\u0303orita (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kC8jBnooHgs",
    "duration": 3.5
  },
  {
    "id": 107,
    "title": "Ariana Grande - 7 Rings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7BfhCUB_YkI",
    "duration": 3.15
  },
  {
    "id": 108,
    "title": "Amy Winehouse - Back To Black (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nturlhtt7WA",
    "duration": 4.37
  },
  {
    "id": 109,
    "title": "Ariana Grande - Dangerous Woman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jppqAygqVTc",
    "duration": 4.4
  },
  {
    "id": 110,
    "title": "Imagine Dragons - Demons (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TsCPrboDunw",
    "duration": 3.38
  },
  {
    "id": 111,
    "title": "Chris Stapleton - Tennessee Whiskey (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DVxVXBpi7vc",
    "duration": 5.25
  },
  {
    "id": 112,
    "title": "Evanescence - Bring Me To Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=frpfRwGv6KU",
    "duration": 4.6
  },
  {
    "id": 113,
    "title": "Demi Lovato - Skyscraper (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PHfZnrXNyiA",
    "duration": 4.4
  },
  {
    "id": 114,
    "title": "Emeli Sand\u00e9 - Read All About It Pt. III (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KDbafD4FQRk",
    "duration": 5.05
  },
  {
    "id": 115,
    "title": "Olivia Rodrigo - happier (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=or1_3KMpp3Y",
    "duration": 3.37
  },
  {
    "id": 116,
    "title": "Hozier - Take Me To Church (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2bb67GtsI80",
    "duration": 4.2
  },
  {
    "id": 117,
    "title": "Rihanna - Take A Bow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=femohd7zllQ",
    "duration": 4.72
  },
  {
    "id": 118,
    "title": "Miley Cyrus - Flowers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fO4wsNsXtDg",
    "duration": 3.48
  },
  {
    "id": 119,
    "title": "Journey - Don't Stop Believin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c8wn2fMYvns",
    "duration": 4.6
  },
  {
    "id": 120,
    "title": "Billie Eilish - bad guy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GsFlbMS7UIc",
    "duration": 3.55
  },
  {
    "id": 121,
    "title": "Olivia Rodrigo - All I Want (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DqqsTljY3PA",
    "duration": 3.23
  },
  {
    "id": 122,
    "title": "Sam Smith - Too Good At Goodbyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yiOHvS4rP5c",
    "duration": 3.82
  },
  {
    "id": 123,
    "title": "Taylor Swift - Shake It Off (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-i5MU14JLdw",
    "duration": 4.17
  },
  {
    "id": 124,
    "title": "Justin Bieber - Sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9CLvFIsp9oo",
    "duration": 3.9
  },
  {
    "id": 125,
    "title": "Whitney Houston - The Greatest Love Of All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aQEg6dwLFDc",
    "duration": 5.27
  },
  {
    "id": 126,
    "title": "The Script - The Man Who Can't Be Moved (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Im2A5pbWis8",
    "duration": 4.22
  },
  {
    "id": 127,
    "title": "Duncan Laurence - Arcade (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=19Kju46x324",
    "duration": 3.27
  },
  {
    "id": 128,
    "title": "Ben E. King - Stand By Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OU3699R53rs",
    "duration": 3.4
  },
  {
    "id": 129,
    "title": "Richard Marx - Right Here Waiting (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jZ8o_ZGt9QY",
    "duration": 4.55
  },
  {
    "id": 130,
    "title": "Magic! - Rude (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QQre5RbiyGM",
    "duration": 4.05
  },
  {
    "id": 131,
    "title": "Tangled - When Will My Life Begin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aoVtLhhPtSc",
    "duration": 2.77
  },
  {
    "id": 132,
    "title": "Miley Cyrus - Party In The USA (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kfa-26JfdDA",
    "duration": 3.97
  },
  {
    "id": 133,
    "title": "The Greatest Showman - Rewrite The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mayU6Gqpg9Y",
    "duration": 4.1
  },
  {
    "id": 134,
    "title": "Miley Cyrus - Angels Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=H5iZ0PMJa0U",
    "duration": 3.67
  },
  {
    "id": 135,
    "title": "Queen - Love Of My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rGTHC4I_JPk",
    "duration": 3.83
  },
  {
    "id": 136,
    "title": "Katy Perry - Roar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hMF4h0gYN-0",
    "duration": 4.17
  },
  {
    "id": 137,
    "title": "The Chainsmokers feat. Daya - Don't Let Me Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5FHDnD-VcHI",
    "duration": 4.05
  },
  {
    "id": 138,
    "title": "A Great Big World, Christina Aguilera - Say Something (Karaoke Version, No Backing Vocals)",
    "video_url": "https://www.youtube.com/watch?v=DhQ46uh2vBU",
    "duration": 4.4
  },
  {
    "id": 139,
    "title": "Jason Mraz - I Won't Give Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UdxPKQ0_PdE",
    "duration": 4.4
  },
  {
    "id": 140,
    "title": "Justin Bieber - Love Yourself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mY00uFz5bTA",
    "duration": 4.28
  },
  {
    "id": 141,
    "title": "Meghan Trainor - All About That Bass (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m3dSO95AALI",
    "duration": 3.63
  },
  {
    "id": 142,
    "title": "The Beatles - Let It Be (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OhRUYf_yn_s",
    "duration": 4.02
  },
  {
    "id": 143,
    "title": "The Police - Every Breath You Take (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gKjIiaAXfDs",
    "duration": 4.32
  },
  {
    "id": 144,
    "title": "Mark Ronson ft. Amy Winehouse - Valerie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yH2mILMKC-0",
    "duration": 3.98
  },
  {
    "id": 145,
    "title": "Dua Lipa - New Rules (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TsEYfkT4eF8",
    "duration": 3.8
  },
  {
    "id": 146,
    "title": "Shawn Mendes - Treat You Better (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QIJQ7dxuKgY",
    "duration": 3.68
  },
  {
    "id": 147,
    "title": "Mena Massoud, Naomi Scott  - A Whole New World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4hwpLK7CWVM",
    "duration": 3.02
  },
  {
    "id": 148,
    "title": "Christina Perri - A Thousand Years (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=85zr83teaug",
    "duration": 4.7
  },
  {
    "id": 149,
    "title": "George Michael - Careless Whisper (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1TIeDbnzp9M",
    "duration": 5.73
  },
  {
    "id": 150,
    "title": "Sia - Cheap Thrills (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LqrqgALM1Ug",
    "duration": 3.98
  },
  {
    "id": 151,
    "title": "Harry Styles - Sign Of The Times (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vAjEtYdqhTA",
    "duration": 6.1
  },
  {
    "id": 152,
    "title": "Nicki Minaj - Super Bass (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=20GjgF_3faw",
    "duration": 3.72
  },
  {
    "id": 153,
    "title": "Gloria Gaynor - I Will Survive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FsUa8P-L2Ag",
    "duration": 3.83
  },
  {
    "id": 154,
    "title": "Madison Beer - Reckless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xbUHj4bQ5Ew",
    "duration": 3.68
  },
  {
    "id": 155,
    "title": "3 Doors Down - Here Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OzmFgCQftmc",
    "duration": 4.25
  },
  {
    "id": 156,
    "title": "Billie Eilish - Ocean Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rqF-W9QBHUQ",
    "duration": 3.67
  },
  {
    "id": 157,
    "title": "Billie Eilish - Ocean Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rqF-W9QBHUQ",
    "duration": 3.67
  },
  {
    "id": 158,
    "title": "Lady Gaga - Bad Romance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ep0-h-rGHRk",
    "duration": 5.37
  },
  {
    "id": 159,
    "title": "Ruth B - Dandelions (Karaoke Version)",
    "video_url": "http://localhost:9000/Ruth%20B%20-%20Dandelions.mp4",
    "duration": 4.17
  },
  {
    "id": 160,
    "title": "Conan Gray - Heather (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WwUYq7kr9dU",
    "duration": 3.63
  },
  {
    "id": 161,
    "title": "Stevie Wonder - I Just Called To Say I Love You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x-ufoMYaVYE",
    "duration": 4.9
  },
  {
    "id": 162,
    "title": "Lana Del Rey - Young And Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w54NfoUuhXo",
    "duration": 4.23
  },
  {
    "id": 163,
    "title": "Lady A - Need You Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U4j8UroIWqU",
    "duration": 4.32
  },
  {
    "id": 164,
    "title": "Colbie Caillat - Bubbly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=X_fmt_y2AzM",
    "duration": 3.65
  },
  {
    "id": 165,
    "title": "Ariana Grande, John Legend - Beauty & The Beast (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RH43YE20y-0",
    "duration": 4.18
  },
  {
    "id": 166,
    "title": "Ariana Grande - One Last Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ca-PCQ2LMk4",
    "duration": 3.62
  },
  {
    "id": 167,
    "title": "ABBA - Mamma Mia (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1YN5Emwwoss",
    "duration": 3.73
  },
  {
    "id": 168,
    "title": "Maroon 5 - Memories (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KSr0TJH5m-Q",
    "duration": 3.62
  },
  {
    "id": 169,
    "title": "Marshmello, Anne Marie - FRIENDS (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6ela2HnWEBk",
    "duration": 3.68
  },
  {
    "id": 170,
    "title": "Whitney Houston - I Wanna Dance With Somebody (Who Loves Me) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=st-yPBxRVPM",
    "duration": 5.45
  },
  {
    "id": 171,
    "title": "The Greatest Showman - This Is Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V59psMbygfI",
    "duration": 4.22
  },
  {
    "id": 172,
    "title": "Paramore - The Only Exception (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yCXcs2B8du0",
    "duration": 4.82
  },
  {
    "id": 173,
    "title": "Shawn Mendes - There's Nothing Holding Me Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=69mrR_Lc_yA",
    "duration": 3.75
  },
  {
    "id": 174,
    "title": "Charlie Puth - Attention (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6I3lHjuNn7g",
    "duration": 3.93
  },
  {
    "id": 175,
    "title": "Charlie Puth ft. Selena Gomez - We Don't Talk Anymore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IUmIIBeYr1I",
    "duration": 4.33
  },
  {
    "id": 176,
    "title": "Whitney Houston - One Moment In Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TPl0fZ5lK20",
    "duration": 5.18
  },
  {
    "id": 177,
    "title": "Josh Groban - You Raise Me Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=btwJm_mV-84",
    "duration": 5.12
  },
  {
    "id": 178,
    "title": "Lewis Capaldi - Before You Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5_3hSGhcuo0",
    "duration": 3.93
  },
  {
    "id": 179,
    "title": "XXXTENTACION - Changes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qfmxYHMWjwQ",
    "duration": 2.35
  },
  {
    "id": 180,
    "title": "Labrinth - Jealous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uVAt8WqEJhE",
    "duration": 5.05
  },
  {
    "id": 181,
    "title": "Oasis - Wonderwall (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R_EXyGWI9rU",
    "duration": 4.85
  },
  {
    "id": 182,
    "title": "Ce\u0301line Dion - Because You Loved Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sPu9jduC1HI",
    "duration": 4.97
  },
  {
    "id": 183,
    "title": "Mariah Carey - O Holy Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9zYS2GVCWRM",
    "duration": 4.8
  },
  {
    "id": 184,
    "title": "Whitney Houston - Saving All My Love For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KTxLR8GOUt4",
    "duration": 4.17
  },
  {
    "id": 185,
    "title": "Birdy - Skinny Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sndK-GAOLPM",
    "duration": 3.73
  },
  {
    "id": 186,
    "title": "BLACKPINK - How You Like That (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9F3bo-bu07s",
    "duration": 3.35
  },
  {
    "id": 187,
    "title": "Alessia Cara - How Far I'll Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z3QKTOUC6H8",
    "duration": 3.17
  },
  {
    "id": 188,
    "title": "Ronan Keating - When You Say Nothing At All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p8p0z_w0Juk",
    "duration": 4.58
  },
  {
    "id": 189,
    "title": "Angeline Quinto - Till I Met You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6bYMHkKGR5Y",
    "duration": 4.15
  },
  {
    "id": 190,
    "title": "Frozen - For The First Time In Forever (Idina Menzel and Kristen Bell) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rmQ_n0rJ7JE",
    "duration": 4.02
  },
  {
    "id": 191,
    "title": "Michael Jackson - Billie Jean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eXqBhDAlVCc",
    "duration": 5.62
  },
  {
    "id": 192,
    "title": "Leona Lewis - Bleeding Love (Valentine's Day Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=BsjLCISj4kU",
    "duration": 4.77
  },
  {
    "id": 193,
    "title": "Anne Marie - 2002 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xb3oMef3hnc",
    "duration": 3.4
  },
  {
    "id": 194,
    "title": "Christina Perri - Human (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yqubSu9RbSM",
    "duration": 4.53
  },
  {
    "id": 195,
    "title": "Ariana Grande ft. Nicki Minaj - Side To Side (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GlkwnJTIrcI",
    "duration": 4.38
  },
  {
    "id": 196,
    "title": "Lionel Richie & Diana Ross - Endless Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yYgFs1_BUV0",
    "duration": 4.63
  },
  {
    "id": 197,
    "title": "Melanie Martinez - Dollhouse (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ic76QuFskME",
    "duration": 4.18
  },
  {
    "id": 198,
    "title": "Foreigner - I Want To Know What Love Is (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p1r1DHgYm9Y",
    "duration": 5.12
  },
  {
    "id": 199,
    "title": "Carrie Underwood - Before He Cheats (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AqYrOoZpsjg",
    "duration": 3.65
  },
  {
    "id": 200,
    "title": "Shakira - Waka Waka (This Time For Africa) (Karaoke Version)",
    "video_url": "http://localhost:9000/Shakira%20-%20Waka%20Waka%20%28This%20Time%20For%20Africa%29.mp4",
    "duration": 3.73
  },
  {
    "id": 201,
    "title": "Jessie J - Domino (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GZ_ROLrdvPI",
    "duration": 4.23
  },
  {
    "id": 202,
    "title": "The Righteous Brothers - Unchained Melody (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dqIzep89HBw",
    "duration": 3.88
  },
  {
    "id": 203,
    "title": "Billie Eilish - when the party's over (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sluLx2JlLqw",
    "duration": 3.38
  },
  {
    "id": 204,
    "title": "Billie Eilish - when the party's over (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sluLx2JlLqw",
    "duration": 3.38
  },
  {
    "id": 205,
    "title": "Ariana Grande ft. Nathan Sykes - Almost Is Never Enough (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4G4tntY30Qw",
    "duration": 3.78
  },
  {
    "id": 206,
    "title": "Frozen 2 - Show Yourself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zGqZZQablfY",
    "duration": 4.68
  },
  {
    "id": 207,
    "title": "The Neighbourhood - Sweater Weather (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0k91tvnkmMc",
    "duration": 4.3
  },
  {
    "id": 208,
    "title": "BTS - Dynamite (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V9aFf48jLPQ",
    "duration": 3.68
  },
  {
    "id": 209,
    "title": "Clean Bandit ft. Sean Paul & Anne-Marie  - Rockabye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Gl78zFKbQbE",
    "duration": 4.55
  },
  {
    "id": 210,
    "title": "The Beatles - Yesterday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uw3zzQ-5g4o",
    "duration": 2.37
  },
  {
    "id": 211,
    "title": "JVKE - golden hour (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ju03AIeny2Q",
    "duration": 3.55
  },
  {
    "id": 212,
    "title": "Hoobastank - The Reason (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Mk5JYEFcGnU",
    "duration": 4.18
  },
  {
    "id": 213,
    "title": "Cyndi Lauper - Girls Just Want To Have Fun (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-Fg7m1ZqkxI",
    "duration": 4.12
  },
  {
    "id": 214,
    "title": "Gotye and Kimbra - Somebody That I Used To Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=toHUpXZRgTQ",
    "duration": 4.42
  },
  {
    "id": 215,
    "title": "High School Musical - Breaking Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YwP9YSnOayk",
    "duration": 3.77
  },
  {
    "id": 216,
    "title": "Sia - Unstoppable (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v464ay9eei0",
    "duration": 4.13
  },
  {
    "id": 217,
    "title": "Bobby Helms - Jingle Bell Rock (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u0yAWWpqFHQ",
    "duration": 2.53
  },
  {
    "id": 218,
    "title": "Billie Eilish - i love you (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PTmcRmDyJlY",
    "duration": 5.12
  },
  {
    "id": 219,
    "title": "Britney Spears - Toxic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=prgoLEZTit0",
    "duration": 3.63
  },
  {
    "id": 220,
    "title": "The Beatles - Hey Jude (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=enmHYsoCMkQ",
    "duration": 7.8
  },
  {
    "id": 221,
    "title": "*NSYNC - This I Promise You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yFeX4dRdi_o",
    "duration": 4.72
  },
  {
    "id": 222,
    "title": "Lady Gaga - I'll Never Love Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lOx30dknDos",
    "duration": 5.0
  },
  {
    "id": 223,
    "title": "Britney Spears - Everytime (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2EaDDg5tVUg",
    "duration": 4.38
  },
  {
    "id": 224,
    "title": "Louis Armstrong - What A Wonderful World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nkaOdoxNTB0",
    "duration": 2.72
  },
  {
    "id": 225,
    "title": "Taylor Swift - Look What You Made Me Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Rbtq0bHlvmU",
    "duration": 3.78
  },
  {
    "id": 226,
    "title": "Demi Lovato - Heart Attack (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_vdDJ4qNHAI",
    "duration": 3.87
  },
  {
    "id": 227,
    "title": "Pink Sweat$ - At My Worst (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FsKcCqLS91w",
    "duration": 3.22
  },
  {
    "id": 228,
    "title": "Billie Eilish - everything i wanted (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0J_z7RjLZfo",
    "duration": 4.32
  },
  {
    "id": 229,
    "title": "Neil Diamond  - Sweet Caroline (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=srLoAl1mhFw",
    "duration": 4.02
  },
  {
    "id": 230,
    "title": "Plain White T's - Hey There Delilah (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZakEbWobIj0",
    "duration": 4.42
  },
  {
    "id": 231,
    "title": "Hillsong UNITED - Oceans (Where Feet May Fail) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RYcjiDrljHI",
    "duration": 9.2
  },
  {
    "id": 232,
    "title": "BLACKPINK - Kill This Love (Karaoke version)",
    "video_url": "https://www.youtube.com/watch?v=YoWJa7GWzk4",
    "duration": 3.5
  },
  {
    "id": 233,
    "title": "Imagine Dragons - Bad Liar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z2-8U9XeArs",
    "duration": 4.55
  },
  {
    "id": 234,
    "title": "Westlife - My Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SMBliIvBigU",
    "duration": 4.05
  },
  {
    "id": 235,
    "title": "Carly Rae Jepsen - Call Me Maybe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qG520Uw8lUA",
    "duration": 3.58
  },
  {
    "id": 236,
    "title": "Dove Cameron - If Only (from Disney \"Descendants\") (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fTRa0BuPlwA",
    "duration": 4.27
  },
  {
    "id": 237,
    "title": "Beauty And The Beast - Tale As Old As Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dWoGvNofjbM",
    "duration": 2.92
  },
  {
    "id": 238,
    "title": "Britney Spears - Sometimes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z3r9X3_37LQ",
    "duration": 4.07
  },
  {
    "id": 239,
    "title": "Lady Gaga - Million Reasons (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BliQLvRf2EI",
    "duration": 3.77
  },
  {
    "id": 240,
    "title": "Olivia Rodrigo - deja vu (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8iBJPvRXqgQ",
    "duration": 3.98
  },
  {
    "id": 241,
    "title": "Cardi B - Bodak Yellow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1g8S-enLQ60",
    "duration": 3.85
  },
  {
    "id": 242,
    "title": "We The Kings ft. Elena Coats - Sad Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g94DBEV1kVA",
    "duration": 3.98
  },
  {
    "id": 243,
    "title": "Evanescence - My Immortal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Dv4s4KFptCE",
    "duration": 5.03
  },
  {
    "id": 244,
    "title": "Ed Sheeran - The A Team (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t4ePY7LqFV4",
    "duration": 4.67
  },
  {
    "id": 245,
    "title": "Christina Aguilera - Reflection (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xr_iai07tes",
    "duration": 3.87
  },
  {
    "id": 246,
    "title": "Clean Bandit ft. Zara Larsson - Symphony (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Azyv_umdqvk",
    "duration": 3.93
  },
  {
    "id": 247,
    "title": "Imagine Dragons - Radioactive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eGpM33XHyoE",
    "duration": 3.68
  },
  {
    "id": 248,
    "title": "Meghan Trainor - NO (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qcc9zdXowPQ",
    "duration": 4.3
  },
  {
    "id": 249,
    "title": "LeAnn Rimes - How Do I Live (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=34xr8xYLYPo",
    "duration": 5.13
  },
  {
    "id": 250,
    "title": "Paloma Faith - Only Love Can Hurt Like This (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sNuLpPuWM68",
    "duration": 4.33
  },
  {
    "id": 251,
    "title": "Cyndi Lauper - Time After Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zmrme4ulxIY",
    "duration": 4.87
  },
  {
    "id": 252,
    "title": "Ariana Grande and Zedd - Break Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=L2YJD9urLdA",
    "duration": 3.93
  },
  {
    "id": 253,
    "title": "James Bay - Let It Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nhv788BMisk",
    "duration": 4.73
  },
  {
    "id": 254,
    "title": "Adele - Set Fire To The Rain (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C02apNNsmeI",
    "duration": 4.37
  },
  {
    "id": 255,
    "title": "Queen - I Want To Break Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=y_IIuMX0rHA",
    "duration": 4.67
  },
  {
    "id": 256,
    "title": "Billie Eilish - No Time To Die (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ioqGmaBHUrk",
    "duration": 4.32
  },
  {
    "id": 257,
    "title": "SLANDER, Dylan Matthew - Love Is Gone (Acoustic) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3AnKy-mzUXQ",
    "duration": 3.3
  },
  {
    "id": 258,
    "title": "Maroon 5 - Sugar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PqX8aA6w4bM",
    "duration": 4.28
  },
  {
    "id": 259,
    "title": "ZAYN, Sia - Dusk Till Dawn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NvP568DzP5c",
    "duration": 4.67
  },
  {
    "id": 260,
    "title": "Selena Gomez - Love You Like A Love Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t_4bSwL7-8w",
    "duration": 3.4
  },
  {
    "id": 261,
    "title": "Lauren Daigle - You Say (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EgU_KyzoMZg",
    "duration": 4.68
  },
  {
    "id": 262,
    "title": "Lionel Richie - Hello (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uixkkqOQoD0",
    "duration": 4.22
  },
  {
    "id": 263,
    "title": "Air Supply - All Out Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FBQeaKYmZtA",
    "duration": 4.22
  },
  {
    "id": 264,
    "title": "Les Miserables - I Dreamed A Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ruviSIVo-TM",
    "duration": 5.05
  },
  {
    "id": 265,
    "title": "Whitney Houston (With Mariah Carey) - When You Believe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bHrUsofyXFk",
    "duration": 5.62
  },
  {
    "id": 266,
    "title": "One Direction - Drag Me Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WHLKZDMUR6o",
    "duration": 3.57
  },
  {
    "id": 267,
    "title": "Lonestar - Amazed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HHigjZSmsSs",
    "duration": 4.32
  },
  {
    "id": 268,
    "title": "Khalid - Location (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pgDxe8JO_wY",
    "duration": 3.12
  },
  {
    "id": 269,
    "title": "Giveon - HEARTBREAK ANNIVERSARY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nRD8iFBRruw",
    "duration": 3.6
  },
  {
    "id": 270,
    "title": "Justin Bieber and Nicki Minaj - Beauty And A Beat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xO3u3T8ztsA",
    "duration": 4.15
  },
  {
    "id": 271,
    "title": "Robbie Williams - Angels (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pGFEj-Dv3-0",
    "duration": 4.73
  },
  {
    "id": 272,
    "title": "Whitney Houston - Didn't We Almost Have It All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=16MeABER5xg",
    "duration": 4.95
  },
  {
    "id": 273,
    "title": "Descendants 3 - Queen Of Mean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BRWpIbuGa1M",
    "duration": 3.42
  },
  {
    "id": 274,
    "title": "Aurora - Runaway (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NqFeNHOwv7c",
    "duration": 4.45
  },
  {
    "id": 275,
    "title": "Alessia Cara - Scars To Your Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fD8lvKK_keM",
    "duration": 4.42
  },
  {
    "id": 276,
    "title": "Brenda Lee - Rockin' Around The Christmas Tree (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dETgVcucAxo",
    "duration": 2.43
  },
  {
    "id": 277,
    "title": "BLACKPINK, Selena Gomez - Ice Cream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=N7kV59gpJjg",
    "duration": 3.33
  },
  {
    "id": 278,
    "title": "Sam Smith - I'm Not The Only One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7LOW-zFO380",
    "duration": 4.17
  },
  {
    "id": 279,
    "title": "Dua Lipa - Levitating (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nK9hD9_SAdU",
    "duration": 3.78
  },
  {
    "id": 280,
    "title": "Maroon 5 - This Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BXvaGeVKNIw",
    "duration": 4.0
  },
  {
    "id": 281,
    "title": "ABBA - Chiquitita (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1gRQKAivLns",
    "duration": 5.55
  },
  {
    "id": 282,
    "title": "Tom Jones - I Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l4lHAiYGzdE",
    "duration": 4.28
  },
  {
    "id": 283,
    "title": "Charlie Puth ft. Meghan Trainor - Marvin Gaye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fQcKB3IEK9k",
    "duration": 3.53
  },
  {
    "id": 284,
    "title": "Milo Manheim, Meg Donnelly - Someday (from \"ZOMBIES\") (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UzP_Fqbdry0",
    "duration": 3.35
  },
  {
    "id": 285,
    "title": "Halsey - Without Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_QC9OSgbmC8",
    "duration": 3.62
  },
  {
    "id": 286,
    "title": "Iggy Azalea and Charli Xcx - Fancy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nrV7e6ASomM",
    "duration": 3.58
  },
  {
    "id": 287,
    "title": "Ariana Grande - thank u, next (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KqrDah9PD_c",
    "duration": 3.67
  },
  {
    "id": 288,
    "title": "Miley Cyrus - When I Look At You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TQ_2f80tE-w",
    "duration": 4.5
  },
  {
    "id": 289,
    "title": "Julia Michaels - Issues (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SfYXCwmgOoc",
    "duration": 3.35
  },
  {
    "id": 290,
    "title": "Justin Bieber - Boyfriend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LYI2Gwxqiag",
    "duration": 3.23
  },
  {
    "id": 291,
    "title": "Green Day - Wake Me Up When September Ends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PE9rE3E-fGo",
    "duration": 5.02
  },
  {
    "id": 292,
    "title": "Christina Aguilera - Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bkkkbniDtHA",
    "duration": 4.58
  },
  {
    "id": 293,
    "title": "Mandy Moore - Only Hope (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=arpSSvad-Uk",
    "duration": 4.15
  },
  {
    "id": 294,
    "title": "One Direction - What Makes You Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SLrJwiLsa9A",
    "duration": 3.72
  },
  {
    "id": 295,
    "title": "The Weeknd - Save Your Tears (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n4dG93qt0B8",
    "duration": 3.93
  },
  {
    "id": 296,
    "title": "Eric Clapton - Tears In Heaven (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=08SGDHJ2fLY",
    "duration": 4.63
  },
  {
    "id": 297,
    "title": "Green Day - Boulevard Of Broken Dreams (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r8BdFXaYE8s",
    "duration": 4.95
  },
  {
    "id": 298,
    "title": "Ariana Grande - Santa Tell Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QzFDehvDcdU",
    "duration": 3.85
  },
  {
    "id": 299,
    "title": "Lana Del Rey - Video Games (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AOVyQC67Q4g",
    "duration": 5.3
  },
  {
    "id": 300,
    "title": "Everybody Loves An Outlaw -  I See Red (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r7vAruZVl88",
    "duration": 4.2
  },
  {
    "id": 301,
    "title": "Billie Eilish - wish you were gay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IOzAmILqFkI",
    "duration": 4.03
  },
  {
    "id": 302,
    "title": "Grace VanderWaal - I Don't Know My Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dlNbMMkldi0",
    "duration": 2.93
  },
  {
    "id": 303,
    "title": "Matt Redman - 10,000 Reasons (Bless The Lord) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vWdqDmjQuaE",
    "duration": 4.57
  },
  {
    "id": 304,
    "title": "Roxette - It Must Have Been Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MPc1NApGnQM",
    "duration": 4.63
  },
  {
    "id": 305,
    "title": "Hercules - I Won't Say (I'm In Love) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QJmL664nLhA",
    "duration": 2.57
  },
  {
    "id": 306,
    "title": "Rihanna - Unfaithful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bhUe11gw23I",
    "duration": 4.08
  },
  {
    "id": 307,
    "title": "Katy Perry ft. Juicy J - Dark Horse (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0NV85akrcHo",
    "duration": 4.0
  },
  {
    "id": 308,
    "title": "ROSE\u0301 - Gone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=odgQHiemvXA",
    "duration": 3.82
  },
  {
    "id": 309,
    "title": "One Direction - Story Of My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LTj11cPudyw",
    "duration": 4.45
  },
  {
    "id": 310,
    "title": "Ed Sheeran - Supermarket Flowers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8xWHhumQj4c",
    "duration": 4.23
  },
  {
    "id": 311,
    "title": "Benson Boone - In The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QnitepvT9zQ",
    "duration": 3.9
  },
  {
    "id": 312,
    "title": "Maroon 5 - Sunday Morning (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dZlowemJbj4",
    "duration": 4.53
  },
  {
    "id": 313,
    "title": "Nicki Minaj - Anaconda (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Del8tBjZm5I",
    "duration": 4.47
  },
  {
    "id": 314,
    "title": "Natalie Imbruglia - Torn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7rmxIEjMNX0",
    "duration": 4.42
  },
  {
    "id": 315,
    "title": "Train - Hey, Soul Sister (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VmXansa3xTg",
    "duration": 4.08
  },
  {
    "id": 316,
    "title": "Birdy - People Help The People (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hjZKniV_hSc",
    "duration": 4.67
  },
  {
    "id": 317,
    "title": "Ariana Grande and Iggy Azalea - Problem (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YXVxusIRT5A",
    "duration": 3.55
  },
  {
    "id": 318,
    "title": "Justin Bieber - What Do You Mean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kKKXhrS_my4",
    "duration": 3.95
  },
  {
    "id": 319,
    "title": "Omi - Cheerleader (Felix Jaehn Edit) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Gart4SIWnX0",
    "duration": 3.37
  },
  {
    "id": 320,
    "title": "LP - Lost On You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9Mpv9Wlij5g",
    "duration": 5.08
  },
  {
    "id": 321,
    "title": "Wicked - Defying Gravity (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_ce778S_3iI",
    "duration": 6.4
  },
  {
    "id": 322,
    "title": "DJ Snake ft. Justin Bieber - Let Me Love You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VP5ODDPUpcE",
    "duration": 3.98
  },
  {
    "id": 323,
    "title": "Fleetwood Mac - Dreams (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RpvbNiC6u_4",
    "duration": 4.68
  },
  {
    "id": 324,
    "title": "Juice WRLD - Lucid Dreams (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Nt484LGuiPA",
    "duration": 4.18
  },
  {
    "id": 325,
    "title": "Elle King - Ex's & Oh's (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=odO7rH5vmaI",
    "duration": 3.88
  },
  {
    "id": 326,
    "title": "Conan Gray - The Cut That Always Bleeds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JD9XKAw5Xu8",
    "duration": 4.3
  },
  {
    "id": 327,
    "title": "Wheatus - Teenage Dirtbag (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jbK7Ps-7Gfc",
    "duration": 4.62
  },
  {
    "id": 328,
    "title": "One Direction - Little Things (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JShoho_WYIQ",
    "duration": 4.23
  },
  {
    "id": 329,
    "title": "Dua Lipa - IDGAF (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NvrQEgIKi4A",
    "duration": 4.15
  },
  {
    "id": 330,
    "title": "Jose\u0301 Feliciano - Feliz Navidad (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3qTDEpO7k8s",
    "duration": 3.43
  },
  {
    "id": 331,
    "title": "One Direction - Steal My Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t4p3nvGWOB4",
    "duration": 4.17
  },
  {
    "id": 332,
    "title": "Queen - Don't Stop Me Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=G962z-4OL9E",
    "duration": 3.98
  },
  {
    "id": 333,
    "title": "Zara Larsson - Uncover (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O0RZc6k_eLw",
    "duration": 4.02
  },
  {
    "id": 334,
    "title": "Katy Perry - Thinking Of You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mB8xUlfdDbU",
    "duration": 4.5
  },
  {
    "id": 335,
    "title": "SZA - Kill Bill (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OEc9U6Prxos",
    "duration": 2.82
  },
  {
    "id": 336,
    "title": "Queen - Too Much Love Will Kill You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=h9iHDVEkBYE",
    "duration": 4.57
  },
  {
    "id": 337,
    "title": "Post Malone, Swae Lee - Sunflower (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=awxvtj-0JKw",
    "duration": 2.87
  },
  {
    "id": 338,
    "title": "Taylor Swift feat. The Civil Wars - Safe & Sound (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7h2eqd0Kx4g",
    "duration": 4.33
  },
  {
    "id": 339,
    "title": "Lana Del Rey - Summertime Sadness (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=W812a1FEO4k",
    "duration": 4.43
  },
  {
    "id": 340,
    "title": "Alan Walker, K-391 and Emelie Hollow - Lily (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-5-Gxfuie4A",
    "duration": 3.57
  },
  {
    "id": 341,
    "title": "a-ha - Take On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bC4ER15Hj10",
    "duration": 4.18
  },
  {
    "id": 342,
    "title": "Maroon 5 ft. Wiz Khalifa - Payphone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NAOwdpLvJPU",
    "duration": 4.32
  },
  {
    "id": 343,
    "title": "Eminem - Mockingbird (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HAYuls3af5s",
    "duration": 4.53
  },
  {
    "id": 344,
    "title": "Christina Perri - Jar Of Hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1JCVr44e5xs",
    "duration": 4.37
  },
  {
    "id": 345,
    "title": "Alan Walker - Alone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w0F6goHM1DM",
    "duration": 2.95
  },
  {
    "id": 346,
    "title": "Camp Rock - This Is Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e1Uv3rBykpg",
    "duration": 3.43
  },
  {
    "id": 347,
    "title": "Dwayne Johnson - You're Welcome (from \"Moana\") (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tIYURcd4WB4",
    "duration": 2.93
  },
  {
    "id": 348,
    "title": "Sia - Elastic Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mIqMMATs3R4",
    "duration": 4.6
  },
  {
    "id": 349,
    "title": "Marshmello ft. Bastille - Happier (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cNqlovKgatw",
    "duration": 3.95
  },
  {
    "id": 350,
    "title": "Olivia Rodrigo - favorite crime (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KGn6axh47LM",
    "duration": 2.95
  },
  {
    "id": 351,
    "title": "Alan Walker, Sabrina Carpenter & Farruko - On My Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9oNDMiyLm4U",
    "duration": 3.6
  },
  {
    "id": 352,
    "title": "Sam Smith - Writing's On The Wall (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=h7vILHaFTiE",
    "duration": 5.17
  },
  {
    "id": 353,
    "title": "Katy Perry - Firework (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KUKyy4r-BO4",
    "duration": 4.17
  },
  {
    "id": 354,
    "title": "James Arthur - Train Wreck (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fO88Ox-mhDs",
    "duration": 3.82
  },
  {
    "id": 355,
    "title": "Ariana Grande - Into You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I5KLeZM_O2Y",
    "duration": 4.43
  },
  {
    "id": 356,
    "title": "twenty one pilots - Heathens (from Suicide Squad) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hYMHaamhiKU",
    "duration": 3.95
  },
  {
    "id": 357,
    "title": "Coldplay - The Scientist (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0ycVgd7YleI",
    "duration": 4.72
  },
  {
    "id": 358,
    "title": "La La Land - City Of Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Yl-SJoffk1Q",
    "duration": 2.72
  },
  {
    "id": 359,
    "title": "High School Musical - Start Of Something New (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vjSQ-10eRD4",
    "duration": 3.62
  },
  {
    "id": 360,
    "title": "Taylor Swift - Wildest Dreams (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A7X9_O35rfs",
    "duration": 3.95
  },
  {
    "id": 361,
    "title": "Lewis Capaldi - Bruises (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sj5nOjRDiZk",
    "duration": 3.82
  },
  {
    "id": 362,
    "title": "Alec Benjamin - Let Me Down Slowly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=249FPTZ_J3c",
    "duration": 3.12
  },
  {
    "id": 363,
    "title": "Britney Spears - Oops!...I Did It Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OJorUj0JA3w",
    "duration": 3.98
  },
  {
    "id": 364,
    "title": "twenty one pilots - Stressed Out (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QNVtVvAJhDI",
    "duration": 3.9
  },
  {
    "id": 365,
    "title": "LeAnn Rimes - I Need You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2uF-ZTcSR9Q",
    "duration": 3.87
  },
  {
    "id": 366,
    "title": "Alanis Morissette - Ironic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m497f9hB9Gs",
    "duration": 4.35
  },
  {
    "id": 367,
    "title": "Vanessa Carlton - A Thousand Miles (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u2K-525UPUA",
    "duration": 4.1
  },
  {
    "id": 368,
    "title": "Dan + Shay, Justin Bieber - 10,000 Hours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XVG-jODTeyQ",
    "duration": 3.17
  },
  {
    "id": 369,
    "title": "Meghan Trainor - Lips Are Movin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sWeQn4uBEyQ",
    "duration": 3.47
  },
  {
    "id": 370,
    "title": "Shawn Mendes - Mercy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3nt29LRZqFM",
    "duration": 4.02
  },
  {
    "id": 371,
    "title": "Extreme - More Than Words (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lT-3Es67dPs",
    "duration": 3.97
  },
  {
    "id": 372,
    "title": "Billie Eilish - bellyache (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GakCnD5pzNM",
    "duration": 3.27
  },
  {
    "id": 373,
    "title": "Billie Eilish - bellyache (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GakCnD5pzNM",
    "duration": 3.27
  },
  {
    "id": 374,
    "title": "Sarah Geronimo - Kiss Me Kiss Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HTTBkyWZFzg",
    "duration": 3.83
  },
  {
    "id": 375,
    "title": "Meghan Trainor - Me Too (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9RcoA7RptvE",
    "duration": 3.57
  },
  {
    "id": 376,
    "title": "Heart - Alone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zAbT9dr1R30",
    "duration": 3.83
  },
  {
    "id": 377,
    "title": "Ali Gatie - It's You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QSSbJE6GPGk",
    "duration": 3.7
  },
  {
    "id": 378,
    "title": "Maroon 5 ft. Cardi B - Girls Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aNknycqtsxA",
    "duration": 4.4
  },
  {
    "id": 379,
    "title": "Disney Descendants 2 - What's My Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KH1Vpx7XZQg",
    "duration": 3.02
  },
  {
    "id": 380,
    "title": "Ariana Grande - God Is A Woman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wuhbuzGqBYQ",
    "duration": 3.72
  },
  {
    "id": 381,
    "title": "Salem Ilese - Mad At Disney (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GOFxPxTQUvY",
    "duration": 2.82
  },
  {
    "id": 382,
    "title": "James Arthur - Impossible (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7LSsqBLWGq0",
    "duration": 3.88
  },
  {
    "id": 383,
    "title": "Lily Allen - Somewhere Only We Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mBkc7uKrczQ",
    "duration": 2.33
  },
  {
    "id": 384,
    "title": "Survivor - Eye Of The Tiger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=83ZFZPhxskc",
    "duration": 4.3
  },
  {
    "id": 385,
    "title": "Taylor Swift - I Knew You Were Trouble (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ut8qAfWUW24",
    "duration": 4.0
  },
  {
    "id": 386,
    "title": "Smash Mouth - All Star (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ABOYo7ioQJo",
    "duration": 3.97
  },
  {
    "id": 387,
    "title": "Kenny Rogers - Through The Years (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2d4D-0Vsyiw",
    "duration": 4.78
  },
  {
    "id": 388,
    "title": "Troye Sivan - Angel Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CYpILLJpRBE",
    "duration": 3.97
  },
  {
    "id": 389,
    "title": "Toni Gonzaga - Catch Me I'm Falling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EZh4UiPsJ1A",
    "duration": 4.8
  },
  {
    "id": 390,
    "title": "ABBA - I Have A Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n4yhmONZimc",
    "duration": 5.12
  },
  {
    "id": 391,
    "title": "Katy Perry - Unconditionally (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-rCIyA3RAjk",
    "duration": 4.38
  },
  {
    "id": 392,
    "title": "One Direction - You and I (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=13yP4A2WE-M",
    "duration": 4.45
  },
  {
    "id": 393,
    "title": "Ariana Grande - No Tears Left To Cry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PSYn6Y1B3KY",
    "duration": 4.05
  },
  {
    "id": 394,
    "title": "Whitney Houston - Run To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fus6jCD8VqA",
    "duration": 4.72
  },
  {
    "id": 395,
    "title": "Ashe - Moral Of The Story (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xp1bRW9nSvM",
    "duration": 3.75
  },
  {
    "id": 396,
    "title": "Selena Gomez - Same Old Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YIg0xU_A5-8",
    "duration": 4.37
  },
  {
    "id": 397,
    "title": "P!nk - What About Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AFg3-6Yzo1I",
    "duration": 4.88
  },
  {
    "id": 398,
    "title": "Katy Perry ft. Snoop Dogg - California Gurls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aUoeErKrMEs",
    "duration": 4.25
  },
  {
    "id": 399,
    "title": "Eartha Kitt - Santa Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VIgsBLfcnZQ",
    "duration": 3.45
  },
  {
    "id": 400,
    "title": "Harry Styles - Falling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x5J8uwuVBKs",
    "duration": 4.08
  },
  {
    "id": 401,
    "title": "Lana Del Rey - Born To Die (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nuA_oDeq-i0",
    "duration": 5.0
  },
  {
    "id": 402,
    "title": "Debbie Gibson - Lost In Your Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SEGaufBGkUs",
    "duration": 3.82
  },
  {
    "id": 403,
    "title": "Mario - Let Me Love You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xEwPVphGS70",
    "duration": 4.55
  },
  {
    "id": 404,
    "title": "Pamungkas - To The Bone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZujI2VFeXXM",
    "duration": 6.07
  },
  {
    "id": 405,
    "title": "Tom Jones - (It Looks Like) I'll Never Fall In Love Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nBbYK41u6Fw",
    "duration": 4.55
  },
  {
    "id": 406,
    "title": "Patsy Cline -  Crazy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7Qj3rb4dJsM",
    "duration": 2.97
  },
  {
    "id": 407,
    "title": "Rick Astley - Never Gonna Give You Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8leAAwMIigI",
    "duration": 4.22
  },
  {
    "id": 408,
    "title": "Powfu ft. beabadoobee - death bed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RzzC5rew5jE",
    "duration": 3.37
  },
  {
    "id": 409,
    "title": "Ava Max - Sweet But Psycho (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DKN8sskhsrk",
    "duration": 3.27
  },
  {
    "id": 410,
    "title": "Amy Winehouse - You Know I'm No Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bY82VqRnqu0",
    "duration": 4.55
  },
  {
    "id": 411,
    "title": "The Greatest Showman - A Million Dreams (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=aXS-2bHw4VU",
    "duration": 4.83
  },
  {
    "id": 412,
    "title": "Pharrell Williams - Happy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jwH1hD0-DoQ",
    "duration": 4.2
  },
  {
    "id": 413,
    "title": "Little Mix - Black Magic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JsoxO3vWok0",
    "duration": 3.97
  },
  {
    "id": 414,
    "title": "Boyz II Men - End Of The Road (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rjPg9JqTxkY",
    "duration": 6.4
  },
  {
    "id": 415,
    "title": "REO Speedwagon - Can't Fight This Feeling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8pE1h4D9iro",
    "duration": 4.95
  },
  {
    "id": 416,
    "title": "Etta James - At Last (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ueA-n3cDRgk",
    "duration": 3.15
  },
  {
    "id": 417,
    "title": "Daniel Caesar ft. Kali Uchis - Get You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PenQd3Bhusk",
    "duration": 5.0
  },
  {
    "id": 418,
    "title": "Johnny Cash - Hurt (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Cjudlh8Mb3M",
    "duration": 4.05
  },
  {
    "id": 419,
    "title": "JP Saxe - If The World Was Ending ft. Julia Michaels (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kRV8K6ApYu0",
    "duration": 3.97
  },
  {
    "id": 420,
    "title": "Paramore - Still Into You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2lPtXYwT-A4",
    "duration": 4.15
  },
  {
    "id": 421,
    "title": "ZAYN - PILLOWTALK (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rFsxIsoN23w",
    "duration": 3.97
  },
  {
    "id": 422,
    "title": "Sean Kingston - Beautiful Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S_BNb0R7iX4",
    "duration": 4.17
  },
  {
    "id": 423,
    "title": "Spice Girls - Wannabe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BTDPZQGqjY8",
    "duration": 3.12
  },
  {
    "id": 424,
    "title": "Birdy - Not About Angels (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ltMOo1u_-bI",
    "duration": 3.75
  },
  {
    "id": 425,
    "title": "Maggie Lindemann - Pretty Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1JPujd2PKHE",
    "duration": 4.05
  },
  {
    "id": 426,
    "title": "Lady Gaga - Poker Face (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kTu2QPghqZU",
    "duration": 4.43
  },
  {
    "id": 427,
    "title": "XXXTENTACION - SAD! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bWPM34_JYcg",
    "duration": 3.02
  },
  {
    "id": 428,
    "title": "Ariana Grande & Justin Bieber - Stuck with U (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IdruQKij6P4",
    "duration": 4.03
  },
  {
    "id": 429,
    "title": "Jeff Buckley - Hallelujah (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nJRLaEwIKMU",
    "duration": 7.03
  },
  {
    "id": 430,
    "title": "Kesha - TiK ToK (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SY37clW29Os",
    "duration": 4.02
  },
  {
    "id": 431,
    "title": "twenty one pilots - Ride (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=muSbrUYiqrI",
    "duration": 4.1
  },
  {
    "id": 432,
    "title": "BTS (\ubc29\ud0c4\uc18c\ub144\ub2e8) - Boy With Luv (\uc791\uc740 \uac83\ub4e4\uc744 \uc704\ud55c \uc2dc) feat. Halsey (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZkNf0YMvdqQ",
    "duration": 4.2
  },
  {
    "id": 433,
    "title": "Arctic Monkeys - I Wanna Be Yours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sAmuevpBwH8",
    "duration": 3.12
  },
  {
    "id": 434,
    "title": "Christmas Carols - Silent Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i_WCFUGCv6M",
    "duration": 3.83
  },
  {
    "id": 435,
    "title": "Savage Garden - Truly Madly Deeply (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DDMdkRDZVmI",
    "duration": 5.27
  },
  {
    "id": 436,
    "title": "Shakira - Underneath Your Clothes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0ih6b17zRM0",
    "duration": 3.97
  },
  {
    "id": 437,
    "title": "Dean Martin - Let It Snow! Let It Snow! Let It Snow! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wsB1_UGiVoU",
    "duration": 2.52
  },
  {
    "id": 438,
    "title": "Imagine Dragons - Thunder (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zelLqyeP7_M",
    "duration": 3.25
  },
  {
    "id": 439,
    "title": "Taylor Swift - We Are Never Ever Getting Back Together (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IW0EU6Ge5SE",
    "duration": 3.55
  },
  {
    "id": 440,
    "title": "Selena Gomez - The Heart Wants What It Wants (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RdhyabRpbxQ",
    "duration": 4.23
  },
  {
    "id": 441,
    "title": "Ariana Grande ft. The Weeknd - Love Me Harder (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=exr4TFXsKeY",
    "duration": 4.17
  },
  {
    "id": 442,
    "title": "Grover Washington Jr ft. Bill Withers - Just The Two Of Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yIyW2lcapHs",
    "duration": 4.22
  },
  {
    "id": 443,
    "title": "Taylor Swift - Bad Blood (1989 Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cT-oxsG9fWE",
    "duration": 3.97
  },
  {
    "id": 444,
    "title": "Bill Withers - Ain't No Sunshine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zvjhSC9_tjA",
    "duration": 2.45
  },
  {
    "id": 445,
    "title": "Taylor Swift - Style (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hjpfQQwlznA",
    "duration": 4.15
  },
  {
    "id": 446,
    "title": "Billie Eilish - COPYCAT (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wYScPDqj7dU",
    "duration": 3.47
  },
  {
    "id": 447,
    "title": "Shakira - Try Everything (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HJXW27K79T4",
    "duration": 4.0
  },
  {
    "id": 448,
    "title": "Katy Perry - Hot 'n' Cold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OWd-2SVsV50",
    "duration": 4.3
  },
  {
    "id": 449,
    "title": "Hailee Steinfeld & Grey ft. ZEDD - STARVING (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ew8wshsJGCQ",
    "duration": 3.62
  },
  {
    "id": 450,
    "title": "Katy Perry - I Kissed A Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2Qq0hEUmnRY",
    "duration": 3.3
  },
  {
    "id": 451,
    "title": "JoJo Siwa - Boomerang (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KavWqUmVMYA",
    "duration": 4.02
  },
  {
    "id": 452,
    "title": "Sara Bareilles - She Used To Be Mine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=79b9UbLgmB4",
    "duration": 4.42
  },
  {
    "id": 453,
    "title": "Gabrielle - Out of Reach (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vUOxk56Q6pA",
    "duration": 3.55
  },
  {
    "id": 454,
    "title": "Hercules - Go The Distance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xswH-FZvwBQ",
    "duration": 3.58
  },
  {
    "id": 455,
    "title": "Dua Lipa - Don't Start Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jIMJQsBwsWg",
    "duration": 3.27
  },
  {
    "id": 456,
    "title": "Michael Bubl\u00e9 - It's Beginning To Look A Lot Like Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vuNP7Y42wgg",
    "duration": 3.37
  },
  {
    "id": 457,
    "title": "Frozen 2 - All Is Found (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KxZoKkjTSys",
    "duration": 2.28
  },
  {
    "id": 458,
    "title": "Jason Derulo & Jawsh 685 - Savage Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FZnZxA7M9rA",
    "duration": 3.27
  },
  {
    "id": 459,
    "title": "Rag'n'Bone Man - Human (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gf0taQyr0E0",
    "duration": 3.92
  },
  {
    "id": 460,
    "title": "Zoe Wees - Control (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TqxB27tRTL8",
    "duration": 4.2
  },
  {
    "id": 461,
    "title": "Bebe Rexha - I'm A Mess (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U3MY_ffvLo4",
    "duration": 3.45
  },
  {
    "id": 462,
    "title": "Grease - You're The One That I Want (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5-4X6Ck-_0c",
    "duration": 3.23
  },
  {
    "id": 463,
    "title": "Harry Styles - As It Was (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JyKfmLkq3BU",
    "duration": 3.05
  },
  {
    "id": 464,
    "title": "Drake ft. Wizkid & Kyla - One Dance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HoKBVMIi2IY",
    "duration": 3.47
  },
  {
    "id": 465,
    "title": "Sixpence None The Richer - Kiss Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bwiYjnW23Os",
    "duration": 3.58
  },
  {
    "id": 466,
    "title": "Backstreet Boys - Incomplete (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Gw-QOBzISlo",
    "duration": 4.2
  },
  {
    "id": 467,
    "title": "The Champs - Tequila (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1Y77BelxUQY",
    "duration": 2.6
  },
  {
    "id": 468,
    "title": "Stephen Speaks - Passenger Seat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=B6WfTi8PU1Y",
    "duration": 4.9
  },
  {
    "id": 469,
    "title": "Ed Sheeran - Castle On The Hill (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=N56nBWBIlvk",
    "duration": 4.8
  },
  {
    "id": 470,
    "title": "The Weeknd - Blinding Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Cj4hcXZs3Lc",
    "duration": 3.7
  },
  {
    "id": 471,
    "title": "Becky G - Shower (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RLSxxKyw4Tk",
    "duration": 3.75
  },
  {
    "id": 472,
    "title": "Queen - We Are The Champions (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KUiPFviDAvg",
    "duration": 3.38
  },
  {
    "id": 473,
    "title": "Kitchie Nadal - Same Ground (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nKbiJPLExBE",
    "duration": 4.57
  },
  {
    "id": 474,
    "title": "Michael Bubl\u00e9 - Have Yourself A Merry Little Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-NEfq3FKkyM",
    "duration": 4.47
  },
  {
    "id": 475,
    "title": "Bonnie Tyler - Total Eclipse Of The Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iN7jQEpv92I",
    "duration": 5.82
  },
  {
    "id": 476,
    "title": "Justin Bieber and Big Sean - As Long as You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NAukkfuuCu4",
    "duration": 4.2
  },
  {
    "id": 477,
    "title": "Fergie - Big Girls Don't Cry (Personal) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qQRRTH-1VN8",
    "duration": 4.8
  },
  {
    "id": 478,
    "title": "Melanie Martinez - Mad Hatter (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XZgmgnaYVl8",
    "duration": 3.93
  },
  {
    "id": 479,
    "title": "Sheena Easton - Almost Over You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QOAPoyNp8HA",
    "duration": 3.77
  },
  {
    "id": 480,
    "title": "The Script ft. Will.I.Am - Hall Of Fame (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t618KFLRzo8",
    "duration": 3.58
  },
  {
    "id": 481,
    "title": "Rixton - Me And My Broken Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ey6wngxuWcM",
    "duration": 3.67
  },
  {
    "id": 482,
    "title": "P!nk - Try (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wYIx_2s1qhc",
    "duration": 4.63
  },
  {
    "id": 483,
    "title": "Billie Eilish - TV (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XhBa1opnVrQ",
    "duration": 5.07
  },
  {
    "id": 484,
    "title": "Melanie Martinez - Play Date (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KuiloJgXsbA",
    "duration": 3.32
  },
  {
    "id": 485,
    "title": "Owl City - Fireflies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gfVKv3NEAQ4",
    "duration": 3.82
  },
  {
    "id": 486,
    "title": "Queen - We Will Rock You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j8Mkv84V9mY",
    "duration": 2.22
  },
  {
    "id": 487,
    "title": "Green Day - Basket Case (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UntbNt8rK4w",
    "duration": 3.63
  },
  {
    "id": 488,
    "title": "Taylor Swift - Cruel Summer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=N2ScieGmSGQ",
    "duration": 3.25
  },
  {
    "id": 489,
    "title": "Lord Huron - The Night We Met (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qut44K6sINs",
    "duration": 3.42
  },
  {
    "id": 490,
    "title": "Zara Larsson - Lush Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Zj3dMCkEni4",
    "duration": 3.87
  },
  {
    "id": 491,
    "title": "Toto - Africa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CRrZlEF7-SU",
    "duration": 5.17
  },
  {
    "id": 492,
    "title": "Katharine McPhee, Jason Reeves - Terrified (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sg_9m6flh78",
    "duration": 4.0
  },
  {
    "id": 493,
    "title": "Taylor Swift - Lover (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n9vQlA7SMjk",
    "duration": 4.07
  },
  {
    "id": 494,
    "title": "The Killers - Mr. Brightside (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c1X3Lg7RVkk",
    "duration": 3.92
  },
  {
    "id": 495,
    "title": "Selena Gomez, Marshmello - Wolves (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hwG31U_EAv8",
    "duration": 3.48
  },
  {
    "id": 496,
    "title": "Gym Class Heroes ft. Adam Levine - Stereo Hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C8lCwQsE2Oc",
    "duration": 3.92
  },
  {
    "id": 497,
    "title": "Alessia Cara - Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_PDhqm1PYtk",
    "duration": 4.22
  },
  {
    "id": 498,
    "title": "Ariana Grande - Focus (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rDDz2tIoxKI",
    "duration": 4.05
  },
  {
    "id": 499,
    "title": "Timbaland, OneRepublic - Apologize (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U7CQKbusBi4",
    "duration": 3.52
  },
  {
    "id": 500,
    "title": "Tears For Fears -  Everybody Wants To Rule The World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OBzl83j-8IE",
    "duration": 4.45
  },
  {
    "id": 501,
    "title": "Tate McRae - you broke me first (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fi_otrpQbm0",
    "duration": 3.22
  },
  {
    "id": 502,
    "title": "One Direction - Perfect (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1JWWkuLrtro",
    "duration": 4.43
  },
  {
    "id": 503,
    "title": "Halsey - Sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MvgCZV3Ceps",
    "duration": 4.05
  },
  {
    "id": 504,
    "title": "Taylor Swift - 22 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ia8kqGdYmKw",
    "duration": 4.23
  },
  {
    "id": 505,
    "title": "Linkin Park - In The End (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uIcmAyAJ5hE",
    "duration": 3.77
  },
  {
    "id": 506,
    "title": "Crowded House - Don't Dream It's Over (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bzg25xhxD0s",
    "duration": 4.25
  },
  {
    "id": 507,
    "title": "Queen - Somebody To Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dqIil7XK3V4",
    "duration": 5.32
  },
  {
    "id": 508,
    "title": "Disney Descendants - Rotten To The Core (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=itoF8gggLhY",
    "duration": 3.03
  },
  {
    "id": 509,
    "title": "Elvis Presley - Suspicious Minds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z6Zr01BfjBM",
    "duration": 4.65
  },
  {
    "id": 510,
    "title": "Matchbox Twenty - Unwell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aGkFoXPJsY8",
    "duration": 4.13
  },
  {
    "id": 511,
    "title": "One Direction - History (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6abAeLt6Hvw",
    "duration": 3.67
  },
  {
    "id": 512,
    "title": "Little Big Town - Girl Crush (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dK0jVG8BPVA",
    "duration": 3.55
  },
  {
    "id": 513,
    "title": "Selena Gomez - Lose You To Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0oOAClzjL5Y",
    "duration": 3.77
  },
  {
    "id": 514,
    "title": "Demi Lovato - Sober (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0kHB3e5AUcs",
    "duration": 3.53
  },
  {
    "id": 515,
    "title": "Backstreet Boys - As Long As You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vTk4dPkUNeg",
    "duration": 3.93
  },
  {
    "id": 516,
    "title": "Billie Eilish - listen before i go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=npyFEBYgJno",
    "duration": 4.27
  },
  {
    "id": 517,
    "title": "Zedd ft. Foxes - Clarity (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sq2FkmVnFcc",
    "duration": 4.88
  },
  {
    "id": 518,
    "title": "One Direction - 18 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rBg_nhOrE4I",
    "duration": 4.45
  },
  {
    "id": 519,
    "title": "Lukas Graham - Love Someone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ao2xsnwJpIo",
    "duration": 3.77
  },
  {
    "id": 520,
    "title": "SZA - The Weekend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Yg691Hwao8Q",
    "duration": 4.35
  },
  {
    "id": 521,
    "title": "Christmas Carols - We Wish You A Merry Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6UcWuv1dwlU",
    "duration": 2.1
  },
  {
    "id": 522,
    "title": "Fifth Harmony ft. Ty Dolla Sign - Work From Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CL4iT3AXbiQ",
    "duration": 4.27
  },
  {
    "id": 523,
    "title": "Taylor Swift - All Too Well (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JgTU2aoHigU",
    "duration": 5.73
  },
  {
    "id": 524,
    "title": "Shawn Mendes & Camila Cabello - I Know What You Did Last Summer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CZCfGmLUn9s",
    "duration": 4.27
  },
  {
    "id": 525,
    "title": "Carrie Underwood - O Holy Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6cJlBXccEAM",
    "duration": 4.13
  },
  {
    "id": 526,
    "title": "Jessie J - Masterpiece (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AYlWJ1TZwlM",
    "duration": 3.98
  },
  {
    "id": 527,
    "title": "Spice Girls - 2 Become 1 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AImB9oMjumc",
    "duration": 4.23
  },
  {
    "id": 528,
    "title": "James Arthur - Car's Outside (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XWIrcAESaQU",
    "duration": 4.25
  },
  {
    "id": 529,
    "title": "Arctic Monkeys - 505 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VtErzctE50A",
    "duration": 4.35
  },
  {
    "id": 530,
    "title": "Fifth Harmony - Worth It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fMGenDZUjdo",
    "duration": 4.15
  },
  {
    "id": 531,
    "title": "Selena Gomez - Hands To Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QlJG_GmdQB0",
    "duration": 3.98
  },
  {
    "id": 532,
    "title": "Bing Crosby - White Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=usgzxS7OfaM",
    "duration": 3.73
  },
  {
    "id": 533,
    "title": "Noah Cyrus - July (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D3QokilFBpw",
    "duration": 2.98
  },
  {
    "id": 534,
    "title": "Fleetwood Mac - Landslide (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GjaVueSGx20",
    "duration": 3.7
  },
  {
    "id": 535,
    "title": "Iggy Azalea and Rita Ora - Black Widow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zjEuYztBbBo",
    "duration": 3.85
  },
  {
    "id": 536,
    "title": "Miley Cyrus - We Can't Stop (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M-hN4k999b8",
    "duration": 4.18
  },
  {
    "id": 537,
    "title": "ROSE\u0301 - On The Ground (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FrfyqKgHpA4",
    "duration": 3.28
  },
  {
    "id": 538,
    "title": "Alicia Keys - No One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0lFbFPq8ajo",
    "duration": 4.23
  },
  {
    "id": 539,
    "title": "Madison Beer - Selfish (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Tk76EDFgDvY",
    "duration": 4.12
  },
  {
    "id": 540,
    "title": "Taylor Swift - White Horse (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=krMVgCUl80s",
    "duration": 4.13
  },
  {
    "id": 541,
    "title": "Colbie Caillat - Try (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9_5dpfd0ASI",
    "duration": 4.12
  },
  {
    "id": 542,
    "title": "Ed Sheeran - Lego House (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WPRJlC9h8D0",
    "duration": 3.95
  },
  {
    "id": 543,
    "title": "Charlie Puth - Dangerously (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aQ_iIJa4GwU",
    "duration": 3.72
  },
  {
    "id": 544,
    "title": "Joji - Glimpse Of Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D6tZBIVor2s",
    "duration": 3.98
  },
  {
    "id": 545,
    "title": "Tove Lo - Habits (Stay High) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dkFprYzkj-c",
    "duration": 3.75
  },
  {
    "id": 546,
    "title": "Daniel Bedingfield - If You're Not The One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z1fEmiHYgCU",
    "duration": 4.42
  },
  {
    "id": 547,
    "title": "Lil Pump - \"Gucci Gang\" (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x2BzevUyqhI",
    "duration": 2.4
  },
  {
    "id": 548,
    "title": "Selena Gomez & The Scene - Who Says (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WfCz7hV-bJk",
    "duration": 3.62
  },
  {
    "id": 549,
    "title": "Echosmith - Cool Kids (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Y53kOdnjWec",
    "duration": 4.43
  },
  {
    "id": 550,
    "title": "Cher - Believe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n24s-klOW0c",
    "duration": 4.37
  },
  {
    "id": 551,
    "title": "The Chainsmokers ft. Rozes - Roses (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EUdNpznNKcc",
    "duration": 4.3
  },
  {
    "id": 552,
    "title": "Billie Eilish - my future (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RQmoQuPL8hY",
    "duration": 3.75
  },
  {
    "id": 553,
    "title": "Selena - Dreaming of You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rc1QFDlK_Kc",
    "duration": 5.4
  },
  {
    "id": 554,
    "title": "Walk The Moon - Shut Up And Dance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=71qqtDWFVl4",
    "duration": 3.62
  },
  {
    "id": 555,
    "title": "Jake Paul ft. Team 10 - It's Everyday Bro (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EfqzDcgux_U",
    "duration": 3.85
  },
  {
    "id": 556,
    "title": "Cee Lo Green - Forget You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l-hN9wzbPJE",
    "duration": 4.23
  },
  {
    "id": 557,
    "title": "BIQ SHAQ - MANS NOT HOT (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uqaOdIyEUrA",
    "duration": 3.25
  },
  {
    "id": 558,
    "title": "Maroon 5 - Maps (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lumFjOzdh0E",
    "duration": 3.52
  },
  {
    "id": 559,
    "title": "Childish Gambino - Redbone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VtlB9rCmv1k",
    "duration": 5.82
  },
  {
    "id": 560,
    "title": "Hillsong Worship - What A Beautiful Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fn91I3czi0c",
    "duration": 5.97
  },
  {
    "id": 561,
    "title": "Lady Gaga - Paparazzi (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IfJC9vb6p30",
    "duration": 3.87
  },
  {
    "id": 562,
    "title": "Kesha - Praying (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Hqd8SG6NMNo",
    "duration": 4.18
  },
  {
    "id": 563,
    "title": "Westlife - Flying Without Wings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xR9fY0MCk30",
    "duration": 3.93
  },
  {
    "id": 564,
    "title": "Post Malone ft. 21 Savage - Rockstar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TP7JVS4YPpA",
    "duration": 3.88
  },
  {
    "id": 565,
    "title": "Taylor Swift - Teardrops On My Guitar (Pop Version - Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=U6eDFyoGNdA",
    "duration": 3.8
  },
  {
    "id": 566,
    "title": "Dean Lewis - Be Alright (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=omsisiPresM",
    "duration": 3.5
  },
  {
    "id": 567,
    "title": "The Weeknd - Can't Feel My Face (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=blAk0Zr9UAk",
    "duration": 3.82
  },
  {
    "id": 568,
    "title": "The Greatest Showman - The Greatest Show (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=35jPapexMjk",
    "duration": 5.33
  },
  {
    "id": 569,
    "title": "Zedd, Alessia Cara - Stay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VmWN7k0Jenw",
    "duration": 3.9
  },
  {
    "id": 570,
    "title": "The Carpenters - I Won't Last A Day Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n8jOCfDx0PM",
    "duration": 3.87
  },
  {
    "id": 571,
    "title": "R. City ft. Adam Levine - Locked Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w7KHcWe5ACw",
    "duration": 4.12
  },
  {
    "id": 572,
    "title": "Alan Walker - Darkside feat. Au/Ra, Tomine Harket (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VQjhpQBw8pA",
    "duration": 3.78
  },
  {
    "id": 573,
    "title": "Harry Styles - Watermelon Sugar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OQzT1OASwPU",
    "duration": 3.43
  },
  {
    "id": 574,
    "title": "Queen - The Show Must Go On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C2TTXCXUAaI",
    "duration": 4.52
  },
  {
    "id": 575,
    "title": "Maroon 5 - Animals (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R1ug4G9JHOA",
    "duration": 4.3
  },
  {
    "id": 576,
    "title": "Bonnie Tyler - It's a Heartache (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=idRREHyhyso",
    "duration": 3.95
  },
  {
    "id": 577,
    "title": "Pok\u00e9mon - Theme Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UdTzFfT-frE",
    "duration": 3.88
  },
  {
    "id": 578,
    "title": "Niall Horan - This Town (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q5723_RP524",
    "duration": 4.32
  },
  {
    "id": 579,
    "title": "Little Mix - Love Me Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I7HRrjPWLbI",
    "duration": 3.83
  },
  {
    "id": 580,
    "title": "My Chemical Romance - Cancer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HEFOCv9d8Kc",
    "duration": 2.75
  },
  {
    "id": 581,
    "title": "The Beatles - In My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IS7ESPZn7do",
    "duration": 2.68
  },
  {
    "id": 582,
    "title": "The Fray - How To Save A Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8V6bKykwQug",
    "duration": 4.58
  },
  {
    "id": 583,
    "title": "Lana Del Rey - Blue Jeans (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q6eA_-2DT9o",
    "duration": 3.87
  },
  {
    "id": 584,
    "title": "High School Musical 2 - You Are The Music In Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Yd4en3dMFY8",
    "duration": 4.17
  },
  {
    "id": 585,
    "title": "Ed Sheeran - Give Me Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EjM8WQ-rXnI",
    "duration": 4.5
  },
  {
    "id": 586,
    "title": "blink-182 - I Miss You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HeK_Rb9Mkg0",
    "duration": 4.28
  },
  {
    "id": 587,
    "title": "Taylor Swift - Our Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZNeW05ELGhE",
    "duration": 3.88
  },
  {
    "id": 588,
    "title": "Jungkook - Still With You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=B-vkJSgNh4Q",
    "duration": 4.32
  },
  {
    "id": 589,
    "title": "Melanie Martinez - Pacify Her (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gY-Wl5CfFAY",
    "duration": 4.15
  },
  {
    "id": 590,
    "title": "Billie Eilish - bury a friend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sHSYs_pojQs",
    "duration": 3.28
  },
  {
    "id": 591,
    "title": "Billie Eilish - bury a friend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sHSYs_pojQs",
    "duration": 3.28
  },
  {
    "id": 592,
    "title": "Martin Garrix & Bebe Rexha - In The Name Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c8Xu1nJYx8M",
    "duration": 3.87
  },
  {
    "id": 593,
    "title": "Post Malone - Circles (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hlk6z9nJxGg",
    "duration": 3.83
  },
  {
    "id": 594,
    "title": "ABBA - Super Trouper (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QAw2A7jCI50",
    "duration": 4.7
  },
  {
    "id": 595,
    "title": "Dixie D'Amelio - Be Happy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=telmJIBjbGg",
    "duration": 3.77
  },
  {
    "id": 596,
    "title": "Stevie Wonder - Lately (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8jHxIZUF1lw",
    "duration": 4.33
  },
  {
    "id": 597,
    "title": "Cyndi Lauper - True Colors (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LQLxMTKJux0",
    "duration": 3.98
  },
  {
    "id": 598,
    "title": "Backstreet Boys - Shape Of My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XcuFrz5S5Gw",
    "duration": 4.22
  },
  {
    "id": 599,
    "title": "Billie Eilish - my boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xYVlHJx2F5o",
    "duration": 3.15
  },
  {
    "id": 600,
    "title": "Kelly Clarkson - Since U Been Gone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=B8S0l--gHgA",
    "duration": 3.73
  },
  {
    "id": 601,
    "title": "Doja Cat - Say So (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qAI3zlwn6_I",
    "duration": 4.12
  },
  {
    "id": 602,
    "title": "Rachel Platten - Fight Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=G0JiiGgbi_k",
    "duration": 3.62
  },
  {
    "id": 603,
    "title": "The Weeknd - Earned It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nxjtaaYWtQE",
    "duration": 4.5
  },
  {
    "id": 604,
    "title": "Wham! - Last Christmas (Pudding Mix Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aTrT5xfQILM",
    "duration": 7.2
  },
  {
    "id": 605,
    "title": "Ariana Grande - pov (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S9FqT5ddiFI",
    "duration": 3.63
  },
  {
    "id": 606,
    "title": "Birdy - Wings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eWJAA6VnN4U",
    "duration": 4.57
  },
  {
    "id": 607,
    "title": "Fetty Wap - Trap Queen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T5-pnoHEpjE",
    "duration": 4.0
  },
  {
    "id": 608,
    "title": "Shaggy Ft. Rayvon - Angel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GjivXHAoLS4",
    "duration": 4.05
  },
  {
    "id": 609,
    "title": "Billie Eilish - all the good girls go to hell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PH5dzxD7i3U",
    "duration": 2.85
  },
  {
    "id": 610,
    "title": "Anna Hamilton - Bad Liar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ODRET_WOuAU",
    "duration": 4.45
  },
  {
    "id": 611,
    "title": "Ed Sheeran - Happier (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aT9Nb3I49oY",
    "duration": 3.67
  },
  {
    "id": 612,
    "title": "Kendrick Lamar - HUMBLE. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AnQESyZisU0",
    "duration": 3.32
  },
  {
    "id": 613,
    "title": "The Greatest Showman - Tightrope (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n6lpeCuGWPs",
    "duration": 4.12
  },
  {
    "id": 614,
    "title": "Beach Bunny - Prom Queen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oo4WyB9JBGk",
    "duration": 2.38
  },
  {
    "id": 615,
    "title": "Billie Eilish - You Should See Me In A Crown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ztlumMoFC_w",
    "duration": 3.35
  },
  {
    "id": 616,
    "title": "Billie Eilish - You Should See Me In A Crown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ztlumMoFC_w",
    "duration": 3.35
  },
  {
    "id": 617,
    "title": "Spandau Ballet - True (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9b9wK_V98N4",
    "duration": 6.07
  },
  {
    "id": 618,
    "title": "Maximillian - Beautiful Scars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mWnkEM2p4HY",
    "duration": 3.53
  },
  {
    "id": 619,
    "title": "Sarah McLachlan - Angel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U9z9CJVjfYA",
    "duration": 4.68
  },
  {
    "id": 620,
    "title": "Jeremy Zucker - comethru (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uTbosVWbteo",
    "duration": 3.38
  },
  {
    "id": 621,
    "title": "5 Seconds Of Summer - Amnesia (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0QA5RuYP22Y",
    "duration": 4.25
  },
  {
    "id": 622,
    "title": "One Direction - Best Song Ever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ReUUpDpLlhA",
    "duration": 3.72
  },
  {
    "id": 623,
    "title": "Meghan Trainor - Better When I'm Dancin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ToBGhfZTiGA",
    "duration": 3.47
  },
  {
    "id": 624,
    "title": "The Beatles - Here Comes The Sun (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ElW8dK1POA4",
    "duration": 3.27
  },
  {
    "id": 625,
    "title": "High School Musical 3 - Can I Have This Dance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gS34vxm-Q8g",
    "duration": 4.37
  },
  {
    "id": 626,
    "title": "Katy Perry - Wide Awake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r1nkyeH96Lk",
    "duration": 4.13
  },
  {
    "id": 627,
    "title": "Bill Withers - Lean On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p84rf4mz0MM",
    "duration": 4.67
  },
  {
    "id": 628,
    "title": "Fools Garden - Lemon Tree (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9OX0x9uTfqA",
    "duration": 3.38
  },
  {
    "id": 629,
    "title": "Alessia Cara - I Choose (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VboLh-YNYzo",
    "duration": 4.0
  },
  {
    "id": 630,
    "title": "The Greatest Showman - From Now On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hIHAHHXAoXk",
    "duration": 6.17
  },
  {
    "id": 631,
    "title": "Demi Lovato - Sorry Not Sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8e_X3ugkkkY",
    "duration": 3.72
  },
  {
    "id": 632,
    "title": "Melanie Martinez - Tag You're It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FiofhisfDqo",
    "duration": 3.72
  },
  {
    "id": 633,
    "title": "Sasha Sloan - Dancing With Your Ghost (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wf1iIsyeUkw",
    "duration": 3.6
  },
  {
    "id": 634,
    "title": "Savage Garden - I Knew I Loved You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7dT3YDGoJJ4",
    "duration": 4.1
  },
  {
    "id": 635,
    "title": "Lizzo - Truth Hurts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4Dn9d9Shqsg",
    "duration": 3.05
  },
  {
    "id": 636,
    "title": "The Weeknd - The Hills (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZEt5qkoL6iE",
    "duration": 4.27
  },
  {
    "id": 637,
    "title": "Panic! At The Disco - I Write Sins Not Tragedies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q4-j_-CHAJk",
    "duration": 3.73
  },
  {
    "id": 638,
    "title": "Justin Bieber - Mistletoe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tJ4RnhzTueQ",
    "duration": 3.47
  },
  {
    "id": 639,
    "title": "Kodaline - All I Want (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=peWxP-B0rJE",
    "duration": 5.37
  },
  {
    "id": 640,
    "title": "ZAYN & Taylor Swift - I Don't Wanna Live Forever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xz9biBoDpGs",
    "duration": 4.6
  },
  {
    "id": 641,
    "title": "Charlie Puth - See You Again (Piano Demo - Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T7Jc_2RAvH4",
    "duration": 4.13
  },
  {
    "id": 642,
    "title": "Jessie J - Who You Are (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UC28wPomKU4",
    "duration": 4.22
  },
  {
    "id": 643,
    "title": "John Lennon - Jealous Guy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HPJMUvjoOa0",
    "duration": 4.47
  },
  {
    "id": 644,
    "title": "Logan Paul ft. Why Don't We - Help Me Help You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hK5Ku98zXW0",
    "duration": 2.93
  },
  {
    "id": 645,
    "title": "Zara Larsson, MNEK - Never Forget You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Xs0w3TstJZg",
    "duration": 4.2
  },
  {
    "id": 646,
    "title": "Jung Kook, Latto - Seven (Karaoke Version) (Clean Ver.)",
    "video_url": "https://www.youtube.com/watch?v=0xnC8C2DL2M",
    "duration": 3.32
  },
  {
    "id": 647,
    "title": "Martin Garrix & Dua Lipa - Scared To Be Lonely (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wqi7jYhNh8M",
    "duration": 4.12
  },
  {
    "id": 648,
    "title": "Little Mix - Shout Out To My Ex (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UkzGk9v24UU",
    "duration": 4.5
  },
  {
    "id": 649,
    "title": "Johnny Cash - Ring Of Fire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ei-VpgPozgQ",
    "duration": 2.93
  },
  {
    "id": 650,
    "title": "Lea Salonga - The Journey (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TvVxh2NQZI8",
    "duration": 4.7
  },
  {
    "id": 651,
    "title": "Taylor Swift - cardigan (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LSiVDLhdxjk",
    "duration": 4.25
  },
  {
    "id": 652,
    "title": "Pink - F**kin' Perfect (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=f3vmxzaH6yI",
    "duration": 3.97
  },
  {
    "id": 653,
    "title": "Billie Eilish - xanny (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3-fK1AmIDcI",
    "duration": 4.4
  },
  {
    "id": 654,
    "title": "Mariah Carey - Santa Claus Is Comin' To Town (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yIeef8WNQ6U",
    "duration": 3.48
  },
  {
    "id": 655,
    "title": "Kenny Rogers - The Gambler (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2szJYvdUglk",
    "duration": 3.8
  },
  {
    "id": 656,
    "title": "Logic ft. Alessia Cara & Khalid - 1-800-273-8255 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=szJnuzyu0ng",
    "duration": 4.4
  },
  {
    "id": 657,
    "title": "Olivia Rodrigo, Julia Lester (HSMTMTS) - Wondering (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lsRGOImIsAU",
    "duration": 4.12
  },
  {
    "id": 658,
    "title": "Panic! At The Disco - High Hopes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Dc7L5ZzlrCc",
    "duration": 3.4
  },
  {
    "id": 659,
    "title": "Demi Lovato - Give Your Heart A Break (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8P0feGFmRyU",
    "duration": 3.77
  },
  {
    "id": 660,
    "title": "Glass Animals - Heat Waves (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EXZTrdKHNUo",
    "duration": 3.92
  },
  {
    "id": 661,
    "title": "Adele - Hello (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ipq2geYz6xw",
    "duration": 5.6
  },
  {
    "id": 662,
    "title": "Wiz Khalifa, Charlie Puth - See You Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BpeuvMD66vg",
    "duration": 4.02
  },
  {
    "id": 663,
    "title": "Tina Turner - The Best (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=X8Mygx8B54Y",
    "duration": 4.47
  },
  {
    "id": 664,
    "title": "Gaten Matarazzo, Gabriella Pizzolo - The NeverEnding Story (Karaoke Version) from \"Stranger Things\"",
    "video_url": "https://www.youtube.com/watch?v=xxguzGJQMY0",
    "duration": 1.85
  },
  {
    "id": 665,
    "title": "High School Musical - We're All In This Together (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t0q4bUW45zM",
    "duration": 4.27
  },
  {
    "id": 666,
    "title": "Panic! At The Disco - Death Of A Bachelor (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7MPe5t0o48c",
    "duration": 3.98
  },
  {
    "id": 667,
    "title": "BLACKPINK - Lovesick Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V4WDQmZd2VE",
    "duration": 3.67
  },
  {
    "id": 668,
    "title": "Melanie Martinez - Mrs. Potato Head (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lB2RHp40X_8",
    "duration": 4.12
  },
  {
    "id": 669,
    "title": "Frank Sinatra - That's Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b22bqScoWZE",
    "duration": 3.55
  },
  {
    "id": 670,
    "title": "Demi Lovato - Anyone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IrijEHSdDC4",
    "duration": 4.18
  },
  {
    "id": 671,
    "title": "Nick Jonas - Jealous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Y1DrSBG50NY",
    "duration": 3.98
  },
  {
    "id": 672,
    "title": "Avicii - The Nights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n_h8y2mzpns",
    "duration": 3.33
  },
  {
    "id": 673,
    "title": "Commodores - Easy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iU8ZofhzVb4",
    "duration": 4.68
  },
  {
    "id": 674,
    "title": "B.o.B ft. Hayley Williams - Airplanes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5nziYy_f6Xo",
    "duration": 3.6
  },
  {
    "id": 675,
    "title": "X Ambassadors - Unsteady (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fkoOKFgiNXQ",
    "duration": 3.82
  },
  {
    "id": 676,
    "title": "Halsey - Bad At Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7suNgqRla_Q",
    "duration": 3.22
  },
  {
    "id": 677,
    "title": "Taylor Swift - Mean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qHHkdKlKhfo",
    "duration": 4.6
  },
  {
    "id": 678,
    "title": "Lewis Capaldi - Hold Me While You Wait (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0QV7xFZ508c",
    "duration": 4.25
  },
  {
    "id": 679,
    "title": "Shayne Ward - No Promises (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=el6CciFwgwk",
    "duration": 3.95
  },
  {
    "id": 680,
    "title": "League of Legends ft. Against The Current - Legends Never Die (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XHP9jEIO0mo",
    "duration": 4.15
  },
  {
    "id": 681,
    "title": "Avicii - Waiting For Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Pc-cdGfXmp4",
    "duration": 4.2
  },
  {
    "id": 682,
    "title": "Nicki Minaj - Only ft. Drake, Lil Wayne, Chris Brown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=npavbyUY-iQ",
    "duration": 5.6
  },
  {
    "id": 683,
    "title": "Major Lazer ft. Justin Bieber & M\u00d8 - Cold Water (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kMb71-aWthI",
    "duration": 3.63
  },
  {
    "id": 684,
    "title": "Kacey Musgraves - Rainbow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QjVLFKOLsEs",
    "duration": 3.73
  },
  {
    "id": 685,
    "title": "5 Seconds Of Summer - Teeth (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZX2UJRtJiNI",
    "duration": 3.58
  },
  {
    "id": 686,
    "title": "Green Day - Good Riddance (Time Of Your Life) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xy9r0vhOVpk",
    "duration": 3.13
  },
  {
    "id": 687,
    "title": "Joji - SLOW DANCING IN THE DARK (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yXROo8kB1Qk",
    "duration": 3.72
  },
  {
    "id": 688,
    "title": "Justin Bieber - Ghost (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5HfPe96JOFM",
    "duration": 2.9
  },
  {
    "id": 689,
    "title": "XXXTENTACION - Hope (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zxVI2zMc72Q",
    "duration": 2.32
  },
  {
    "id": 690,
    "title": "Laura Marano - Miraculous Ladybug Theme Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_w7YnxZ11SI",
    "duration": 2.5
  },
  {
    "id": 691,
    "title": "Indila - Love Story (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lecqaehgAF0",
    "duration": 5.52
  },
  {
    "id": 692,
    "title": "The Jackson 5 - I Want You Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=auaqyVYmpP8",
    "duration": 3.68
  },
  {
    "id": 693,
    "title": "Little Mix - Secret Love Song, Pt. II (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z_fs3a7_VYU",
    "duration": 4.97
  },
  {
    "id": 694,
    "title": "Sia - Alive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=H0QBqsJF3aA",
    "duration": 4.95
  },
  {
    "id": 695,
    "title": "Billie Eilish - hostage (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=REegNmz42hk",
    "duration": 4.03
  },
  {
    "id": 696,
    "title": "Billie Eilish - hostage (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=REegNmz42hk",
    "duration": 4.03
  },
  {
    "id": 697,
    "title": "Melanie Martinez - Cry Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ax0IkqNBSoU",
    "duration": 4.67
  },
  {
    "id": 698,
    "title": "Ariana Grande - breathin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DAGZIVaDSEw",
    "duration": 3.67
  },
  {
    "id": 699,
    "title": "Zay Hilfigerrr & Zayion McCall \u2013 Juju On That Beat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=afjaNdzlU1s",
    "duration": 2.97
  },
  {
    "id": 700,
    "title": "XXXTentacion - Moonlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pOnx3VJteCA",
    "duration": 2.42
  },
  {
    "id": 701,
    "title": "Justin Bieber & benny blanco -  Lonely (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jaWlZ_U-jDc",
    "duration": 2.82
  },
  {
    "id": 702,
    "title": "XXXTENTACION - Jocelyn Flores (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MZY0x2w_tsY",
    "duration": 2.4
  },
  {
    "id": 703,
    "title": "The Greatest Showman - Never Enough (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=O61upKFDL9I",
    "duration": 3.5
  },
  {
    "id": 704,
    "title": "Ed Sheeran - Galway Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2axTFDFnj-Q",
    "duration": 3.27
  },
  {
    "id": 705,
    "title": "Selena Gomez - Kill Em With Kindness (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=h1_H_k9tUAg",
    "duration": 4.15
  },
  {
    "id": 706,
    "title": "Luke Combs - Beautiful Crazy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2EqbICF1O88",
    "duration": 3.42
  },
  {
    "id": 707,
    "title": "Yarichin B Club - Touch You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=51pAw0s7IXU",
    "duration": 3.8
  },
  {
    "id": 708,
    "title": "Ella Henderson - Yours (Valentine's Day Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=IOowGOU1BXc",
    "duration": 3.07
  },
  {
    "id": 709,
    "title": "My Chemical Romance - Welcome To The Black Parade (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EkJ2NL6xpcc",
    "duration": 5.35
  },
  {
    "id": 710,
    "title": "Shawn Mendes - In My Blood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1UIGgaw2gTY",
    "duration": 3.85
  },
  {
    "id": 711,
    "title": "Michael Jackson - The Way You Make Me Feel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=G5Fiuz7Xnio",
    "duration": 5.57
  },
  {
    "id": 712,
    "title": "Silento - Watch Me (Whip / Nae Nae) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HEv6E4hz8cM",
    "duration": 3.37
  },
  {
    "id": 713,
    "title": "John Legend - Ordinary People (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I93Xg1aZFEQ",
    "duration": 4.98
  },
  {
    "id": 714,
    "title": "Earth, Wind & Fire - September (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cKRmRYad318",
    "duration": 4.07
  },
  {
    "id": 715,
    "title": "KYLE ft. Lil Yachty - iSpy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wzjl9K2269U",
    "duration": 4.37
  },
  {
    "id": 716,
    "title": "Pitbull and Ke$ha - Timber (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Cnz3ayX8dyg",
    "duration": 3.73
  },
  {
    "id": 717,
    "title": "Major Lazer & DJ Snake (feat. M\u00d8) - Lean On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9X8Bsgz8DfQ",
    "duration": 3.23
  },
  {
    "id": 718,
    "title": "Taylor Swift - Red (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vq9GUJnBJRc",
    "duration": 3.95
  },
  {
    "id": 719,
    "title": "Melanie Martinez - Pity Party (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fOWLajLvqXg",
    "duration": 3.68
  },
  {
    "id": 720,
    "title": "Ariana Grande and Big Sean - Best Mistake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xpo4FUydnMM",
    "duration": 4.22
  },
  {
    "id": 721,
    "title": "Selena Gomez ft. A$AP Rocky - Good For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WggYVunMNTA",
    "duration": 4.03
  },
  {
    "id": 722,
    "title": "Katy Perry - Last Friday Night (T.G.I.F) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZJ_-i6MhWq8",
    "duration": 4.25
  },
  {
    "id": 723,
    "title": "Melanie Martinez - Cake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5J_D7SfIc94",
    "duration": 3.85
  },
  {
    "id": 724,
    "title": "Desiigner - Panda (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wg_-u5cjI4s",
    "duration": 4.85
  },
  {
    "id": 725,
    "title": "Melanie Martinez - Soap (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=klzWPpowZcQ",
    "duration": 3.83
  },
  {
    "id": 726,
    "title": "Bill Medley, Jennifer Warnes - (I've Had) The Time Of My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8wBiWyYpaLc",
    "duration": 5.85
  },
  {
    "id": 727,
    "title": "Adele - Chasing Pavements (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3ovRDVtkmn8",
    "duration": 4.15
  },
  {
    "id": 728,
    "title": "Avicii - Hey Brother (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7fjomuUR2kM",
    "duration": 4.6
  },
  {
    "id": 729,
    "title": "Louis Tomlinson ft. Bebe Rexha, Digital Farm Animals - Back To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nM-4WxGjYW0",
    "duration": 3.63
  },
  {
    "id": 730,
    "title": "Kygo, Selena Gomez - It Ain't Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p9StrUuAtCg",
    "duration": 4.1
  },
  {
    "id": 731,
    "title": "Gina T - Sail Over Seven Seas (Karaoke Songs)",
    "video_url": "https://www.youtube.com/watch?v=-dlXnvxWe-s",
    "duration": 4.75
  },
  {
    "id": 732,
    "title": "Zach Bryan - Something in the Orange (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zSnv3nZBcoc",
    "duration": 3.92
  },
  {
    "id": 733,
    "title": "Mark Ronson ft . Miley Cyrus - Nothing Breaks Like A Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ev30RsVnQUs",
    "duration": 3.83
  },
  {
    "id": 734,
    "title": "The Greatest Showman - The Other Side (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xsYWYvCJAbs",
    "duration": 3.85
  },
  {
    "id": 735,
    "title": "Amy Winehouse - Rehab (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RQZscYrhLtA",
    "duration": 3.98
  },
  {
    "id": 736,
    "title": "Demi Lovato - Let It Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1enflc905ME",
    "duration": 4.38
  },
  {
    "id": 737,
    "title": "Idina Menzel & Michael Bubl\u00e9 - Baby It's Cold Outside (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=te5_kvfz82c",
    "duration": 2.98
  },
  {
    "id": 738,
    "title": "James Bay - Hold Back The River (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ral1tVPTNBA",
    "duration": 4.28
  },
  {
    "id": 739,
    "title": "Kehlani - Gangsta (from Suicide Squad) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cyrpA6fx2sU",
    "duration": 3.57
  },
  {
    "id": 740,
    "title": "Jonas Brothers - Sucker (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xZCLLVYq3O8",
    "duration": 3.35
  },
  {
    "id": 741,
    "title": "Miley Cyrus - Malibu (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yF7IS5Lw_ws",
    "duration": 4.13
  },
  {
    "id": 742,
    "title": "Lady Gaga - Born This Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NatvhO5ihAk",
    "duration": 4.7
  },
  {
    "id": 743,
    "title": "Sub Urban - Cradles (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SkvLj4WENkI",
    "duration": 3.95
  },
  {
    "id": 744,
    "title": "Taylor Swift - ...Ready For It? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6ZwT3v-rZRk",
    "duration": 3.72
  },
  {
    "id": 745,
    "title": "Auburn - The Perfect Two (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qnw4FAxd3fc",
    "duration": 4.5
  },
  {
    "id": 746,
    "title": "Train - Drops Of Jupiter (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=68HfJMN5YUQ",
    "duration": 4.67
  },
  {
    "id": 747,
    "title": "Tyla - Water (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_KZCVehzPK4",
    "duration": 3.6
  },
  {
    "id": 748,
    "title": "Rihanna ft. Calvin Harris - We Found Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XclNcFENpvA",
    "duration": 3.97
  },
  {
    "id": 749,
    "title": "Ellie Goulding - Burn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=doarFqjcTfg",
    "duration": 4.18
  },
  {
    "id": 750,
    "title": "Taylor Swift - Speak Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R4ugqhEZfcI",
    "duration": 4.45
  },
  {
    "id": 751,
    "title": "Sia - Bird Set Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QPUh2yRv5mM",
    "duration": 4.75
  },
  {
    "id": 752,
    "title": "Tracy Chapman - Fast Car (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wm6-X6yPHVI",
    "duration": 5.17
  },
  {
    "id": 753,
    "title": "Alicia Keys - Fallin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yQcTzxmG1ro",
    "duration": 3.58
  },
  {
    "id": 754,
    "title": "Clairo - Sofia (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jiJ4_-jVHYI",
    "duration": 3.57
  },
  {
    "id": 755,
    "title": "Kate Bush - Running Up That Hill (A Deal With God) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UPd80vvFNtY",
    "duration": 5.12
  },
  {
    "id": 756,
    "title": "Seal - Kiss From A Rose (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ug6Mr144qrM",
    "duration": 5.47
  },
  {
    "id": 757,
    "title": "John Lennon - Happy Xmas (War Is Over) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6E0BRIN3Z0c",
    "duration": 4.13
  },
  {
    "id": 758,
    "title": "Rihanna - Russian Roulette (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xNRXuxrHrrk",
    "duration": 4.08
  },
  {
    "id": 759,
    "title": "Los Lobos - La Bamba (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9LP71ypf2qg",
    "duration": 2.72
  },
  {
    "id": 760,
    "title": "Julie and The Phantoms - Wake Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TecAH_OrSZs",
    "duration": 3.97
  },
  {
    "id": 761,
    "title": "Ed Sheeran & Justin Bieber - I Don't Care (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gSLONLzgUOs",
    "duration": 3.97
  },
  {
    "id": 762,
    "title": "Travis Scott ft. Drake - SICKO MODE (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fSVUvFxu0r0",
    "duration": 5.27
  },
  {
    "id": 763,
    "title": "Roddy Ricch - The Box (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TKVEaCmS0Zw",
    "duration": 3.45
  },
  {
    "id": 764,
    "title": "Lady Gaga - Bloody Mary (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ECpCDK-2rkg",
    "duration": 4.1
  },
  {
    "id": 765,
    "title": "Donna Summer - Hot Stuff (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U1uTOOuXqIs",
    "duration": 4.23
  },
  {
    "id": 766,
    "title": "Bars and Melody - Hopeful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o68oHN_opVQ",
    "duration": 3.17
  },
  {
    "id": 767,
    "title": "Daya - Sit Still, Look Pretty (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wXvtiVypqu0",
    "duration": 3.95
  },
  {
    "id": 768,
    "title": "High School Musical 2 - Fabulous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=42sZMRaJe5w",
    "duration": 3.67
  },
  {
    "id": 769,
    "title": "NewJeans - Super Shy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1O1SG71rfoI",
    "duration": 2.82
  },
  {
    "id": 770,
    "title": "Chord Overstreet - Hold On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XvLQ-eNKIzk",
    "duration": 3.58
  },
  {
    "id": 771,
    "title": "Queen - Radio Ga Ga (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DKTs8sLLdc0",
    "duration": 5.97
  },
  {
    "id": 772,
    "title": "George Ezra - Budapest (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CioqlHi-2b4",
    "duration": 3.7
  },
  {
    "id": 773,
    "title": "Descendants 2 - Ways To Be Wicked (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IEn49CU7IrA",
    "duration": 3.52
  },
  {
    "id": 774,
    "title": "Masked Wolf - Astronaut In The Ocean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dtbP_vrw_mw",
    "duration": 2.63
  },
  {
    "id": 775,
    "title": "Melanie Martinez - Alphabet Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u2jQRPVtfgE",
    "duration": 4.9
  },
  {
    "id": 776,
    "title": "Camila Cabello - Never Be The Same (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O6EhpqFNy_U",
    "duration": 4.13
  },
  {
    "id": 777,
    "title": "HRVY - Personal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dnQRUl1P6-s",
    "duration": 3.62
  },
  {
    "id": 778,
    "title": "Labrinth ft. Emeli Sande - Beneath Your Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C233y8-aY14",
    "duration": 4.75
  },
  {
    "id": 779,
    "title": "RAYE, 070 Shake - Escapism. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hCV1Th0KSJQ",
    "duration": 4.68
  },
  {
    "id": 780,
    "title": "Dua Lipa & BLACKPINK - Kiss And Make Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wfkadIQRqbU",
    "duration": 3.43
  },
  {
    "id": 781,
    "title": "Ruth B - Superficial Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mytwQTeWQOc",
    "duration": 4.03
  },
  {
    "id": 782,
    "title": "Sara Bareilles - Gravity (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dQuzZXLWVqU",
    "duration": 4.12
  },
  {
    "id": 783,
    "title": "Shakira - Whenever, Wherever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QzR3FiN1YSQ",
    "duration": 3.35
  },
  {
    "id": 784,
    "title": "Paramore - Misery Business (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dZUHFTH2wYY",
    "duration": 4.07
  },
  {
    "id": 785,
    "title": "Shawn Mendes - Life Of The Party (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3xtbMy_hcY4",
    "duration": 3.82
  },
  {
    "id": 786,
    "title": "DNCE - Cake By The Ocean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dWm4HGEf2u0",
    "duration": 4.17
  },
  {
    "id": 787,
    "title": "Halsey - Gasoline (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nZWWMlEt1iY",
    "duration": 3.58
  },
  {
    "id": 788,
    "title": "Dolly Parton - 9 To 5 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OqQz92Od-HU",
    "duration": 3.33
  },
  {
    "id": 789,
    "title": "Nicki Minaj - Pills N Potions (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3eWhaHn_6hE",
    "duration": 4.77
  },
  {
    "id": 790,
    "title": "Ella Henderson - Ghost (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PAv5xhWR2NU",
    "duration": 4.2
  },
  {
    "id": 791,
    "title": "Freya Ridings - Lost Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Mw3XBaq90Zs",
    "duration": 4.12
  },
  {
    "id": 792,
    "title": "Billie Eilish - Six Feet Under (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mbdrN6f1j6o",
    "duration": 3.65
  },
  {
    "id": 793,
    "title": "Bebe Rexha ft. Florida Georgia Line - Meant To Be (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-cS2mcNnQfY",
    "duration": 3.08
  },
  {
    "id": 794,
    "title": "Richard Marx - Now & Forever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ICUrHapBGQI",
    "duration": 3.72
  },
  {
    "id": 795,
    "title": "Bonnie Tyler - If I Sing You a Love Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k6gcSuNufhA",
    "duration": 4.88
  },
  {
    "id": 796,
    "title": "UB40 - Red Red Wine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=clsnqc0v4qY",
    "duration": 3.47
  },
  {
    "id": 797,
    "title": "Tom Jones - You're My World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e_yvyWPb2hI",
    "duration": 3.68
  },
  {
    "id": 798,
    "title": "LANY - ILYSB (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JjVtGC7jcdU",
    "duration": 3.93
  },
  {
    "id": 799,
    "title": "Billy Ray Cyrus - Achy Breaky Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HisAayo4Dio",
    "duration": 3.53
  },
  {
    "id": 800,
    "title": "Sabrina Carpenter - Nonsense (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qZaS1OT9xQI",
    "duration": 2.83
  },
  {
    "id": 801,
    "title": "Taylor Swift and Ed Sheeran - Everything Has Changed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j3zBJPk0Jtk",
    "duration": 4.25
  },
  {
    "id": 802,
    "title": "Alan Walker ft. Noah Cyrus - All Falls Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Yy8_0pD6Fj0",
    "duration": 3.68
  },
  {
    "id": 803,
    "title": "Amy Grant - Winter Wonderland (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u8PBsrnzGU4",
    "duration": 2.57
  },
  {
    "id": 804,
    "title": "Nat King Cole - The Christmas Song (Merry Christmas To You) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s1rgRFVUIJQ",
    "duration": 3.53
  },
  {
    "id": 805,
    "title": "MYMP - Only Reminds Me Of You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j-HWqIw0B_Q",
    "duration": 4.62
  },
  {
    "id": 806,
    "title": "Lil Nas X - MONTERO (Call Me By Your Name) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gmmZrbVBOd0",
    "duration": 2.52
  },
  {
    "id": 807,
    "title": "Taylor Swift - Gorgeous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MohQxsMc2Es",
    "duration": 3.63
  },
  {
    "id": 808,
    "title": "Sabrina Carpenter - Can't Blame A Girl For Trying (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s4zdE6vw8dc",
    "duration": 3.15
  },
  {
    "id": 809,
    "title": "Harry Styles - Adore You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XL24DbgCWgQ",
    "duration": 3.92
  },
  {
    "id": 810,
    "title": "Billie Eilish - Bored (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5yWgec4Drwc",
    "duration": 3.37
  },
  {
    "id": 811,
    "title": "Katy Perry - Rise (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6yQVtrqx5sU",
    "duration": 3.97
  },
  {
    "id": 812,
    "title": "Ricky Montgomery - Mr. Loverman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dBHbxo_Pmj8",
    "duration": 3.93
  },
  {
    "id": 813,
    "title": "Keane - Everybody's Changing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OZD6H9SGIB8",
    "duration": 3.92
  },
  {
    "id": 814,
    "title": "Demi Lovato - Cool For The Summer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BqiBmont1ZQ",
    "duration": 3.93
  },
  {
    "id": 815,
    "title": "Arizona Zervas - Roxanne (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CRZ8DjDfnEE",
    "duration": 2.92
  },
  {
    "id": 816,
    "title": "One Direction - If I Could Fly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vaWw6qZa6BI",
    "duration": 4.48
  },
  {
    "id": 817,
    "title": "The Living Tombstone - It's Been So Long (FNAF 2 - Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Tz7SS5LUKT0",
    "duration": 3.25
  },
  {
    "id": 818,
    "title": "Maroon 5 ft. Christina Aguilera - Moves Like Jagger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hAwR8Mx8W44",
    "duration": 3.73
  },
  {
    "id": 819,
    "title": "Arctic Monkeys - Do I Wanna Know? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=edorf0kTnJw",
    "duration": 4.72
  },
  {
    "id": 820,
    "title": "Sam Smith, Normani - Dancing With A Stranger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oSRYZ29SoYM",
    "duration": 3.4
  },
  {
    "id": 821,
    "title": "G-Eazy & Halsey - Him & I (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d-y2PfMoUec",
    "duration": 4.88
  },
  {
    "id": 822,
    "title": "R.E.M. - Everybody Hurts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Nyn4MreKIk4",
    "duration": 5.67
  },
  {
    "id": 823,
    "title": "Katy Perry - Teenage Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kUyhDgryS3g",
    "duration": 4.4
  },
  {
    "id": 824,
    "title": "DJ Khaled ft. Justin Bieber, Quavo, Chance The Rapper, Lil Wayne - I'm The One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sTvMJOFK_Zo",
    "duration": 5.18
  },
  {
    "id": 825,
    "title": "girl in red - we fell in love in october (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p0FFm6WvMDQ",
    "duration": 3.33
  },
  {
    "id": 826,
    "title": "Jason Derulo ft. Nicki Minaj & Ty Dolla $ign - Swalla (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_9sw6y2YzIA",
    "duration": 4.07
  },
  {
    "id": 827,
    "title": "Ariana Grande - positions (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2gmzIHU_714",
    "duration": 3.25
  },
  {
    "id": 828,
    "title": "Ava Max - Kings & Queens (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BlpAh1A8PHI",
    "duration": 3.12
  },
  {
    "id": 829,
    "title": "The Neighbourhood - Daddy Issues (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M5aSLc-3FfY",
    "duration": 4.78
  },
  {
    "id": 830,
    "title": "Jess Glynne - Take Me Home (Karaoke, Single Version)",
    "video_url": "https://www.youtube.com/watch?v=8w1lQpUo16A",
    "duration": 4.3
  },
  {
    "id": 831,
    "title": "Little Mix - Touch (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Gn7LvvBAP80",
    "duration": 3.92
  },
  {
    "id": 832,
    "title": "Of Monsters And Men - Little Talks (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XTy69A8XNeM",
    "duration": 4.45
  },
  {
    "id": 833,
    "title": "Ariana Grande - 34+35 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Yykv6iCQMZY",
    "duration": 3.3
  },
  {
    "id": 834,
    "title": "Sophia Grace ft. Silento - Girl In The Mirror (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iYCxpzyfC1s",
    "duration": 4.25
  },
  {
    "id": 835,
    "title": "Descendants 3  - Night Falls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hCvAn9BtCvE",
    "duration": 3.5
  },
  {
    "id": 836,
    "title": "Troye Sivan - Youth (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=csI7n4NKpmE",
    "duration": 3.8
  },
  {
    "id": 837,
    "title": "Lizzy McAlpine - ceilings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vUWsC88Copw",
    "duration": 3.22
  },
  {
    "id": 838,
    "title": "G-Eazy x Bebe Rexha - Me, Myself & I (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xXbk3InFCxY",
    "duration": 4.77
  },
  {
    "id": 839,
    "title": "Machine Gun Kelly & Camila Cabello - Bad Things (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=N4_tpI18un4",
    "duration": 4.38
  },
  {
    "id": 840,
    "title": "One Direction - One Thing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K23X9sfz_Jk",
    "duration": 3.72
  },
  {
    "id": 841,
    "title": "Edith Whiskers - Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RQoKTZPPttQ",
    "duration": 3.58
  },
  {
    "id": 842,
    "title": "Ne-Yo - Miss Independent (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hHP_GEZIjTg",
    "duration": 4.33
  },
  {
    "id": 843,
    "title": "Sam Smith, Kim Petras - Unholy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=60QVBCd7JNw",
    "duration": 2.68
  },
  {
    "id": 844,
    "title": "Billie Eilish  - bitches broken hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vRQMsrd4ZAw",
    "duration": 3.33
  },
  {
    "id": 845,
    "title": "Billie Eilish  - bitches broken hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vRQMsrd4ZAw",
    "duration": 3.33
  },
  {
    "id": 846,
    "title": "ROSAL\u00cdA & J Balvin - Con Altura ft. El Guincho (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iS6UtPjMNLE",
    "duration": 2.78
  },
  {
    "id": 847,
    "title": "Mike Posner - I Took A Pill In Ibiza (SeeB Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zPgyip8Hakg",
    "duration": 3.85
  },
  {
    "id": 848,
    "title": "Melanie Martinez - Carousel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JIDBnlp2AIw",
    "duration": 4.17
  },
  {
    "id": 849,
    "title": "Y2K, bbno$ - Lalala (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GxAP5FDWl5A",
    "duration": 3.05
  },
  {
    "id": 850,
    "title": "V (BTS) - Winter Bear (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V1jsX0Z3Zms",
    "duration": 3.22
  },
  {
    "id": 851,
    "title": "Charlie Puth - How Long (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jzz2RU5hOCc",
    "duration": 3.53
  },
  {
    "id": 852,
    "title": "James Newton Howard and Jennifer Lawrence - The Hanging Tree (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o_sbV5vH4aM",
    "duration": 3.93
  },
  {
    "id": 853,
    "title": "The Beatles - Come Together (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D9gA8erVrcY",
    "duration": 5.0
  },
  {
    "id": 854,
    "title": "Britney Spears - Lucky (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hzR9lRaiJMI",
    "duration": 3.68
  },
  {
    "id": 855,
    "title": "Cavetown - This Is Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JRkJlxO4qhM",
    "duration": 4.17
  },
  {
    "id": 856,
    "title": "Pink - Just Like Fire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dLYuZC6Czfw",
    "duration": 4.2
  },
  {
    "id": 857,
    "title": "Alan Walker - Sing Me To Sleep (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9-3_EknhrI4",
    "duration": 3.42
  },
  {
    "id": 858,
    "title": "Jason Derulo and Snoop Dogg - Wiggle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s2gD1jwjU_M",
    "duration": 3.53
  },
  {
    "id": 859,
    "title": "Panic! At The Disco - This Is Gospel (Piano) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S3yTwGOOhmk",
    "duration": 3.55
  },
  {
    "id": 860,
    "title": "Lana Del Rey - West Coast (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZIduCDtNICU",
    "duration": 4.53
  },
  {
    "id": 861,
    "title": "Alex & Sierra - Little Do You Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZQGU6_ZjWwg",
    "duration": 3.32
  },
  {
    "id": 862,
    "title": "Niall Horan - Slow Hands (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3W9XbTGdakA",
    "duration": 3.52
  },
  {
    "id": 863,
    "title": "Michael Bolton - How Am I Supposed To Live Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JVN9XsGSQw0",
    "duration": 4.4
  },
  {
    "id": 864,
    "title": "FINNEAS - Break My Heart Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pDPacquHrCE",
    "duration": 4.27
  },
  {
    "id": 865,
    "title": "The Greatest Showman - Rewrite The Stars (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=q5zz2QhThmE",
    "duration": 4.25
  },
  {
    "id": 866,
    "title": "Little Mix - Wings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nfH5F0vqzuQ",
    "duration": 3.98
  },
  {
    "id": 867,
    "title": "Fall Out Boy - Sugar, We're Going Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d5lOB7Ibjhg",
    "duration": 4.37
  },
  {
    "id": 868,
    "title": "Tom Jones - Delilah (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AiICGcP5SzM",
    "duration": 3.55
  },
  {
    "id": 869,
    "title": "Lorde - Liability (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J6ARCHkdQGc",
    "duration": 3.08
  },
  {
    "id": 870,
    "title": "P!nk - A Million Dreams (Karaoke Version) | Sing King Karaoke",
    "video_url": "https://www.youtube.com/watch?v=cLq1IdfZLog",
    "duration": 4.8
  },
  {
    "id": 871,
    "title": "Billie Eilish - watch (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZPfvjEkbb4w",
    "duration": 3.22
  },
  {
    "id": 872,
    "title": "Calvin Harris & Disciples - How Deep Is Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DE7Ve7N49Is",
    "duration": 4.12
  },
  {
    "id": 873,
    "title": "Carly Rae Jepsen - I Really Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VILLFThUZko",
    "duration": 3.75
  },
  {
    "id": 874,
    "title": "Ella Mai - Boo'd Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a-d9H0yCMJc",
    "duration": 4.32
  },
  {
    "id": 875,
    "title": "Frozen 2 - Some Things Never Change (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mnD7nbTjZ6U",
    "duration": 3.97
  },
  {
    "id": 876,
    "title": "The Chainsmokers & Coldplay - Something Just Like This (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1FE7rNOZjC8",
    "duration": 4.42
  },
  {
    "id": 877,
    "title": "The Band Perry - If I Die Young (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O19c8OMCykY",
    "duration": 3.95
  },
  {
    "id": 878,
    "title": "Simple Minds - Don't You (Forget About Me) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OozUwqWbXzc",
    "duration": 4.67
  },
  {
    "id": 879,
    "title": "Cardi B, Bad Bunny & J Balvin - I Like It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tPWU56optms",
    "duration": 4.4
  },
  {
    "id": 880,
    "title": "Descendants 3 - One Kiss (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YaYiM6xLuCo",
    "duration": 2.82
  },
  {
    "id": 881,
    "title": "Jonas Blue ft. William Singe - Mama (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6SvC0PZ36Xg",
    "duration": 3.33
  },
  {
    "id": 882,
    "title": "The Jungle Book - Bare Necessities (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NVEf7dhMurM",
    "duration": 5.42
  },
  {
    "id": 883,
    "title": "Jordin Sparks - Tattoo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d4E9wOh-3ME",
    "duration": 4.1
  },
  {
    "id": 884,
    "title": "Lady A - The First Noe\u0308l (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R6RCCNdGu30",
    "duration": 3.68
  },
  {
    "id": 885,
    "title": "Beverley Craven - Promise Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OgtYP649W_Y",
    "duration": 3.55
  },
  {
    "id": 886,
    "title": "Drake - God's Plan (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b1xiezhCNJo",
    "duration": 3.42
  },
  {
    "id": 887,
    "title": "Lauren Daigle - Rescue (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NSrVn6PfAtU",
    "duration": 3.97
  },
  {
    "id": 888,
    "title": "twenty one pilots - Car Radio (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w0ZoSRQ5xSg",
    "duration": 5.03
  },
  {
    "id": 889,
    "title": "Harry Styles - Sweet Creature (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fsqq8hjLDO0",
    "duration": 4.1
  },
  {
    "id": 890,
    "title": "Katy Perry - Part Of Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=da1K-sP_Nys",
    "duration": 3.9
  },
  {
    "id": 891,
    "title": "Lil Eddie - Statue (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WFCozXnIKlk",
    "duration": 4.5
  },
  {
    "id": 892,
    "title": "Sabrina Carpenter - Thumbs (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sPnxLo6CRcQ",
    "duration": 4.03
  },
  {
    "id": 893,
    "title": "Sofia Carson - Love Is The Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QA2BRqXroEg",
    "duration": 4.13
  },
  {
    "id": 894,
    "title": "Frank Sinatra - Theme from New York, New York (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4giwDeT59AA",
    "duration": 3.68
  },
  {
    "id": 895,
    "title": "Ariana Grande - Last Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r9ucN2tSnDE",
    "duration": 4.17
  },
  {
    "id": 896,
    "title": "NF - Let You Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zp1KkQMiPt0",
    "duration": 3.73
  },
  {
    "id": 897,
    "title": "The Beatles - I Want To Hold Your Hand (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=byhOlv1UvBQ",
    "duration": 2.73
  },
  {
    "id": 898,
    "title": "Skeeter Davis - The End of the World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P3XgPgTrVGk",
    "duration": 2.8
  },
  {
    "id": 899,
    "title": "Queen & David Bowie - Under Pressure (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kFD2IRBG35c",
    "duration": 4.05
  },
  {
    "id": 900,
    "title": "Fetty Wap ft. Remy Boyz - 679 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v6FuK3w3iBk",
    "duration": 3.58
  },
  {
    "id": 901,
    "title": "Ariana Grande - break up with your girlfriend, i'm bored (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XclsUVJNv40",
    "duration": 3.38
  },
  {
    "id": 902,
    "title": "V - Sweet Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=F6PzaxH_TaA",
    "duration": 3.85
  },
  {
    "id": 903,
    "title": "Backstreet Boys - Everybody (Backstreet's Back) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=keejy6-6xt4",
    "duration": 4.45
  },
  {
    "id": 904,
    "title": "Chris Brown and Justin Bieber - Next To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NEH_jPXDOMA",
    "duration": 4.57
  },
  {
    "id": 905,
    "title": "B\u00d8RNS - Electric Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9520UyI0KsE",
    "duration": 4.07
  },
  {
    "id": 906,
    "title": "Queen - Killer Queen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=keoUdoKu8Is",
    "duration": 3.35
  },
  {
    "id": 907,
    "title": "Trevor Daniel - Falling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Q7Moarwc_I8",
    "duration": 3.07
  },
  {
    "id": 908,
    "title": "Ella Mai - Trip (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7efCH-o6J0s",
    "duration": 4.05
  },
  {
    "id": 909,
    "title": "Lana Del Rey - Ride (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4Upnkdnzm00",
    "duration": 5.1
  },
  {
    "id": 910,
    "title": "Kelly Clarkson - Piece By Piece (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=E7tMc-vrxTw",
    "duration": 4.95
  },
  {
    "id": 911,
    "title": "Lady Gaga - The Edge Of Glory (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lhh-ajANmcI",
    "duration": 5.5
  },
  {
    "id": 912,
    "title": "Justin Bieber - Yummy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NxQYcM0Kw2Q",
    "duration": 3.65
  },
  {
    "id": 913,
    "title": "Shakin' Stevens - Merry Christmas Everyone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1HvR0ZAB_Xs",
    "duration": 4.03
  },
  {
    "id": 914,
    "title": "C\u00e9line Dion - How Does A Moment Last Forever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9v8RX3vEru4",
    "duration": 4.05
  },
  {
    "id": 915,
    "title": "Dua Lipa - Break My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sb2GhD-wGtM",
    "duration": 4.08
  },
  {
    "id": 916,
    "title": "Fall Out Boy - Centuries (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1EFhj_ofcnw",
    "duration": 4.18
  },
  {
    "id": 917,
    "title": "5 Seconds Of Summer - Youngblood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2drs07dhS7Y",
    "duration": 3.72
  },
  {
    "id": 918,
    "title": "24kGoldn ft. iann dior - Mood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Uukz0TWFfEk",
    "duration": 2.83
  },
  {
    "id": 919,
    "title": "wave to earth - seasons (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DvDcbqyBlEM",
    "duration": 4.32
  },
  {
    "id": 920,
    "title": "Sabrina Carpenter - because i liked a boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d5x3vS__7ZU",
    "duration": 3.52
  },
  {
    "id": 921,
    "title": "The Beatles - Blackbird (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aeyxufMtcOY",
    "duration": 2.72
  },
  {
    "id": 922,
    "title": "My Chemical Romance - Teenagers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ixGt1ajjOyA",
    "duration": 3.05
  },
  {
    "id": 923,
    "title": "Band Aid - Do They Know It's Christmas? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FEZ5GOCcC0k",
    "duration": 4.13
  },
  {
    "id": 924,
    "title": "Billie Eilish - my strange addiction (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BMJkyKSlm3o",
    "duration": 3.27
  },
  {
    "id": 925,
    "title": "Kina ft. Sn\u00f8w - Get You The Moon (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vwPkRY3qUkU",
    "duration": 3.57
  },
  {
    "id": 926,
    "title": "Demi Lovato - Confident (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fTfT1JwAy3Q",
    "duration": 3.97
  },
  {
    "id": 927,
    "title": "Village People - YMCA (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nRjFavXA8pE",
    "duration": 4.35
  },
  {
    "id": 928,
    "title": "Frozen 2 - Lost In The Woods (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C_JjU5QGQQs",
    "duration": 3.32
  },
  {
    "id": 929,
    "title": "mxmtoon - Prom Dress (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7BS4cavay2I",
    "duration": 3.58
  },
  {
    "id": 930,
    "title": "MKTO - Classic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nWR9KwCCdok",
    "duration": 3.27
  },
  {
    "id": 931,
    "title": "ABBA - Waterloo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wphW2H4ucg4",
    "duration": 3.15
  },
  {
    "id": 932,
    "title": "Taylor Swift - The Story Of Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ENjvYNv_I58",
    "duration": 4.92
  },
  {
    "id": 933,
    "title": "Big Sean and E-40 - I Don't F**k With You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n00SsD-7iZw",
    "duration": 5.08
  },
  {
    "id": 934,
    "title": "Daya - Hide Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-iWvqnq4H0s",
    "duration": 3.68
  },
  {
    "id": 935,
    "title": "Halsey - Colors (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pYlFRLTwC8w",
    "duration": 4.73
  },
  {
    "id": 936,
    "title": "Ed Sheeran - Don't (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MwAY-Cx4VAI",
    "duration": 3.93
  },
  {
    "id": 937,
    "title": "Riverdale - Mad World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OKSgEzfWoCo",
    "duration": 3.43
  },
  {
    "id": 938,
    "title": "Migos ft. Lil Uzi Vert - Bad and Boujee (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e4kJhbDoGq8",
    "duration": 6.03
  },
  {
    "id": 939,
    "title": "Iggy Azalea - Work (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MaoUGscvHOU",
    "duration": 3.87
  },
  {
    "id": 940,
    "title": "One Direction - Live While We're Young (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rKrWfymxj5o",
    "duration": 3.65
  },
  {
    "id": 941,
    "title": "Olly Murs ft. Demi Lovato - Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7FJQCZ8W7zE",
    "duration": 4.03
  },
  {
    "id": 942,
    "title": "Nina Simone - Feeling Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KHigN-Sgk5I",
    "duration": 3.2
  },
  {
    "id": 943,
    "title": "Ariana Grande - My Everything (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Zk4QsyEDphk",
    "duration": 3.17
  },
  {
    "id": 944,
    "title": "Little Mix - Hair (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2PYU-D4bVEk",
    "duration": 4.03
  },
  {
    "id": 945,
    "title": "The Vamps and Demi Lovato - Somebody To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0vjO6_uc__A",
    "duration": 3.42
  },
  {
    "id": 946,
    "title": "Limahl - Never Ending Story (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OLL1YGO8ZzY",
    "duration": 3.92
  },
  {
    "id": 947,
    "title": "City Girls - Act Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jrZNeq0TOHg",
    "duration": 2.9
  },
  {
    "id": 948,
    "title": "Taylor Swift feat. Brendon Urie -  ME! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R5Fq8T_s7i8",
    "duration": 3.6
  },
  {
    "id": 949,
    "title": "Justin Bieber ft. Quavo - Intentions (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QfHbuJW59EE",
    "duration": 3.77
  },
  {
    "id": 950,
    "title": "Sam Smith - Like I Can (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IQs4p65sgLQ",
    "duration": 3.22
  },
  {
    "id": 951,
    "title": "The Living Tombstone - Five Nights At Freddy's (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8rUxhnPcbZ8",
    "duration": 2.72
  },
  {
    "id": 952,
    "title": "Doja Cat - Streets (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gNciVzNpiIc",
    "duration": 4.18
  },
  {
    "id": 953,
    "title": "Dove Cameron - Better In Stereo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Hq9ea4O6ODM",
    "duration": 3.58
  },
  {
    "id": 954,
    "title": "Little Mix - Love Me Or Leave Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Nn0RrIffVoI",
    "duration": 3.93
  },
  {
    "id": 955,
    "title": "Becky G - Sola (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j2M23mNY-aI",
    "duration": 4.77
  },
  {
    "id": 956,
    "title": "David Guetta ft. Justin Bieber - 2U (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k0ozznP9RcE",
    "duration": 3.68
  },
  {
    "id": 957,
    "title": "Taylor Swift - Anti-Hero (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TdPPo-hs5kA",
    "duration": 3.5
  },
  {
    "id": 958,
    "title": "Katy Perry ft. Nicki Minaj - Swish Swish (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qj90N-DFezk",
    "duration": 4.48
  },
  {
    "id": 959,
    "title": "Backstreet Boys - Show Me The Meaning Of Being Lonely (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D55PJU_AyQs",
    "duration": 4.37
  },
  {
    "id": 960,
    "title": "Camila Cabello - Shameless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q5fv_CT6MEo",
    "duration": 4.13
  },
  {
    "id": 961,
    "title": "Katy Perry ft. Skip Marley - Chained To The Rhythm (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=G_CKqgdVpyM",
    "duration": 4.33
  },
  {
    "id": 962,
    "title": "Weird Genius ft. Sara Fajira - Lathi (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k6qLc9iD1cI",
    "duration": 3.27
  },
  {
    "id": 963,
    "title": "Nicki Minaj ft. Rihanna - Fly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hlhCJAmumc0",
    "duration": 3.95
  },
  {
    "id": 964,
    "title": "Berlin - Take My Breath Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uIMabU0PIKU",
    "duration": 4.55
  },
  {
    "id": 965,
    "title": "Sugarland - Stay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HibqmaLvNjs",
    "duration": 4.97
  },
  {
    "id": 966,
    "title": "Lil Dicky - Earth (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DeSk10qUEiQ",
    "duration": 4.93
  },
  {
    "id": 967,
    "title": "Aladdin - Friend Like Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kHPI6562b7Q",
    "duration": 2.85
  },
  {
    "id": 968,
    "title": "Grace ft. G-Eazy - You Don't Own Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-NRcXi3h25s",
    "duration": 3.88
  },
  {
    "id": 969,
    "title": "Panic! At The Disco - Into The Unknown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fZHHfJuGU-E",
    "duration": 5.0
  },
  {
    "id": 970,
    "title": "Lady Gaga - Applause (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7_TY6EGoozE",
    "duration": 3.83
  },
  {
    "id": 971,
    "title": "Ava Max -  So Am I (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xa17TPwdWZ0",
    "duration": 3.35
  },
  {
    "id": 972,
    "title": "Andy Williams - It's The Most Wonderful Time Of The Year (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dD3I4k0gA2M",
    "duration": 2.93
  },
  {
    "id": 973,
    "title": "DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QAiDXelc9-I",
    "duration": 3.87
  },
  {
    "id": 974,
    "title": "Gracie Abrams - I miss you, I'm sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bCdTEH6OQBc",
    "duration": 3.28
  },
  {
    "id": 975,
    "title": "Elha Nympha - Wonderful Tonight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zaWRg0fSkwI",
    "duration": 3.88
  },
  {
    "id": 976,
    "title": "Juice WRLD - All Girls Are The Same (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XDwWdQiFiVc",
    "duration": 3.17
  },
  {
    "id": 977,
    "title": "DJ Jazzy Jeff & The Fresh Prince - The Fresh Prince Of Bel-Air (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z0VQIRZ9xSk",
    "duration": 3.08
  },
  {
    "id": 978,
    "title": "Dua Lipa - Homesick (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rButbqDqAe8",
    "duration": 3.98
  },
  {
    "id": 979,
    "title": "The Foundations - Build Me Up Buttercup (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0TvbvdSQQWU",
    "duration": 3.43
  },
  {
    "id": 980,
    "title": "Calvin Harris and Ellie Goulding - I Need Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z1aF-nGMLc0",
    "duration": 4.15
  },
  {
    "id": 981,
    "title": "Camila Cabello - Real Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eJZ5QHJPQz8",
    "duration": 3.72
  },
  {
    "id": 982,
    "title": "Fifth Harmony - I'm In Love With A Monster (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e5535hgdIlk",
    "duration": 4.07
  },
  {
    "id": 983,
    "title": "Phil Collins - In The Air Tonight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BRz_UpdVaK4",
    "duration": 6.25
  },
  {
    "id": 984,
    "title": "Shannon Purser - Sunflower (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TEKmWUrcEdU",
    "duration": 2.08
  },
  {
    "id": 985,
    "title": "Melanie Martinez - Toxic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UQMtNEu-E3M",
    "duration": 4.1
  },
  {
    "id": 986,
    "title": "Britney Spears - Criminal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=trIRQLseyF4",
    "duration": 3.83
  },
  {
    "id": 987,
    "title": "Dove Cameron - Genie In A Bottle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ufWLRZ-r4xY",
    "duration": 3.78
  },
  {
    "id": 988,
    "title": "Descendants - Did I Mention (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0_p8p17vDJ0",
    "duration": 3.18
  },
  {
    "id": 989,
    "title": "The Rembrandts - I'll Be There For You (Friends Theme Song) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=opjN4O9zlGQ",
    "duration": 3.67
  },
  {
    "id": 990,
    "title": "The Cardigans - Lovefool (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A7gF5FAs6zQ",
    "duration": 3.63
  },
  {
    "id": 991,
    "title": "Taylor Swift ft. Kendrick Lamar - Bad Blood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Nxu9-X0lmfE",
    "duration": 3.77
  },
  {
    "id": 992,
    "title": "Ed Sheeran - Tenerife Sea (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=57DTPfV3DPI",
    "duration": 4.3
  },
  {
    "id": 993,
    "title": "Justin Bieber - Purpose (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t0-3FjSIKJY",
    "duration": 4.08
  },
  {
    "id": 994,
    "title": "Nicki Minaj - Grand Piano (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a-czxmb-rk8",
    "duration": 4.68
  },
  {
    "id": 995,
    "title": "Camila Cabello - Consequences (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mGGnD-E5Cv0",
    "duration": 3.3
  },
  {
    "id": 996,
    "title": "Imagine Dragons - Whatever It Takes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TaTWOBxwkhA",
    "duration": 3.53
  },
  {
    "id": 997,
    "title": "Macklemore & Ryan Lewis and Ray Dalton - Can't Hold Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CZ5WFGTjQ8A",
    "duration": 4.47
  },
  {
    "id": 998,
    "title": "Perry Como - It's Beginning To Look A Lot Like Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rAPyxGGjNbk",
    "duration": 3.18
  },
  {
    "id": 999,
    "title": "Ricky Martin - Livin' La Vida Loca (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tOAs-c5jiuQ",
    "duration": 4.13
  },
  {
    "id": 1000,
    "title": "Natalie Taylor - Surrender (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aQUITsd0NV8",
    "duration": 3.35
  },
  {
    "id": 1001,
    "title": "Elvis Presley - If I Can Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mngzaa-UB20",
    "duration": 3.38
  },
  {
    "id": 1002,
    "title": "The Beatles - Help! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K-vyxJj88Jc",
    "duration": 2.57
  },
  {
    "id": 1003,
    "title": "Megan Thee Stallion - Savage (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vJvPK1jYgHI",
    "duration": 2.8
  },
  {
    "id": 1004,
    "title": "Ce\u0301line Dion - Ashes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8D48fQ1QVps",
    "duration": 3.52
  },
  {
    "id": 1005,
    "title": "Billie Eilish - Your Power (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JfsIryyTd2M",
    "duration": 4.38
  },
  {
    "id": 1006,
    "title": "Bryson Tiller - Don't (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cSPGlDnzUYE",
    "duration": 3.93
  },
  {
    "id": 1007,
    "title": "ABBA - Lay All Your Love On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tW2cvXq4siI",
    "duration": 4.85
  },
  {
    "id": 1008,
    "title": "Lil Nas X, Jack Harlow - INDUSTRY BABY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qeQH9sVRQeA",
    "duration": 3.97
  },
  {
    "id": 1009,
    "title": "Sia - The Greatest (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qC15Eif2ais",
    "duration": 4.07
  },
  {
    "id": 1010,
    "title": "penelope scott - ra\u0308t (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HymMBjo29FQ",
    "duration": 3.67
  },
  {
    "id": 1011,
    "title": "Miley Cyrus & Billy Ray Cyrus - Butterfly Fly Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hCT4IsJ3pQI",
    "duration": 4.98
  },
  {
    "id": 1012,
    "title": "BTS ft. Desiigner - MIC Drop (Steve Aoki Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4LT_132jJoY",
    "duration": 4.2
  },
  {
    "id": 1013,
    "title": "High School Musical - Stick To The Status Quo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=umsh3W514-c",
    "duration": 4.8
  },
  {
    "id": 1014,
    "title": "Ghost - Mary On A Cross (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GbC140tbTf8",
    "duration": 4.3
  },
  {
    "id": 1015,
    "title": "Gabrielle Aplin - The Power Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xGPnOpljFHs",
    "duration": 4.48
  },
  {
    "id": 1016,
    "title": "Ariana Grande - imagine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_7BRdJUH5BQ",
    "duration": 3.78
  },
  {
    "id": 1017,
    "title": "Jennifer Lopez - Ain't Your Mama (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z8JgE6FDQyg",
    "duration": 4.17
  },
  {
    "id": 1018,
    "title": "Macklemore & Ryan Lewis and Wanz - Thrift Shop (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qx668eVJKeo",
    "duration": 3.93
  },
  {
    "id": 1019,
    "title": "Cardi B - Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vs_ZvP9dBL4",
    "duration": 3.02
  },
  {
    "id": 1020,
    "title": "Stevie Wonder - Superstition (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7kWhaDjtY5A",
    "duration": 4.33
  },
  {
    "id": 1021,
    "title": "Alessandra De Rossi, Paolo Contis - I Will Be Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rG_K0wVvpao",
    "duration": 4.42
  },
  {
    "id": 1022,
    "title": "Tate McRae - One Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oT1FQTSuhTM",
    "duration": 3.75
  },
  {
    "id": 1023,
    "title": "Lana Del Rey vs Cedric Gervais - Summertime Sadness (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=htDFR5LMfqg",
    "duration": 3.9
  },
  {
    "id": 1024,
    "title": "Felix Jaehn ft. Jasmine Thompson - Ain't Nobody (Loves Me Better) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9S-B99Dd7d4",
    "duration": 3.68
  },
  {
    "id": 1025,
    "title": "Lady Gaga & Ariana Grande - Rain On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xddl6B_QZ5Y",
    "duration": 3.58
  },
  {
    "id": 1026,
    "title": "Britney Spears - I'm Not A Girl, Not Yet A Woman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V99LdiJpzwI",
    "duration": 4.17
  },
  {
    "id": 1027,
    "title": "Selena Gomez - Come And Get It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6wv_7xyQj2c",
    "duration": 4.2
  },
  {
    "id": 1028,
    "title": "Morgan Wallen - Cover Me Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k8-lhen5B0c",
    "duration": 5.0
  },
  {
    "id": 1029,
    "title": "Wilbur Soot - Your New Boyfriend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R5PK2yYwHl8",
    "duration": 4.0
  },
  {
    "id": 1030,
    "title": "Billie Eilish - ilomilo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CnQ1yJhRkxw",
    "duration": 3.0
  },
  {
    "id": 1031,
    "title": "Queen - Another One Bites The Dust (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u7b3v7055gU",
    "duration": 3.92
  },
  {
    "id": 1032,
    "title": "Sam Fischer - This City (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HbcTxD1PnJw",
    "duration": 3.6
  },
  {
    "id": 1033,
    "title": "Panic! At The Disco - The Ballad Of Mona Lisa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fi-_5FyZ2ag",
    "duration": 4.13
  },
  {
    "id": 1034,
    "title": "Lauv - Who feat. BTS (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8Lei6uJZydM",
    "duration": 3.13
  },
  {
    "id": 1035,
    "title": "Drake - Passionfruit (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XYxt7P6Embw",
    "duration": 4.48
  },
  {
    "id": 1036,
    "title": "Sia - Big Girls Cry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AS6miOz7xO0",
    "duration": 3.85
  },
  {
    "id": 1037,
    "title": "Fifth Harmony - BO$$ (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T8NQAl6fFmQ",
    "duration": 3.18
  },
  {
    "id": 1038,
    "title": "Charli XCX - Boom Clap (From 'The Fault In Our Stars') (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zrcywPrIr9k",
    "duration": 3.15
  },
  {
    "id": 1039,
    "title": "Sia - Breathe Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xDfUBoZE6pE",
    "duration": 5.15
  },
  {
    "id": 1040,
    "title": "Billie Eilish - party favor (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uTkswjK1CiA",
    "duration": 3.57
  },
  {
    "id": 1041,
    "title": "Selena Gomez - Fetish (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=905cCBm40UM",
    "duration": 3.45
  },
  {
    "id": 1042,
    "title": "Avicii - Wake Me Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BGfJobjH4Dc",
    "duration": 4.23
  },
  {
    "id": 1043,
    "title": "Luis Fonsi, Demi Lovato - Echam\u00e9 La Culpa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Zg06YxALGVw",
    "duration": 3.15
  },
  {
    "id": 1044,
    "title": "Jason Derulo - Want To Want Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=USdZX_vdP4g",
    "duration": 3.78
  },
  {
    "id": 1045,
    "title": "Michael Bubl\u00e9 - Haven't Met You Yet (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=247YolCxlpI",
    "duration": 4.62
  },
  {
    "id": 1046,
    "title": "sapientdream - Past Lives (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SIRHqDNpLMo",
    "duration": 2.65
  },
  {
    "id": 1047,
    "title": "Kat Dahlia - I Think I'm In Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j52kpEn5roY",
    "duration": 4.08
  },
  {
    "id": 1048,
    "title": "Calvin Harris, Dua Lipa - One Kiss (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jTDI5kF3Pco",
    "duration": 3.68
  },
  {
    "id": 1049,
    "title": "Frozen 2 - The Next Right Thing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qm1sD8Y4954",
    "duration": 3.9
  },
  {
    "id": 1050,
    "title": "Lana Del Rey - National Anthem (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0CjMoMG-Pwc",
    "duration": 4.42
  },
  {
    "id": 1051,
    "title": "Nathan Sykes - Over And Over Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vnxbblBBVpk",
    "duration": 4.58
  },
  {
    "id": 1052,
    "title": "George Ezra - Shotgun (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_J9po90y8es",
    "duration": 3.48
  },
  {
    "id": 1053,
    "title": "Sabrina Carpenter - Eyes Wide Open (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8SBsvvQPsgg",
    "duration": 3.47
  },
  {
    "id": 1054,
    "title": "Post Malone ft. Quavo - Congratulations (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NjTs_oWyJdE",
    "duration": 4.05
  },
  {
    "id": 1055,
    "title": "Miley Cyrus - Adore You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WFJQQbHKTVQ",
    "duration": 5.2
  },
  {
    "id": 1056,
    "title": "Coldplay - A Sky Full Of Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mHT7qO-cZbo",
    "duration": 4.75
  },
  {
    "id": 1057,
    "title": "Melanie Martinez - Show & Tell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yD-nQwYu3pA",
    "duration": 3.87
  },
  {
    "id": 1058,
    "title": "Shawn Mendes - If I Can't Have You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8LKF6FtZvXA",
    "duration": 3.47
  },
  {
    "id": 1059,
    "title": "Descendants 3 - Do What You Gotta Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tDtdeRHCfGY",
    "duration": 3.48
  },
  {
    "id": 1060,
    "title": "Tate McRae - That Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=muwbCi5roa8",
    "duration": 3.3
  },
  {
    "id": 1061,
    "title": "Joji - Sanctuary (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tJz-K5YBpSA",
    "duration": 3.1
  },
  {
    "id": 1062,
    "title": "J Balvin, Willy William - Mi Gente (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m08bnH5G8p8",
    "duration": 3.45
  },
  {
    "id": 1063,
    "title": "Sir Chloe - Michelle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=50TNx49KNwc",
    "duration": 3.73
  },
  {
    "id": 1064,
    "title": "Halsey - Control (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c3LmNdgNFy8",
    "duration": 4.2
  },
  {
    "id": 1065,
    "title": "Rosa Linn - SNAP (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cidANUBQ2jw",
    "duration": 3.38
  },
  {
    "id": 1066,
    "title": "BLACKPINK - You Never Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iEtP71Np2nA",
    "duration": 4.22
  },
  {
    "id": 1067,
    "title": "PUBLIC - Make You Mine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lzJPgXEnXiQ",
    "duration": 4.18
  },
  {
    "id": 1068,
    "title": "High School Musical - When There Was Me And You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6CGF3NHPuyg",
    "duration": 3.32
  },
  {
    "id": 1069,
    "title": "Sam Smith - How Do You Sleep? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LVOPKlPgKLw",
    "duration": 3.62
  },
  {
    "id": 1070,
    "title": "The 1975 - Somebody Else (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mK_1Ldh6ClA",
    "duration": 6.3
  },
  {
    "id": 1071,
    "title": "Calvin Harris ft. Ellie Goulding - Outside (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fDpms3alF5o",
    "duration": 4.1
  },
  {
    "id": 1072,
    "title": "Jason Derulo - Talk Dirty (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TwF4DJDKkjU",
    "duration": 3.32
  },
  {
    "id": 1073,
    "title": "Billie Eilish - Therefore I Am (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=palrVfIjTaw",
    "duration": 3.25
  },
  {
    "id": 1074,
    "title": "Christmas Songs - Do You Hear What I Hear (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jHRS9ybQpg4",
    "duration": 3.65
  },
  {
    "id": 1075,
    "title": "Hailee Steinfeld - Most Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bAnMc7Tkgt4",
    "duration": 3.87
  },
  {
    "id": 1076,
    "title": "Calvin Harris - Summer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M355EDbE-oE",
    "duration": 3.93
  },
  {
    "id": 1077,
    "title": "Melanie Martinez - Sippy Cup (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a0I1h4UyZOU",
    "duration": 3.93
  },
  {
    "id": 1078,
    "title": "Camila Cabello - My Oh My ft. DaBaby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Lzx957gyc8A",
    "duration": 3.23
  },
  {
    "id": 1079,
    "title": "SZA - Good Days (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-RrH9ycYp14",
    "duration": 4.88
  },
  {
    "id": 1080,
    "title": "BLACKPINK - Shut Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u0XVZwf1l9Q",
    "duration": 3.2
  },
  {
    "id": 1081,
    "title": "DJ Snake ft. Bipolar Sunshine - Middle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fuhYxD5knq0",
    "duration": 4.2
  },
  {
    "id": 1082,
    "title": "Selena Gomez - Bad Liar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fhT-bf1ws64",
    "duration": 3.97
  },
  {
    "id": 1083,
    "title": "Grace VanderWaal - Moonlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=32-e78LIl8M",
    "duration": 3.18
  },
  {
    "id": 1084,
    "title": "Lady Gaga & BLACKPINK - Sour Candy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zJKkDP9QIi0",
    "duration": 3.08
  },
  {
    "id": 1085,
    "title": "Lia Marie Johnson - DNA (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sbc74Dhw1c8",
    "duration": 4.08
  },
  {
    "id": 1086,
    "title": "Lauv - I Like Me Better (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kVg3L1FvgZw",
    "duration": 3.62
  },
  {
    "id": 1087,
    "title": "Portugal. The Man - Feel It Still (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ufX7yqEfv70",
    "duration": 3.08
  },
  {
    "id": 1088,
    "title": "Cardi B - Money (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=W32wsXy3JJQ",
    "duration": 3.23
  },
  {
    "id": 1089,
    "title": "Shontelle - Impossible (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VIB8Z838AVw",
    "duration": 4.15
  },
  {
    "id": 1090,
    "title": "Brandi Carlile - The Story (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5Ysa5iyrpZI",
    "duration": 4.15
  },
  {
    "id": 1091,
    "title": "Descendants 3 - My Once Upon A Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NWYWiZLtqA0",
    "duration": 4.22
  },
  {
    "id": 1092,
    "title": "Destiny's Child - Rudolph The Red-Nosed Reindeer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HEF4KjGTHLQ",
    "duration": 3.08
  },
  {
    "id": 1093,
    "title": "Selena Gomez - Back To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-t93cQsVifE",
    "duration": 3.85
  },
  {
    "id": 1094,
    "title": "Lele Pons - Celoso (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6sm-VkbvOng",
    "duration": 3.33
  },
  {
    "id": 1095,
    "title": "Juice WRLD - Robbery (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wo9IUjs1UfY",
    "duration": 3.88
  },
  {
    "id": 1096,
    "title": "Michael Andrews and Gary Jules - Mad World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WpjyAZtKd2U",
    "duration": 3.37
  },
  {
    "id": 1097,
    "title": "Lorde - Team (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cDIXDomrK08",
    "duration": 3.68
  },
  {
    "id": 1098,
    "title": "Taylor Swift - You Need To Calm Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=to-S78ftZHI",
    "duration": 3.1
  },
  {
    "id": 1099,
    "title": "ABBA - Take A Chance On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SgxICAYsYDs",
    "duration": 4.48
  },
  {
    "id": 1100,
    "title": "AJR - World's Smallest Violin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ClNkwd1u2eQ",
    "duration": 3.28
  },
  {
    "id": 1101,
    "title": "Rihanna - Only Girl (In The World) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZGoB5KmzMhs",
    "duration": 4.23
  },
  {
    "id": 1102,
    "title": "Melanie Martinez - High School Sweethearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gLsgyN5EDVQ",
    "duration": 5.63
  },
  {
    "id": 1103,
    "title": "The Chainsmokers - Paris (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ERprWn2lYS8",
    "duration": 3.9
  },
  {
    "id": 1104,
    "title": "Rihanna - S&M (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-yPwm5ZjmjQ",
    "duration": 4.5
  },
  {
    "id": 1105,
    "title": "Ariana Grande  - needy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ykLGJ1pUjjs",
    "duration": 3.08
  },
  {
    "id": 1106,
    "title": "Melanie Martinez - Class Fight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VgC1kpTUjkY",
    "duration": 2.98
  },
  {
    "id": 1107,
    "title": "P!nk - Who Knew (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=F1RcHsV_7s8",
    "duration": 3.87
  },
  {
    "id": 1108,
    "title": "Air Supply - Having You Near Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CxXU47MCsL8",
    "duration": 4.18
  },
  {
    "id": 1109,
    "title": "System Of A Down - Chop Suey! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oHwRsI2aSDg",
    "duration": 3.68
  },
  {
    "id": 1110,
    "title": "Taylor Dayne - Love Will Lead You Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1XvcftQeLSM",
    "duration": 4.87
  },
  {
    "id": 1111,
    "title": "One Direction - No Control (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qzq2qLUWQ9M",
    "duration": 3.65
  },
  {
    "id": 1112,
    "title": "Julie and the Phantoms - Edge Of Great (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e6slqkrboa4",
    "duration": 3.42
  },
  {
    "id": 1113,
    "title": "21 Savage - Bank Account (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OYyKnfX1rwk",
    "duration": 3.77
  },
  {
    "id": 1114,
    "title": "Christina Aguilera - Genie In A Bottle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Bwnm6wCyFHc",
    "duration": 4.1
  },
  {
    "id": 1115,
    "title": "Lil Uzi Vert - XO Tour Llif3 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EwBLyovTp-I",
    "duration": 3.18
  },
  {
    "id": 1116,
    "title": "Justine Skye ft. Tyga - Collide (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MVD6cO1yDzM",
    "duration": 4.42
  },
  {
    "id": 1117,
    "title": "Taylor Swift - Ours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ompZ8VLgjts",
    "duration": 4.43
  },
  {
    "id": 1118,
    "title": "Swedish House Mafia - Don't You Worry Child (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nprRe7SH8U0",
    "duration": 3.7
  },
  {
    "id": 1119,
    "title": "Julie and The Phantoms - Unsaid Emily (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iYYOQz8wIWU",
    "duration": 3.98
  },
  {
    "id": 1120,
    "title": "One Direction - Infinity (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vQaOmtjsXBc",
    "duration": 4.55
  },
  {
    "id": 1121,
    "title": "Drake - Fake Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YWKguc63wt8",
    "duration": 3.88
  },
  {
    "id": 1122,
    "title": "Bahari - Savage (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JhipPliGz-E",
    "duration": 3.05
  },
  {
    "id": 1123,
    "title": "Kelly Clarkson - Underneath The Tree (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6qgtHXOJX9s",
    "duration": 4.65
  },
  {
    "id": 1124,
    "title": "SHAED - Trampoline (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=52S8qO8MDjQ",
    "duration": 3.48
  },
  {
    "id": 1125,
    "title": "JVKE - this is what heartbreak feels like (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yJcY-KdXT54",
    "duration": 2.7
  },
  {
    "id": 1126,
    "title": "6ix9ine, Nicki Minaj, Murda Beatz - FEFE (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zpBRGghNRBI",
    "duration": 3.32
  },
  {
    "id": 1127,
    "title": "benny blanco, Halsey & Khalid - Eastside (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lBwXEZte1S4",
    "duration": 3.15
  },
  {
    "id": 1128,
    "title": "YNW Melly - Suicidal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=H63tNSi0US4",
    "duration": 4.1
  },
  {
    "id": 1129,
    "title": "Bread - Everything I Own (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aaJwugoNayU",
    "duration": 3.43
  },
  {
    "id": 1130,
    "title": "Lauren Spencer Smith - Fingers Crossed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J4w1DCeu5sM",
    "duration": 3.25
  },
  {
    "id": 1131,
    "title": "Dua Lipa - Physical (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4-qga7NLOJA",
    "duration": 3.55
  },
  {
    "id": 1132,
    "title": "Rachel Platten - Stand By You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TG4Vs02sqx8",
    "duration": 4.25
  },
  {
    "id": 1133,
    "title": "Justin Bieber - Company (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hYSNz4uJh9k",
    "duration": 4.15
  },
  {
    "id": 1134,
    "title": "Phil Collins - Another Day in Paradise (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cnCqNp1aaSE",
    "duration": 5.43
  },
  {
    "id": 1135,
    "title": "Billie Eilish - WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? (Full Album Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=-DR5vxR78qI",
    "duration": 43.63
  },
  {
    "id": 1136,
    "title": "Why Don't We - 8 Letters (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6unN3qLF098",
    "duration": 3.55
  },
  {
    "id": 1137,
    "title": "Whitney Houston - Try It On My Own (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MBIHLqvrUHI",
    "duration": 4.82
  },
  {
    "id": 1138,
    "title": "Bobby Caldwell - What You Won't Do For Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bPhlSF5P7Uc",
    "duration": 5.02
  },
  {
    "id": 1139,
    "title": "James Arthur - Empty Space (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ACU42cnaRJE",
    "duration": 3.75
  },
  {
    "id": 1140,
    "title": "Lana Del Rey - Doin' Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=coeEwriNEdw",
    "duration": 3.62
  },
  {
    "id": 1141,
    "title": "Larray - Canceled (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v6_ZERH_B34",
    "duration": 2.95
  },
  {
    "id": 1142,
    "title": "Ariana Grande ft. Mac Miller - The Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RzpLllzC-l8",
    "duration": 4.22
  },
  {
    "id": 1143,
    "title": "Nick Jonas - Chains (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_DomMYVDEP0",
    "duration": 3.77
  },
  {
    "id": 1144,
    "title": "Zedd, Maren Morris, Grey - The Middle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=E60j9v-ODLQ",
    "duration": 3.37
  },
  {
    "id": 1145,
    "title": "Sam Hunt - Body Like A Back Road (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7Q8cvTTsyp4",
    "duration": 3.12
  },
  {
    "id": 1146,
    "title": "Jorja Smith - Don't Watch Me Cry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CyQhPvaC-gw",
    "duration": 3.52
  },
  {
    "id": 1147,
    "title": "Zombies 2 - We Own The Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2nG4WFnyDlE",
    "duration": 2.82
  },
  {
    "id": 1148,
    "title": "Nicki Minaj - Chun-Li (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PybzNKo_T-0",
    "duration": 3.58
  },
  {
    "id": 1149,
    "title": "Tiffany - All This Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yGpqpMvMJKM",
    "duration": 4.47
  },
  {
    "id": 1150,
    "title": "Ariana Grande - Just A Little Bit Of Your Heart (Valentine's Day Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=GhkyN4wn0pQ",
    "duration": 4.25
  },
  {
    "id": 1151,
    "title": "Harry Styles - Two Ghosts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YqibcP7jvpg",
    "duration": 4.1
  },
  {
    "id": 1152,
    "title": "Regine Velasquez - You Are My Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K_pDsSP2mIc",
    "duration": 4.13
  },
  {
    "id": 1153,
    "title": "Indila - Tourner Dans Le Vide (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bQL9SvYb4rc",
    "duration": 4.05
  },
  {
    "id": 1154,
    "title": "Skrillex and Diplo (with Justin Bieber) - Where Are U Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LTobEt2EF5s",
    "duration": 4.4
  },
  {
    "id": 1155,
    "title": "Camila Cabello - Crying In The Club (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NO_mDJy0JRg",
    "duration": 4.0
  },
  {
    "id": 1156,
    "title": "Zombies 2 - Flesh & Bone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZQ9FSJPeuFM",
    "duration": 3.83
  },
  {
    "id": 1157,
    "title": "Marshmello ft. Khalid - Silence (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fXr8MtRBczQ",
    "duration": 3.22
  },
  {
    "id": 1158,
    "title": "Taylor Swift - Clean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_CXLHLs1NBs",
    "duration": 4.85
  },
  {
    "id": 1159,
    "title": "Tom Jones - Green Green Grass Of Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mZg9xYtJPyI",
    "duration": 3.47
  },
  {
    "id": 1160,
    "title": "Little Mix - Salute (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P2C0fZLGYSo",
    "duration": 4.23
  },
  {
    "id": 1161,
    "title": "Chris Brown and Usher and Rick Ross - New Flame (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wo5pP2x5sh4",
    "duration": 4.42
  },
  {
    "id": 1162,
    "title": "Lauren Daigle - Trust In You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nB04X3YiZ58",
    "duration": 3.67
  },
  {
    "id": 1163,
    "title": "The Pogues & Kirsty McColl - Fairytale Of New York (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JkGkodCBNWs",
    "duration": 5.32
  },
  {
    "id": 1164,
    "title": "One Direction - Right Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lHoGLAd79Wo",
    "duration": 3.43
  },
  {
    "id": 1165,
    "title": "The Addams Family Theme Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i4Rxx_W34aM",
    "duration": 2.63
  },
  {
    "id": 1166,
    "title": "Green Day - Holiday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=azA7YCqiiZU",
    "duration": 4.5
  },
  {
    "id": 1167,
    "title": "Lana Del Rey - Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K1iXqjAY2Pk",
    "duration": 5.07
  },
  {
    "id": 1168,
    "title": "The Script - Superheroes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_4KETuTveLA",
    "duration": 4.33
  },
  {
    "id": 1169,
    "title": "Lady Gaga - Hold My Hand (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7lgbF0kf1cE",
    "duration": 4.05
  },
  {
    "id": 1170,
    "title": "Noah Cyrus ft. Labrinth - Make Me (Cry) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bDmb3L4sbLA",
    "duration": 4.37
  },
  {
    "id": 1171,
    "title": "Conan Gray - Maniac (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=obhqw5DdhXY",
    "duration": 3.38
  },
  {
    "id": 1172,
    "title": "Lil Tecca - Ransom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QzT_NI6Hzl4",
    "duration": 2.35
  },
  {
    "id": 1173,
    "title": "Fifth Harmony - Miss Movin' On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d-8UGc7I3Uo",
    "duration": 3.65
  },
  {
    "id": 1174,
    "title": "Kina ft. Adriana Proenza - Can We Kiss Forever? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KFahZd4vVtk",
    "duration": 3.28
  },
  {
    "id": 1175,
    "title": "Ed Sheeran - SING (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ASCRuBkjvGY",
    "duration": 4.23
  },
  {
    "id": 1176,
    "title": "Ron Pope - A Drop In The Ocean (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K54Ca4CrKzg",
    "duration": 4.3
  },
  {
    "id": 1177,
    "title": "Billie Eilish - 8 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rNokzhUPfNY",
    "duration": 3.2
  },
  {
    "id": 1178,
    "title": "Post Malone ft. Young Thug - Goodbyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M8Bh3kacMAA",
    "duration": 3.18
  },
  {
    "id": 1179,
    "title": "Troye Sivan - FOOLS (Karaoke Version) (Blue Neighbourhood Part 2/3)",
    "video_url": "https://www.youtube.com/watch?v=6_knW5drAPw",
    "duration": 4.18
  },
  {
    "id": 1180,
    "title": "Meghan Trainor - Title (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7EiHLU8v4mc",
    "duration": 3.33
  },
  {
    "id": 1181,
    "title": "Paramore - Ignorance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=30jXkZxbkyI",
    "duration": 4.23
  },
  {
    "id": 1182,
    "title": "Cher Lloyd - Want U Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QEZjzH4zEd4",
    "duration": 3.95
  },
  {
    "id": 1183,
    "title": "Owl City - Good Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_W3uKctm9v0",
    "duration": 3.67
  },
  {
    "id": 1184,
    "title": "Christmas Carols - Away In A Manger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dq34Clq3QKY",
    "duration": 2.32
  },
  {
    "id": 1185,
    "title": "Astrid S - Hurts So Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uLBk13Iza9o",
    "duration": 3.8
  },
  {
    "id": 1186,
    "title": "Lil Wayne, Wiz Khalifa & Imagine Dragons w/ Logic & Ty Dolla $ign ft X Ambassadors - Sucker For Pain",
    "video_url": "https://www.youtube.com/watch?v=vxRU-NCq9bg",
    "duration": 4.85
  },
  {
    "id": 1187,
    "title": "Lana Del Rey - Ultraviolence (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xyzwVdyqonc",
    "duration": 4.75
  },
  {
    "id": 1188,
    "title": "Taylor Swift - Begin Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EubeUnrZr_I",
    "duration": 4.32
  },
  {
    "id": 1189,
    "title": "JoJo - Too Little, Too Late (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gymyKFgAF4E",
    "duration": 4.5
  },
  {
    "id": 1190,
    "title": "French Montana ft. Swae Lee - Unforgettable (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AmPXE25NxCM",
    "duration": 4.13
  },
  {
    "id": 1191,
    "title": "James Arthur - Falling Like The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=187jnOhMOOU",
    "duration": 3.73
  },
  {
    "id": 1192,
    "title": "Ed Sheeran - All Of The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BSuZ4ztkmPA",
    "duration": 4.38
  },
  {
    "id": 1193,
    "title": "Zara Larsson - Ain't My Fault (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dZHQRpj7CQI",
    "duration": 4.33
  },
  {
    "id": 1194,
    "title": "Flo Rida - My House (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Bdu9nAVsd6I",
    "duration": 3.73
  },
  {
    "id": 1195,
    "title": "Rae Sremmurd - Black Beatles (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NV-USjtsMEI",
    "duration": 5.43
  },
  {
    "id": 1196,
    "title": "Amy Winehouse - Tears Dry On Their Own (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ee8cL8k-qOo",
    "duration": 3.45
  },
  {
    "id": 1197,
    "title": "Descendants 3 - Good To Be Bad (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d4K4F2YDDOk",
    "duration": 3.6
  },
  {
    "id": 1198,
    "title": "Ariana Grande ft. Future - Everyday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=L0zmjZStHAc",
    "duration": 3.68
  },
  {
    "id": 1199,
    "title": "twenty one pilots - Migraine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1wCF8bRsFfo",
    "duration": 4.7
  },
  {
    "id": 1200,
    "title": "Calvin Harris ft. Rihanna - This Is What You Came For (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p5s2gJ0fw4w",
    "duration": 4.03
  },
  {
    "id": 1201,
    "title": "grandson - Blood // Water (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wl4lAz72RmU",
    "duration": 4.0
  },
  {
    "id": 1202,
    "title": "The Chainsmokers ft. Phoebe Ryan - All We Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9QEY6h03lYU",
    "duration": 3.67
  },
  {
    "id": 1203,
    "title": "Stephanie Mabey - The Zombie Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A7ftOYzRLcw",
    "duration": 3.23
  },
  {
    "id": 1204,
    "title": "The Jets - Make It Real (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LeRcAzEwI7E",
    "duration": 4.37
  },
  {
    "id": 1205,
    "title": "American Authors - Best Day Of My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a6JskTwyQ3s",
    "duration": 3.62
  },
  {
    "id": 1206,
    "title": "Allona - Someone's Always Saying Goodbye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_yEjGGeNU5c",
    "duration": 3.92
  },
  {
    "id": 1207,
    "title": "Taylor Swift - Welcome To New York (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-VaK3fA0MLk",
    "duration": 3.78
  },
  {
    "id": 1208,
    "title": "Fall Out Boy - Immortals (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=24F76gV_F8c",
    "duration": 3.47
  },
  {
    "id": 1209,
    "title": "Alesso and Tove Lo - Heroes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3X9bDL8hHR0",
    "duration": 3.82
  },
  {
    "id": 1210,
    "title": "The Weeknd - Call Out My Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FP6LIQgdIcI",
    "duration": 4.15
  },
  {
    "id": 1211,
    "title": "Lionel Richie - All Night Long (All Night) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=y1ZnaCAb-y8",
    "duration": 4.82
  },
  {
    "id": 1212,
    "title": "Bring Me The Horizon - Drown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oXQkmMzwE8M",
    "duration": 4.02
  },
  {
    "id": 1213,
    "title": "Demi Lovato - Nightingale (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KrvDbVwk9Ug",
    "duration": 3.87
  },
  {
    "id": 1214,
    "title": "Billie Eilish - come out and play (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Y9dOjrJrfQA",
    "duration": 3.55
  },
  {
    "id": 1215,
    "title": "Billie Eilish - come out and play (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Y9dOjrJrfQA",
    "duration": 3.55
  },
  {
    "id": 1216,
    "title": "Sabrina Carpenter - We'll Be The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qnJCMNQQHbY",
    "duration": 3.62
  },
  {
    "id": 1217,
    "title": "Julie and The Phantoms - Flying Solo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wVtWM9sT00k",
    "duration": 3.45
  },
  {
    "id": 1218,
    "title": "GANGGA - Blue Jeans (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-sMcNhlsuoA",
    "duration": 3.83
  },
  {
    "id": 1219,
    "title": "D.R.A.M. feat. Lil Yachty - Broccoli (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=11TlwFxNO2M",
    "duration": 4.32
  },
  {
    "id": 1220,
    "title": "Fifth Harmony - Sledgehammer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iFPPmwJ_SAc",
    "duration": 4.32
  },
  {
    "id": 1221,
    "title": "Taylor Swift - willow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FBiPxGCeaGQ",
    "duration": 3.95
  },
  {
    "id": 1222,
    "title": "Jon Bellion - All Time Low (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=78HYbOcswD4",
    "duration": 4.15
  },
  {
    "id": 1223,
    "title": "Little Mix - Little Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-3zo_TEI5qA",
    "duration": 4.5
  },
  {
    "id": 1224,
    "title": "Metro Boomin, The Weeknd, 21 Savage - Creepin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kSRGor18SyQ",
    "duration": 3.75
  },
  {
    "id": 1225,
    "title": "High School Musical 3 - Right Here, Right Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3y0-7ykbzKU",
    "duration": 4.18
  },
  {
    "id": 1226,
    "title": "Katrina and The Waves - Walking On Sunshine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=f76Ue9ki3_U",
    "duration": 4.42
  },
  {
    "id": 1227,
    "title": "Aviva - Princesses Don't Cry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w_uIqbcTkt8",
    "duration": 3.87
  },
  {
    "id": 1228,
    "title": "Bonnie Raitt - I Can't Make You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ft3srWYmldc",
    "duration": 5.55
  },
  {
    "id": 1229,
    "title": "The Kid LAROI - WITHOUT YOU (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fN_APTSVtQQ",
    "duration": 3.03
  },
  {
    "id": 1230,
    "title": "Taylor Swift - Cornelia Street (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w7oLgnTA1tU",
    "duration": 4.98
  },
  {
    "id": 1231,
    "title": "Ma\u030aneskin - ZITTI E BUONI (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-HsvD2g7njI",
    "duration": 3.6
  },
  {
    "id": 1232,
    "title": "WILLOW - Wait a Minute! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s4NrP1bA6WU",
    "duration": 3.45
  },
  {
    "id": 1233,
    "title": "Anson Seabra - Welcome To Wonderland (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=We5SKLMAYCc",
    "duration": 3.68
  },
  {
    "id": 1234,
    "title": "Sabrina Carpenter - Smoke And Fire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hfimYKn2qDQ",
    "duration": 4.28
  },
  {
    "id": 1235,
    "title": "Fall Out Boy - My Songs Know What You Did In The Dark (Light Em Up) [Karaoke Version]",
    "video_url": "https://www.youtube.com/watch?v=5Fm8Wi9sYAU",
    "duration": 3.45
  },
  {
    "id": 1236,
    "title": "The Weeknd - Wicked Games (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qBmP6oM1iMg",
    "duration": 5.78
  },
  {
    "id": 1237,
    "title": "Zedd and Hayley Williams - Stay the Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WxMEiEhUwjU",
    "duration": 3.97
  },
  {
    "id": 1238,
    "title": "Amy Winehouse - Love Is A Losing Game (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r21Eseaa7Jg",
    "duration": 2.95
  },
  {
    "id": 1239,
    "title": "The Mamas & The Papas - California Dreamin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K1n5_8d0MsU",
    "duration": 2.85
  },
  {
    "id": 1240,
    "title": "Justin Bieber ft. Chance The Rapper - Holy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gQt2AJjTXHE",
    "duration": 3.98
  },
  {
    "id": 1241,
    "title": "Paramore - Hard Times (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fpm77jl9gWE",
    "duration": 4.4
  },
  {
    "id": 1242,
    "title": "Jess Glynne - I'll Be There (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IS8e94ycnC8",
    "duration": 3.67
  },
  {
    "id": 1243,
    "title": "Florida Georgia Line - H.O.L.Y. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IdPO76f4kmI",
    "duration": 3.8
  },
  {
    "id": 1244,
    "title": "Drake ft. Rihanna - Take Care (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZdJ88cvxyb0",
    "duration": 4.88
  },
  {
    "id": 1245,
    "title": "Panic! At The Disco - Emperor's New Clothes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CgRGvclVmT0",
    "duration": 3.22
  },
  {
    "id": 1246,
    "title": "Sabrina Carpenter - Why (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RAf5a3V5_W8",
    "duration": 3.2
  },
  {
    "id": 1247,
    "title": "Jennifer Lopez, Pitbull - On The Floor (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J8BW5A3s0HE",
    "duration": 4.18
  },
  {
    "id": 1248,
    "title": "Judy Garland - Have Yourself A Merry Little Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nRKhtWWUZjw",
    "duration": 3.1
  },
  {
    "id": 1249,
    "title": "Sam Smith - Pray (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Gn8ef47x4w0",
    "duration": 4.08
  },
  {
    "id": 1250,
    "title": "Rihanna, Drake - What's My Name? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OaNREHFxzTA",
    "duration": 4.9
  },
  {
    "id": 1251,
    "title": "Beyonce\u0301 - Spirit from Disney's \"The Lion King\" (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CyTdO8B3xNc",
    "duration": 4.73
  },
  {
    "id": 1252,
    "title": "Coyote Theory - This Side Of Paradise (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ppIt5aDk12w",
    "duration": 4.33
  },
  {
    "id": 1253,
    "title": "Elvis Presley - In The Ghetto (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YG2ByQge56E",
    "duration": 3.13
  },
  {
    "id": 1254,
    "title": "Harry Styles - Kiwi (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ubnyl4AMk2M",
    "duration": 3.22
  },
  {
    "id": 1255,
    "title": "Becky G - Can't Stop Dancing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=X6RQy_6q_Wc",
    "duration": 3.57
  },
  {
    "id": 1256,
    "title": "Emeli Sande - Next To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TUk3c65izW8",
    "duration": 3.67
  },
  {
    "id": 1257,
    "title": "INXS - Never Tear Us Apart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-DAdiVbDMFQ",
    "duration": 3.65
  },
  {
    "id": 1258,
    "title": "Taylor Swift - You're On Your Own Kid (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ev5IpTlOC0g",
    "duration": 3.38
  },
  {
    "id": 1259,
    "title": "Shawn Mendes - Show You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1xXRWbS4QlU",
    "duration": 3.33
  },
  {
    "id": 1260,
    "title": "twenty one pilots - Tear In My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=F4EHViOQ8Cw",
    "duration": 3.75
  },
  {
    "id": 1261,
    "title": "Summer Walker, Bryson Tiller - Playing Games (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iA2K4iMP4fE",
    "duration": 2.83
  },
  {
    "id": 1262,
    "title": "Lauv - Never Not (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FMwiliVzutQ",
    "duration": 3.48
  },
  {
    "id": 1263,
    "title": "Billy Joel - She's Always a Woman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FN9QZmfvIHQ",
    "duration": 3.55
  },
  {
    "id": 1264,
    "title": "Whitney Houston - How Will I Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Mq9IidEy4So",
    "duration": 5.18
  },
  {
    "id": 1265,
    "title": "Tori Kelly - Nobody Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=50LjlebTog4",
    "duration": 3.73
  },
  {
    "id": 1266,
    "title": "Maddie & Tae - Die From A Broken Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v-7LU8YA6BI",
    "duration": 3.47
  },
  {
    "id": 1267,
    "title": "Taylor Swift - The Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4kkgit7dcJk",
    "duration": 3.67
  },
  {
    "id": 1268,
    "title": "Liam Payne ft. Quavo - Strip That Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oTW_1OZmXq0",
    "duration": 3.8
  },
  {
    "id": 1269,
    "title": "Lana Del Rey - Happiness Is A Butterfly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QzWG-Vc9yo4",
    "duration": 4.7
  },
  {
    "id": 1270,
    "title": "ABBA - Knowing Me, Knowing You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Q8T4s1-G0rk",
    "duration": 4.43
  },
  {
    "id": 1271,
    "title": "Fountains Of Wayne - Stacy's Mom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ddi4V-MS6GA",
    "duration": 3.88
  },
  {
    "id": 1272,
    "title": "Katy Perry - E.T (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Xe1GN7SFMbk",
    "duration": 3.87
  },
  {
    "id": 1273,
    "title": "Nina Simone - I Put A Spell On You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8KeLyWdfC-A",
    "duration": 2.93
  },
  {
    "id": 1274,
    "title": "Tom Walker - Leave A Light On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1Ozq7W2gy7k",
    "duration": 3.68
  },
  {
    "id": 1275,
    "title": "London Grammar - Strong (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BP-LutXnC24",
    "duration": 4.27
  },
  {
    "id": 1276,
    "title": "Corinne Bailey Rae - Like A Star (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UxVpPdd7TVQ",
    "duration": 4.32
  },
  {
    "id": 1277,
    "title": "Dusty Springfield - Son Of A Preacher Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=43Bl7QsebHo",
    "duration": 2.72
  },
  {
    "id": 1278,
    "title": "Years & Years - King (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IofYeQY1Ixk",
    "duration": 3.87
  },
  {
    "id": 1279,
    "title": "Shakira and Carlinhos Brown - La La La (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eO3m7GK9DKU",
    "duration": 3.62
  },
  {
    "id": 1280,
    "title": "Melanie Martinez - Wheels On The Bus (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r5Rz2G_41ek",
    "duration": 3.92
  },
  {
    "id": 1281,
    "title": "Surfaces - Sunday Best (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UktjRa86VE8",
    "duration": 3.05
  },
  {
    "id": 1282,
    "title": "Nicki Minaj ft. Lil Wayne - High School (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o-ZkwckHNbY",
    "duration": 4.0
  },
  {
    "id": 1283,
    "title": "Noah Cyrus ft. XXXTentacion - Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xGdjxcmlbAc",
    "duration": 3.35
  },
  {
    "id": 1284,
    "title": "Calum Scott - No Matter What (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M9ZG-Ndcj3Q",
    "duration": 4.17
  },
  {
    "id": 1285,
    "title": "Taylor Swift - Out Of The Woods (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GQ6URuvL8R8",
    "duration": 4.22
  },
  {
    "id": 1286,
    "title": "The Greatest Showman - Come Alive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O1CB--Snlnw",
    "duration": 4.08
  },
  {
    "id": 1287,
    "title": "Jessie Reyez - FIGURES (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MmKRqsrWZ5o",
    "duration": 4.33
  },
  {
    "id": 1288,
    "title": "BLACKPINK - Pink Venom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MmkJtZ83yl4",
    "duration": 3.32
  },
  {
    "id": 1289,
    "title": "Kendrick Lamar, SZA - All The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OYINqt1ehqM",
    "duration": 4.12
  },
  {
    "id": 1290,
    "title": "Daddy Yankee & Snow - Con Calma (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WOHxOEcE_jU",
    "duration": 3.52
  },
  {
    "id": 1291,
    "title": "Nessa Barrett - Pain (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LMoBpF6UlOI",
    "duration": 3.78
  },
  {
    "id": 1292,
    "title": "Kane Brown - Heaven (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KRU8GuWAzkE",
    "duration": 3.33
  },
  {
    "id": 1293,
    "title": "Morgan Wallen - Whiskey Glasses (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MOu_g-vHhks",
    "duration": 4.15
  },
  {
    "id": 1294,
    "title": "Molly Kate Kestner - Prom Queen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BcuDoxTkx_g",
    "duration": 4.42
  },
  {
    "id": 1295,
    "title": "Little Mix - Move (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YMbxFZYOhig",
    "duration": 4.02
  },
  {
    "id": 1296,
    "title": "5 Seconds Of Summer - Heartbreak Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uIJUBnf3sRU",
    "duration": 3.67
  },
  {
    "id": 1297,
    "title": "Sleeping At Last - Turning Page (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CxW7tbIN1UY",
    "duration": 4.42
  },
  {
    "id": 1298,
    "title": "Dove Cameron - If Only (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=-XRt9aEwAy0",
    "duration": 2.52
  },
  {
    "id": 1299,
    "title": "Dean Lewis - How Do I Say Goodbye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_jRP_Ss0Uog",
    "duration": 2.98
  },
  {
    "id": 1300,
    "title": "Taylor Swift - Paper Rings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1y5xNy3pmtk",
    "duration": 4.88
  },
  {
    "id": 1301,
    "title": "Taylor Swift - Mine (POP Mix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-h2hna4fpbA",
    "duration": 4.12
  },
  {
    "id": 1302,
    "title": "The Beatles - Twist And Shout (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GLm3ZryQxYg",
    "duration": 2.68
  },
  {
    "id": 1303,
    "title": "Nicki Minaj ft. Skylar Grey - Bed Of Lies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oH9M-ZgctGk",
    "duration": 4.88
  },
  {
    "id": 1304,
    "title": "The Beatles - Yellow Submarine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zvDMgPt5Bxo",
    "duration": 3.33
  },
  {
    "id": 1305,
    "title": "Ariana Grande, Social House - boyfriend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9fmy-Ud3_Tw",
    "duration": 3.4
  },
  {
    "id": 1306,
    "title": "Toploader - Dancing In The Moonlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1HO4TlUBjG4",
    "duration": 4.18
  },
  {
    "id": 1307,
    "title": "Boys Like Girls, Taylor Swift - Two Is Better Than One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2h60KkVm3HA",
    "duration": 4.48
  },
  {
    "id": 1308,
    "title": "Niall Horan - Too Much To Ask (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kMVE-he0wMw",
    "duration": 4.07
  },
  {
    "id": 1309,
    "title": "Ariana Grande - Moonlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=E12qDSPoQwk",
    "duration": 3.73
  },
  {
    "id": 1310,
    "title": "Echosmith - Bright (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a-vN72B0784",
    "duration": 3.88
  },
  {
    "id": 1311,
    "title": "Melanie Martinez - Milk and Cookies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TKB4VcdWiQc",
    "duration": 3.97
  },
  {
    "id": 1312,
    "title": "Ali Gatie - Moonlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BGSld7oUEWo",
    "duration": 4.25
  },
  {
    "id": 1313,
    "title": "CNCO, Little Mix - Reggaet\u00f3n Lento (Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pwAyFz9A_Kc",
    "duration": 3.45
  },
  {
    "id": 1314,
    "title": "Labrinth, Zendaya - All For Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CAXwDktQCng",
    "duration": 3.52
  },
  {
    "id": 1315,
    "title": "One Direction - Midnight Memories (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J-cx31kkMUA",
    "duration": 3.32
  },
  {
    "id": 1316,
    "title": "One Direction - Fool's Gold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Xj5vxhFRR2Q",
    "duration": 3.83
  },
  {
    "id": 1317,
    "title": "Melanie Martinez - Teacher's Pet (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fHUcBRL1D2I",
    "duration": 4.27
  },
  {
    "id": 1318,
    "title": "Bazzi ft. Camila Cabello - Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2-qAlxGg3iQ",
    "duration": 3.22
  },
  {
    "id": 1319,
    "title": "Michael Bubl\u00e9 - Holly Jolly Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0Lkr7R8LBmo",
    "duration": 2.52
  },
  {
    "id": 1320,
    "title": "Grace VanderWaal - Clay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wjooeVt6nBQ",
    "duration": 3.85
  },
  {
    "id": 1321,
    "title": "Sara Bareilles - Love Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XUpl5BYB8Lg",
    "duration": 4.08
  },
  {
    "id": 1322,
    "title": "Troy & Gabriella - What I've Been Looking For (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VGNUm-ttsNE",
    "duration": 1.63
  },
  {
    "id": 1323,
    "title": "Fetty Wap ft. Monty - My Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_2DQti03fQ0",
    "duration": 3.9
  },
  {
    "id": 1324,
    "title": "Lewis Capaldi - Forever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0J5cvU7g85k",
    "duration": 3.93
  },
  {
    "id": 1325,
    "title": "Demi Lovato - Neon Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5p63JJ7uH6k",
    "duration": 4.3
  },
  {
    "id": 1326,
    "title": "The Nightmare Before Christmas - This Is Halloween (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jAXwHoRExSM",
    "duration": 3.53
  },
  {
    "id": 1327,
    "title": "Taylor Swift - Daylight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=02Hct4xaNfA",
    "duration": 5.08
  },
  {
    "id": 1328,
    "title": "Ray Parker Jr. - Ghostbusters (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c5BjapvUndQ",
    "duration": 4.33
  },
  {
    "id": 1329,
    "title": "Ariana Grande - Be Alright (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tdvAUAHlE-4",
    "duration": 3.52
  },
  {
    "id": 1330,
    "title": "Tove Lo - Talking Body (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zQbJoIuPUHE",
    "duration": 4.27
  },
  {
    "id": 1331,
    "title": "Kygo ft. Parson James - Stole The Show (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tZKBzoBcytQ",
    "duration": 4.22
  },
  {
    "id": 1332,
    "title": "The Ronettes - Sleigh Ride (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zwBag5vE6XY",
    "duration": 3.18
  },
  {
    "id": 1333,
    "title": "Lizzo - About Damn Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FcClAz9eT0s",
    "duration": 3.48
  },
  {
    "id": 1334,
    "title": "BTS - Stay Gold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=djEvsJGVkI8",
    "duration": 4.47
  },
  {
    "id": 1335,
    "title": "THE ANXIETY, Tyler Cole, WILLOW - Meet Me At Our Spot (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ehwnuae2QHw",
    "duration": 2.93
  },
  {
    "id": 1336,
    "title": "Eric Carmen - Hungry Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-izZYpzLTzI",
    "duration": 4.67
  },
  {
    "id": 1337,
    "title": "Ed Sheeran - Afterglow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=96qEU_2qfkE",
    "duration": 3.52
  },
  {
    "id": 1338,
    "title": "Cher - If I Could Turn Back Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yBwqQxVXt1o",
    "duration": 4.22
  },
  {
    "id": 1339,
    "title": "Post Malone - Better Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DtTFu9qgX38",
    "duration": 3.72
  },
  {
    "id": 1340,
    "title": "Ed Sheeran - I'm A Mess (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g_SdqrUolO4",
    "duration": 4.52
  },
  {
    "id": 1341,
    "title": "Miley Cyrus - Midnight Sky (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UPgvgTgrVvk",
    "duration": 4.08
  },
  {
    "id": 1342,
    "title": "LeAnn Rimes - Can't Fight The Moonlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FTlUW-dhv48",
    "duration": 3.92
  },
  {
    "id": 1343,
    "title": "Jordin Sparks ft Chris Brown - No Air (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0y0zKN06RNg",
    "duration": 4.67
  },
  {
    "id": 1344,
    "title": "Em Beihold - Numb Little Bug (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n8PEHTYHrCI",
    "duration": 3.1
  },
  {
    "id": 1345,
    "title": "Dan + Shay - Speechless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QvEhGdkGehE",
    "duration": 3.9
  },
  {
    "id": 1346,
    "title": "Melanie Martinez - Training Wheels (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3rIbAe4daG0",
    "duration": 4.05
  },
  {
    "id": 1347,
    "title": "Amin\u00e9 - Caroline (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aLA0hnx2UU8",
    "duration": 3.68
  },
  {
    "id": 1348,
    "title": "One Direction - Where Do Broken Hearts Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i8_pkJv6pzs",
    "duration": 4.12
  },
  {
    "id": 1349,
    "title": "Khalid - Talk (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lE7thk4N1HM",
    "duration": 3.4
  },
  {
    "id": 1350,
    "title": "Melanie Martinez - Nurse's Office (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GsqtDObdxAU",
    "duration": 3.28
  },
  {
    "id": 1351,
    "title": "CaptainSparklez - Revenge (Minecraft Parody) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PvkXaU9SuNs",
    "duration": 4.02
  },
  {
    "id": 1352,
    "title": "Bebe Rexha - I Got You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T_gk8kaI45s",
    "duration": 3.87
  },
  {
    "id": 1353,
    "title": "Martin Garrix & David Guetta - So Far Away (ft. Jamie Scott & Romy Dya) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Kd1oCn0MPLY",
    "duration": 3.42
  },
  {
    "id": 1354,
    "title": "Bad Wolves - Zombie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1rLOrijkrNs",
    "duration": 4.7
  },
  {
    "id": 1355,
    "title": "Panic! At The Disco - This Is Gospel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g5Ny-QaoZ_A",
    "duration": 3.77
  },
  {
    "id": 1356,
    "title": "Kelly Clarkson - Heartbeat Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yLtefnGc2Pc",
    "duration": 3.75
  },
  {
    "id": 1357,
    "title": "Ronan Keating - If Tomorrow Never Comes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=thLuW_0snZ0",
    "duration": 3.88
  },
  {
    "id": 1358,
    "title": "G.R.L. - Ugly Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jlui69ARZEE",
    "duration": 3.6
  },
  {
    "id": 1359,
    "title": "HELLO CHRISTMAS -  Christmas Without You (Official Music Video)",
    "video_url": "https://www.youtube.com/watch?v=6cGnHyOxPzg",
    "duration": 4.75
  },
  {
    "id": 1360,
    "title": "Ben&Ben - The Ones We Once Loved (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EDAREI4lz4s",
    "duration": 4.65
  },
  {
    "id": 1361,
    "title": "Omarion ft. Chris Brown & Jhene Aiko - Post To Be (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=beQuJaiWd78",
    "duration": 4.15
  },
  {
    "id": 1362,
    "title": "Mother Mother - Burning Pile (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UDVnbZeah7s",
    "duration": 4.47
  },
  {
    "id": 1363,
    "title": "Beyonc\u00e9 - Sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3tANSV2LglQ",
    "duration": 4.48
  },
  {
    "id": 1364,
    "title": "Taylor Swift - Call It What You Want (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NH_fxTyZT_Y",
    "duration": 3.62
  },
  {
    "id": 1365,
    "title": "Ariana Grande ft. Big Sean - Right There (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Im0f_dRnYVU",
    "duration": 4.42
  },
  {
    "id": 1366,
    "title": "blackbear - do re mi (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-gs_SZM2lRk",
    "duration": 3.65
  },
  {
    "id": 1367,
    "title": "Lorde - Green Light (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tR_cx_9N4CI",
    "duration": 4.35
  },
  {
    "id": 1368,
    "title": "Frankie Goes To Hollywood - The Power Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UA_JT3dg6zY",
    "duration": 5.68
  },
  {
    "id": 1369,
    "title": "KAROL G, Shakira - TQG (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oS5uiRwQL64",
    "duration": 3.35
  },
  {
    "id": 1370,
    "title": "Little Mix - No More Sad Songs (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GL7FQZcQtjc",
    "duration": 3.8
  },
  {
    "id": 1371,
    "title": "The Vamps - Can We Dance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GB2q8fg-ZtI",
    "duration": 3.97
  },
  {
    "id": 1372,
    "title": "Drake and Majid Jordan - Hold On, We're Going Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mdizaRgRTXQ",
    "duration": 3.85
  },
  {
    "id": 1373,
    "title": "Frozen 2 - When I Am Older (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-yukAvBxOrQ",
    "duration": 2.25
  },
  {
    "id": 1374,
    "title": "Kelsea Ballerini - Peter Pan (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CmmX9QOCyRg",
    "duration": 3.82
  },
  {
    "id": 1375,
    "title": "David Archuleta - Crush (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HXlop0dffyM",
    "duration": 3.83
  },
  {
    "id": 1376,
    "title": "One Direction - Love You Goodbye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=G-5BbdBqT8I",
    "duration": 3.9
  },
  {
    "id": 1377,
    "title": "Coldplay - Adventure Of A Lifetime (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=svN1O_9vYVs",
    "duration": 5.0
  },
  {
    "id": 1378,
    "title": "Olivia Rodrigo, Julia Lester - Wondering (Ashlyn & Nini Piano Version | HSMTMTS) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dVsuQFaTPl8",
    "duration": 2.95
  },
  {
    "id": 1379,
    "title": "ZAYN - iT's YoU (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ImAt_CFLcgc",
    "duration": 4.47
  },
  {
    "id": 1380,
    "title": "Andy Grammer - Honey, I'm Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nevamPafdFA",
    "duration": 3.77
  },
  {
    "id": 1381,
    "title": "Sabrina Carpenter ft. Sofia Carson - Wildside (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yAoJEd0uZUc",
    "duration": 3.68
  },
  {
    "id": 1382,
    "title": "Little Mix - Change Your Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zepWe58eKVE",
    "duration": 3.72
  },
  {
    "id": 1383,
    "title": "Jesse McCartney - Beautiful Soul (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tfy2VidpjYU",
    "duration": 3.75
  },
  {
    "id": 1384,
    "title": "5 Seconds Of Summer - Voodoo Doll (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fOMmJWmKkBk",
    "duration": 3.65
  },
  {
    "id": 1385,
    "title": "Sofia Carson - Rotten To The Core (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WIwsFQxvwOY",
    "duration": 3.62
  },
  {
    "id": 1386,
    "title": "OneRepublic - Secrets (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i20isdqjJMY",
    "duration": 4.18
  },
  {
    "id": 1387,
    "title": "NF - The Search (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sl0wAxXJChs",
    "duration": 3.53
  },
  {
    "id": 1388,
    "title": "Ant Saunders - Yellow Hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IuvTnwVhBlg",
    "duration": 4.1
  },
  {
    "id": 1389,
    "title": "Camila Cabello - I Have Questions (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HivnrVR-tbA",
    "duration": 4.02
  },
  {
    "id": 1390,
    "title": "The Weeknd - In Your Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FrnMqc4pqQo",
    "duration": 4.12
  },
  {
    "id": 1391,
    "title": "Justin Bieber - Life Is Worth Living (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DQzdMorZe04",
    "duration": 4.52
  },
  {
    "id": 1392,
    "title": "Demi Lovato - You Don't Do It For Me Anymore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FirUcc4mN9M",
    "duration": 3.52
  },
  {
    "id": 1393,
    "title": "Taylor Swift - Wonderland (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AvSdV7nh4J4",
    "duration": 4.42
  },
  {
    "id": 1394,
    "title": "Lilly Wood and Robin Schulz - Prayer In C (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K-riKCPdhVc",
    "duration": 3.52
  },
  {
    "id": 1395,
    "title": "Ellie Goulding - On My Mind (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KlrXzBroM3s",
    "duration": 4.02
  },
  {
    "id": 1396,
    "title": "Tori Kelly - Should've Been Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ORtbESA3GqQ",
    "duration": 3.6
  },
  {
    "id": 1397,
    "title": "One Direction - Stockholm Syndrome (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LcBlxXqFUJk",
    "duration": 4.05
  },
  {
    "id": 1398,
    "title": "Marina And The Diamonds - How To Be A Heartbreaker (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6SyizvBTUvs",
    "duration": 4.03
  },
  {
    "id": 1399,
    "title": "BENEE - Supalonely ft. Gus Dapperton (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qRUVtrhhhQE",
    "duration": 4.02
  },
  {
    "id": 1400,
    "title": "Lukas Graham - Mama Said (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pUso35emJpU",
    "duration": 3.97
  },
  {
    "id": 1401,
    "title": "One Direction - Through The Dark (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MMIb5xQHO8s",
    "duration": 4.0
  },
  {
    "id": 1402,
    "title": "Evanescence - Going Under (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hmgPwlcQHHg",
    "duration": 4.07
  },
  {
    "id": 1403,
    "title": "Taylor Swift - Delicate (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MGf7KlgMTkE",
    "duration": 4.07
  },
  {
    "id": 1404,
    "title": "Billy Joel - Uptown Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xrYUNv_qRVg",
    "duration": 3.38
  },
  {
    "id": 1405,
    "title": "One Direction - They Don't Know About Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JWnw-YyIcSY",
    "duration": 3.58
  },
  {
    "id": 1406,
    "title": "Little Mix ft. Charlie Puth - Oops (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HHa6BtZow0E",
    "duration": 3.77
  },
  {
    "id": 1407,
    "title": "Justin Bieber - Anyone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=--IfjfyJiWM",
    "duration": 3.52
  },
  {
    "id": 1408,
    "title": "Billy Ocean - Suddenly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8ztf8RW-LGY",
    "duration": 4.2
  },
  {
    "id": 1409,
    "title": "Panic! At The Disco - Victorious (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=032UtZ26LPs",
    "duration": 3.67
  },
  {
    "id": 1410,
    "title": "Dionne Warwick - I'll Never Love This Way Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UYrREAAiH7A",
    "duration": 3.88
  },
  {
    "id": 1411,
    "title": "Why Don't We - Hooked (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BHGqphQnFL8",
    "duration": 3.82
  },
  {
    "id": 1412,
    "title": "Mr. Probz and Robin Schulz - Waves (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bTRwtUrggKs",
    "duration": 4.13
  },
  {
    "id": 1413,
    "title": "Ma\u030aneskin - THE LONELIEST (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MguYlusfy4M",
    "duration": 4.32
  },
  {
    "id": 1414,
    "title": "twenty one pilots - Chlorine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wvwCi09Q4kk",
    "duration": 5.27
  },
  {
    "id": 1415,
    "title": "Taylor Swift - New Romantics (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GUC5suaH3Gk",
    "duration": 4.2
  },
  {
    "id": 1416,
    "title": "Julie and The Phantoms - Stand Tall (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OrPt4S3nSQY",
    "duration": 3.87
  },
  {
    "id": 1417,
    "title": "Dove Cameron - Boyfriend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FJ3panlVZlI",
    "duration": 2.92
  },
  {
    "id": 1418,
    "title": "Ed Sheeran feat. Khalid - Beautiful People (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dDHBbzdes8k",
    "duration": 3.53
  },
  {
    "id": 1419,
    "title": "Ava Max - Salt (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ToCA0Blmd2U",
    "duration": 3.45
  },
  {
    "id": 1420,
    "title": "The Lumineers - Ho Hey (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=myisMOpHKso",
    "duration": 2.92
  },
  {
    "id": 1421,
    "title": "Lana Del Rey - Norman f*cking Rockwell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hq8nGEgAx04",
    "duration": 4.27
  },
  {
    "id": 1422,
    "title": "Shawn Mendes - Mercy (Acoustic) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2n8UwVOeCrg",
    "duration": 3.93
  },
  {
    "id": 1423,
    "title": "T-Wayne - Nasty Freestyle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZWYBkg2vOwM",
    "duration": 2.73
  },
  {
    "id": 1424,
    "title": "CHROMANCE - Wrap Me In Plastic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Pt9FG_IpbZg",
    "duration": 3.77
  },
  {
    "id": 1425,
    "title": "Camila Cabello - Liar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6WJ_GheHMZc",
    "duration": 3.82
  },
  {
    "id": 1426,
    "title": "Ed Sheeran - One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PNkvcuj7m2E",
    "duration": 4.77
  },
  {
    "id": 1427,
    "title": "Jason Derulo - Trumpets (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OQVBlJEW2lU",
    "duration": 3.82
  },
  {
    "id": 1428,
    "title": "Olivia O'Brien - hate u love u (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5J60o-5pWkQ",
    "duration": 3.37
  },
  {
    "id": 1429,
    "title": "NLE Choppa ft. Blueface - Shotta Flow (Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hbFLCA3K-tc",
    "duration": 3.13
  },
  {
    "id": 1430,
    "title": "Julie and The Phantoms - Bright (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n-AjHqEnNYo",
    "duration": 3.5
  },
  {
    "id": 1431,
    "title": "Rihanna - Hate That I Love You ft. Ne-Yo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6UYBrCmALcs",
    "duration": 4.1
  },
  {
    "id": 1432,
    "title": "Jordan Suaste - Body (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LDf-njt77AY",
    "duration": 3.83
  },
  {
    "id": 1433,
    "title": "Anna Clendening - To My Parents (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Cr08cm7sHyM",
    "duration": 4.47
  },
  {
    "id": 1434,
    "title": "Katy Perry ft. Migos - Bon App\u00e9tit (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=psQg1L3scRM",
    "duration": 4.12
  },
  {
    "id": 1435,
    "title": "The Weeknd - Reminder (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IRRgg8ItrfI",
    "duration": 4.27
  },
  {
    "id": 1436,
    "title": "Claire Rosinkranz - Backyard Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_owvkxtn6tU",
    "duration": 2.32
  },
  {
    "id": 1437,
    "title": "Andy Grammer - Fresh Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gGOiwfXuw2M",
    "duration": 3.98
  },
  {
    "id": 1438,
    "title": "Chris Brown ft. Drake - No Guidance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NAH3IYHp770",
    "duration": 4.33
  },
  {
    "id": 1439,
    "title": "anees - sun and moon (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CuE_SEJpRNg",
    "duration": 2.88
  },
  {
    "id": 1440,
    "title": "Disney Descendants - Set It Off (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ct9fhfcg5UA",
    "duration": 3.47
  },
  {
    "id": 1441,
    "title": "Lana Del Rey - High By The Beach (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rx3YgEf4mIQ",
    "duration": 4.77
  },
  {
    "id": 1442,
    "title": "Hailee Steinfeld - Love Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-9U2X886A0E",
    "duration": 4.05
  },
  {
    "id": 1443,
    "title": "Pink - Raise Your Glass (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Noenqxgd7T0",
    "duration": 3.73
  },
  {
    "id": 1444,
    "title": "Ashnikko - Daisy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4LbjyKPslWU",
    "duration": 2.73
  },
  {
    "id": 1445,
    "title": "Macklemore & Ryan Lewis - Downtown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V8TGcqNkNOY",
    "duration": 5.48
  },
  {
    "id": 1446,
    "title": "Melanie Martinez - The Principal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OLqVb3QO_ck",
    "duration": 3.33
  },
  {
    "id": 1447,
    "title": "Little Mix ft. Nicki Minaj - Woman Like Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=axfrEvfXrFI",
    "duration": 4.2
  },
  {
    "id": 1448,
    "title": "Zendaya - Replay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XZzfLl7M1oE",
    "duration": 3.82
  },
  {
    "id": 1449,
    "title": "Zombies 2 - Call To The Wild (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u1CvO6dL0BU",
    "duration": 2.93
  },
  {
    "id": 1450,
    "title": "Sabrina Carpenter - Too Young (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jFS32d6mcvw",
    "duration": 4.68
  },
  {
    "id": 1451,
    "title": "Descendants 3 - Break This Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nqIRN0j-iuI",
    "duration": 3.78
  },
  {
    "id": 1452,
    "title": "5 Seconds Of Summer - Beside You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O0Jq_xygFS0",
    "duration": 3.98
  },
  {
    "id": 1453,
    "title": "Gabby Barrett - I Hope (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fhqnRiuuP5E",
    "duration": 3.72
  },
  {
    "id": 1454,
    "title": "Olivia Rodrigo, Joshua Bassett - Even When/The Best Part (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ibgU0umViYs",
    "duration": 2.13
  },
  {
    "id": 1455,
    "title": "Zendaya - Neverland (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YkcrN24JyKk",
    "duration": 4.25
  },
  {
    "id": 1456,
    "title": "Christina Perri - A Thousand Years (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=QMQl1LyzcAE",
    "duration": 4.83
  },
  {
    "id": 1457,
    "title": "George Michael - I Can't Make You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=F3mc9sDZTO8",
    "duration": 5.7
  },
  {
    "id": 1458,
    "title": "Tori Kelly - Hollow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GzG3Np1DdSY",
    "duration": 3.88
  },
  {
    "id": 1459,
    "title": "Lizzo - Juice (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VmRvV3GIluU",
    "duration": 3.65
  },
  {
    "id": 1460,
    "title": "Ellie Goulding - Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FEmEJ-N4QV4",
    "duration": 3.92
  },
  {
    "id": 1461,
    "title": "Taylor Swift - Love Story (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=jQe37boEHkQ",
    "duration": 4.83
  },
  {
    "id": 1462,
    "title": "Christina Perri - Arms (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8oKjlIz-oFA",
    "duration": 4.73
  },
  {
    "id": 1463,
    "title": "OneRepublic - Love Runs Out (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Oo1qfMufvx4",
    "duration": 4.07
  },
  {
    "id": 1464,
    "title": "IU ft. SUGA - eight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sJ07Alrg_M0",
    "duration": 3.23
  },
  {
    "id": 1465,
    "title": "Hailee Steinfeld & Alesso (ft. Florida Georgia Line & watt) - Let Me Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kSN0AiZiveM",
    "duration": 3.33
  },
  {
    "id": 1466,
    "title": "Justin Bieber, BloodPop\u00ae - Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7_2bv5eN1oA",
    "duration": 3.53
  },
  {
    "id": 1467,
    "title": "KAROL G, Nicki Minaj - Tusa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=--mHajGPFCY",
    "duration": 3.62
  },
  {
    "id": 1468,
    "title": "Wham! - Wake Me Up Before You Go-Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rGyX_pchRuA",
    "duration": 4.38
  },
  {
    "id": 1469,
    "title": "Little Mix - F.U. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PpcOtzW0s40",
    "duration": 4.4
  },
  {
    "id": 1470,
    "title": "Nick Jonas ft. Tove Lo - Close (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tCmltWCah6s",
    "duration": 4.45
  },
  {
    "id": 1471,
    "title": "Eva Cassidy - Fields Of Gold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mgObZN7fZPU",
    "duration": 5.17
  },
  {
    "id": 1472,
    "title": "Imagine Dragons - On Top Of The World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Rvo_tZPcC1A",
    "duration": 3.53
  },
  {
    "id": 1473,
    "title": "Imagine Dragons ft. Elisa -  Birds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Mjc9QjIrlb4",
    "duration": 3.8
  },
  {
    "id": 1474,
    "title": "Post Malone - I Fall Apart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eilM4YHBrS0",
    "duration": 4.13
  },
  {
    "id": 1475,
    "title": "Kent Jones - Don't Mind (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rfCgDUZCzHo",
    "duration": 3.83
  },
  {
    "id": 1476,
    "title": "Lil Peep & XXXTENTACION - Falling Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XGO_qLrJbwc",
    "duration": 3.55
  },
  {
    "id": 1477,
    "title": "Katy Perry - Birthday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IzyvJ6XwPN0",
    "duration": 3.97
  },
  {
    "id": 1478,
    "title": "Marvin Gaye - Sexual Healing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BAxsoTBR2HA",
    "duration": 4.73
  },
  {
    "id": 1479,
    "title": "BANNERS - Someone To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M2xFPhFTu6I",
    "duration": 4.0
  },
  {
    "id": 1480,
    "title": "Taylor Swift - I Know Places (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1CR59qSi7Ic",
    "duration": 3.52
  },
  {
    "id": 1481,
    "title": "Little Mix - DNA (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MpS5i1pCwZE",
    "duration": 4.53
  },
  {
    "id": 1482,
    "title": "*NSYNC - It's Gonna Be Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-HgYAkSRt6c",
    "duration": 3.55
  },
  {
    "id": 1483,
    "title": "Five Nights At Freddy's 3 Song - Die In A Fire - The Living Tombstone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wYRncDCwCoE",
    "duration": 3.62
  },
  {
    "id": 1484,
    "title": "Alec Benjamin - Water Fountain (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uUqZyQ9JQNY",
    "duration": 3.78
  },
  {
    "id": 1485,
    "title": "Taylor Swift - London Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=buJNHDfiS9U",
    "duration": 3.52
  },
  {
    "id": 1486,
    "title": "Ellise  - 911 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3ZffbUtgzjc",
    "duration": 3.38
  },
  {
    "id": 1487,
    "title": "Khalid - Better (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S5PtzYrNGaU",
    "duration": 4.1
  },
  {
    "id": 1488,
    "title": "Ce\u0301line Dion - The Power of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t6Ydvm0g_4w",
    "duration": 4.97
  },
  {
    "id": 1489,
    "title": "Ed Sheeran - Save Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sp824istfKk",
    "duration": 4.45
  },
  {
    "id": 1490,
    "title": "4*TOWN - Nobody Like U (From Turning Red) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sCJIckJN5Zs",
    "duration": 3.0
  },
  {
    "id": 1491,
    "title": "NF - Lie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AcqnT-ci4io",
    "duration": 3.75
  },
  {
    "id": 1492,
    "title": "Calvin Harris and John Newman - Blame (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SI2E05Dad9M",
    "duration": 3.75
  },
  {
    "id": 1493,
    "title": "Kygo - Firestone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xdX_Bcu-RZ4",
    "duration": 5.08
  },
  {
    "id": 1494,
    "title": "Usher - Climax (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zzpeqH9wzeo",
    "duration": 4.18
  },
  {
    "id": 1495,
    "title": "Nicky Youre, dazy - Sunroof (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Xr4bbASQs4I",
    "duration": 3.07
  },
  {
    "id": 1496,
    "title": "Zara Larsson - She's Not Me (Pt. 1 and 2) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ypOsRYE66FM",
    "duration": 5.62
  },
  {
    "id": 1497,
    "title": "Ariana Grande ft. Lil Wayne - Let Me Love You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QDgmAFpOUIg",
    "duration": 4.28
  },
  {
    "id": 1498,
    "title": "Maroon 5 ft. SZA - What Lovers Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fX4blT-SnLw",
    "duration": 3.52
  },
  {
    "id": 1499,
    "title": "JoJo - Leave (Get Out) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Vs20pLrCJXA",
    "duration": 4.7
  },
  {
    "id": 1500,
    "title": "Cheat Codes ft. Demi Lovato - No Promises (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=88DkSggcq8s",
    "duration": 4.15
  },
  {
    "id": 1501,
    "title": "Billie Eilish - when the party's over (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=UK1jmU_JBXs",
    "duration": 3.45
  },
  {
    "id": 1502,
    "title": "Fleetwood Mac - Everywhere (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A0lUjkzeq5o",
    "duration": 4.38
  },
  {
    "id": 1503,
    "title": "Luke Combs - When It Rains It Pours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wz3UbGHDtuU",
    "duration": 4.52
  },
  {
    "id": 1504,
    "title": "Anders Lystell - Faster Car (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wPPLQpRu7nA",
    "duration": 4.33
  },
  {
    "id": 1505,
    "title": "Ariana Grande - ghostin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9QvqYILRi_w",
    "duration": 4.67
  },
  {
    "id": 1506,
    "title": "Halsey - Castle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z1hGda8mftU",
    "duration": 5.17
  },
  {
    "id": 1507,
    "title": "Aurora - Half The World Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yCRPlMr9v2c",
    "duration": 3.87
  },
  {
    "id": 1508,
    "title": "Taylor Swift - Miss Americana & The Heartbreak Prince (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZVvK0m0aHec",
    "duration": 4.15
  },
  {
    "id": 1509,
    "title": "Lauv, LANY - Mean It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P5C6bLyzN3s",
    "duration": 4.25
  },
  {
    "id": 1510,
    "title": "Rihanna - Disturbia (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vDfV_n-HiNA",
    "duration": 4.15
  },
  {
    "id": 1511,
    "title": "The Vamps - Wild Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3Jyg6SD-UVo",
    "duration": 3.5
  },
  {
    "id": 1512,
    "title": "Pitbull and John Ryan - Fireball (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sd3UJLIxyas",
    "duration": 4.27
  },
  {
    "id": 1513,
    "title": "StaySolidRocky - Party Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UYfzTy3ELAQ",
    "duration": 2.83
  },
  {
    "id": 1514,
    "title": "Steve Aoki feat. BTS - Waste It On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2PMLfo08UH4",
    "duration": 3.48
  },
  {
    "id": 1515,
    "title": "Eva Cassidy - Over The Rainbow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IzDq4hWPpBU",
    "duration": 5.33
  },
  {
    "id": 1516,
    "title": "Maroon 5 ft. Future - Cold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=woe2zIokb9Q",
    "duration": 4.48
  },
  {
    "id": 1517,
    "title": "Ellie Goulding ft. Juice WRLD  - Hate Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XbammamEoZM",
    "duration": 3.57
  },
  {
    "id": 1518,
    "title": "Juris - Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=G6aa9W_zWkM",
    "duration": 4.32
  },
  {
    "id": 1519,
    "title": "Jeremy Zucker, Chelsea Cutler - you were good to me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-JH_xJffSBU",
    "duration": 3.92
  },
  {
    "id": 1520,
    "title": "Harry Styles - Lights Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Oo0PGau7Utk",
    "duration": 3.22
  },
  {
    "id": 1521,
    "title": "Joel Adams - Please Don't Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VBo85-_9rL0",
    "duration": 3.88
  },
  {
    "id": 1522,
    "title": "Meghan Trainor - I'll Be Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yQAuGCd1PmU",
    "duration": 4.33
  },
  {
    "id": 1523,
    "title": "Sam Smith - One Last Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Pfxq1_j23gI",
    "duration": 3.6
  },
  {
    "id": 1524,
    "title": "Tina Turner - What's Love Got to Do with It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R23iFLtZzmY",
    "duration": 3.98
  },
  {
    "id": 1525,
    "title": "Staind - It's Been Awhile (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fMMCdBJS_Bs",
    "duration": 4.83
  },
  {
    "id": 1526,
    "title": "Matthew Wilder - Break My Stride (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t6biBJh2AAs",
    "duration": 3.35
  },
  {
    "id": 1527,
    "title": "Bill Withers - Lovely Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9kkTrNh1N2A",
    "duration": 4.52
  },
  {
    "id": 1528,
    "title": "David Guetta ft. Usher  - Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b5MY6rVwqeo",
    "duration": 3.88
  },
  {
    "id": 1529,
    "title": "Alessia Cara - Out Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=orCaFpnXIVk",
    "duration": 4.07
  },
  {
    "id": 1530,
    "title": "Alessia Cara - Wild Things (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=W-TlyOS38gs",
    "duration": 3.67
  },
  {
    "id": 1531,
    "title": "Mabel - Don't Call Me Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hO9feFj3F8M",
    "duration": 3.27
  },
  {
    "id": 1532,
    "title": "Ruel - Painkiller (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GjHYNA1-W3A",
    "duration": 3.85
  },
  {
    "id": 1533,
    "title": "Charlie Puth ft. Kehlani - Done For Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I6DTvp194lg",
    "duration": 3.27
  },
  {
    "id": 1534,
    "title": "Ariana Grande - Greedy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K7lc7NrJ-3g",
    "duration": 4.18
  },
  {
    "id": 1535,
    "title": "Ariana Grande  - bloodline (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BFsCLt47RSc",
    "duration": 3.77
  },
  {
    "id": 1536,
    "title": "Post Malone - White Iverson (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bacP3MBLgBw",
    "duration": 4.78
  },
  {
    "id": 1537,
    "title": "The Pussycat Dolls - Hush Hush; Hush Hush (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0Sp1FNLtODA",
    "duration": 4.43
  },
  {
    "id": 1538,
    "title": "Rae Sremmurd - Swang (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=84nTyGKQnbg",
    "duration": 3.85
  },
  {
    "id": 1539,
    "title": "Ce\u0301line Dion - My Heart Will Go On (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=J10X301khwY",
    "duration": 4.72
  },
  {
    "id": 1540,
    "title": "Robyn - Dancing On My Own (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ch_xInCwiF4",
    "duration": 5.28
  },
  {
    "id": 1541,
    "title": "Ella Henderson - Missed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R7doV2gITnk",
    "duration": 3.6
  },
  {
    "id": 1542,
    "title": "Katy Perry - This Is How We Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vLMMYprCNVk",
    "duration": 3.7
  },
  {
    "id": 1543,
    "title": "TLC - Waterfalls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MBfYXMw-NvI",
    "duration": 4.88
  },
  {
    "id": 1544,
    "title": "DripReport - Skechers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AQG3h3uYw0k",
    "duration": 2.03
  },
  {
    "id": 1545,
    "title": "Melanie Martinez - Lunchbox Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zilK3bl96W4",
    "duration": 3.17
  },
  {
    "id": 1546,
    "title": "Mother Mother - Hayloft (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R4JPJWkZtZk",
    "duration": 3.47
  },
  {
    "id": 1547,
    "title": "James Blunt - Bonfire Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JsPFdlBTSx0",
    "duration": 4.23
  },
  {
    "id": 1548,
    "title": "Shawn Mendes - Aftertaste (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RCEThvfFhOE",
    "duration": 3.43
  },
  {
    "id": 1549,
    "title": "Sabrina Carpenter - On Purpose (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BXJ_0Jrr74Y",
    "duration": 4.55
  },
  {
    "id": 1550,
    "title": "Halsey - Ghost (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nHGyE7LaRbw",
    "duration": 2.88
  },
  {
    "id": 1551,
    "title": "Camila Cabello - First Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rq98wWr9pFM",
    "duration": 4.15
  },
  {
    "id": 1552,
    "title": "Drake - Started From The Bottom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tS91oZiNaN8",
    "duration": 3.07
  },
  {
    "id": 1553,
    "title": "Noah Cyrus - Lonely (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ETsFmFZz208",
    "duration": 2.77
  },
  {
    "id": 1554,
    "title": "Lady Gaga, Bradley Cooper - Shallow (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=PD5sXfNFwhw",
    "duration": 4.03
  },
  {
    "id": 1555,
    "title": "Christina Aguilera - Reflection (2020) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7SYpPYkLY9Y",
    "duration": 3.93
  },
  {
    "id": 1556,
    "title": "The Weeknd - Often (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2P7wedbhYAU",
    "duration": 4.65
  },
  {
    "id": 1557,
    "title": "Duffy - Mercy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BcMHbrOuj5A",
    "duration": 4.07
  },
  {
    "id": 1558,
    "title": "Taylor Swift - Death By A Thousand Cuts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Cf1_XzLVKPU",
    "duration": 3.83
  },
  {
    "id": 1559,
    "title": "Meghan Trainor - Made You Look (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x5tRozfF_b8",
    "duration": 2.53
  },
  {
    "id": 1560,
    "title": "Rod Wave - Heart On Ice (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iXvN-PcbWwA",
    "duration": 2.82
  },
  {
    "id": 1561,
    "title": "George Ezra - Blame It On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YsDNmRF-E1c",
    "duration": 3.55
  },
  {
    "id": 1562,
    "title": "Jung Kook - 'Dreamers' FIFA World Cup 2022 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z9cv6yaL1E8",
    "duration": 3.5
  },
  {
    "id": 1563,
    "title": "The Offspring - Pretty Fly (For A White Guy) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AqR295kgmDU",
    "duration": 3.7
  },
  {
    "id": 1564,
    "title": "Fleur East - Sax (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qQ1fO2NwLt8",
    "duration": 4.55
  },
  {
    "id": 1565,
    "title": "Shawn Mendes - Wonder (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q4g84iGxaNM",
    "duration": 3.3
  },
  {
    "id": 1566,
    "title": "Ingrid Andress - More Hearts Than Mine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aiol2tb4uAc",
    "duration": 3.83
  },
  {
    "id": 1567,
    "title": "Bebe Rexha - Knees (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Lq0eJeDkzgg",
    "duration": 3.82
  },
  {
    "id": 1568,
    "title": "Ariana Grande, Miley Cyrus, Lana Del Rey - Don't Call Me Angel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7HW2-XSeoVg",
    "duration": 3.52
  },
  {
    "id": 1569,
    "title": "One Direction - Ready To Run (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fwgqfgxQoY0",
    "duration": 3.55
  },
  {
    "id": 1570,
    "title": "Fall Out Boy - Thnks fr the Mmrs (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x52q2H9LTT8",
    "duration": 3.65
  },
  {
    "id": 1571,
    "title": "blackbear - hot girl bummer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=X99Eh9K-8II",
    "duration": 3.52
  },
  {
    "id": 1572,
    "title": "Ella Mai - Shot Clock (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LK2QEkvTRBg",
    "duration": 3.38
  },
  {
    "id": 1573,
    "title": "Becky G - Lovin' So Hard (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8ogSqVTkDZ8",
    "duration": 4.07
  },
  {
    "id": 1574,
    "title": "Chris Rea - Driving Home For Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Y3-YxV_7SeY",
    "duration": 4.42
  },
  {
    "id": 1575,
    "title": "Sam Smith - To Die For (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6xro-Lm4sn8",
    "duration": 3.53
  },
  {
    "id": 1576,
    "title": "Becky G, KAROL G - MAMIII (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BuFgpOAQpvo",
    "duration": 3.98
  },
  {
    "id": 1577,
    "title": "Alec Benjamin - Outrunning Karma (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fep_y_M2tsQ",
    "duration": 3.45
  },
  {
    "id": 1578,
    "title": "The Lumineers - Ophelia (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BUhyJhM5sIw",
    "duration": 2.88
  },
  {
    "id": 1579,
    "title": "Will.I.Am and Miley Cyrus, French Montana, Wiz Khalifa - Feelin' Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7GcLZz-jdAE",
    "duration": 4.55
  },
  {
    "id": 1580,
    "title": "The Crystals - Rudolph The Red-Nosed Reindeer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oulyteAIDPU",
    "duration": 2.68
  },
  {
    "id": 1581,
    "title": "Clairo - Pretty Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gXZgFNFzhls",
    "duration": 3.15
  },
  {
    "id": 1582,
    "title": "Alexander 23 - IDK You Yet (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mTfbXgSEzE8",
    "duration": 3.42
  },
  {
    "id": 1583,
    "title": "Conchita Wurst - Rise Like A Phoenix (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PQOWzg10_j4",
    "duration": 3.37
  },
  {
    "id": 1584,
    "title": "Iggy Azalea - Team (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8bwDkgcw0z8",
    "duration": 4.13
  },
  {
    "id": 1585,
    "title": "Lorde - Yellow Flicker Beat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IhSQJ-yJYI8",
    "duration": 4.08
  },
  {
    "id": 1586,
    "title": "One Direction - Strong (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9S_HaJudD2U",
    "duration": 3.2
  },
  {
    "id": 1587,
    "title": "5 Seconds Of Summer - Good Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=X3k7kLJ9p_I",
    "duration": 3.85
  },
  {
    "id": 1588,
    "title": "Pia Mia ft. Chris Brown & Tyga - Do It Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kSRgkOPBPPc",
    "duration": 3.78
  },
  {
    "id": 1589,
    "title": "Madonna - Vogue (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DI5QsCFHFrw",
    "duration": 4.92
  },
  {
    "id": 1590,
    "title": "Lil Nas X - HOLIDAY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GgQCc_JIVOA",
    "duration": 2.92
  },
  {
    "id": 1591,
    "title": "Tom Jones - It's Not Unusual (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iNQVPJdKbpA",
    "duration": 2.32
  },
  {
    "id": 1592,
    "title": "Skylar Grey - I Know You (from 'Fifty Shades Of Grey) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ft6c9v-_SsM",
    "duration": 5.2
  },
  {
    "id": 1593,
    "title": "Julie and The Phantoms - Perfect Harmony (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PtQOFwXIKjA",
    "duration": 3.72
  },
  {
    "id": 1594,
    "title": "Olivia Rodrigo - all-american b*tch (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J9ouUOckADw",
    "duration": 3.0
  },
  {
    "id": 1595,
    "title": "Chris Brown ft. Tyga - Ayo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=y0JtrETzs0w",
    "duration": 4.13
  },
  {
    "id": 1596,
    "title": "Kesha - Cannibal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9NGCbjKh1R0",
    "duration": 3.65
  },
  {
    "id": 1597,
    "title": "Justin Bieber - I'll Show You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LmaRqEuusXI",
    "duration": 3.88
  },
  {
    "id": 1598,
    "title": "Dan + Shay - Tequila (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=E0id9kAMS4k",
    "duration": 3.43
  },
  {
    "id": 1599,
    "title": "Ed Sheeran - South Of The Border (feat. Camila Cabello & Cardi B) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7lW2uwxuCLI",
    "duration": 3.65
  },
  {
    "id": 1600,
    "title": "Chuck Berry - Run Rudolph Run (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UO3UiC6_86o",
    "duration": 3.02
  },
  {
    "id": 1601,
    "title": "Selena Gomez - Rare (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2HGRRqUDOOk",
    "duration": 4.1
  },
  {
    "id": 1602,
    "title": "Icona Pop and Charli XCX - I Love It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7NhxGVOC4Ww",
    "duration": 2.95
  },
  {
    "id": 1603,
    "title": "Jeremih and YG - Don't Tell Em (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XWriQS9yEug",
    "duration": 4.8
  },
  {
    "id": 1604,
    "title": "Ariana Grande - everytime (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hShN1gAhrz8",
    "duration": 3.23
  },
  {
    "id": 1605,
    "title": "Taylor Swift - The Archer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dKbxxkWlXjE",
    "duration": 3.73
  },
  {
    "id": 1606,
    "title": "Juice WRLD - Legends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1b1HEVaWV14",
    "duration": 3.47
  },
  {
    "id": 1607,
    "title": "Halsey - Graveyard (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3RX5b0M3fAI",
    "duration": 3.33
  },
  {
    "id": 1608,
    "title": "One Direction - End Of The Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gqaXhaKtEAQ",
    "duration": 3.8
  },
  {
    "id": 1609,
    "title": "Sub Urban ft. REI AMI - Freak (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dj8iG9GkNGg",
    "duration": 3.5
  },
  {
    "id": 1610,
    "title": "Shawn Mendes - A Little Too Much (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xqfxOGv8bFQ",
    "duration": 3.48
  },
  {
    "id": 1611,
    "title": "5 Seconds Of Summer - She's Kinda Hot (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Zl_we3nzBPY",
    "duration": 4.17
  },
  {
    "id": 1612,
    "title": "Lady Antebellum - Just A Kiss (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wonXEIuEuIA",
    "duration": 3.8
  },
  {
    "id": 1613,
    "title": "Ritt Momney - Put Your Records On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wVvVrFLssTQ",
    "duration": 3.93
  },
  {
    "id": 1614,
    "title": "BTS - Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YFVKrqLHPzo",
    "duration": 5.1
  },
  {
    "id": 1615,
    "title": "Ariana Grande - Daydreamin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o9CFPLGI588",
    "duration": 3.55
  },
  {
    "id": 1616,
    "title": "Flume ft. Kai - Never Be Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZURU1Wu-cWc",
    "duration": 4.5
  },
  {
    "id": 1617,
    "title": "Jess Glynne - Hold My Hand (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iR2Zo-q-c7M",
    "duration": 4.32
  },
  {
    "id": 1618,
    "title": "Kelly Clarkson - Stronger (What Doesn't Kill You) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jqpVztRB7RA",
    "duration": 3.8
  },
  {
    "id": 1619,
    "title": "Sam Smith - Diamonds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bIRBzGDdpmU",
    "duration": 3.75
  },
  {
    "id": 1620,
    "title": "Ariana Grande, Liz Gillies - Santa Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sli3QQAB8zM",
    "duration": 3.2
  },
  {
    "id": 1621,
    "title": "Post Malone ft. Ty Dolla $ign - Psycho (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S0tJ2Scp994",
    "duration": 3.93
  },
  {
    "id": 1622,
    "title": "Ella Eyre - We Don't Have To Take Our Clothes Off (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gDGPChDrFQc",
    "duration": 4.0
  },
  {
    "id": 1623,
    "title": "Harry Styles - Golden (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I8mlZYHr_cg",
    "duration": 3.65
  },
  {
    "id": 1624,
    "title": "Percy Sledge - When A Man Loves A Woman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ep_HyhQo2iY",
    "duration": 3.58
  },
  {
    "id": 1625,
    "title": "Niall Horan - Flicker (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z5V-eI87cW0",
    "duration": 4.58
  },
  {
    "id": 1626,
    "title": "Marshmello ft. CHVRCHES - Here With Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gVP5u4GnZqo",
    "duration": 2.87
  },
  {
    "id": 1627,
    "title": "Aya Nakamura - Djadja (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7OUXBog_dsU",
    "duration": 3.23
  },
  {
    "id": 1628,
    "title": "Doja Cat - Candy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yHX782lZfMs",
    "duration": 3.72
  },
  {
    "id": 1629,
    "title": "Joshua Bassett, Olivia Rodrigo - I Think I Kinda, You Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ou_MZcmegRk",
    "duration": 3.17
  },
  {
    "id": 1630,
    "title": "Panic! At The Disco - Say Amen (Saturday Night) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P1UBspLSWvU",
    "duration": 3.4
  },
  {
    "id": 1631,
    "title": "Lana Del Rey ft. The Weeknd - Lust For Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pdLxI9g_578",
    "duration": 4.77
  },
  {
    "id": 1632,
    "title": "Miley Cyrus ft. Dua Lipa - Prisoner (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cA1nd2m5BHM",
    "duration": 3.27
  },
  {
    "id": 1633,
    "title": "Blueface ft. Cardi B - Thotiana Remix (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FypxFmetLxI",
    "duration": 3.95
  },
  {
    "id": 1634,
    "title": "Post Malone - I Fall Apart (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=z1tANMFU1i4",
    "duration": 3.95
  },
  {
    "id": 1635,
    "title": "Travis Scott - HIGHEST IN THE ROOM (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O2tQp8O91X4",
    "duration": 3.12
  },
  {
    "id": 1636,
    "title": "Ed Sheeran - Drunk (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_TQN3uV0P6o",
    "duration": 3.65
  },
  {
    "id": 1637,
    "title": "Tessa Violet - Crush (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CAxnAR-xu50",
    "duration": 3.92
  },
  {
    "id": 1638,
    "title": "Tate McRae - Dear Parents (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ts_wrleVqvQ",
    "duration": 3.65
  },
  {
    "id": 1639,
    "title": "5 Seconds Of Summer - Jet Black Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FNCc9ppGgcg",
    "duration": 4.23
  },
  {
    "id": 1640,
    "title": "Brandi Carlile  - The Joke (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U-GZ7ccdLOM",
    "duration": 4.9
  },
  {
    "id": 1641,
    "title": "Troye Sivan - WILD (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ch_z7_hd5FY",
    "duration": 4.37
  },
  {
    "id": 1642,
    "title": "Zombies 2 - Like The Zombies Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MtmGigox0rA",
    "duration": 2.47
  },
  {
    "id": 1643,
    "title": "Lady Gaga - Is That Alright? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tWoaa4vNI8M",
    "duration": 3.55
  },
  {
    "id": 1644,
    "title": "DJ Snake & AlunaGeorge - You Know You Like It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m4RJ3OZdAVk",
    "duration": 4.52
  },
  {
    "id": 1645,
    "title": "Deep Blue Something - Breakfast At Tiffany's (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=E62KRZGRo4o",
    "duration": 4.38
  },
  {
    "id": 1646,
    "title": "5 Seconds Of Summer - Don't Stop (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fyRdIzoUiqg",
    "duration": 3.17
  },
  {
    "id": 1647,
    "title": "Bazzi - Mine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9cIWdpzIN0w",
    "duration": 2.63
  },
  {
    "id": 1648,
    "title": "Lady Gaga - The Cure (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FHTACCMr_e0",
    "duration": 3.82
  },
  {
    "id": 1649,
    "title": "Halsey - New Americana (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EtD7zSgSeWQ",
    "duration": 3.63
  },
  {
    "id": 1650,
    "title": "Jason Aldean - You Make It Easy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Q9W6Sbph_Z8",
    "duration": 3.72
  },
  {
    "id": 1651,
    "title": "Shawn Mendes, Camila Cabello - Se\u00f1orita (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=x5r0cYNU9No",
    "duration": 3.65
  },
  {
    "id": 1652,
    "title": "Robin Schulz ft. Francesco Yates - Sugar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6JJ5kls77K4",
    "duration": 4.23
  },
  {
    "id": 1653,
    "title": "Milo Manheim, Meg Donnelly - Someday (Ballad) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sBrdDLQ-X8I",
    "duration": 3.88
  },
  {
    "id": 1654,
    "title": "Jacob Sartorius - Sweatshirt (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PpflCk1daIY",
    "duration": 3.47
  },
  {
    "id": 1655,
    "title": "The Living Tombstone - Spooky, Scary Skeletons (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZLd6IcDA1qE",
    "duration": 4.12
  },
  {
    "id": 1656,
    "title": "Van Halen - Jump (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Dy6CP3WZwLw",
    "duration": 4.37
  },
  {
    "id": 1657,
    "title": "Zombies 2 - Gotta Find Where I Belong (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=976UK6h2xrQ",
    "duration": 3.07
  },
  {
    "id": 1658,
    "title": "Camp Rock - Gotta Find You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fUOc4noynmc",
    "duration": 4.4
  },
  {
    "id": 1659,
    "title": "Meek Mill ft. Nicki Minaj & Chris Brown - All Eyes On You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RMF7mRTrBQ4",
    "duration": 4.07
  },
  {
    "id": 1660,
    "title": "5 Seconds Of Summer ft. Julia Michaels - Lie To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TUu5K9LzGOw",
    "duration": 2.87
  },
  {
    "id": 1661,
    "title": "Melanie Martinez - Drama Club (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Cz_4Qcu1f6c",
    "duration": 4.02
  },
  {
    "id": 1662,
    "title": "Melanie Martinez - Recess (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3Cz__Yiutq0",
    "duration": 4.12
  },
  {
    "id": 1663,
    "title": "Sabrina Carpenter - Skin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qUZcTZgbr_E",
    "duration": 3.25
  },
  {
    "id": 1664,
    "title": "AJR - BANG! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U9xZ4wJdQkw",
    "duration": 3.25
  },
  {
    "id": 1665,
    "title": "NF - If You Want Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kimHPIZ-8RM",
    "duration": 3.43
  },
  {
    "id": 1666,
    "title": "Nicki Minaj - The Night Is Still Young (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vwhNzQRPs9g",
    "duration": 4.15
  },
  {
    "id": 1667,
    "title": "Kiesza - Hideaway (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YJehZXL35lE",
    "duration": 4.58
  },
  {
    "id": 1668,
    "title": "BTS, Charli XCX - Dream Glow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NAwua29GOi0",
    "duration": 3.42
  },
  {
    "id": 1669,
    "title": "Baby Ariel - Aww (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=622jnDi1swc",
    "duration": 2.95
  },
  {
    "id": 1670,
    "title": "Burl Ives - A Holly Jolly Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oQqCEZPVxs0",
    "duration": 2.55
  },
  {
    "id": 1671,
    "title": "Selena Gomez - Only You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=muZhBiA2Mks",
    "duration": 3.35
  },
  {
    "id": 1672,
    "title": "Joji - Die For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Nkcvrr_1aP8",
    "duration": 3.55
  },
  {
    "id": 1673,
    "title": "Conor Maynard - R U Crazy? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ejDCjhhWQYo",
    "duration": 4.52
  },
  {
    "id": 1674,
    "title": "Louis Tomlinson - Miss You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wTaWuCk89dg",
    "duration": 3.25
  },
  {
    "id": 1675,
    "title": "Julia Michaels ft. Niall Horan - What A Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GHatumpuigc",
    "duration": 3.08
  },
  {
    "id": 1676,
    "title": "Maren Morris - The Bones (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t14cTDMKPw4",
    "duration": 3.57
  },
  {
    "id": 1677,
    "title": "Sia - Rainbow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m-2IC9RdTQw",
    "duration": 3.57
  },
  {
    "id": 1678,
    "title": "Halsey - Now Or Never (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mukvwXNiBRY",
    "duration": 4.15
  },
  {
    "id": 1679,
    "title": "twenty one pilots - Lane Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Re_NSs2GqZY",
    "duration": 4.5
  },
  {
    "id": 1680,
    "title": "Loreen - Euphoria (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZVsVYTIC1ZU",
    "duration": 3.4
  },
  {
    "id": 1681,
    "title": "5 Seconds Of Summer - Ghost Of You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K6uh7tCLpbg",
    "duration": 3.75
  },
  {
    "id": 1682,
    "title": "Sia - Fire Meet Gasoline (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uhMvKj4bOU8",
    "duration": 4.02
  },
  {
    "id": 1683,
    "title": "Maroon 5 - Wait (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YrL49-3IBGU",
    "duration": 3.48
  },
  {
    "id": 1684,
    "title": "Taylor Swift - Stay Stay Stay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kwt6kooMFj0",
    "duration": 3.67
  },
  {
    "id": 1685,
    "title": "LSD - Thunderclouds ft. Labrinth, Sia, Diplo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EnBpKvUuMHc",
    "duration": 3.37
  },
  {
    "id": 1686,
    "title": "twenty one pilots - Cancer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kcvYFl_Ja7s",
    "duration": 4.2
  },
  {
    "id": 1687,
    "title": "Rex Orange County - Loving Is Easy ft. Benny Sings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A5j3FkjPomY",
    "duration": 2.68
  },
  {
    "id": 1688,
    "title": "The Ronettes - Be My Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3Y52_YwE7Oo",
    "duration": 2.98
  },
  {
    "id": 1689,
    "title": "Panic! At The Disco - LA Devotee (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oUBb60AR0-M",
    "duration": 3.68
  },
  {
    "id": 1690,
    "title": "The Rocky Horror Picture Show - Time Warp (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pE4dBVpr_Io",
    "duration": 3.88
  },
  {
    "id": 1691,
    "title": "Tate McRae - she's all i wanna be (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zX1Wfqv8ewU",
    "duration": 3.82
  },
  {
    "id": 1692,
    "title": "DNCE - Toothbrush (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=clevuVa40Vs",
    "duration": 4.37
  },
  {
    "id": 1693,
    "title": "Ali Gatie - What If I Told You That I Love You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gPVNI42Xlkw",
    "duration": 3.37
  },
  {
    "id": 1694,
    "title": "Jim Brickman, Collin Raye, Susan Ashton - The Gift (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DEB23TuWIPs",
    "duration": 3.62
  },
  {
    "id": 1695,
    "title": "girl in red - i wanna be your girlfriend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ncXaoIkajns",
    "duration": 3.77
  },
  {
    "id": 1696,
    "title": "One Direction - Girl Almighty (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lMqvq9RbxPs",
    "duration": 3.67
  },
  {
    "id": 1697,
    "title": "Rita Ora - Anywhere (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wg6wl4nOiBE",
    "duration": 3.92
  },
  {
    "id": 1698,
    "title": "Nicki Minaj - Super Freaky Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Gs84QK6C75g",
    "duration": 3.22
  },
  {
    "id": 1699,
    "title": "Melanie Martinez - Teddy Bear (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fob4meCULZc",
    "duration": 4.62
  },
  {
    "id": 1700,
    "title": "Charlene Soraia - Wherever You Will Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lhy2ej-ccKw",
    "duration": 3.7
  },
  {
    "id": 1701,
    "title": "Leo Sayer - When I Need You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TamNL-1_Lwg",
    "duration": 4.42
  },
  {
    "id": 1702,
    "title": "tick, tick... BOOM! - 30/90 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Vzr_JulXE38",
    "duration": 4.72
  },
  {
    "id": 1703,
    "title": "Taylor Swift - This Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dyygwFpsY7E",
    "duration": 5.17
  },
  {
    "id": 1704,
    "title": "Clean Bandit ft. Julia Michaels - I Miss You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ru-hH9B-KPo",
    "duration": 3.62
  },
  {
    "id": 1705,
    "title": "Ne-Yo - Let Me Love You (Until You Learn to Love Yourself) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4Xi6V-aT1nA",
    "duration": 4.2
  },
  {
    "id": 1706,
    "title": "Sara Bareilles - I Choose You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0S2xCNh3vzg",
    "duration": 4.02
  },
  {
    "id": 1707,
    "title": "Jason Derulo - It Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e_M7OqVox5g",
    "duration": 3.5
  },
  {
    "id": 1708,
    "title": "DJ Snake and Lil Jon - Turn Down For What (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZnjXy97P7lY",
    "duration": 3.93
  },
  {
    "id": 1709,
    "title": "Sia - Angel By The Wings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gzhhpkuxz4E",
    "duration": 5.72
  },
  {
    "id": 1710,
    "title": "Ariana Grande, Doja Cat - motive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dksWnHcXbT8",
    "duration": 3.03
  },
  {
    "id": 1711,
    "title": "Camila Cabello - Something's Gotta Give (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a5TvedGBijM",
    "duration": 4.07
  },
  {
    "id": 1712,
    "title": "2 Chainz and Wiz Khalifa - We Own It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZpyYGysTGHI",
    "duration": 4.1
  },
  {
    "id": 1713,
    "title": "Will.I.Am and Cody Wise - It's My Birthday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZXiunLg67Dw",
    "duration": 4.53
  },
  {
    "id": 1714,
    "title": "Olly Murs - Dear Darlin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_xncUDtPA_8",
    "duration": 3.72
  },
  {
    "id": 1715,
    "title": "Duran Duran - Hungry Like The Wolf (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GmzRIaRCo_M",
    "duration": 3.97
  },
  {
    "id": 1716,
    "title": "Louis Tomlinson - Two Of Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DfaoHJFVG0k",
    "duration": 3.97
  },
  {
    "id": 1717,
    "title": "The Weeknd - After Hours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u_uNxT1bIh8",
    "duration": 6.23
  },
  {
    "id": 1718,
    "title": "The 1975 - Chocolate (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WMcNsTdCqwk",
    "duration": 4.08
  },
  {
    "id": 1719,
    "title": "Melanie Martinez ft. Tierra Whack - Copy Cat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZWYsKav2-NM",
    "duration": 4.1
  },
  {
    "id": 1720,
    "title": "Katy Perry - Never Really Over (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0HXlJO2bb-s",
    "duration": 3.98
  },
  {
    "id": 1721,
    "title": "Halsey - You should be sad (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4fZSkwpMopI",
    "duration": 3.62
  },
  {
    "id": 1722,
    "title": "The Pussycat Dolls - Don't Cha (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ISn1-RwoNN0",
    "duration": 4.3
  },
  {
    "id": 1723,
    "title": "Little Mix - Lightning (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jRMHxHbH1fk",
    "duration": 5.57
  },
  {
    "id": 1724,
    "title": "Grace VanderWaal - So Much More Than This (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hE_xtfC592w",
    "duration": 3.28
  },
  {
    "id": 1725,
    "title": "George Michael - Freedom! '90 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9hr0BVlqo94",
    "duration": 7.18
  },
  {
    "id": 1726,
    "title": "Fifth Harmony - Reflection (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yKHSriEb1YI",
    "duration": 3.45
  },
  {
    "id": 1727,
    "title": "Cavetown - Lemon Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NT5NuWvPPsE",
    "duration": 4.67
  },
  {
    "id": 1728,
    "title": "Alice Cooper - Poison (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uaK8FLttCzc",
    "duration": 4.9
  },
  {
    "id": 1729,
    "title": "All Saints - Never Ever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gpKWiQFETe4",
    "duration": 4.68
  },
  {
    "id": 1730,
    "title": "Melanie Martinez - Gingerbread Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A33vNcNTGDM",
    "duration": 4.05
  },
  {
    "id": 1731,
    "title": "Charli XCX - Break The Rules (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CYrZ6QOrrsg",
    "duration": 3.58
  },
  {
    "id": 1732,
    "title": "Melanie Martinez - Strawberry Shortcake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=okPNNs3Xow8",
    "duration": 3.2
  },
  {
    "id": 1733,
    "title": "Zombies 2 - I'm Winning (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HHpo6VhlMoA",
    "duration": 3.13
  },
  {
    "id": 1734,
    "title": "Whitney Houston - My Love Is Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bZm-Aza8fN4",
    "duration": 4.88
  },
  {
    "id": 1735,
    "title": "HSMTMTS - Just For A Moment (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NXWHemYlbfg",
    "duration": 3.63
  },
  {
    "id": 1736,
    "title": "Macklemore & Ryan Lewis and Mary Lambert - Same Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l1znKeghAXk",
    "duration": 5.13
  },
  {
    "id": 1737,
    "title": "Taylor Swift - How You Get The Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sj50cDz-SLo",
    "duration": 4.48
  },
  {
    "id": 1738,
    "title": "Khalid - Saturday Nights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CXMpSe6Gkog",
    "duration": 3.67
  },
  {
    "id": 1739,
    "title": "Karmin - Brokenhearted (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bWq04YH6-mU",
    "duration": 4.15
  },
  {
    "id": 1740,
    "title": "Elvis Presley - Return To Sender (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TFHh1rK6sTk",
    "duration": 2.58
  },
  {
    "id": 1741,
    "title": "Madison Beer - Dead (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NWSuaJwUzq8",
    "duration": 3.57
  },
  {
    "id": 1742,
    "title": "Panic! At The Disco - Don't Threaten Me With A Good Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Bn9D3jocbdM",
    "duration": 3.97
  },
  {
    "id": 1743,
    "title": "Lil Baby, GUNNA - Close Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cpZyeJ5ZiWY",
    "duration": 3.35
  },
  {
    "id": 1744,
    "title": "Gene Autry - Here Comes Santa Claus (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vvDSNTlX3DY",
    "duration": 3.02
  },
  {
    "id": 1745,
    "title": "Little Mix - Cannonball (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n6MGWXqPGLI",
    "duration": 3.9
  },
  {
    "id": 1746,
    "title": "Halsey - Hold Me Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nBjNC--brTw",
    "duration": 3.9
  },
  {
    "id": 1747,
    "title": "XXXTentacion & Lil Pump ft. Maluma & Swae Lee - Arms Around You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mn3CrszoeyY",
    "duration": 3.47
  },
  {
    "id": 1748,
    "title": "Olivia Rodrigo - Start Of Something New (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VzyZ6jJCvEY",
    "duration": 2.2
  },
  {
    "id": 1749,
    "title": "Little Mix - Word Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D-NwmaRLAnc",
    "duration": 3.85
  },
  {
    "id": 1750,
    "title": "Ariana Grande - One Last Time (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=jA-hpo0nMkY",
    "duration": 3.78
  },
  {
    "id": 1751,
    "title": "Maroon 5 ft. Kendrick Lamar - Don't Wanna Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g_ruB5eA2pk",
    "duration": 4.02
  },
  {
    "id": 1752,
    "title": "Empire Cast - Conqueror ft. Estelle and Jussie Smollett (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9b-6gEkpr5Q",
    "duration": 4.97
  },
  {
    "id": 1753,
    "title": "Pink and Lily Allen - True Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z-5-vOEXc40",
    "duration": 4.17
  },
  {
    "id": 1754,
    "title": "Jess Glynne - Thursday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9_gx45yPxMs",
    "duration": 3.82
  },
  {
    "id": 1755,
    "title": "Wallows feat. Clairo - Are You Bored Yet? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=466j_lb7bMs",
    "duration": 3.15
  },
  {
    "id": 1756,
    "title": "Bobby \"Boris\" Pickett - Monster Mash (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-fVgl9-Zx3k",
    "duration": 3.5
  },
  {
    "id": 1757,
    "title": "Luke Combs - Forever After All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bAheKhvj_gI",
    "duration": 4.12
  },
  {
    "id": 1758,
    "title": "Taylor Swift ft. Ed Sheeran, Future - End Game (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YrG4QM7lans",
    "duration": 4.27
  },
  {
    "id": 1759,
    "title": "One Direction - Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IzL4eMcMjZQ",
    "duration": 3.82
  },
  {
    "id": 1760,
    "title": "Julie and The Phantoms - Finally Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qE-zymd9Yq0",
    "duration": 3.37
  },
  {
    "id": 1761,
    "title": "Faouzia - Born Without A Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MTp6PpGgLHg",
    "duration": 2.72
  },
  {
    "id": 1762,
    "title": "Rusted Root - Send Me On My Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fEpfsVDPImI",
    "duration": 5.33
  },
  {
    "id": 1763,
    "title": "Lil Pump - ESSKEETIT (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3jL7g3nx0cs",
    "duration": 3.38
  },
  {
    "id": 1764,
    "title": "Halsey - Nightmare (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6iHo98p2RDc",
    "duration": 4.1
  },
  {
    "id": 1765,
    "title": "Hailee Steinfeld, BloodPop\u00ae - Capital Letters (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o86W4LqI_Vo",
    "duration": 3.8
  },
  {
    "id": 1766,
    "title": "Melanie Martinez - Dead To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2Yazj2DJ_LE",
    "duration": 4.2
  },
  {
    "id": 1767,
    "title": "Old Dominion - One Man Band (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XU1Sts_K3ns",
    "duration": 3.28
  },
  {
    "id": 1768,
    "title": "Ashe, FINNEAS - Till Forever Falls Apart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S6RIe2obLmM",
    "duration": 3.95
  },
  {
    "id": 1769,
    "title": "Troye Sivan - Happy Little Pill (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QA0aJNsAq8A",
    "duration": 4.23
  },
  {
    "id": 1770,
    "title": "Kanye West & Lil Pump ft. Adele Givens - I Love It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=70QfofcVzqs",
    "duration": 2.53
  },
  {
    "id": 1771,
    "title": "Enrique Iglesias - Heart Attack (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GGgQgeSx2jg",
    "duration": 3.15
  },
  {
    "id": 1772,
    "title": "Lil Mosey - Blueberry Faygo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vLdICfIIumI",
    "duration": 3.02
  },
  {
    "id": 1773,
    "title": "Hailee Steinfeld ft. DNCE - Rock Bottom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RRTUHx95HEg",
    "duration": 3.83
  },
  {
    "id": 1774,
    "title": "Royal & The Serpent - Overwhelmed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qfqzXWf6_4g",
    "duration": 3.08
  },
  {
    "id": 1775,
    "title": "Jennifer Lopez and Iggy Azalea - Booty (Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pnHEAUuvVoE",
    "duration": 3.97
  },
  {
    "id": 1776,
    "title": "Gabrielle Aplin - Please Don't Say You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0txJDr9G1dk",
    "duration": 3.03
  },
  {
    "id": 1777,
    "title": "TWICE - MOONLIGHT SUNRISE (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EpxuxJcSrwQ",
    "duration": 3.12
  },
  {
    "id": 1778,
    "title": "Faouzia - RIP, Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MD1AEAKQoZI",
    "duration": 3.17
  },
  {
    "id": 1779,
    "title": "Surf Mesa - ily (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XpD7EPb5kHU",
    "duration": 3.33
  },
  {
    "id": 1780,
    "title": "Ruth B - 2 Poor Kids (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3WyuNHA0ibg",
    "duration": 4.32
  },
  {
    "id": 1781,
    "title": "Taylor Swift ft. Gary Lightbody - The Last Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g82LqBoJWFA",
    "duration": 5.3
  },
  {
    "id": 1782,
    "title": "Years & Years - Eyes Shut (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_xCwAIeKtX4",
    "duration": 3.77
  },
  {
    "id": 1783,
    "title": "Lizzo ft. Ariana Grande - Good As Hell (Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DaHLqP-CTac",
    "duration": 3.1
  },
  {
    "id": 1784,
    "title": "Ashnikko ft. Yung Baby Tate - STUPID (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b69Sov59Lvo",
    "duration": 3.18
  },
  {
    "id": 1785,
    "title": "Selena Gomez - Me & The Rhythm (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6tjI8HbZHlM",
    "duration": 4.12
  },
  {
    "id": 1786,
    "title": "Charlie Puth - Light Switch (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r-yRELmja1Y",
    "duration": 3.45
  },
  {
    "id": 1787,
    "title": "Ariana Grande - Why Try (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cvHD1nXh0a0",
    "duration": 3.83
  },
  {
    "id": 1788,
    "title": "Ariana Grande - thank u, next (Full Album Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=DoUR6zpG7fE",
    "duration": 40.77
  },
  {
    "id": 1789,
    "title": "Troye Sivan - Talk Me Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DQvpQN7bnJY",
    "duration": 4.43
  },
  {
    "id": 1790,
    "title": "Taylor Swift - All You Had To Do Was Stay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=52ejQRox9l4",
    "duration": 3.5
  },
  {
    "id": 1791,
    "title": "SZA ft. Travis Scott - Love Galore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zR2b2j_X-WE",
    "duration": 5.03
  },
  {
    "id": 1792,
    "title": "Catie Turner - Prom Queen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r2vP_7btUHA",
    "duration": 4.47
  },
  {
    "id": 1793,
    "title": "Hozier - Someone New (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9lXGUYe4osQ",
    "duration": 4.03
  },
  {
    "id": 1794,
    "title": "The Weeknd - In The Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kV5dLKnQ90I",
    "duration": 4.45
  },
  {
    "id": 1795,
    "title": "Post Malone - Wow. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YJKiF31Keig",
    "duration": 2.68
  },
  {
    "id": 1796,
    "title": "Ciara - I Bet (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9_mZCO9WQZM",
    "duration": 5.07
  },
  {
    "id": 1797,
    "title": "Kehlani ft. Ty Dolla $ign - Nights Like This (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z-uz8d2Tif4",
    "duration": 3.62
  },
  {
    "id": 1798,
    "title": "Ariana Grande - thank u, next (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=b0Quu5Q4Ct8",
    "duration": 4.07
  },
  {
    "id": 1799,
    "title": "Barenaked Ladies - One Week (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eZOhZFFpdU4",
    "duration": 3.53
  },
  {
    "id": 1800,
    "title": "P!nk - Beautiful Trauma (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_FhkZYVVrhA",
    "duration": 4.42
  },
  {
    "id": 1801,
    "title": "Katy B - Crying For No Reason (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QzveqpX655M",
    "duration": 4.48
  },
  {
    "id": 1802,
    "title": "X Ambassadors - Renegades (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e314BoqPb0c",
    "duration": 3.82
  },
  {
    "id": 1803,
    "title": "SZA - Garden (Say It Like Dat) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-LL-FEEGoEk",
    "duration": 3.42
  },
  {
    "id": 1804,
    "title": "Kylie Minogue - Santa Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tyN3301wYQ0",
    "duration": 4.02
  },
  {
    "id": 1805,
    "title": "Melanie Martinez - Fire Drill (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IEkU7GFBhT0",
    "duration": 4.68
  },
  {
    "id": 1806,
    "title": "Iggy Azalea ft. Jennifer Hudson - Trouble (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wTUoMxzZfh0",
    "duration": 3.08
  },
  {
    "id": 1807,
    "title": "Nicki Minaj - Barbie Tingz (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6uoMg0fdBzY",
    "duration": 3.48
  },
  {
    "id": 1808,
    "title": "Cian Ducrot - I'll Be Waiting (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8vgohTaYLfw",
    "duration": 3.13
  },
  {
    "id": 1809,
    "title": "Ed Sheeran ft. YEBBA - Best Part Of Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ld2_DnYJiGg",
    "duration": 4.22
  },
  {
    "id": 1810,
    "title": "Selena Gomez - Kill Em With Kindness (Acoustic) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mqCv2Ee1iaw",
    "duration": 3.9
  },
  {
    "id": 1811,
    "title": "Melanie Martinez - Detention (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J66WV9OlN8c",
    "duration": 5.27
  },
  {
    "id": 1812,
    "title": "Dua Lipa - We're Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6SXG6xbyqFA",
    "duration": 3.08
  },
  {
    "id": 1813,
    "title": "Julia Michaels ft. Selena Gomez - Anxiety (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8sOVr-t-IGY",
    "duration": 3.77
  },
  {
    "id": 1814,
    "title": "Jax - Victoria's Secret (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_RD5Yf3Vu6Q",
    "duration": 3.13
  },
  {
    "id": 1815,
    "title": "Enrique Iglesias ft. Ludacris - Tonight (I'm Loving You) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FuVWi76sMMw",
    "duration": 4.22
  },
  {
    "id": 1816,
    "title": "Fifth Harmony ft. Meghan Trainor - Brave Honest Beautiful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ER9agIoexhI",
    "duration": 3.77
  },
  {
    "id": 1817,
    "title": "Christina Perri - The Words (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bKbBTVSr4ic",
    "duration": 4.72
  },
  {
    "id": 1818,
    "title": "HSMTMTS - Born To Be Brave (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MFvo302RcI8",
    "duration": 3.47
  },
  {
    "id": 1819,
    "title": "Britney Spears, Iggy Azalea - Pretty Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nED-QSN2BxU",
    "duration": 3.15
  },
  {
    "id": 1820,
    "title": "Jessie J - Who's Laughing Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HH0GvxqzZXE",
    "duration": 4.12
  },
  {
    "id": 1821,
    "title": "Ellie Goulding - Still Falling For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vIZTzbxUkG0",
    "duration": 4.58
  },
  {
    "id": 1822,
    "title": "Machine Gun Kelly, YUNGBLUD, Travis Barker - I Think I'm OKAY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=m-Yy4RAC8Kg",
    "duration": 3.15
  },
  {
    "id": 1823,
    "title": "Martin Garrix & Troye Sivan - There For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hR3ivXi53XM",
    "duration": 4.08
  },
  {
    "id": 1824,
    "title": "Sista Prod, Powfu, Alec Benjamin, Rxseboy - Eyes Blue Like The Atlantic Part 2 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n31fy8f2Xic",
    "duration": 3.13
  },
  {
    "id": 1825,
    "title": "ZAYN - LIKE I WOULD (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oAFTlrdr9RI",
    "duration": 3.92
  },
  {
    "id": 1826,
    "title": "Meghan Trainor - Walkashame (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bRlAA1CpaIA",
    "duration": 3.43
  },
  {
    "id": 1827,
    "title": "Lady Gaga - Look What I Found (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=awIle6Q5M_I",
    "duration": 3.12
  },
  {
    "id": 1828,
    "title": "Jonas Brothers - Only Human (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7ot2SDdPISA",
    "duration": 3.28
  },
  {
    "id": 1829,
    "title": "TINI - Great Escape (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uczT-O2s_Hc",
    "duration": 4.4
  },
  {
    "id": 1830,
    "title": "Faouzia - You Don't Even Know Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BEO7ZbVbzss",
    "duration": 3.4
  },
  {
    "id": 1831,
    "title": "Bebe Rexha ft. Nicki Minaj - No Broken Hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FXYEuxna-SI",
    "duration": 4.57
  },
  {
    "id": 1832,
    "title": "Jess Glynne - Don't Be So Hard On Yourself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NYAHyU_hpPo",
    "duration": 3.92
  },
  {
    "id": 1833,
    "title": "The Script - Rain (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wo2yRe0rVuc",
    "duration": 3.82
  },
  {
    "id": 1834,
    "title": "Bea Miller - Fire N Gold (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uH2VK4yDCLg",
    "duration": 4.02
  },
  {
    "id": 1835,
    "title": "David Pomeranz - On This Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sUD_pgXU0e0",
    "duration": 4.38
  },
  {
    "id": 1836,
    "title": "The Vamps - Wake Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e6ISjJiX92I",
    "duration": 5.48
  },
  {
    "id": 1837,
    "title": "Charli XCX - Boys (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gzlOFnf1CMI",
    "duration": 3.08
  },
  {
    "id": 1838,
    "title": "Gabbie Hanna - Out Loud (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bWhDB28CUHQ",
    "duration": 3.53
  },
  {
    "id": 1839,
    "title": "Little Mix - About The Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2lxEzF2pLa0",
    "duration": 4.22
  },
  {
    "id": 1840,
    "title": "Demi Lovato - Tell Me You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Dn4t2ZG2STo",
    "duration": 4.45
  },
  {
    "id": 1841,
    "title": "Ed Sheeran -  Perfect (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=NFNGAVVmXZs",
    "duration": 4.67
  },
  {
    "id": 1842,
    "title": "Darlene Love - Christmas (Baby Please Come Home) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b5vrOlvZN5c",
    "duration": 3.0
  },
  {
    "id": 1843,
    "title": "Why Don't We - These Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7FgFtvwcU-o",
    "duration": 3.18
  },
  {
    "id": 1844,
    "title": "Little Mix - Towers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dsp6TjJdT9M",
    "duration": 4.45
  },
  {
    "id": 1845,
    "title": "The Irrepressibles - In This Shirt (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NaN_z-BArCE",
    "duration": 4.78
  },
  {
    "id": 1846,
    "title": "Neon Trees - Animal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TuJiMlvWXiA",
    "duration": 3.88
  },
  {
    "id": 1847,
    "title": "Ariana Grande - NASA (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OHnC1RAeyco",
    "duration": 3.15
  },
  {
    "id": 1848,
    "title": "NF - Why (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QHbG_t6PFfI",
    "duration": 3.37
  },
  {
    "id": 1849,
    "title": "Madison Beer - Good In Goodbye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rM2YZhBux7w",
    "duration": 2.77
  },
  {
    "id": 1850,
    "title": "Taylor Swift - Christmas Tree Farm (Karaoke Version) | Sing King Karaoke",
    "video_url": "https://www.youtube.com/watch?v=AWgw7_QZELg",
    "duration": 3.98
  },
  {
    "id": 1851,
    "title": "Bebe Rexha - I'm Gonna Show You Crazy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YZUCpWQO2-Y",
    "duration": 4.2
  },
  {
    "id": 1852,
    "title": "Justin Bieber - Heartbreaker (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3l0ro3uYvSs",
    "duration": 4.58
  },
  {
    "id": 1853,
    "title": "Frank Sinatra - Fly Me To The Moon (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=T_Fd7Qxjz9k",
    "duration": 2.2
  },
  {
    "id": 1854,
    "title": "James Arthur - Impossible (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=npggOlVAGog",
    "duration": 3.73
  },
  {
    "id": 1855,
    "title": "Queen - I Want It All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bkLh27na7Kc",
    "duration": 4.35
  },
  {
    "id": 1856,
    "title": "Justin Bieber ft. Halsey - The Feeling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NYiZ0LBe8Sk",
    "duration": 4.3
  },
  {
    "id": 1857,
    "title": "Jason Derulo - Colors (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gWVI5as34wU",
    "duration": 3.82
  },
  {
    "id": 1858,
    "title": "Nelly  - Just A Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XJ4AKd-xMtA",
    "duration": 4.03
  },
  {
    "id": 1859,
    "title": "YOASOBI - \u30a2\u30a4\u30c8\u3099\u30eb (Idol) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aoZrqJcXfK8",
    "duration": 3.6
  },
  {
    "id": 1860,
    "title": "Meghan Trainor - Close Your Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WBKKj3KCScg",
    "duration": 4.02
  },
  {
    "id": 1861,
    "title": "Nicki Minaj ft. Drake - Truffle Butter (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=grOUdKT0WxM",
    "duration": 4.1
  },
  {
    "id": 1862,
    "title": "BLACKPINK ft. Cardi B - Bet You Wanna (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7tilGhvOeeg",
    "duration": 3.03
  },
  {
    "id": 1863,
    "title": "ABBA - The Name Of The Game (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v-wsbOhnFuE",
    "duration": 4.6
  },
  {
    "id": 1864,
    "title": "The Weeknd - Heartless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YzYeCLUD1NM",
    "duration": 3.68
  },
  {
    "id": 1865,
    "title": "Lauren Daigle - Hold On To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K-Sw29N29oc",
    "duration": 3.13
  },
  {
    "id": 1866,
    "title": "Anne-Marie - Then (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9UyVKwvOxaY",
    "duration": 3.92
  },
  {
    "id": 1867,
    "title": "Little Mix - Sweet Melody (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0ruhi3keo5g",
    "duration": 4.02
  },
  {
    "id": 1868,
    "title": "Taylor Swift - Afterglow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GRm6tfEIhDI",
    "duration": 3.78
  },
  {
    "id": 1869,
    "title": "Rita Ora - Let You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zveY65HC9vU",
    "duration": 3.35
  },
  {
    "id": 1870,
    "title": "Sofia Carson - Come Back Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RoQTjX-MeaI",
    "duration": 3.2
  },
  {
    "id": 1871,
    "title": "Lewis Capaldi - One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=77JtLVNt7Zs",
    "duration": 3.33
  },
  {
    "id": 1872,
    "title": "Jax Jones ft. RAYE - You Don't Know Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XsF2eUAfmFE",
    "duration": 4.0
  },
  {
    "id": 1873,
    "title": "Descendants 3 - Queen Of Mean (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=rw9Yi4-5RX8",
    "duration": 3.53
  },
  {
    "id": 1874,
    "title": "Taylor Swift - You Are In Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lNVeD7CdYQY",
    "duration": 4.82
  },
  {
    "id": 1875,
    "title": "Major Lazer ft. Ellie Goulding & Tarrus Riley - Powerful (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vCkDSb6iotQ",
    "duration": 3.72
  },
  {
    "id": 1876,
    "title": "Afrojack and Wrabel - Ten Feet Tall (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yVcQMZcXvLQ",
    "duration": 4.13
  },
  {
    "id": 1877,
    "title": "Drake - Toosie Slide (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iY_4jm6Z97g",
    "duration": 4.12
  },
  {
    "id": 1878,
    "title": "The Weeknd - Secrets (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SG39UNNFls0",
    "duration": 4.83
  },
  {
    "id": 1879,
    "title": "Doja Cat - Juicy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kfFe_lj9uIU",
    "duration": 3.65
  },
  {
    "id": 1880,
    "title": "Lady Gaga - Til It Happens To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FaQUZdvmKlU",
    "duration": 4.78
  },
  {
    "id": 1881,
    "title": "Marshmello, Halsey - Be Kind (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BuBPUduKOw0",
    "duration": 3.33
  },
  {
    "id": 1882,
    "title": "Paramore - Monster (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8o3P3jwgtjY",
    "duration": 3.9
  },
  {
    "id": 1883,
    "title": "Ava Max - Torn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NU9OB1Gv5Qc",
    "duration": 3.57
  },
  {
    "id": 1884,
    "title": "P!nk, Chris Stapleton - Love Me Anyway (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tR9eNnXA9EA",
    "duration": 3.45
  },
  {
    "id": 1885,
    "title": "Lunchmoney Lewis - Bills (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-94zx7u26Ac",
    "duration": 3.73
  },
  {
    "id": 1886,
    "title": "Sheck Wes - Mo Bamba (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9YsT_qIziDI",
    "duration": 3.3
  },
  {
    "id": 1887,
    "title": "CNCO - Mamita (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EAamam1pyyQ",
    "duration": 3.12
  },
  {
    "id": 1888,
    "title": "Labrinth -  Still Don't Know My Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8EB2iwEvE4s",
    "duration": 3.05
  },
  {
    "id": 1889,
    "title": "Tove Lo and Hippie Sabotage - Stay High (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s2YDvHj4rEE",
    "duration": 4.6
  },
  {
    "id": 1890,
    "title": "DJ Khaled ft. Justin Bieber, Chance The Rapper, Quavo - No Brainer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aQHjf2rrnZ8",
    "duration": 4.43
  },
  {
    "id": 1891,
    "title": "Ellie Goulding - Beating Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pfi5VycP0ug",
    "duration": 3.88
  },
  {
    "id": 1892,
    "title": "Hayley Kiyoko - Girls Like Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BVWUB8VMuiI",
    "duration": 4.3
  },
  {
    "id": 1893,
    "title": "Melanie Martinez - Orange Juice (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sibriJbzZQM",
    "duration": 3.87
  },
  {
    "id": 1894,
    "title": "Ariana Grande - 7 rings (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=GIuAye8u_v8",
    "duration": 3.2
  },
  {
    "id": 1895,
    "title": "The Veronicas - You Ruin Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4i_EpEJqbRw",
    "duration": 4.13
  },
  {
    "id": 1896,
    "title": "Lyn Lapid - Producer Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JfslRemEt-M",
    "duration": 2.72
  },
  {
    "id": 1897,
    "title": "Panic! At The Disco - Hey Look Ma, I Made It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_HNMX3dr8_U",
    "duration": 3.05
  },
  {
    "id": 1898,
    "title": "Fall Out Boy - Uma Thurman (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qw-E5IqQ4MU",
    "duration": 4.18
  },
  {
    "id": 1899,
    "title": "Christina Perri - A Thousand Years (Lullaby) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IhGn__Prgrs",
    "duration": 3.02
  },
  {
    "id": 1900,
    "title": "Victorious - It's Not Christmas Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v1RMIznbpFs",
    "duration": 2.93
  },
  {
    "id": 1901,
    "title": "Tory Lanez - Say It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jIi_6LxcEsk",
    "duration": 4.53
  },
  {
    "id": 1902,
    "title": "Anne-Marie - Perfect To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mj9i9OqfHSA",
    "duration": 3.48
  },
  {
    "id": 1903,
    "title": "Studio Killers - Jenny (I Wanna Ruin Our Friendship) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ln98fP6ADS8",
    "duration": 3.93
  },
  {
    "id": 1904,
    "title": "Doja Cat - Mooo! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UhcMtfvilqo",
    "duration": 4.87
  },
  {
    "id": 1905,
    "title": "Taylor Swift - Beautiful Ghosts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tnU5FVhE7d4",
    "duration": 4.7
  },
  {
    "id": 1906,
    "title": "Bea Miller - Young Blood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wD88yyVSdZU",
    "duration": 4.0
  },
  {
    "id": 1907,
    "title": "Bazzi - I.F.L.Y (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WG3x0Ofe1K0",
    "duration": 3.08
  },
  {
    "id": 1908,
    "title": "Nicki Minaj ft. Lil Wayne - Good Form (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AJcz7PRb7cU",
    "duration": 4.18
  },
  {
    "id": 1909,
    "title": "James Smith - Tell Me That You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6r1zF7QAeqk",
    "duration": 3.42
  },
  {
    "id": 1910,
    "title": "Miley Cyrus - Slide Away (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zUL3luiUzVE",
    "duration": 3.9
  },
  {
    "id": 1911,
    "title": "Years & Years - Shine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dKQW7Bsz_R0",
    "duration": 4.57
  },
  {
    "id": 1912,
    "title": "Carly Pearce, Lee Brice - I Hope You're Happy Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3VP2PkzM_nE",
    "duration": 3.62
  },
  {
    "id": 1913,
    "title": "Omi - Hula Hoop (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KlEimTUMaWU",
    "duration": 3.97
  },
  {
    "id": 1914,
    "title": "Selena Gomez - Perfect (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bIUME7pcACA",
    "duration": 4.63
  },
  {
    "id": 1915,
    "title": "Pitbull ft. Ne-Yo - Time Of Our Lives (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mWaO4gvjG0E",
    "duration": 4.23
  },
  {
    "id": 1916,
    "title": "Zara Larsson - Ruin My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j2mzH2zkV8w",
    "duration": 3.35
  },
  {
    "id": 1917,
    "title": "R5 - (I Can't) Forget About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dxE-FrLAMuI",
    "duration": 3.88
  },
  {
    "id": 1918,
    "title": "Tom Odell - Heal (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DaJ8IOg8yPM",
    "duration": 3.53
  },
  {
    "id": 1919,
    "title": "Sam Smith - Drowning Shadows (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D5qBdppqOAc",
    "duration": 4.82
  },
  {
    "id": 1920,
    "title": "Pharrell Williams - Freedom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_gP1MePb1Gk",
    "duration": 3.12
  },
  {
    "id": 1921,
    "title": "Taylor Swift - State Of Grace (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=euAnSu99z1c",
    "duration": 5.32
  },
  {
    "id": 1922,
    "title": "Taylor Swift - I Forgot That You Existed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1Ciudf819wA",
    "duration": 3.8
  },
  {
    "id": 1923,
    "title": "Sia - Santa's Coming For Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z7iaZ_7_IJA",
    "duration": 3.92
  },
  {
    "id": 1924,
    "title": "Anna Clendening  - Boys Like You (Acoustic) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D62Pc92QkpA",
    "duration": 4.43
  },
  {
    "id": 1925,
    "title": "Rich Homie Quan - Flex (Ooh, Ooh, Ooh) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=N6c6ayaZs9g",
    "duration": 3.28
  },
  {
    "id": 1926,
    "title": "Rihanna - Shut Up And Drive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fPVo9MnoiEc",
    "duration": 4.15
  },
  {
    "id": 1927,
    "title": "Alesso vs OneRepublic - If I Lose Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vnONN4Lv3t8",
    "duration": 3.82
  },
  {
    "id": 1928,
    "title": "Anne-Marie - Heavy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Sj5qjGmGfcU",
    "duration": 3.15
  },
  {
    "id": 1929,
    "title": "Jack and Jack - Like That (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Hfw55F2Qg9c",
    "duration": 4.13
  },
  {
    "id": 1930,
    "title": "Foushe\u0301e - Deep End (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4_FtDjnyf3M",
    "duration": 2.85
  },
  {
    "id": 1931,
    "title": "One Direction - One Way or Another (Teenage Kicks) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lt7mkYREVEg",
    "duration": 2.73
  },
  {
    "id": 1932,
    "title": "Demi Lovato ft. Cher Lloyd - Really Don't Care (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=F7TUimZrlGQ",
    "duration": 3.65
  },
  {
    "id": 1933,
    "title": "Cash Cash and Bebe Rexha - Take Me Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5rCYIi0-NEo",
    "duration": 3.78
  },
  {
    "id": 1934,
    "title": "Calum Scott, Lyodra - Heaven (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fM8BLWGwyIw",
    "duration": 3.35
  },
  {
    "id": 1935,
    "title": "Charlie Puth - The Way I Am (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mv9ZQFIsplc",
    "duration": 3.43
  },
  {
    "id": 1936,
    "title": "Eva Cassidy - Songbird (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ripaCP9HPX4",
    "duration": 4.05
  },
  {
    "id": 1937,
    "title": "Billie Eilish - Ocean Eyes (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=xJKKopkyuDw",
    "duration": 3.77
  },
  {
    "id": 1938,
    "title": "One Direction - Act My Age (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qvh7rnqx-VI",
    "duration": 3.67
  },
  {
    "id": 1939,
    "title": "Halsey - Eyes Closed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=odDA2rs-G9M",
    "duration": 3.83
  },
  {
    "id": 1940,
    "title": "Enrique Iglesias ft. Nicole Scherzinger - Heartbeat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MOmHq7yHF1Q",
    "duration": 4.57
  },
  {
    "id": 1941,
    "title": "Machine Gun Kelly - Let You Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ww5ejsBriBM",
    "duration": 3.3
  },
  {
    "id": 1942,
    "title": "Luke Combs - Even Though I'm Leaving (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qY4B6BYzAXQ",
    "duration": 4.05
  },
  {
    "id": 1943,
    "title": "Anne-Marie - Her (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g3a14E6_Hlo",
    "duration": 3.25
  },
  {
    "id": 1944,
    "title": "Bebe Rexha ft. Lil Wayne - The Way I Are (Dance With Somebody) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8jpENg-mnKo",
    "duration": 3.53
  },
  {
    "id": 1945,
    "title": "ABBA - My Love, My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ljf3RDTAM4s",
    "duration": 4.18
  },
  {
    "id": 1946,
    "title": "Billie Eilish - i love you (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=l4vicxPeA3c",
    "duration": 5.12
  },
  {
    "id": 1947,
    "title": "MKTO - American Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=L7glEAQPKwY",
    "duration": 4.1
  },
  {
    "id": 1948,
    "title": "Miley Cyrus - Mother's Daughter (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=siQH7qA7zvg",
    "duration": 3.75
  },
  {
    "id": 1949,
    "title": "Post Malone - Hollywood's Bleeding (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=y3hYZJnyN2Y",
    "duration": 2.93
  },
  {
    "id": 1950,
    "title": "Deniece Williams - Let's Hear It For The Boy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CucVxsLzUjo",
    "duration": 4.32
  },
  {
    "id": 1951,
    "title": "Silk City, Dua Lipa - Electricity (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XLCfV73zW_Q",
    "duration": 4.32
  },
  {
    "id": 1952,
    "title": "Jason Derulo - Get Ugly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I1i9FIue6vk",
    "duration": 3.83
  },
  {
    "id": 1953,
    "title": "Camila Cabello ft. Quavo - OMG (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fRvhoHcOrrE",
    "duration": 4.18
  },
  {
    "id": 1954,
    "title": "Backstreet Boys - All I Have To Give (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pHZJDruEBj0",
    "duration": 4.8
  },
  {
    "id": 1955,
    "title": "Topic, A7S - Breaking Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NzokKiTxfnA",
    "duration": 3.17
  },
  {
    "id": 1956,
    "title": "Jorja Smith - The One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UJYGsBdMyDY",
    "duration": 3.48
  },
  {
    "id": 1957,
    "title": "Olivia Rodrigo - happier (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=f0WGcng_NQI",
    "duration": 3.05
  },
  {
    "id": 1958,
    "title": "Ava Max - Who's Laughing Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k0kXvS1il-o",
    "duration": 3.43
  },
  {
    "id": 1959,
    "title": "The La's - There She Goes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Bxgvg97oca0",
    "duration": 3.05
  },
  {
    "id": 1960,
    "title": "R.E.M. - It's The End Of The World As We Know It (And I Feel Fine) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oxxpyTw8U2U",
    "duration": 4.48
  },
  {
    "id": 1961,
    "title": "Alan Walker ft. Gavin James - Tired (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V9vY5Unu06k",
    "duration": 3.6
  },
  {
    "id": 1962,
    "title": "Fall Out Boy ft. Demi Lovato - Irresistible (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r2U4YL-f91c",
    "duration": 4.08
  },
  {
    "id": 1963,
    "title": "Ava Max - Christmas Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ra-HNUFAcaU",
    "duration": 3.18
  },
  {
    "id": 1964,
    "title": "Noah Cyrus - Stay Together (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=agnsQRoInFE",
    "duration": 3.6
  },
  {
    "id": 1965,
    "title": "The Vamps & Matoma - All Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KlWvgxsPk74",
    "duration": 3.85
  },
  {
    "id": 1966,
    "title": "Marshmello & Kane Brown - One Thing Right (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jxfXf69xRCM",
    "duration": 3.3
  },
  {
    "id": 1967,
    "title": "Billie Eilish - idontwannabeyouanymore (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=a-6TcHb2x1A",
    "duration": 3.8
  },
  {
    "id": 1968,
    "title": "Olivia Rodrigo - drivers license (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=vGCmAYof0vk",
    "duration": 4.18
  },
  {
    "id": 1969,
    "title": "ZAYN - Entertainer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=j1kepXCOu10",
    "duration": 3.72
  },
  {
    "id": 1970,
    "title": "Britney Spears - Ooh La La (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nNcTFDHEyes",
    "duration": 4.48
  },
  {
    "id": 1971,
    "title": "Neiked feat. Dyo - Sexual (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MbA79Qe2Jzo",
    "duration": 3.77
  },
  {
    "id": 1972,
    "title": "Kelly Clarkson - Catch My Breath (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Hh_9KtUL3hU",
    "duration": 4.47
  },
  {
    "id": 1973,
    "title": "twenty one pilots - My Blood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=naZyZzr1Emc",
    "duration": 4.27
  },
  {
    "id": 1974,
    "title": "Blanco Brown - The Git Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yrG-VAcbCb0",
    "duration": 3.6
  },
  {
    "id": 1975,
    "title": "Kelly Clarkson - Mr Know It All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DvBvNnzwdzU",
    "duration": 4.23
  },
  {
    "id": 1976,
    "title": "Sigrid - Don't Kill My Vibe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IlnDjUtKMck",
    "duration": 3.32
  },
  {
    "id": 1977,
    "title": "Why Don't We - Trust Fund Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UFxp9yklnHA",
    "duration": 3.72
  },
  {
    "id": 1978,
    "title": "Olivia O'Brien - Empty (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s_uRP4zLxk8",
    "duration": 4.05
  },
  {
    "id": 1979,
    "title": "Halsey ft. Lauren Jauregui - Strangers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DHP9Mm4Umlg",
    "duration": 4.03
  },
  {
    "id": 1980,
    "title": "The Vamps - Last Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HyI18YcqCg8",
    "duration": 3.52
  },
  {
    "id": 1981,
    "title": "Little Big Town - Better Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OZzvW_6nKOI",
    "duration": 4.77
  },
  {
    "id": 1982,
    "title": "Usher - I Don't Mind ft. Juicy J (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7DumTG7688U",
    "duration": 4.48
  },
  {
    "id": 1983,
    "title": "Migos - T-Shirt (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cYAqQC_n-OA",
    "duration": 4.27
  },
  {
    "id": 1984,
    "title": "The 1975 - The Sound (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oh5WsfZVVrE",
    "duration": 4.65
  },
  {
    "id": 1985,
    "title": "Travis Scott - Antidote (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3s7kBlAiNK4",
    "duration": 4.85
  },
  {
    "id": 1986,
    "title": "Meghan Trainor - 3AM (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Q80cDvj2L3o",
    "duration": 3.65
  },
  {
    "id": 1987,
    "title": "Zella Day - East Of Eden (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vc0rxHPxuek",
    "duration": 3.67
  },
  {
    "id": 1988,
    "title": "Jonas Brothers - Like It's Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VlFVFTNcz9A",
    "duration": 3.73
  },
  {
    "id": 1989,
    "title": "Lil Nas X, Cardi B - Rodeo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CHxcL_EXa3Q",
    "duration": 2.95
  },
  {
    "id": 1990,
    "title": "Clean Bandit - Real Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hwjzQ25cOdM",
    "duration": 3.95
  },
  {
    "id": 1991,
    "title": "TINI, Karol G - Princesa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T5ScMCvBGss",
    "duration": 3.85
  },
  {
    "id": 1992,
    "title": "One Direction - Gotta Be You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rvRqiCzBDZA",
    "duration": 4.15
  },
  {
    "id": 1993,
    "title": "lovelytheband - broken (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CROH2DvcybY",
    "duration": 3.55
  },
  {
    "id": 1994,
    "title": "benny blanco & Juice WRLD ft. Brendon Urie - Roses (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wh0wBurqWjQ",
    "duration": 4.05
  },
  {
    "id": 1995,
    "title": "Slade - Merry Xmas Everybody (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0m3V3gOUD2w",
    "duration": 3.88
  },
  {
    "id": 1996,
    "title": "Chris Brown - Don't Wake Me Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NfJXKVq3bTo",
    "duration": 4.03
  },
  {
    "id": 1997,
    "title": "Jessie J and 2 Chainz - Burnin' Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YPANAPBjP0c",
    "duration": 3.97
  },
  {
    "id": 1998,
    "title": "Debby Boone - You Light Up My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oygfegm6Pjk",
    "duration": 4.45
  },
  {
    "id": 1999,
    "title": "Galantis - Runaway (U & I) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yTXNX8TGWxI",
    "duration": 4.3
  },
  {
    "id": 2000,
    "title": "Diana Ross - I'm Coming Out (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SAwx-A0snUQ",
    "duration": 5.83
  },
  {
    "id": 2001,
    "title": "Meghan Trainor - No Good For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3-jf58-XDYs",
    "duration": 4.25
  },
  {
    "id": 2002,
    "title": "OneRepublic - Stop And Stare (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i2RjSLEMj60",
    "duration": 4.07
  },
  {
    "id": 2003,
    "title": "Ansel Elgort - Supernova (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=z8B6_PFXDEA",
    "duration": 3.5
  },
  {
    "id": 2004,
    "title": "Mashmello x Lil Peep - Spotlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZziQWyu_XSU",
    "duration": 3.22
  },
  {
    "id": 2005,
    "title": "Flo Rida - GDFR ft. Sage The Gemini and Lookas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yCYin3gFFCE",
    "duration": 3.67
  },
  {
    "id": 2006,
    "title": "Damien Rice - Cannonball (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0ZZL5nj8fVo",
    "duration": 4.12
  },
  {
    "id": 2007,
    "title": "Kacey Musgraves - Space Cowboy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=noI9Rbb3uhw",
    "duration": 3.77
  },
  {
    "id": 2008,
    "title": "Camila Cabello, Ed Sheeran - Bam Bam (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2ctitUsccu0",
    "duration": 3.83
  },
  {
    "id": 2009,
    "title": "Shawn Mendes - Nervous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oAHBQ55tQAw",
    "duration": 3.12
  },
  {
    "id": 2010,
    "title": "Conan Gray - Heather (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=QO0ucFnssKI",
    "duration": 3.45
  },
  {
    "id": 2011,
    "title": "Billie Eilish - goodbye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n3RvVXmUtik",
    "duration": 2.32
  },
  {
    "id": 2012,
    "title": "MarMar Oso - Ruthless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bJ31_Nx0ni4",
    "duration": 4.15
  },
  {
    "id": 2013,
    "title": "Lupe Fiasco & Guy Sebastian - Battle Scars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_vx_Co2Hwuo",
    "duration": 4.6
  },
  {
    "id": 2014,
    "title": "The Wanted - Chasing The Sun (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WQTTfkzWvGI",
    "duration": 3.55
  },
  {
    "id": 2015,
    "title": "Fifth Harmony Feat. Ty Dolla $ign - Work From Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=255bFXQUqhk",
    "duration": 3.87
  },
  {
    "id": 2016,
    "title": "twenty one pilots - Nico And The Niners (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Vd_WTH_ZpJg",
    "duration": 4.27
  },
  {
    "id": 2017,
    "title": "Taylor Swift - You're Not Sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hrGJbnoByAA",
    "duration": 4.82
  },
  {
    "id": 2018,
    "title": "Lorde - Perfect Places (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hELT-kYcugw",
    "duration": 3.88
  },
  {
    "id": 2019,
    "title": "Bebe Rexha - You Can't Stop The Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uEX4Z4lHS0c",
    "duration": 3.07
  },
  {
    "id": 2020,
    "title": "MyLifeAsEva - Literally My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mMEdoCG1MH0",
    "duration": 3.97
  },
  {
    "id": 2021,
    "title": "Who Is Fancy ft. Ariana Grande & Meghan Trainor - Boys Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZpK5dZgoC14",
    "duration": 3.77
  },
  {
    "id": 2022,
    "title": "The Chainsmokers ft. Kelsea Ballerini - This Feeling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tXORQ0QV29Q",
    "duration": 3.45
  },
  {
    "id": 2023,
    "title": "Selena Gomez & The Scene - Naturally (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RpNlk3k0b0Q",
    "duration": 3.5
  },
  {
    "id": 2024,
    "title": "Ellie Goulding - Army (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PFz-skg72zc",
    "duration": 4.5
  },
  {
    "id": 2025,
    "title": "Sara Kays - Remember That Night? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4KUoIbvtqjA",
    "duration": 3.95
  },
  {
    "id": 2026,
    "title": "Juice WRLD - Armed & Dangerous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oljV6CWOEUQ",
    "duration": 3.3
  },
  {
    "id": 2027,
    "title": "Zombies 2 - We Got This (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mbPB3rs9_TE",
    "duration": 3.57
  },
  {
    "id": 2028,
    "title": "Tove Lo - Cool Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YenRFrfLCBQ",
    "duration": 3.88
  },
  {
    "id": 2029,
    "title": "Megan Thee Stallion - Hot Girl Summer (Karaoke Version) ft. Nicki Minaj, Ty Dolla $ign",
    "video_url": "https://www.youtube.com/watch?v=C05frvnB8m4",
    "duration": 3.7
  },
  {
    "id": 2030,
    "title": "Charlene - I've Never Been To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c-7tN-dtzIM",
    "duration": 4.28
  },
  {
    "id": 2031,
    "title": "Dua Lipa - Hotter Than Hell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qppiSoVLK8M",
    "duration": 3.55
  },
  {
    "id": 2032,
    "title": "5 Seconds Of Summer - Easier (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QHnY2RlUDAc",
    "duration": 3.03
  },
  {
    "id": 2033,
    "title": "Kelsea Ballerini - homecoming queen? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6aB6kkOOsDs",
    "duration": 3.17
  },
  {
    "id": 2034,
    "title": "Juice WRLD - Righteous (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TnAY41wAYNk",
    "duration": 3.95
  },
  {
    "id": 2035,
    "title": "OneRepublic - Kids (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AEbkkRn8i-Y",
    "duration": 4.33
  },
  {
    "id": 2036,
    "title": "Ariana Grande - fake smile (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nveMe31V9TQ",
    "duration": 3.88
  },
  {
    "id": 2037,
    "title": "Nicki Minaj ft. Ariana Grande - Bed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Jm4skE4VNh4",
    "duration": 3.58
  },
  {
    "id": 2038,
    "title": "The Crystals - Santa Claus Is Comin' To Town (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1_gLpOJWHC0",
    "duration": 3.57
  },
  {
    "id": 2039,
    "title": "Sabrina Carpenter - Shadows (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PYiY74QERJA",
    "duration": 3.4
  },
  {
    "id": 2040,
    "title": "Freya Ridings - Castles (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eC--YZUafss",
    "duration": 3.73
  },
  {
    "id": 2041,
    "title": "Naomi Scott - Speechless (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=QdSsCcRFfw8",
    "duration": 3.57
  },
  {
    "id": 2042,
    "title": "Lauv, Troye Sivan - i'm so tired... (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fuJi7FoGSio",
    "duration": 3.07
  },
  {
    "id": 2043,
    "title": "Justin Bieber - Catching Feelings (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1saC8_UNvyw",
    "duration": 4.37
  },
  {
    "id": 2044,
    "title": "Ben Haenow - Something I Need (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jv4tOx4btE8",
    "duration": 4.1
  },
  {
    "id": 2045,
    "title": "Ariana Grande and Victoria Mon\u00e9t  - MONOPOLY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2Mj3n7e2_7E",
    "duration": 3.02
  },
  {
    "id": 2046,
    "title": "Gabbie Hanna - Monster (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1aE6_R10zJA",
    "duration": 3.18
  },
  {
    "id": 2047,
    "title": "Anne Murray - I Just Fall In Love Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Mex3q9dMI-s",
    "duration": 2.9
  },
  {
    "id": 2048,
    "title": "We The Kingdom - Holy Water (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rdpRwSRh8g0",
    "duration": 4.5
  },
  {
    "id": 2049,
    "title": "Glee Cast - Teenage Dream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5_iMzBnR3tE",
    "duration": 4.08
  },
  {
    "id": 2050,
    "title": "China Anne McClain - Calling All The Monsters (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K7y0oTROSJM",
    "duration": 3.92
  },
  {
    "id": 2051,
    "title": "RaeLynn - Queens Don't (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8udZiDjxua0",
    "duration": 3.37
  },
  {
    "id": 2052,
    "title": "Tinashe ft. SchoolBoy Q - 2 On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Rizd4rFR6z0",
    "duration": 4.12
  },
  {
    "id": 2053,
    "title": "Camp Rock - Too Cool (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PubMRNXqUD8",
    "duration": 3.28
  },
  {
    "id": 2054,
    "title": "Fifth Harmony - Don't Say You Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wd87finzlo0",
    "duration": 3.47
  },
  {
    "id": 2055,
    "title": "Ariana Grande - in my head (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RgIqSc_orts",
    "duration": 3.72
  },
  {
    "id": 2056,
    "title": "Tate McRae - chaotic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Zz0gmnFSkLo",
    "duration": 3.17
  },
  {
    "id": 2057,
    "title": "Miley Cyrus - Flowers (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=mBTg_mSuFSE",
    "duration": 3.67
  },
  {
    "id": 2058,
    "title": "Taylor Swift  - False God (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gyEwq68GCIM",
    "duration": 3.6
  },
  {
    "id": 2059,
    "title": "Machine Gun Kelly ft. blackbear - my ex's best friend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R2NyRaSoC8U",
    "duration": 2.77
  },
  {
    "id": 2060,
    "title": "Frances Forever - Space Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=R-JgdkBHlZo",
    "duration": 4.25
  },
  {
    "id": 2061,
    "title": "Madison Beer - Unbreakable (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HemnO1qL1xA",
    "duration": 3.93
  },
  {
    "id": 2062,
    "title": "Charlie Puth - Attention (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=Zoa3xOECvqI",
    "duration": 3.63
  },
  {
    "id": 2063,
    "title": "Ti\u00ebsto - Red Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=483Su5V0wGA",
    "duration": 4.12
  },
  {
    "id": 2064,
    "title": "Billie Eilish - WHEN I WAS OLDER (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wc4Twxdk44s",
    "duration": 4.65
  },
  {
    "id": 2065,
    "title": "Billie Eilish - WHEN I WAS OLDER (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Wc4Twxdk44s",
    "duration": 4.65
  },
  {
    "id": 2066,
    "title": "347aidan - Dancing In My Room (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MEYOaImcGZk",
    "duration": 3.43
  },
  {
    "id": 2067,
    "title": "Charlie Puth - I Won't Tell A Soul (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KAlO0CHZkAo",
    "duration": 3.8
  },
  {
    "id": 2068,
    "title": "Anne-Marie - BIRTHDAY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MzWPiG8l1VU",
    "duration": 3.4
  },
  {
    "id": 2069,
    "title": "Fetty Wap - Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Xf01s-uyIU4",
    "duration": 5.72
  },
  {
    "id": 2070,
    "title": "Imagine Dragons - I Bet My Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CSB0qayOf00",
    "duration": 3.53
  },
  {
    "id": 2071,
    "title": "Meghan Trainor - No Excuses (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6hmzFslVd6U",
    "duration": 2.92
  },
  {
    "id": 2072,
    "title": "The Chainsmokers ft. 5 Seconds Of Summer - Who Do You Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5USk-UoZb74",
    "duration": 4.03
  },
  {
    "id": 2073,
    "title": "Taylor Swift - I Wish You Would (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kyAxRFUGZek",
    "duration": 3.78
  },
  {
    "id": 2074,
    "title": "Zedd, Katy Perry - 365 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rYNbmf-z8tg",
    "duration": 3.28
  },
  {
    "id": 2075,
    "title": "The 1975 - A Change Of Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sgIMKZt0RYk",
    "duration": 5.23
  },
  {
    "id": 2076,
    "title": "Ariana Grande - Snow In California (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9_XR3VFabtY",
    "duration": 4.15
  },
  {
    "id": 2077,
    "title": "Avicii ft. Robbie Williams - The Days (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lGCvdDoby2w",
    "duration": 4.12
  },
  {
    "id": 2078,
    "title": "Peach Tree Rascals - Mariposa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v69miE-fjaw",
    "duration": 3.67
  },
  {
    "id": 2079,
    "title": "David Guetta and Ne-Yo and Akon - Play Hard (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ly9ot1bTEhE",
    "duration": 3.8
  },
  {
    "id": 2080,
    "title": "Lil Uzi Vert, Oh Wonder ft. Nicki Minaj - The Way Life Goes (Remix) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=axVfg9qI0UU",
    "duration": 4.77
  },
  {
    "id": 2081,
    "title": "Trevor Daniel - Past Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7om12uqEO4A",
    "duration": 3.47
  },
  {
    "id": 2082,
    "title": "Ruth B - Golden (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WtjdN5aE_qk",
    "duration": 4.93
  },
  {
    "id": 2083,
    "title": "Au/Ra - Panic Room (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fv1V33y6SUs",
    "duration": 4.2
  },
  {
    "id": 2084,
    "title": "Juicy J, Wiz Khalifa, Ty Dolla $ign - Shell Shocked (TMNT Theme) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KJf5S46Jv8A",
    "duration": 3.7
  },
  {
    "id": 2085,
    "title": "Gjon's Tears - Tout l'Univers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OI61ou01NAM",
    "duration": 3.45
  },
  {
    "id": 2086,
    "title": "Doja Cat ft. Gucci Mane - Like That (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=61Un7YQ5vqI",
    "duration": 2.85
  },
  {
    "id": 2087,
    "title": "Little Mix ft. Saweetie - Confetti (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ecuXrFTOlAQ",
    "duration": 3.43
  },
  {
    "id": 2088,
    "title": "Avicii ft. Rita Ora - Lonely Together (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AGdiPC9iKgM",
    "duration": 3.42
  },
  {
    "id": 2089,
    "title": "Ed Sheeran & Justin Bieber - I Don't Care (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=kaUNP9xhtJ8",
    "duration": 4.37
  },
  {
    "id": 2090,
    "title": "Britney Spears - Perfume (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vh32e2knTF8",
    "duration": 4.32
  },
  {
    "id": 2091,
    "title": "AJ Mitchell -  I Don't Want You Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7TnXHuETOdQ",
    "duration": 3.92
  },
  {
    "id": 2092,
    "title": "Kelly Clarkson - I Don't Think About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5Dyi8kHw9-k",
    "duration": 4.12
  },
  {
    "id": 2093,
    "title": "Tori Kelly - Unbreakable Smile (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i86mx3z3Hck",
    "duration": 4.17
  },
  {
    "id": 2094,
    "title": "One Direction - I Want (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MxmlMePm7fs",
    "duration": 3.2
  },
  {
    "id": 2095,
    "title": "Stellar - Ashes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EIyfNOhIQ7s",
    "duration": 3.18
  },
  {
    "id": 2096,
    "title": "Fifth Harmony - Write On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c0rWoJzdhsQ",
    "duration": 4.05
  },
  {
    "id": 2097,
    "title": "David Guetta ft. Nicki Minaj - Turn Me On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RN-9g7OISl4",
    "duration": 3.67
  },
  {
    "id": 2098,
    "title": "Tory Lanez - Luv (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e5xN1SRF8Zc",
    "duration": 4.35
  },
  {
    "id": 2099,
    "title": "Lady Gaga - Stupid Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MmGmwn09LdU",
    "duration": 3.53
  },
  {
    "id": 2100,
    "title": "Mud - Lonely This Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_6obMYlPqf8",
    "duration": 4.12
  },
  {
    "id": 2101,
    "title": "Bebe Rexha - Last Hurrah (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=71yhIc5cz2k",
    "duration": 2.82
  },
  {
    "id": 2102,
    "title": "Lewis Capaldi - Lost On You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8v9pFbX0Pfs",
    "duration": 3.57
  },
  {
    "id": 2103,
    "title": "Rihanna - Diamonds (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=6RdZmSag8Hs",
    "duration": 3.65
  },
  {
    "id": 2104,
    "title": "Taylor Dayne - Tell It To My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=A3wF9EMTNvM",
    "duration": 4.08
  },
  {
    "id": 2105,
    "title": "Baby Ariel - The New Kid In Town from \"Zombies 2\" (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VaBUu7VEycM",
    "duration": 3.73
  },
  {
    "id": 2106,
    "title": "Lena - Satellite (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DAlARmMKgvs",
    "duration": 3.3
  },
  {
    "id": 2107,
    "title": "Oliver Tree, Robin Schulz - Miss You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=h6HX9kqEj2k",
    "duration": 3.37
  },
  {
    "id": 2108,
    "title": "Jonas Blue ft. RAYE - By Your Side (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rcarTN2aHYU",
    "duration": 3.73
  },
  {
    "id": 2109,
    "title": "Selena Gomez - Look At Her Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rnbQoVsiu2g",
    "duration": 3.13
  },
  {
    "id": 2110,
    "title": "Zedd, Kesha - True Colors (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uBRuA20sX_s",
    "duration": 4.3
  },
  {
    "id": 2111,
    "title": "Lady Gaga - Joanne (Piano Version) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Oa3h2JV3ZEM",
    "duration": 5.12
  },
  {
    "id": 2112,
    "title": "Camila Cabello - Easy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qsazv1M6-6I",
    "duration": 3.68
  },
  {
    "id": 2113,
    "title": "HSMTMTS - Breaking Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GVtyZlmWMGc",
    "duration": 2.97
  },
  {
    "id": 2114,
    "title": "Ellie Goulding, Diplo, Swae Lee - Close To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yAxabkR8-9s",
    "duration": 3.27
  },
  {
    "id": 2115,
    "title": "Joey Graceffa - Don't Wait (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WpBqBOsYGNc",
    "duration": 3.72
  },
  {
    "id": 2116,
    "title": "Oh Wonder - Lose It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x6d5SPKrn60",
    "duration": 4.27
  },
  {
    "id": 2117,
    "title": "Kendrick Lamar - ELEMENT. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jHvv2cnXBu4",
    "duration": 3.68
  },
  {
    "id": 2118,
    "title": "Bad Bunny, Drake - Mia (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r_7Zt4SrB34",
    "duration": 3.68
  },
  {
    "id": 2119,
    "title": "Jidenna ft. Roman GianArthur - Classic Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VXv9TQSblJk",
    "duration": 4.28
  },
  {
    "id": 2120,
    "title": "Little Mix ft. Ty Dolla $ign - Think About Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HIGAhperWjc",
    "duration": 4.13
  },
  {
    "id": 2121,
    "title": "Ramz - Barking (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4YsCpXeyqnU",
    "duration": 3.35
  },
  {
    "id": 2122,
    "title": "Juice WRLD ft. Lil Uzi Vert - Wasted (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EWIDQSEus5k",
    "duration": 4.65
  },
  {
    "id": 2123,
    "title": "Jhene\u0301 Aiko ft. Rae Sremmurd - Sativa (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6xT5f8UIryc",
    "duration": 5.42
  },
  {
    "id": 2124,
    "title": "Lauren Spencer-Smith - Narcissist (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RwvpGhUffKU",
    "duration": 3.13
  },
  {
    "id": 2125,
    "title": "Blue O\u0308yster Cult - (Don't Fear) The Reaper (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vLwboi5VkMU",
    "duration": 5.13
  },
  {
    "id": 2126,
    "title": "Mimi Webb - Good Without (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FxFFSZxbDPQ",
    "duration": 3.4
  },
  {
    "id": 2127,
    "title": "Cartoons - Witch Doctor (Ooh Eeh Ooh Ah Aah Ting Tang Walla Walla Bing Bang) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YKHzMvXdDM8",
    "duration": 3.43
  },
  {
    "id": 2128,
    "title": "ZAYN, Zhavia Ward - A Whole New World (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=Ujm3LnNqVvE",
    "duration": 4.15
  },
  {
    "id": 2129,
    "title": "dodie -  Human (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RWhh72skBKk",
    "duration": 3.45
  },
  {
    "id": 2130,
    "title": "Jason Derulo - The Other Side (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w_Bp1T32EUk",
    "duration": 4.07
  },
  {
    "id": 2131,
    "title": "Madison Beer - Dear Society (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C07BcreJMsY",
    "duration": 3.23
  },
  {
    "id": 2132,
    "title": "Vedo - You Got It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JhYhNNW3pSI",
    "duration": 3.63
  },
  {
    "id": 2133,
    "title": "ZAYN - BeFoUr (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QBrDvR0EE1E",
    "duration": 4.13
  },
  {
    "id": 2134,
    "title": "Billie Eilish, ROSALI\u0301A - Lo Vas A Olvidar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o50EWLhATXM",
    "duration": 3.68
  },
  {
    "id": 2135,
    "title": "Jermaine Stewart - We Don't Have To Take Our Clothes Off (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qPod0NSNSB8",
    "duration": 4.6
  },
  {
    "id": 2136,
    "title": "Rita Ora - Poison (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ILIY1Fvh-Qw",
    "duration": 3.8
  },
  {
    "id": 2137,
    "title": "One Direction - Clouds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bRSQsgPzU4g",
    "duration": 4.22
  },
  {
    "id": 2138,
    "title": "Katy Perry - Daisies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d6UJJcoMaYA",
    "duration": 3.25
  },
  {
    "id": 2139,
    "title": "Backstreet Boys - Don't Go Breaking My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=E9xYFGAN3Mk",
    "duration": 3.98
  },
  {
    "id": 2140,
    "title": "Billie Eilish, Vince Staples - &burn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zyn8ft1jBT4",
    "duration": 3.28
  },
  {
    "id": 2141,
    "title": "Tinie Tempah ft. Zara Larsson - Girls Like (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zfKgUKBnWmw",
    "duration": 3.82
  },
  {
    "id": 2142,
    "title": "Coi Leray - Players (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3hQtdpZjuwE",
    "duration": 2.53
  },
  {
    "id": 2143,
    "title": "5 Seconds Of Summer - What I Like About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FOi-1F4jg5o",
    "duration": 2.85
  },
  {
    "id": 2144,
    "title": "Luke Bryan - Knockin' Boots (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-HgxYnvguFw",
    "duration": 3.77
  },
  {
    "id": 2145,
    "title": "carolesdaughter - Violent (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8TBn8iRl9vQ",
    "duration": 2.85
  },
  {
    "id": 2146,
    "title": "The 1975 - Fallingforyou (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mRhsBemoqAc",
    "duration": 4.37
  },
  {
    "id": 2147,
    "title": "Disclosure ft. Sam Smith - Omen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_JmfQjsT13c",
    "duration": 4.45
  },
  {
    "id": 2148,
    "title": "Sophia Grace - Best Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3xi_rU1lshU",
    "duration": 4.63
  },
  {
    "id": 2149,
    "title": "Sia - You're Never Fully Dressed Without A Smile (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oq5cBDKnzkw",
    "duration": 3.67
  },
  {
    "id": 2150,
    "title": "Ella Eyre - If I Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7mQS9bI1640",
    "duration": 3.32
  },
  {
    "id": 2151,
    "title": "$uicideBoy$ - ...And To Those I Love, Thanks For Sticking Around (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ceu-tt3cZ3k",
    "duration": 2.98
  },
  {
    "id": 2152,
    "title": "The Common Linnets - Calm After The Storm (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NK7Prd-tJUk",
    "duration": 3.43
  },
  {
    "id": 2153,
    "title": "Panic! At The Disco - Girls / Girls / Boys (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kXaKroziqzM",
    "duration": 3.72
  },
  {
    "id": 2154,
    "title": "Pink - Blow Me (One Last Kiss) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HiNNU1yNmZ0",
    "duration": 4.63
  },
  {
    "id": 2155,
    "title": "Harry Styles - As It Was (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=seGYMjQsblo",
    "duration": 3.22
  },
  {
    "id": 2156,
    "title": "Machine Gun Kelly - Bloody Valentine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vEnPGNNgdLg",
    "duration": 3.85
  },
  {
    "id": 2157,
    "title": "Imagine Dragons - Zero (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aZ0aqG_8X7Q",
    "duration": 3.67
  },
  {
    "id": 2158,
    "title": "Miley Cyrus - Plastic Hearts (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YCg18GGi6_I",
    "duration": 3.82
  },
  {
    "id": 2159,
    "title": "Cashmere Cat ft. Ariana Grande - Adore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7O0aHoVMVMI",
    "duration": 3.87
  },
  {
    "id": 2160,
    "title": "Cheat Codes, Little Mix - Only You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=obHaUU2ARsA",
    "duration": 3.33
  },
  {
    "id": 2161,
    "title": "Will.I.Am and Justin Bieber - #thatPOWER (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ThDF47voqJs",
    "duration": 4.92
  },
  {
    "id": 2162,
    "title": "Leah McFall - I Will Survive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4_EQ0rs6Vqg",
    "duration": 2.62
  },
  {
    "id": 2163,
    "title": "Sam Smith - Too Good At Goodbyes (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=D7_8HFYctas",
    "duration": 4.15
  },
  {
    "id": 2164,
    "title": "Before You Exit - Clouds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_eZnrqEK2Ys",
    "duration": 4.87
  },
  {
    "id": 2165,
    "title": "Clara Mae - I'm Not Her (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l5BNEZQAC_E",
    "duration": 3.47
  },
  {
    "id": 2166,
    "title": "Conan Gray - Lookalike (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fzXwb0VBmrs",
    "duration": 3.98
  },
  {
    "id": 2167,
    "title": "Rossa - Hati Yang Kau Sakiti (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bSy0RaSPjw4",
    "duration": 4.12
  },
  {
    "id": 2168,
    "title": "Drake - Trophies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b9YPBnVx3B0",
    "duration": 3.57
  },
  {
    "id": 2169,
    "title": "Cliff Richard - Congratulations (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oYiagyqqWrI",
    "duration": 2.88
  },
  {
    "id": 2170,
    "title": "MAX ft. gnash - Lights Down Low (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DLjXt0c01Ng",
    "duration": 4.0
  },
  {
    "id": 2171,
    "title": "Ariana Grande - Sweetener (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mc7cOWlwnEY",
    "duration": 3.72
  },
  {
    "id": 2172,
    "title": "Ariana Grande - better off (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XFcBx-m_OR8",
    "duration": 3.08
  },
  {
    "id": 2173,
    "title": "Sia - Chandelier (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=qUP5mDujZrE",
    "duration": 4.25
  },
  {
    "id": 2174,
    "title": "Tate McRae -  you broke me first (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=EKG1iDJJuok",
    "duration": 3.08
  },
  {
    "id": 2175,
    "title": "Tie\u0308sto & Dzeko ft. Preme & Post Malone - Jackie Chan (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ou--0XxxPdU",
    "duration": 3.87
  },
  {
    "id": 2176,
    "title": "Sabrina Carpenter - Almost Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0Vvf0X7YYE0",
    "duration": 3.88
  },
  {
    "id": 2177,
    "title": "Hailee Steinfeld - Wrong Direction (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mib93OpvqY0",
    "duration": 4.35
  },
  {
    "id": 2178,
    "title": "twenty one pilots - Level Of Concern (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p9ms_vG6e6I",
    "duration": 3.83
  },
  {
    "id": 2179,
    "title": "Cher Lloyd - Swagger Jagger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6-cSmlY1t60",
    "duration": 3.67
  },
  {
    "id": 2180,
    "title": "Louis Tomlinson - Just Like You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6O0RRnCTzhY",
    "duration": 3.62
  },
  {
    "id": 2181,
    "title": "Ed Sheeran - Nina (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7T3FkcLgTzU",
    "duration": 4.05
  },
  {
    "id": 2182,
    "title": "Shawn Mendes ft. Khalid - Youth (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IrFEjSQ0EcM",
    "duration": 3.35
  },
  {
    "id": 2183,
    "title": "Alex Aiono - Work The Middle (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LbLgwcdPhkg",
    "duration": 3.97
  },
  {
    "id": 2184,
    "title": "Jacob Sartorius - All My Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TM8aw1fr4RI",
    "duration": 3.87
  },
  {
    "id": 2185,
    "title": "Blake Shelton with Gwen Stefani - Nobody But You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GCkSxPy-1tE",
    "duration": 3.52
  },
  {
    "id": 2186,
    "title": "Grouplove - Tongue Tied (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uQQntp2Jam8",
    "duration": 3.98
  },
  {
    "id": 2187,
    "title": "Anson Seabra - Walked Through Hell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_XCshM3W9eA",
    "duration": 3.97
  },
  {
    "id": 2188,
    "title": "Sia - I'm Still Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7rWHtN2sdIg",
    "duration": 4.25
  },
  {
    "id": 2189,
    "title": "ZAYN, PARTYNEXTDOOR - Still Got Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zFuryVNrq0M",
    "duration": 3.47
  },
  {
    "id": 2190,
    "title": "Austin Mahone - Dirty Work (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O2vhF-rARYc",
    "duration": 3.4
  },
  {
    "id": 2191,
    "title": "The 1975 - Sincerity Is Scary (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yAhsPDvn3uI",
    "duration": 3.8
  },
  {
    "id": 2192,
    "title": "TINI - Got Me Started (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ySmyrl1jLgE",
    "duration": 3.88
  },
  {
    "id": 2193,
    "title": "Louisa Johnson - So Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GsqF3WroG-Q",
    "duration": 3.75
  },
  {
    "id": 2194,
    "title": "Ella Henderson - Glow (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6cjnk0r_63k",
    "duration": 4.22
  },
  {
    "id": 2195,
    "title": "benny blanco, Juice WRLD  - Graduation (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w2WB9X4H3sk",
    "duration": 3.03
  },
  {
    "id": 2196,
    "title": "Lucy Spraggan - Last Night (Beer Fear) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fNOywuJ_5KI",
    "duration": 2.48
  },
  {
    "id": 2197,
    "title": "Ariana Grande, The Weeknd - off the table (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Otk-R5ZzsTE",
    "duration": 4.22
  },
  {
    "id": 2198,
    "title": "Iggy Azalea ft. MO - Beg For It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WDOjTDQPOTA",
    "duration": 3.28
  },
  {
    "id": 2199,
    "title": "The Chainsmokers - The One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zpXSTPUdrgc",
    "duration": 3.35
  },
  {
    "id": 2200,
    "title": "Why Don't We & Macklemore -  I Don't Belong In This Club (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qV-JFrzrzws",
    "duration": 4.07
  },
  {
    "id": 2201,
    "title": "twenty one pilots - Jumpsuit (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_5EtmQh5K1k",
    "duration": 4.23
  },
  {
    "id": 2202,
    "title": "5 Seconds Of Summer - Hey Everybody! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xcfNqmchwdE",
    "duration": 3.8
  },
  {
    "id": 2203,
    "title": "Kygo ft. OneRepublic - Stranger Things (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XRn8IBDAnkc",
    "duration": 3.88
  },
  {
    "id": 2204,
    "title": "Logan Paul - Outta My Hair (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4ayExqUfOhU",
    "duration": 3.07
  },
  {
    "id": 2205,
    "title": "Olly Murs ft. Travie McCoy - Wrapped Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vBm8NMIxjWY",
    "duration": 3.52
  },
  {
    "id": 2206,
    "title": "Cher Lloyd and T.I. - I Wish (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_A-zr1NqOKs",
    "duration": 3.8
  },
  {
    "id": 2207,
    "title": "Years & Years ft. Tove Lo - Desire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rMHGzmw3fSc",
    "duration": 4.07
  },
  {
    "id": 2208,
    "title": "Fifth Harmony ft. Fetty Wap - All In My Head (Flex) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JExZop1aqPU",
    "duration": 3.93
  },
  {
    "id": 2209,
    "title": "Iggy Azalea and T.I. - Change Your Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u2zxuW5nN5E",
    "duration": 4.07
  },
  {
    "id": 2210,
    "title": "Joji - TEST DRIVE (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Kcw4iJe90JY",
    "duration": 3.23
  },
  {
    "id": 2211,
    "title": "Dan + Shay - I Should Probably Go To Bed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4sRdfZMYU-M",
    "duration": 3.45
  },
  {
    "id": 2212,
    "title": "Michele Morrone - Hard For Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=76qpwPuaqIY",
    "duration": 3.2
  },
  {
    "id": 2213,
    "title": "Diplo ft. Morgan Wallen - Heartless (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T9AWDVVad00",
    "duration": 3.17
  },
  {
    "id": 2214,
    "title": "Galantis - Peanut Butter Jelly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TPVnV0q_Gm8",
    "duration": 3.92
  },
  {
    "id": 2215,
    "title": "Lucy Spraggan - Tea and Toast (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vejuDZqIwKg",
    "duration": 4.95
  },
  {
    "id": 2216,
    "title": "Selena Gomez - Me And My Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ERt4OQCSuhg",
    "duration": 4.08
  },
  {
    "id": 2217,
    "title": "Marshmello & Logic - EVERYDAY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=h1kScjF479Q",
    "duration": 3.77
  },
  {
    "id": 2218,
    "title": "Maggie Rogers - Light On (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x26kByG_Tf8",
    "duration": 4.18
  },
  {
    "id": 2219,
    "title": "Mike Posner - Please Don't Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XAp5mbiWfpE",
    "duration": 3.72
  },
  {
    "id": 2220,
    "title": "Becky G, Myke Towers - DOLLAR (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ls48orWTp3k",
    "duration": 3.68
  },
  {
    "id": 2221,
    "title": "Regina Spektor - You've Got Time (Karaoke Version) (OITNB Theme)",
    "video_url": "https://www.youtube.com/watch?v=7e0P-3OC5jM",
    "duration": 3.4
  },
  {
    "id": 2222,
    "title": "Jonas Brothers - Cool (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9hguoJLNobQ",
    "duration": 3.23
  },
  {
    "id": 2223,
    "title": "The Kid LAROI - So Done (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WVQkxIzlKWo",
    "duration": 2.48
  },
  {
    "id": 2224,
    "title": "Rixton - Hotel Ceiling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qoAsOuG4nW4",
    "duration": 3.48
  },
  {
    "id": 2225,
    "title": "Iggy Azalea - Bounce (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z5la7qf4EbI",
    "duration": 2.93
  },
  {
    "id": 2226,
    "title": "Dua Lipa - Hallucinate (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NorEzapRCiQ",
    "duration": 3.85
  },
  {
    "id": 2227,
    "title": "Disclosure ft. Lorde - Magnets (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ejYXswDqghM",
    "duration": 3.85
  },
  {
    "id": 2228,
    "title": "Neck Deep - In Bloom (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6YBWfoORoIs",
    "duration": 4.07
  },
  {
    "id": 2229,
    "title": "Becky G - Break A Sweat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BfxdKqJyPhc",
    "duration": 4.0
  },
  {
    "id": 2230,
    "title": "Alicia Keys and Kendrick Lamar - It's On Again (Karaoke Version) from 'The Amazing Spider-Man 2'",
    "video_url": "https://www.youtube.com/watch?v=LOtANEwl_74",
    "duration": 4.2
  },
  {
    "id": 2231,
    "title": "Breland - My Truck (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zSPwK2EFp0M",
    "duration": 3.07
  },
  {
    "id": 2232,
    "title": "Lil Baby & Gunna - Drip Too Hard (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6ZrpPTXTL04",
    "duration": 2.63
  },
  {
    "id": 2233,
    "title": "Kendrick Lamar - i (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nL9fXL1K2X8",
    "duration": 4.3
  },
  {
    "id": 2234,
    "title": "Katy Perry - Waking Up In Vegas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eDUiYL6Mr54",
    "duration": 3.63
  },
  {
    "id": 2235,
    "title": "Camila Cabello - Living Proof (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nlKHe2Ts0lY",
    "duration": 3.58
  },
  {
    "id": 2236,
    "title": "Nick Jonas - Levels (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7kKPkJQ9yc0",
    "duration": 3.3
  },
  {
    "id": 2237,
    "title": "Armin Van Buuren - This Is What It Feels Like (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pRWW6FENG7o",
    "duration": 3.73
  },
  {
    "id": 2238,
    "title": "NLE Choppa ft. Roddy Ricch - Walk 'Em Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eIKo7dooxe0",
    "duration": 3.15
  },
  {
    "id": 2239,
    "title": "Martin Garrix ft.  Bonn - High On Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=U399h9BI06g",
    "duration": 4.03
  },
  {
    "id": 2240,
    "title": "Kelly Clarkson - People Like Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e-ChngqFCe0",
    "duration": 4.68
  },
  {
    "id": 2241,
    "title": "Troye Sivan ft. Betty Who - HEAVEN (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xCaT4RuOrJY",
    "duration": 4.57
  },
  {
    "id": 2242,
    "title": "Ariana Grande - bad idea (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aw-agjuoyVg",
    "duration": 3.47
  },
  {
    "id": 2243,
    "title": "Ed Sheeran - Eraser (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0yd_pp02_oY",
    "duration": 4.13
  },
  {
    "id": 2244,
    "title": "Lady Gaga - Marry The Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e4la2-TxoPQ",
    "duration": 4.83
  },
  {
    "id": 2245,
    "title": "Freddie Mercury - Time Waits For No One (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Obsplk2Oxzc",
    "duration": 3.53
  },
  {
    "id": 2246,
    "title": "Laura Marano - Boombox (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IesptmydsYA",
    "duration": 3.77
  },
  {
    "id": 2247,
    "title": "Olivia Rodrigo - traitor (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=M-i3C_6Nkyk",
    "duration": 3.87
  },
  {
    "id": 2248,
    "title": "Juice WRLD & The Weeknd - Smile (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4Ijt0bN9xYA",
    "duration": 3.33
  },
  {
    "id": 2249,
    "title": "Taylor Swift - Soon You'll Get Better (Karaoke Version) feat. Dixie Chicks",
    "video_url": "https://www.youtube.com/watch?v=x8OawWigxBI",
    "duration": 3.63
  },
  {
    "id": 2250,
    "title": "INNA - Gimme Gimme (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KbnFlfRT4gE",
    "duration": 3.3
  },
  {
    "id": 2251,
    "title": "Little Mix - Break Up Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=S9eBE1VsISY",
    "duration": 3.75
  },
  {
    "id": 2252,
    "title": "peter kuli & jedwill - ok boomer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RMmwZIJ3uqk",
    "duration": 2.7
  },
  {
    "id": 2253,
    "title": "Charlie Puth -That's Hilarious (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RDSruwjK6GM",
    "duration": 2.58
  },
  {
    "id": 2254,
    "title": "Nicole Scherzinger - Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2jcPA9-BNmQ",
    "duration": 4.38
  },
  {
    "id": 2255,
    "title": "Gesaffelstein & The Weeknd -  Lost In The Fire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SHQBizSKGTE",
    "duration": 3.47
  },
  {
    "id": 2256,
    "title": "The Chainsmokers, Bebe Rexha - Call You Mine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jiipJz78VD8",
    "duration": 3.92
  },
  {
    "id": 2257,
    "title": "Jonas Brothers - What A Man Gotta Do (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fL7qK5ynYGg",
    "duration": 3.57
  },
  {
    "id": 2258,
    "title": "Drake ft. Rick Ross - Money In The Grave (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6b1IqNSWdRY",
    "duration": 3.3
  },
  {
    "id": 2259,
    "title": "Hey Violet - Guys My Age (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=epU0ayO75kc",
    "duration": 3.8
  },
  {
    "id": 2260,
    "title": "24kGoldn - CITY OF ANGELS (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=57dMSFH0KMw",
    "duration": 2.25
  },
  {
    "id": 2261,
    "title": "Tones and I - Never Seen The Rain (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0n2XhLPbPMQ",
    "duration": 3.77
  },
  {
    "id": 2262,
    "title": "Ariana Grande - ghostin (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=XFYP1c1eVKc",
    "duration": 4.5
  },
  {
    "id": 2263,
    "title": "Lana Del Rey - Did you know that there's a tunnel under Ocean Blvd (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tGU01G3OVaw",
    "duration": 4.72
  },
  {
    "id": 2264,
    "title": "Troye Sivan - for him. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7NspcLdV4xM",
    "duration": 3.87
  },
  {
    "id": 2265,
    "title": "Kacey Musgraves - All Is Found (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zIKtbGu4tHU",
    "duration": 3.37
  },
  {
    "id": 2266,
    "title": "Natti Natasha - Me Gusta (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-uGM1toblIE",
    "duration": 3.45
  },
  {
    "id": 2267,
    "title": "Sigala ft. Paloma Faith - Lullaby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cZAarc9NRxA",
    "duration": 3.7
  },
  {
    "id": 2268,
    "title": "Camila Cabello - I'll Be Home For Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1VRycH5ZoVs",
    "duration": 3.23
  },
  {
    "id": 2269,
    "title": "East 17 - Stay Another Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LnsPMGGcCPk",
    "duration": 5.12
  },
  {
    "id": 2270,
    "title": "Julia Michaels - Worst In Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qF0yc2Ko35I",
    "duration": 3.78
  },
  {
    "id": 2271,
    "title": "Britney Spears - Work B***h (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qLkddAcYk_o",
    "duration": 4.45
  },
  {
    "id": 2272,
    "title": "Tate McRae - Stupid (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JafD6bxiXz8",
    "duration": 3.1
  },
  {
    "id": 2273,
    "title": "Fifth Harmony ft. Gucci Mane - Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QOYHjSK7D2Q",
    "duration": 3.07
  },
  {
    "id": 2274,
    "title": "Maroon 5 - She Will Be Loved (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=zu10xadVaWM",
    "duration": 5.72
  },
  {
    "id": 2275,
    "title": "Maroon 5 - This Summer's Gonna Hurt Like A Motherf****r (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cmqlDASPG_w",
    "duration": 4.25
  },
  {
    "id": 2276,
    "title": "Lana Del Rey - Honeymoon (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Q3WYYXb4IpE",
    "duration": 6.13
  },
  {
    "id": 2277,
    "title": "Mustard with Roddy Ricch - Ballin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FGJ09zozTYM",
    "duration": 3.23
  },
  {
    "id": 2278,
    "title": "Olivia Rodrigo, Matt Cornett - What I've Been Looking For (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OAtXbf1nGjs",
    "duration": 2.48
  },
  {
    "id": 2279,
    "title": "benny blanco, Tainy, Selena Gomez, J Balvin - I Can't Get Enough (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jrwl2MNeEbw",
    "duration": 3.03
  },
  {
    "id": 2280,
    "title": "Carly Rae Jepsen - Run Away With Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AOp9-5lHL8o",
    "duration": 4.75
  },
  {
    "id": 2281,
    "title": "Selena Gomez - Slow Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IW-SvUNv1Xg",
    "duration": 3.88
  },
  {
    "id": 2282,
    "title": "Nelly Furtado - Try (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Bx1nxiMV5Zc",
    "duration": 4.38
  },
  {
    "id": 2283,
    "title": "Rudimental and Ella Eyre - Waiting All Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QbpxigTbPaw",
    "duration": 4.85
  },
  {
    "id": 2284,
    "title": "Glee - Singing In The Rain/Umbrella (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eHNM7ebjcqI",
    "duration": 3.35
  },
  {
    "id": 2285,
    "title": "T.I. and Iggy Azalea - No Mediocre (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ABBGBCGKDm4",
    "duration": 3.72
  },
  {
    "id": 2286,
    "title": "Why Don't We - BIG PLANS (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IL1eJdDub9w",
    "duration": 3.23
  },
  {
    "id": 2287,
    "title": "Lea Michele - Cannonball (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0_I0dpYtZ6Q",
    "duration": 3.97
  },
  {
    "id": 2288,
    "title": "Lulu - Boom Bang a Bang (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hgVFupOREhY",
    "duration": 2.73
  },
  {
    "id": 2289,
    "title": "LANY - I Don't Wanna Love You Anymore (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Klx1VeZFa5g",
    "duration": 3.63
  },
  {
    "id": 2290,
    "title": "Rita Ora and Tinie Tempah - R.I.P. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I2rvzgyMDPI",
    "duration": 3.98
  },
  {
    "id": 2291,
    "title": "Camp Rock - Who Will I Be (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P6tMjbZ9jfs",
    "duration": 3.57
  },
  {
    "id": 2292,
    "title": "BLANCO, Mahmood - Brividi (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dKLATJG_ZoE",
    "duration": 3.7
  },
  {
    "id": 2293,
    "title": "KYLE ft. Kehlani - Playinwitme (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3Ae57OHI4Gs",
    "duration": 3.42
  },
  {
    "id": 2294,
    "title": "Normani - Motivation (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UYqChykmbb0",
    "duration": 3.57
  },
  {
    "id": 2295,
    "title": "Neon Jungle - Braveheart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ORc-j7Kxvr8",
    "duration": 4.07
  },
  {
    "id": 2296,
    "title": "Katy Perry - Not Like The Movies (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5jFHyzQA7yY",
    "duration": 4.23
  },
  {
    "id": 2297,
    "title": "Madison Beer - Fools (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EhLHj9BG5Ik",
    "duration": 3.98
  },
  {
    "id": 2298,
    "title": "The Girl And The Dreamcatcher - Written In The Stars (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SJSzWWyoRKI",
    "duration": 3.72
  },
  {
    "id": 2299,
    "title": "Melanie Martinez - The Bakery (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dSfkj7JZvfw",
    "duration": 3.03
  },
  {
    "id": 2300,
    "title": "The Vamps, Martin Jensen - Middle Of The Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0k9ptdxishw",
    "duration": 3.25
  },
  {
    "id": 2301,
    "title": "Taylor Swift -  I Think He Knows (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KAX2wJjOYY0",
    "duration": 3.37
  },
  {
    "id": 2302,
    "title": "Cian Ducrot - All For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qvYMJol__LA",
    "duration": 3.83
  },
  {
    "id": 2303,
    "title": "Zara Larsson ft. Ty Dolla $ign - So Good (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oD3-0bH6Sfw",
    "duration": 3.27
  },
  {
    "id": 2304,
    "title": "Maroon 5 - Love Somebody (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NT9Am-a8Nsw",
    "duration": 4.17
  },
  {
    "id": 2305,
    "title": "Little Mix - Holiday (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dq4snYpo1Ic",
    "duration": 3.82
  },
  {
    "id": 2306,
    "title": "Paramore - Told You So (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jT7N-6Creso",
    "duration": 3.43
  },
  {
    "id": 2307,
    "title": "Joshua Bassett - When There Was Me And You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=J6jCor0h8v0",
    "duration": 2.02
  },
  {
    "id": 2308,
    "title": "Charlie Puth - BOY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tlnjFe88etw",
    "duration": 4.77
  },
  {
    "id": 2309,
    "title": "Lisa Stansfield - All Around the World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fEEfCIGXMeA",
    "duration": 4.77
  },
  {
    "id": 2310,
    "title": "Jeremy Zucker - always, i'll care (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XjBKOyI-lOY",
    "duration": 2.68
  },
  {
    "id": 2311,
    "title": "Cheryl Cole and Tinie Tempah - Crazy Stupid Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Df0E9H2PUCA",
    "duration": 4.27
  },
  {
    "id": 2312,
    "title": "Alessia Cara - Growing Pains (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wSAxXKkvCTc",
    "duration": 3.23
  },
  {
    "id": 2313,
    "title": "Usher - Scream (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=v1u9cPBBiKI",
    "duration": 4.27
  },
  {
    "id": 2314,
    "title": "George Michael - Careless Whisper (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=uL1iJAgsxUY",
    "duration": 3.55
  },
  {
    "id": 2315,
    "title": "Jason Derulo x David Guetta ft. Nicki Minaj - Goodbye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kb1SHbvIe-A",
    "duration": 3.5
  },
  {
    "id": 2316,
    "title": "Andy Black - We Don't Have To Dance (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cvwDrU9tY-w",
    "duration": 3.68
  },
  {
    "id": 2317,
    "title": "BTS, Zara Larsson - A Brand New Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k1p3Brnvk3s",
    "duration": 3.7
  },
  {
    "id": 2318,
    "title": "The Girl and The Dreamcatcher - Make You Stay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=g8ibaw1fOB4",
    "duration": 4.1
  },
  {
    "id": 2319,
    "title": "Kane Brown ft. Lauren Alaina - What Ifs (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OndurWrYr1Y",
    "duration": 3.43
  },
  {
    "id": 2320,
    "title": "Loud Luxury feat. brando - Body (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XAozV09dgt0",
    "duration": 3.03
  },
  {
    "id": 2321,
    "title": "Why Don't We - Unbelievable (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=48JZWH3C9Qc",
    "duration": 3.47
  },
  {
    "id": 2322,
    "title": "Taylor Swift - Only The Young (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=--Tiine2TlM",
    "duration": 2.88
  },
  {
    "id": 2323,
    "title": "Demi Lovato - I Love Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3TLmBNUL_cA",
    "duration": 3.73
  },
  {
    "id": 2324,
    "title": "Meridian Dan and Big H and Jme- German Whip (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_AN2wQ4Bjao",
    "duration": 3.28
  },
  {
    "id": 2325,
    "title": "Taylor Swift - Anti-Hero (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=PVXB7sXhOaI",
    "duration": 3.52
  },
  {
    "id": 2326,
    "title": "The Vamps - Hurricane (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HZEIK--lDkc",
    "duration": 3.57
  },
  {
    "id": 2327,
    "title": "Wham! - Club Tropicana (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wSuc41t_DIk",
    "duration": 4.85
  },
  {
    "id": 2328,
    "title": "Carly Rae Jepsen - Last Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aQURjOPL4Xg",
    "duration": 4.32
  },
  {
    "id": 2329,
    "title": "Kacey Musgraves - High Horse (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l8dPB6D1DV4",
    "duration": 3.8
  },
  {
    "id": 2330,
    "title": "Green Day - Bang Bang (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eYg8CLABiQo",
    "duration": 3.93
  },
  {
    "id": 2331,
    "title": "Nicki Minaj ft. Ariana Grande - Get On Your Knees (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rCM6K2qyhKw",
    "duration": 4.18
  },
  {
    "id": 2332,
    "title": "Ella Eyre - Comeback (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EpAo04PEshQ",
    "duration": 3.68
  },
  {
    "id": 2333,
    "title": "Mike Posner, Gigamesh - Cooler Than Me - Single Mix (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dLuuoykVw54",
    "duration": 3.6
  },
  {
    "id": 2334,
    "title": "Ava Max - Take You To Hell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=doaBIDVKnA0",
    "duration": 3.12
  },
  {
    "id": 2335,
    "title": "Sabrina Carpenter - Silver Nights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=X9Tzv0fiZnk",
    "duration": 2.78
  },
  {
    "id": 2336,
    "title": "All Time Low - Time-Bomb (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LWWpBTaLBf8",
    "duration": 4.08
  },
  {
    "id": 2337,
    "title": "Ed Sheeran ft. Skrillex - Way To Break My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hzhh_zpdvvo",
    "duration": 3.6
  },
  {
    "id": 2338,
    "title": "Enrique Iglesias and Pitbull - I'm A Freak (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-Qh5-CtdqAI",
    "duration": 3.97
  },
  {
    "id": 2339,
    "title": "for KING & COUNTRY - burn the ships (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Skn2J1m1FKA",
    "duration": 3.85
  },
  {
    "id": 2340,
    "title": "Jess Glynne - All I Am (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=evwTfduaO50",
    "duration": 3.88
  },
  {
    "id": 2341,
    "title": "Lady Antebellum - What If I Never Get Over You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JF2GJj_GaKI",
    "duration": 3.7
  },
  {
    "id": 2342,
    "title": "Take That - These Days (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qW34tGhKCd4",
    "duration": 4.37
  },
  {
    "id": 2343,
    "title": "Lil Nas X - STAR WALKIN' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e1E2eo1n2Pk",
    "duration": 3.5
  },
  {
    "id": 2344,
    "title": "Billie Eilish - everything i wanted (Karaoke Piano)",
    "video_url": "https://www.youtube.com/watch?v=kLHjY32FhLs",
    "duration": 4.22
  },
  {
    "id": 2345,
    "title": "Childish Gambino - Feels Like Summer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I0Qqf6Pf5L4",
    "duration": 5.12
  },
  {
    "id": 2346,
    "title": "Melissa Manchester - Don't Cry Out Loud (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NJ--Olbtbls",
    "duration": 3.8
  },
  {
    "id": 2347,
    "title": "The 1975 - Love It If We Made It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kRGBd32qIjg",
    "duration": 4.53
  },
  {
    "id": 2348,
    "title": "MAX ft. SUGA - Blueberry Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DtNAUhIbHXE",
    "duration": 3.13
  },
  {
    "id": 2349,
    "title": "V (BTS) - Winter Bear (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=Kya8huDfjcI",
    "duration": 2.87
  },
  {
    "id": 2350,
    "title": "Strawberry Guy - Mrs Magic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CS4hB3--47Y",
    "duration": 3.75
  },
  {
    "id": 2351,
    "title": "Kim Dracula - Paparazzi (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RnABb1rqoe4",
    "duration": 3.52
  },
  {
    "id": 2352,
    "title": "Dan + Shay - Glad You Exist (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2FCejuVWK5c",
    "duration": 2.83
  },
  {
    "id": 2353,
    "title": "Jxdn - Angels & Demons (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VmD76frueXw",
    "duration": 3.02
  },
  {
    "id": 2354,
    "title": "Lauv, Anne Marie - f*ck, i'm lonely (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IqqbfCCXG_8",
    "duration": 3.57
  },
  {
    "id": 2355,
    "title": "Calvin Harris & Alesso and Hurts - Under Control (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RfGCROLwibw",
    "duration": 3.82
  },
  {
    "id": 2356,
    "title": "Rixton - Wait On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EQ2TjiP6ZcA",
    "duration": 4.43
  },
  {
    "id": 2357,
    "title": "Lauv, Julia Michaels - There's No Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3Kfgd1b7fmA",
    "duration": 3.23
  },
  {
    "id": 2358,
    "title": "P!nk - What About Us (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=Jkg4CUq7gj4",
    "duration": 5.17
  },
  {
    "id": 2359,
    "title": "Sabrina Carpenter - Exhale (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_TwLBSeIlkM",
    "duration": 3.08
  },
  {
    "id": 2360,
    "title": "Jason Derulo - If It Ain't Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=81cN3C6onmk",
    "duration": 3.95
  },
  {
    "id": 2361,
    "title": "Conan Gray - Comfort Crowd (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wLpoCrUp5n8",
    "duration": 3.37
  },
  {
    "id": 2362,
    "title": "Martin Garrix ft. Usher - Don't Look Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oJpv6OzBvno",
    "duration": 3.98
  },
  {
    "id": 2363,
    "title": "6ix9ine feat. Lil Baby - TIC TOC (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qW_ROk9oxn8",
    "duration": 2.47
  },
  {
    "id": 2364,
    "title": "One Direction - Change Your Ticket (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=C7eH7W5ASlw",
    "duration": 4.78
  },
  {
    "id": 2365,
    "title": "Halsey - Not Afraid Anymore (Karaoke Version) - from the Fifty Shades Darker Soundtrack",
    "video_url": "https://www.youtube.com/watch?v=zbdnIlH5zP8",
    "duration": 4.17
  },
  {
    "id": 2366,
    "title": "Rebecca Ferguson - Nothing's Real But Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ty_Su_hw6nI",
    "duration": 3.25
  },
  {
    "id": 2367,
    "title": "Little Mix - How Ya Doin'? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hTE4K0OQ-Ao",
    "duration": 3.78
  },
  {
    "id": 2368,
    "title": "MisterWives - Reflections (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a5tViY-GsaQ",
    "duration": 3.42
  },
  {
    "id": 2369,
    "title": "The Chainsmokers - Young (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=f8-mGqd2Z6k",
    "duration": 4.08
  },
  {
    "id": 2370,
    "title": "Ed Sheeran ft. 50 Cent & Eminem - Remember The Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gjLQu644Fz8",
    "duration": 3.73
  },
  {
    "id": 2371,
    "title": "Beyonc\u00e9 and Andre 3000 - Back To Black (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3fXvkCYp-qc",
    "duration": 3.72
  },
  {
    "id": 2372,
    "title": "The Beatles - Drive My Car (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9gVibbuOGrU",
    "duration": 3.02
  },
  {
    "id": 2373,
    "title": "Katy Perry - Cozy Little Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ezhb6uUMRTc",
    "duration": 3.47
  },
  {
    "id": 2374,
    "title": "Justin Bieber - Christmas Eve (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Rov1ZlBzJhs",
    "duration": 4.25
  },
  {
    "id": 2375,
    "title": "Shawn Mendes - If I Can't Have You (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=7Cx45KVpIBo",
    "duration": 3.47
  },
  {
    "id": 2376,
    "title": "Jake Paul - THE JAKE PAULERS SONG (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1KxWv2WiUIw",
    "duration": 2.28
  },
  {
    "id": 2377,
    "title": "Ed Sheeran - Cross Me feat. Chance The Rapper & PnB Rock (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BdDEhk3RP3I",
    "duration": 3.67
  },
  {
    "id": 2378,
    "title": "Lily Allen - Hard Out Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EhnEONnS2-M",
    "duration": 3.83
  },
  {
    "id": 2379,
    "title": "Lil Uzi Vert - That Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=136MUGbUe60",
    "duration": 3.93
  },
  {
    "id": 2380,
    "title": "The Weeknd ft. Lana Del Rey - Prisoner (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HMFqge5jiaU",
    "duration": 4.43
  },
  {
    "id": 2381,
    "title": "The 1975 - TOOTIMETOOTIMETOOTIME (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pO7SYKu8mSw",
    "duration": 3.83
  },
  {
    "id": 2382,
    "title": "Chloe x Halle - Do It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p8QyRze_u-8",
    "duration": 3.33
  },
  {
    "id": 2383,
    "title": "Bhad Bhabie feat. Lil Baby - Geek'd (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0riUTYNEKBs",
    "duration": 2.43
  },
  {
    "id": 2384,
    "title": "Taylor Swift - Lover (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=u5j2cl8zDUk",
    "duration": 4.07
  },
  {
    "id": 2385,
    "title": "Ed Sheeran - Bibia Be Ye Ye (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Jd5Rb3BG7zo",
    "duration": 2.95
  },
  {
    "id": 2386,
    "title": "Jonas Blue ft. Joe Jonas - I See Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ecUzyzfs3U4",
    "duration": 3.13
  },
  {
    "id": 2387,
    "title": "Cimorelli - You're Worth It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QblwTAiq86c",
    "duration": 4.25
  },
  {
    "id": 2388,
    "title": "Hayd - Changes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7IYbYVyMNTc",
    "duration": 3.73
  },
  {
    "id": 2389,
    "title": "Halsey - Clementine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iZJ2WnpnUcI",
    "duration": 4.18
  },
  {
    "id": 2390,
    "title": "Julia Michaels - Uh Huh (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=PiyXW0pBcL0",
    "duration": 3.27
  },
  {
    "id": 2391,
    "title": "Maren Morris - Rich (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3Xc3eLkGWsw",
    "duration": 3.78
  },
  {
    "id": 2392,
    "title": "Joshua Bassett - Lie Lie Lie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8DWe7mOOkps",
    "duration": 3.3
  },
  {
    "id": 2393,
    "title": "Britney Spears ft. Tinashe - Slumber Party (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Kg8UVTUzZL4",
    "duration": 3.87
  },
  {
    "id": 2394,
    "title": "Anne Marie - 2002 (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=kJl98QLXjxs",
    "duration": 3.4
  },
  {
    "id": 2395,
    "title": "Emeli Sande ft. Naughty Boy - Daddy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rz9awqNMlBM",
    "duration": 3.45
  },
  {
    "id": 2396,
    "title": "Juice WRLD - Hear Me Calling (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7z3HtSSFwf0",
    "duration": 3.47
  },
  {
    "id": 2397,
    "title": "Taylor Swift ft. Brendon Urie - ME! (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=5CZUSpswwxA",
    "duration": 2.82
  },
  {
    "id": 2398,
    "title": "Jonas Blue, Liam Payne, Lennon Stella - Polaroid (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9XfUZfamK9M",
    "duration": 3.52
  },
  {
    "id": 2399,
    "title": "Mabel - Finders Keepers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9OCSivFvkL4",
    "duration": 4.72
  },
  {
    "id": 2400,
    "title": "Liam Payne - Bedroom Floor (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zwIGwnhZmYw",
    "duration": 3.35
  },
  {
    "id": 2401,
    "title": "Ben Howard - Only Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7216Gq7Gk8o",
    "duration": 4.18
  },
  {
    "id": 2402,
    "title": "Saweetie - Tap In (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9fRmWBX2Mos",
    "duration": 2.63
  },
  {
    "id": 2403,
    "title": "Clean Bandit and Sharna Bass - Extraordinary (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3dD3hI6cw18",
    "duration": 4.18
  },
  {
    "id": 2404,
    "title": "Selena Gomez, Marshmello - Wolves (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=hXASS5ZKrKE",
    "duration": 3.8
  },
  {
    "id": 2405,
    "title": "MAX - Gibberish (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ltaCXPrmSO8",
    "duration": 4.03
  },
  {
    "id": 2406,
    "title": "Shawn Mendes - Where Were You In The Morning? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=56j3RJOZM3M",
    "duration": 3.55
  },
  {
    "id": 2407,
    "title": "Ryn Weaver - Pierre (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ArZMnvVUO54",
    "duration": 3.78
  },
  {
    "id": 2408,
    "title": "Tinashe - All Hands On Deck (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wYDW1JfnA_w",
    "duration": 4.15
  },
  {
    "id": 2409,
    "title": "Flipp Dinero - Leave Me Alone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7VsqlrZ94c8",
    "duration": 3.47
  },
  {
    "id": 2410,
    "title": "Jason Derulo - Cheyenne (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2w1EjRaTNuo",
    "duration": 3.68
  },
  {
    "id": 2411,
    "title": "Kesha - C'mon (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eFcb5ZbNOWA",
    "duration": 3.83
  },
  {
    "id": 2412,
    "title": "Lauv - Getting Over You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pUtYAy1oVuM",
    "duration": 4.65
  },
  {
    "id": 2413,
    "title": "Allie X - Sunflower (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hG2SP2QC8sw",
    "duration": 3.97
  },
  {
    "id": 2414,
    "title": "Aitana x Lele Pons - TELE\u0301FONO (REMIX) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Lud19qb3XBM",
    "duration": 2.88
  },
  {
    "id": 2415,
    "title": "R3HAB x Sofia Carson - Rumors (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p34WMpAfa6U",
    "duration": 2.58
  },
  {
    "id": 2416,
    "title": "Lil Pump - Designer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8UqkODFW-os",
    "duration": 2.57
  },
  {
    "id": 2417,
    "title": "Sabrina Carpenter - Christmas The Whole Year Round (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yTbB0rBfF7Q",
    "duration": 3.63
  },
  {
    "id": 2418,
    "title": "Ariana Grande - pov (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=5PXAWruecVI",
    "duration": 3.67
  },
  {
    "id": 2419,
    "title": "Karmin - Hello (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YSSBHGJJsUM",
    "duration": 4.27
  },
  {
    "id": 2420,
    "title": "Professor Green and Tori Kelly - Lullaby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=77P-hroYzLE",
    "duration": 5.13
  },
  {
    "id": 2421,
    "title": "Kesha - We R Who We R (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=XAomeDeqN0I",
    "duration": 3.92
  },
  {
    "id": 2422,
    "title": "Charlie Puth - Kiss Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=N4WkcAAJQi4",
    "duration": 3.93
  },
  {
    "id": 2423,
    "title": "EYEDRESS - JEALOUS (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5gxG5KO3jpM",
    "duration": 2.43
  },
  {
    "id": 2424,
    "title": "5 Seconds Of Summer - Girls Talk Boys (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tpNJSR2jtDc",
    "duration": 4.13
  },
  {
    "id": 2425,
    "title": "Avicii - You Make Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6yh1KrT_zEM",
    "duration": 4.08
  },
  {
    "id": 2426,
    "title": "Robin Schulz & David Guetta & Cheat Codes - Shed A Light (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HsjYe3NcOm4",
    "duration": 3.67
  },
  {
    "id": 2427,
    "title": "Tate McRae - r u ok (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BkUGX-5myOM",
    "duration": 3.48
  },
  {
    "id": 2428,
    "title": "Migos & Marshmello - Danger (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=B3bLng2uKAI",
    "duration": 3.83
  },
  {
    "id": 2429,
    "title": "Of Monsters And Men - Mountain Sound (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UUIQT4zhylo",
    "duration": 3.83
  },
  {
    "id": 2430,
    "title": "Sam Smith, Demi Lovato - I'm Ready (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P_xRlueXsu8",
    "duration": 3.68
  },
  {
    "id": 2431,
    "title": "Pitbull and G. R.L. - Wild Wild Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QW48JauNXww",
    "duration": 3.82
  },
  {
    "id": 2432,
    "title": "Little Mix - Bounce Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5i_6Klkekak",
    "duration": 3.05
  },
  {
    "id": 2433,
    "title": "Pia Mia - Touch (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=slA9cFKEAYg",
    "duration": 4.02
  },
  {
    "id": 2434,
    "title": "DJ Khaled ft. Demi Lovato - I Believe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q_UMLX3AWGY",
    "duration": 4.0
  },
  {
    "id": 2435,
    "title": "Curtis Waters ft. Harm Franklin - Stunnin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bYu5srElLlw",
    "duration": 2.73
  },
  {
    "id": 2436,
    "title": "WONHO - Losing You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eeiB3nt7KwQ",
    "duration": 3.35
  },
  {
    "id": 2437,
    "title": "Metro Station - Shake It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Uziq2tKy67I",
    "duration": 3.42
  },
  {
    "id": 2438,
    "title": "Jorja Smith - By Any Means (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Qcr3xGQAtzM",
    "duration": 4.15
  },
  {
    "id": 2439,
    "title": "Hayley Kiyoko - Curious (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oHKkwyl71pY",
    "duration": 3.47
  },
  {
    "id": 2440,
    "title": "Natalie La Rose ft. Fetty Wap - Around The World (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DI8TM2fDG2k",
    "duration": 3.85
  },
  {
    "id": 2441,
    "title": "David Guetta ft. Justin Bieber - 2U (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=OnRkEVVCTpw",
    "duration": 3.83
  },
  {
    "id": 2442,
    "title": "dodie - party tattoos (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=k0QalR34P60",
    "duration": 3.83
  },
  {
    "id": 2443,
    "title": "Tom Odell - Real Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bGEOuQHv6Ic",
    "duration": 2.65
  },
  {
    "id": 2444,
    "title": "Alunageorge - You Know You Like It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TCVRimsdsyI",
    "duration": 3.78
  },
  {
    "id": 2445,
    "title": "Alessia Cara - Make It To Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fYEKliA02vg",
    "duration": 3.82
  },
  {
    "id": 2446,
    "title": "Lea Michele - Love Is Alive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2dvrh6g2K_4",
    "duration": 3.93
  },
  {
    "id": 2447,
    "title": "Kinneret - No Wind Resistance! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8MeClO8-stI",
    "duration": 3.52
  },
  {
    "id": 2448,
    "title": "Noah Cyrus, Gallant - Mad At You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wrecpS2UnFE",
    "duration": 4.13
  },
  {
    "id": 2449,
    "title": "Janelle Mona\u0301e - Make Me Feel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rMJ1z5wWGSc",
    "duration": 3.03
  },
  {
    "id": 2450,
    "title": "Haim - The Wire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1j1ks3ZQrzw",
    "duration": 4.47
  },
  {
    "id": 2451,
    "title": "Camila Cabello - Cry For Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oP1VsNFS5aI",
    "duration": 3.48
  },
  {
    "id": 2452,
    "title": "FINNEAS - What They'll Say About Us (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BhJYQVplrkI",
    "duration": 3.4
  },
  {
    "id": 2453,
    "title": "Akon - Be With You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8ieR8QZLGEw",
    "duration": 3.98
  },
  {
    "id": 2454,
    "title": "Sabrina Carpenter - Paris (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8QlnpQJ5GNQ",
    "duration": 3.9
  },
  {
    "id": 2455,
    "title": "Dua Lipa - Swan Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z6X7YdaE8Fc",
    "duration": 3.23
  },
  {
    "id": 2456,
    "title": "Mario Judah - Die Very Rough (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fFJPfx5GP0Q",
    "duration": 1.82
  },
  {
    "id": 2457,
    "title": "The Wanted - We Own The Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lyeHjTwkI-k",
    "duration": 3.93
  },
  {
    "id": 2458,
    "title": "Dave - Starlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wjOkhfxwEVU",
    "duration": 3.87
  },
  {
    "id": 2459,
    "title": "Selena Gomez - My Mind & Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=esNwgzCKEiE",
    "duration": 2.57
  },
  {
    "id": 2460,
    "title": "Maggie Lindemann - Obsessed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t-7L_AS5dxI",
    "duration": 3.47
  },
  {
    "id": 2461,
    "title": "Fifth Harmony - He Like That (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_-g95MtfenQ",
    "duration": 3.77
  },
  {
    "id": 2462,
    "title": "Fall Out Boy - HOLD ME TIGHT OR DON'T (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a9or0V72vyQ",
    "duration": 3.67
  },
  {
    "id": 2463,
    "title": "David Guetta ft. Anne Marie - Don't Leave Me Alone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dl1JLjeAkMk",
    "duration": 3.45
  },
  {
    "id": 2464,
    "title": "GRLwood - I'm Yer Dad (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aE36jBab8VU",
    "duration": 2.62
  },
  {
    "id": 2465,
    "title": "Sabrina Carpenter - All We Have Is Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=B0UCDX9dJ9o",
    "duration": 3.4
  },
  {
    "id": 2466,
    "title": "The Neighbourhood - Sweater Weather (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=eCZtmGSVKnc",
    "duration": 4.13
  },
  {
    "id": 2467,
    "title": "Madison Beer ft. Jack & Jack - All For Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zUMmlyfJHIk",
    "duration": 3.95
  },
  {
    "id": 2468,
    "title": "Jonas Brothers - I Believe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BnC1Y2dwuOk",
    "duration": 4.0
  },
  {
    "id": 2469,
    "title": "Saweetie - My Type (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=p0lAVav6OnY",
    "duration": 2.5
  },
  {
    "id": 2470,
    "title": "6ix9ine ft. Kanye West & Nicki Minaj - MAMA (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l53Oe7VmgLc",
    "duration": 3.27
  },
  {
    "id": 2471,
    "title": "Bebe Rexha - Ferrari (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9F-gGNoVpTc",
    "duration": 3.9
  },
  {
    "id": 2472,
    "title": "Brotherhood Of Man - Save Your Kisses For Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ouF4us2d7lw",
    "duration": 3.37
  },
  {
    "id": 2473,
    "title": "Katy Perry - Never Worn White (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=y-ooXDPfDy0",
    "duration": 3.98
  },
  {
    "id": 2474,
    "title": "Klangkarussell and Will Heard - Sonnentanz (Sun Don't Shine) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4mBsRpC1Ajc",
    "duration": 3.92
  },
  {
    "id": 2475,
    "title": "Sigala ft. Ella Eyre, Meghan Trainor, French Montana - Just Got Paid (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vxCU_EToDeE",
    "duration": 4.03
  },
  {
    "id": 2476,
    "title": "Snakehips ft. ZAYN - Cruel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bKk9ywsZWps",
    "duration": 4.2
  },
  {
    "id": 2477,
    "title": "JVKE - Upside Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IV4XKzW67uU",
    "duration": 2.33
  },
  {
    "id": 2478,
    "title": "Turning Red - U Know What's Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yDFmqedhZi4",
    "duration": 3.3
  },
  {
    "id": 2479,
    "title": "Matt Cornett - A Billion Sorrys (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I3pWfsOfTtU",
    "duration": 2.2
  },
  {
    "id": 2480,
    "title": "gnash - imagine if (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KouUW7pjVKA",
    "duration": 3.73
  },
  {
    "id": 2481,
    "title": "Little Mix - One I've Been Missing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ikVcDoy_9UI",
    "duration": 3.47
  },
  {
    "id": 2482,
    "title": "Whitney Houston - I Have Nothing (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=r7T4zNZ3cTs",
    "duration": 4.97
  },
  {
    "id": 2483,
    "title": "Iggy Azalea - Sally Walker (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=q1D2v5xpgV0",
    "duration": 3.3
  },
  {
    "id": 2484,
    "title": "Sofia Reyes ft. Rita Ora, Anitta - R.I.P. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MI-h3-Br0LM",
    "duration": 3.5
  },
  {
    "id": 2485,
    "title": "Future & Miley Cyrus and Mr Hudson - Real and True (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vBd0vSqjkuA",
    "duration": 4.47
  },
  {
    "id": 2486,
    "title": "Biffy Clyro - Many Of Horror (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T72PR04Nb0s",
    "duration": 4.87
  },
  {
    "id": 2487,
    "title": "Joshua Kadison - Beautiful In My Eyes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=slUDJ4AV9Rg",
    "duration": 4.25
  },
  {
    "id": 2488,
    "title": "Why Don't We - Don't Change (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jcqeBw--leM",
    "duration": 3.23
  },
  {
    "id": 2489,
    "title": "Ariana Grande, Normani, Nicki Minaj - Bad To You (from \"Charlie's Angels\") (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NjFqEymOxOs",
    "duration": 3.35
  },
  {
    "id": 2490,
    "title": "Chris Brown - X (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DV9RYBcnr7s",
    "duration": 4.73
  },
  {
    "id": 2491,
    "title": "Kim Petras - Heart To Break (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yLiUuKr87cs",
    "duration": 4.08
  },
  {
    "id": 2492,
    "title": "Dua Lipa - Levitating (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=ivnGkcgRwOI",
    "duration": 3.53
  },
  {
    "id": 2493,
    "title": "John Newman - Come And Get It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vGyJHrQhCEA",
    "duration": 3.47
  },
  {
    "id": 2494,
    "title": "The Vamps - Hair Too Long (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tzN0Yc0ksSo",
    "duration": 3.8
  },
  {
    "id": 2495,
    "title": "Kehlani - Advice (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K-KthlBioDs",
    "duration": 3.75
  },
  {
    "id": 2496,
    "title": "Cher Lloyd - Human (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1wWwSJ8tUyE",
    "duration": 3.87
  },
  {
    "id": 2497,
    "title": "Icona Pop - All Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1tYTP-uXPlo",
    "duration": 3.43
  },
  {
    "id": 2498,
    "title": "Lauv - Changes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kbCFQrCCdNk",
    "duration": 3.15
  },
  {
    "id": 2499,
    "title": "Tori Kelly - Change Your Mind (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KOLgMOMvKo0",
    "duration": 3.2
  },
  {
    "id": 2500,
    "title": "Hey Violet - Break My Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dJgRhxg55fg",
    "duration": 3.85
  },
  {
    "id": 2501,
    "title": "Justin Bieber - Ghost (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=_y9lTYkcHlM",
    "duration": 2.85
  },
  {
    "id": 2502,
    "title": "Chris Brown ft. Gunna - Heat (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OqoICpRNg9U",
    "duration": 4.1
  },
  {
    "id": 2503,
    "title": "Adam Lambert ft. Laleh - Welcome To The Show (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=62dT3H0TcEQ",
    "duration": 3.88
  },
  {
    "id": 2504,
    "title": "Ariana Grande - make up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vn4yQJGyUfw",
    "duration": 2.67
  },
  {
    "id": 2505,
    "title": "Rachel Platten - Broken Glass (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AyAW6LzQffA",
    "duration": 3.33
  },
  {
    "id": 2506,
    "title": "Bars and Melody - Shining Star (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jJ2Wc6oWb2A",
    "duration": 4.1
  },
  {
    "id": 2507,
    "title": "Bhad Bhabie - I Got It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CWnOzzcUuqQ",
    "duration": 3.22
  },
  {
    "id": 2508,
    "title": "Rita Ora  - Only Want You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jiFRw8RRpw8",
    "duration": 3.27
  },
  {
    "id": 2509,
    "title": "CG5 - Good To Be Alive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=I5cRXOi1L_o",
    "duration": 3.22
  },
  {
    "id": 2510,
    "title": "Stephen Sanchez - Until I Found You (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=qSnNWkvocN4",
    "duration": 3.18
  },
  {
    "id": 2511,
    "title": "Gabrielle Aplin - My Mistake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i_dKD0ZqBjI",
    "duration": 4.65
  },
  {
    "id": 2512,
    "title": "Jennifer Lopez - First Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2Uy1smeoEZo",
    "duration": 3.92
  },
  {
    "id": 2513,
    "title": "Lily Allen - Air Balloon (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oLc24dxIU_w",
    "duration": 4.12
  },
  {
    "id": 2514,
    "title": "Train - Shake Up Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kcFduXEfwI4",
    "duration": 4.3
  },
  {
    "id": 2515,
    "title": "Bea Miller - Feel Something (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eICk1Lz6gH0",
    "duration": 3.35
  },
  {
    "id": 2516,
    "title": "All Time Low - Dirty Laundry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dlTImpZKXSE",
    "duration": 3.85
  },
  {
    "id": 2517,
    "title": "James Arthur - Medicine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=y8ODOt4uTMA",
    "duration": 3.65
  },
  {
    "id": 2518,
    "title": "Passenger - Let Her Go (Karaoke Piano)",
    "video_url": "https://www.youtube.com/watch?v=iTQb_x6neqg",
    "duration": 4.52
  },
  {
    "id": 2519,
    "title": "Jona Lewie - Stop The Cavalry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3vb17d86fCs",
    "duration": 3.13
  },
  {
    "id": 2520,
    "title": "Leah Nobel - Beginning Middle End (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YFbaJJH-gAQ",
    "duration": 3.58
  },
  {
    "id": 2521,
    "title": "Hailee Steinfeld - You're Such A (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OmtagUirS1c",
    "duration": 4.27
  },
  {
    "id": 2522,
    "title": "Everybody Loves An Outlaw - I See Red (Karaoke Piano)",
    "video_url": "https://www.youtube.com/watch?v=sGYVAQGPh7Q",
    "duration": 3.75
  },
  {
    "id": 2523,
    "title": "Little Mix - Grown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rAdXeUbC8Ac",
    "duration": 3.22
  },
  {
    "id": 2524,
    "title": "Ariana Grande - Dangerous Woman (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=oo0WMbA7v8c",
    "duration": 2.97
  },
  {
    "id": 2525,
    "title": "Camila Cabello - Never Be The Same (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=PIP12dDzUDA",
    "duration": 4.05
  },
  {
    "id": 2526,
    "title": "Paramore - Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FbKx9g6oyvw",
    "duration": 4.47
  },
  {
    "id": 2527,
    "title": "Ashe - Save Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ttT6Uv79NNM",
    "duration": 4.0
  },
  {
    "id": 2528,
    "title": "Fifth Harmony - Going Nowhere (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EflCttRgdr4",
    "duration": 3.88
  },
  {
    "id": 2529,
    "title": "John Legend, BloodPop\u00ae - A Good Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=VBfyBW3q_4A",
    "duration": 3.73
  },
  {
    "id": 2530,
    "title": "The Chainsmokers - Honest (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3rg_QOVArVI",
    "duration": 3.33
  },
  {
    "id": 2531,
    "title": "Miley Cyrus - Hands Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jMWXbOjfRxA",
    "duration": 4.35
  },
  {
    "id": 2532,
    "title": "Hello Christmas - Christmas Without You (Official Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RRRvT5kfVyI",
    "duration": 3.77
  },
  {
    "id": 2533,
    "title": "Cheryl - I Don't Care (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=50qQwM_JcPE",
    "duration": 4.33
  },
  {
    "id": 2534,
    "title": "Sigala - Easy Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i3yf7f98MRM",
    "duration": 3.23
  },
  {
    "id": 2535,
    "title": "Ali Gatie - Running On My Mind (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s2JetLwj3-U",
    "duration": 3.03
  },
  {
    "id": 2536,
    "title": "Tiesto and Matthew Koma - Wasted (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qXLbMCaW8AU",
    "duration": 3.42
  },
  {
    "id": 2537,
    "title": "Charli XCX ft. Rita Ora - Doing It (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=YvzTGjEvFW0",
    "duration": 4.22
  },
  {
    "id": 2538,
    "title": "Rudimental and John Newman - Feel The Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iPt5vUHVROI",
    "duration": 3.8
  },
  {
    "id": 2539,
    "title": "Madison Beer - Hurts Like Hell (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dLqohIY5Wo0",
    "duration": 3.88
  },
  {
    "id": 2540,
    "title": "Tate McRae - slower (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oOr7_sX_HVs",
    "duration": 3.43
  },
  {
    "id": 2541,
    "title": "DJ Fresh ft. Ella Eyre - Gravity (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7_h4ZHgURAA",
    "duration": 3.67
  },
  {
    "id": 2542,
    "title": "Rudimental, John Newman and Alex Clare - Not Giving In (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zZEy5v8lmcY",
    "duration": 4.1
  },
  {
    "id": 2543,
    "title": "Rita Ora - How We Do (Party)",
    "video_url": "https://www.youtube.com/watch?v=pbPV7a-u3wM",
    "duration": 4.03
  },
  {
    "id": 2544,
    "title": "Maroon 5 - Nobody's Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8dhWZLv87tw",
    "duration": 3.95
  },
  {
    "id": 2545,
    "title": "Drake - Signs (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pMuMs9GmcIk",
    "duration": 4.25
  },
  {
    "id": 2546,
    "title": "Neon Jungle - Louder (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LkuqdAAG8JM",
    "duration": 3.72
  },
  {
    "id": 2547,
    "title": "Nina - Somewhere Down the Road (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jLfO9_Xa4bk",
    "duration": 4.32
  },
  {
    "id": 2548,
    "title": "Jessie J - Sweet Talker (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8LV0EYgHhTg",
    "duration": 4.3
  },
  {
    "id": 2549,
    "title": "The 1975 - Give Yourself A Try (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lusIsUUD_GE",
    "duration": 3.65
  },
  {
    "id": 2550,
    "title": "P!nk - Today's The Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kcK7z-E8Bp4",
    "duration": 4.28
  },
  {
    "id": 2551,
    "title": "Olly Murs - Kiss Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yFfOIB6BilA",
    "duration": 3.87
  },
  {
    "id": 2552,
    "title": "Taylor Swift - It's Nice To Have A Friend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=nY7Wk1P9YjU",
    "duration": 3.25
  },
  {
    "id": 2553,
    "title": "Gina G - Ooh Aah... Just A Little Bit (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QDi9tlUTQrs",
    "duration": 3.72
  },
  {
    "id": 2554,
    "title": "Cara Delevingne - I Feel Everything (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SQxc3weEzpk",
    "duration": 3.5
  },
  {
    "id": 2555,
    "title": "Ellie Goulding - Sixteen (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Aqf3pV6Vb8s",
    "duration": 3.55
  },
  {
    "id": 2556,
    "title": "A Great Big World ft. Futuristic - Hold Each Other (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0qZwcoO-zEM",
    "duration": 4.2
  },
  {
    "id": 2557,
    "title": "Selena Gomez - Dance Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=voEqotbqmvI",
    "duration": 3.27
  },
  {
    "id": 2558,
    "title": "The Vamps - Rest Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UtPwxeKHUSo",
    "duration": 3.82
  },
  {
    "id": 2559,
    "title": "Gwen Stefani - Baby Don't Lie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yxFlo4VoaTI",
    "duration": 3.72
  },
  {
    "id": 2560,
    "title": "Ella Mai x Chris Brown - Whatchamacallit (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7yAlBDgU1z8",
    "duration": 3.33
  },
  {
    "id": 2561,
    "title": "Union J - You Got It All (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JYHtUJ8IRss",
    "duration": 3.85
  },
  {
    "id": 2562,
    "title": "Afrojack and Spree - The Spark (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gKXuYKQNA08",
    "duration": 4.38
  },
  {
    "id": 2563,
    "title": "girl in red - two queens in a king sized bed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=orQTFMuH35o",
    "duration": 3.58
  },
  {
    "id": 2564,
    "title": "They Might Be Giants - Boss Of Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QoASq_f-SSs",
    "duration": 3.32
  },
  {
    "id": 2565,
    "title": "Clean Bandit feat. Ellie Goulding - Mama (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TK57e-i_v0c",
    "duration": 3.7
  },
  {
    "id": 2566,
    "title": "Ed Sheeran - The Man (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TLHJWLJ6kE0",
    "duration": 4.68
  },
  {
    "id": 2567,
    "title": "Olivia Rodrigo - favorite crime (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=aK7c-9sYAdc",
    "duration": 2.8
  },
  {
    "id": 2568,
    "title": "Bea Miller - Yes Girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qXp-Km8oVLk",
    "duration": 4.53
  },
  {
    "id": 2569,
    "title": "Matt Cardle and Melanie C - Loving You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Q35XY69y4v0",
    "duration": 3.92
  },
  {
    "id": 2570,
    "title": "Calum Scott - What I Miss Most (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=V_nHLVkduQo",
    "duration": 4.12
  },
  {
    "id": 2571,
    "title": "Kelly Clarkson - Invincible (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a03arXvEC7c",
    "duration": 4.62
  },
  {
    "id": 2572,
    "title": "Fifth Harmony - Angel (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vlgK0aHqscQ",
    "duration": 3.48
  },
  {
    "id": 2573,
    "title": "Jeremy Zucker - scared (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lJ9lO9iRj6M",
    "duration": 3.87
  },
  {
    "id": 2574,
    "title": "Gabz - Lighters (The One) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D2CA3imf9Vw",
    "duration": 3.08
  },
  {
    "id": 2575,
    "title": "Nicole Scherzinger - Don't Hold Your Breath (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yox8cYUa8ks",
    "duration": 3.68
  },
  {
    "id": 2576,
    "title": "Ali Gatie - Used To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zW7VS-vySBM",
    "duration": 2.48
  },
  {
    "id": 2577,
    "title": "Lawson - Juliet (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fe2BkM4Ie5o",
    "duration": 3.55
  },
  {
    "id": 2578,
    "title": "Maddie Poppe - Going Going Gone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l0ZDMjoOtD8",
    "duration": 3.9
  },
  {
    "id": 2579,
    "title": "Demi Lovato - Body Say (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=c9FLftozHwg",
    "duration": 3.62
  },
  {
    "id": 2580,
    "title": "Helen Reddy - I Can't Say Goodbye To You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ilxtgesTkUY",
    "duration": 3.87
  },
  {
    "id": 2581,
    "title": "Sam Smith - How Do You Sleep? (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=ZdmXls_ENVo",
    "duration": 3.65
  },
  {
    "id": 2582,
    "title": "Katy Perry - Witness (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kntgOSueUZs",
    "duration": 4.53
  },
  {
    "id": 2583,
    "title": "Marina and the Diamonds - I'm A Ruin (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=coU-gIpBeNo",
    "duration": 4.2
  },
  {
    "id": 2584,
    "title": "Curtis Stigers and The Forest Rangers - This Life (Sons Of Anarchy Theme) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=OFrRFmfq0l4",
    "duration": 2.62
  },
  {
    "id": 2585,
    "title": "Sigala - Sweet Lovin' (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3BHRfD4RU8E",
    "duration": 4.1
  },
  {
    "id": 2586,
    "title": "Taylor Swift - Gorgeous (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=qE8lNvXnaCQ",
    "duration": 3.9
  },
  {
    "id": 2587,
    "title": "Ne-Yo - So Sick (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=WFxNC48iS2o",
    "duration": 3.83
  },
  {
    "id": 2588,
    "title": "Demi Lovato - Heart Attack (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=CxF9yi4FFyg",
    "duration": 4.0
  },
  {
    "id": 2589,
    "title": "GAWVI ft. Lecrae - Fight For Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1oXomadSN84",
    "duration": 3.7
  },
  {
    "id": 2590,
    "title": "Meghan Trainor - NO (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=ErVCFQxiL64",
    "duration": 3.98
  },
  {
    "id": 2591,
    "title": "Julia Michaels ft. Trippie Redd - Jump (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pQZiJQDUhVs",
    "duration": 3.8
  },
  {
    "id": 2592,
    "title": "Krewella - Team (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1Ehi59_-9aY",
    "duration": 3.47
  },
  {
    "id": 2593,
    "title": "Jason Derulo - If I'm Lucky (Part 1) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8dJTrL1SCqM",
    "duration": 3.92
  },
  {
    "id": 2594,
    "title": "Demi Lovato - You Don't Do It For Me Anymore (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=NjOEDHmWWDM",
    "duration": 3.55
  },
  {
    "id": 2595,
    "title": "Charli XCX, Troye Sivan - 1999 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AaWHi26Tsys",
    "duration": 3.58
  },
  {
    "id": 2596,
    "title": "Engelbert Humperdinck - Love Me With All Your Heart (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hBsEQfDjnOQ",
    "duration": 3.68
  },
  {
    "id": 2597,
    "title": "BIG SHAQ - MAN DON'T DANCE (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4v9M983S8GM",
    "duration": 3.85
  },
  {
    "id": 2598,
    "title": "Dean Lewis - 7 Minutes (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tUxJnCIwyL0",
    "duration": 3.9
  },
  {
    "id": 2599,
    "title": "joji - Head In The Clouds (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fRebxq1PoNY",
    "duration": 3.18
  },
  {
    "id": 2600,
    "title": "HONNE - no song without you (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FdmospOE3Jo",
    "duration": 3.05
  },
  {
    "id": 2601,
    "title": "John K - if we never met (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Tp4ZmcXqiIM",
    "duration": 2.92
  },
  {
    "id": 2602,
    "title": "Duke Dumont and Jax Jones - I Got U (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vJA-pglQTP0",
    "duration": 5.07
  },
  {
    "id": 2603,
    "title": "Tove Lo - Not On Drugs (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ehH4gnzN0Kc",
    "duration": 3.37
  },
  {
    "id": 2604,
    "title": "Chloe x Halle - Grown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=K02eq35Y02A",
    "duration": 2.93
  },
  {
    "id": 2605,
    "title": "AJR - Come Hang Out (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-mG2Nr-Bg7U",
    "duration": 5.03
  },
  {
    "id": 2606,
    "title": "Charlie Puth - How Long (Piano Version)",
    "video_url": "https://www.youtube.com/watch?v=AkoD5VU55tg",
    "duration": 3.5
  },
  {
    "id": 2607,
    "title": "Nicki Minaj - Ganja Burn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9uuUKgHCGnA",
    "duration": 5.25
  },
  {
    "id": 2608,
    "title": "Magic! - Kiss Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oDLsL0K9fXQ",
    "duration": 3.95
  },
  {
    "id": 2609,
    "title": "YoungBoy Never Broke Again - Diamond Teeth Samurai (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w7pspRVaej0",
    "duration": 3.02
  },
  {
    "id": 2610,
    "title": "John Legend - Surefire (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8gMkfyrXBsg",
    "duration": 4.63
  },
  {
    "id": 2611,
    "title": "Justin Timberlake - Mirrors (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=ocWI7EgwUFs",
    "duration": 4.77
  },
  {
    "id": 2612,
    "title": "Simple Plan - Christmas Every Day (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=a7aADI6WyF4",
    "duration": 4.28
  },
  {
    "id": 2613,
    "title": "Coldplay - Christmas Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=13Tho7I-5y8",
    "duration": 4.32
  },
  {
    "id": 2614,
    "title": "Hayley Kiyoko ft. Kehlani - What I Need (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aPHU3G9IKpk",
    "duration": 3.97
  },
  {
    "id": 2615,
    "title": "Marlon Roudette - When The Beat Drops Out (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UEIUWpmXqQY",
    "duration": 3.93
  },
  {
    "id": 2616,
    "title": "Post Malone - Saint-Tropez (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-xc-nrZmfkg",
    "duration": 2.98
  },
  {
    "id": 2617,
    "title": "Katy Perry - Walking On Air (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ys_V1kOBoqM",
    "duration": 4.35
  },
  {
    "id": 2618,
    "title": "Lily Rose Depp - World Class Sinner/I'm A Freak (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wnRDx2g04r0",
    "duration": 3.52
  },
  {
    "id": 2619,
    "title": "Meghan Trainor, John Legend - Like I'm Gonna Lose You (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=2heAh-Kj2hg",
    "duration": 3.9
  },
  {
    "id": 2620,
    "title": "Tate McRae - uh oh (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=KUbBLUwfz4U",
    "duration": 3.03
  },
  {
    "id": 2621,
    "title": "Cashmere Cat, Major Lazer & Tory Lanez - Miss You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bOu5SNbGW8U",
    "duration": 3.42
  },
  {
    "id": 2622,
    "title": "Ed Sheeran ft. Travis Scott- Antisocial (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hbiNQnvinbo",
    "duration": 3.07
  },
  {
    "id": 2623,
    "title": "Lukas Graham - HERE (For Christmas) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3zlhC2AombY",
    "duration": 4.37
  },
  {
    "id": 2624,
    "title": "Sia - Kill And Run (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RXYFMzmOFiY",
    "duration": 3.75
  },
  {
    "id": 2625,
    "title": "Tove Lo - Moments (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kOHgVuDnknw",
    "duration": 3.9
  },
  {
    "id": 2626,
    "title": "Imagine Dragons - Levitate (from \"Passengers\") (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FIYrNrwg8Uk",
    "duration": 3.68
  },
  {
    "id": 2627,
    "title": "Selena Gomez & The Scene - Hit The Lights (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NzfUyshBHOE",
    "duration": 3.65
  },
  {
    "id": 2628,
    "title": "Griff - Love Is A Compass (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zRSCaEAeJxg",
    "duration": 3.37
  },
  {
    "id": 2629,
    "title": "Galantis & Hook N Sling - Love On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wWKpushhiV0",
    "duration": 3.97
  },
  {
    "id": 2630,
    "title": "Ruth B - Slow Fade (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iH277oxWrbc",
    "duration": 3.68
  },
  {
    "id": 2631,
    "title": "MASN - Psycho! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=D1DdVAY2EGs",
    "duration": 3.63
  },
  {
    "id": 2632,
    "title": "One Direction - Everything About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=tweEp6lj8Kk",
    "duration": 3.98
  },
  {
    "id": 2633,
    "title": "Harry Styles - Matilda (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=ldbNVRCLUYk",
    "duration": 4.37
  },
  {
    "id": 2634,
    "title": "Justin Bieber ft. Post Malone & Clever - Forever (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1ndQ9XAqomM",
    "duration": 3.93
  },
  {
    "id": 2635,
    "title": "Calvin Harris and Ayah Marah - Thinking About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=uj6QnzPxEbo",
    "duration": 4.4
  },
  {
    "id": 2636,
    "title": "Afrojack and Chris Brown - As Your Friend (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yjxk2DrFSgI",
    "duration": 4.05
  },
  {
    "id": 2637,
    "title": "Logic - Contra (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hbBLNvbldTE",
    "duration": 3.58
  },
  {
    "id": 2638,
    "title": "Demi Lovato - Without The Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t0mMztpGBO0",
    "duration": 4.57
  },
  {
    "id": 2639,
    "title": "Tinashe - Flame (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Xe9qCMlQZzo",
    "duration": 3.42
  },
  {
    "id": 2640,
    "title": "Cookiee Kawaii - Vibe (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FYmjVZbxbJ8",
    "duration": 1.62
  },
  {
    "id": 2641,
    "title": "ABBA - Slipping Through My Fingers (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=mOxpXSge7vs",
    "duration": 3.47
  },
  {
    "id": 2642,
    "title": "Madilyn Bailey - Wiser (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-AEHGMdgCkk",
    "duration": 3.98
  },
  {
    "id": 2643,
    "title": "Trey Songz - Simply Amazing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=l0Gr35DNFeA",
    "duration": 4.3
  },
  {
    "id": 2644,
    "title": "Boyzone - Baby Can I Hold You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qEH9w7TFInw",
    "duration": 3.4
  },
  {
    "id": 2645,
    "title": "Juice WRLD, The Kid LAROI - Reminds Me Of You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SEgSqGq938Q",
    "duration": 2.9
  },
  {
    "id": 2646,
    "title": "Zara Larsson - Don't Let Me Be Yours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ont1JfOY8tA",
    "duration": 3.72
  },
  {
    "id": 2647,
    "title": "DNCE - Body Moves (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UjDsK6VFBmc",
    "duration": 4.5
  },
  {
    "id": 2648,
    "title": "Ashley O - On A Roll (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=F7SxTlAuv5Q",
    "duration": 2.67
  },
  {
    "id": 2649,
    "title": "Bingo Players and Far East Movement - Get Up (Rattle) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8czby-7FXsc",
    "duration": 2.82
  },
  {
    "id": 2650,
    "title": "Gabbie Hanna - Medicate (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GYPT4UtfBjQ",
    "duration": 3.63
  },
  {
    "id": 2651,
    "title": "Jason Mraz & Meghan Trainor - More Than Friends (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mUsL_F_jBOE",
    "duration": 3.2
  },
  {
    "id": 2652,
    "title": "Hailee Steinfeld - I Love You's (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4VlkUxqL_So",
    "duration": 3.95
  },
  {
    "id": 2653,
    "title": "HRVY - I Don't Think About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=O2UI4Ii_hzw",
    "duration": 3.17
  },
  {
    "id": 2654,
    "title": "Rudy Mancuso - Lento (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=n0-F0tZdq8Y",
    "duration": 2.93
  },
  {
    "id": 2655,
    "title": "Cannons - Fire For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lhLON3fUywU",
    "duration": 4.0
  },
  {
    "id": 2656,
    "title": "KSI - On Point (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7uRkzMJLpAg",
    "duration": 4.35
  },
  {
    "id": 2657,
    "title": "Chris Brown ft. Benny Benassi - Beautiful People (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3ZhUDuqg3rY",
    "duration": 4.38
  },
  {
    "id": 2658,
    "title": "Arizona Zervas - FML (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=i2ORSLY9CLI",
    "duration": 4.15
  },
  {
    "id": 2659,
    "title": "Troye Sivan - Easy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bIkFUo3_Y1o",
    "duration": 4.08
  },
  {
    "id": 2660,
    "title": "Dove Cameron - Boyfriend (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=SFSPlENtqPA",
    "duration": 3.02
  },
  {
    "id": 2661,
    "title": "Years & Years - Sanctify (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qavWosX8Qgw",
    "duration": 3.48
  },
  {
    "id": 2662,
    "title": "Fall Out Boy - Young And Menace (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=aV0W-jt6NI8",
    "duration": 4.08
  },
  {
    "id": 2663,
    "title": "David Gates - Take Me Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6Z9rce3zCPQ",
    "duration": 3.42
  },
  {
    "id": 2664,
    "title": "Niall Horan - No Judgement (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SRXTSa-_DvQ",
    "duration": 3.3
  },
  {
    "id": 2665,
    "title": "Fuse ODG and Angel - T.I.N.A. (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wn1I-FXlkuo",
    "duration": 3.8
  },
  {
    "id": 2666,
    "title": "Katy Perry - Small Talk (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w9oBVnOaKjk",
    "duration": 3.08
  },
  {
    "id": 2667,
    "title": "Miley Cyrus - Can't Be Tamed (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GDOH8gxPz3I",
    "duration": 3.25
  },
  {
    "id": 2668,
    "title": "avenue beat - F2020 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6cLG11_ZA6o",
    "duration": 3.37
  },
  {
    "id": 2669,
    "title": "Nelly - Hey Porsche (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xMuNX6Za6F4",
    "duration": 3.8
  },
  {
    "id": 2670,
    "title": "P!nk ft  Wrabel - 90 Days (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P1lZyb3ooh8",
    "duration": 4.03
  },
  {
    "id": 2671,
    "title": "Against The Current - Strangers Again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NWDX0MiwPQU",
    "duration": 3.98
  },
  {
    "id": 2672,
    "title": "gnash - lonely again (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xo64PSxIDlI",
    "duration": 2.35
  },
  {
    "id": 2673,
    "title": "James Bay - Wild Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DVeGn_JLwcE",
    "duration": 3.63
  },
  {
    "id": 2674,
    "title": "Tinashe ft. Chris Brown - Player (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zEloQsYRofI",
    "duration": 3.9
  },
  {
    "id": 2675,
    "title": "Steve Aoki x Lauren Jauregui - All Night (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1kLKbljlFM4",
    "duration": 3.73
  },
  {
    "id": 2676,
    "title": "Bring Me The Horizon feat. Dani Filth - wonderful life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CsjQ1NDpUbs",
    "duration": 4.78
  },
  {
    "id": 2677,
    "title": "Andy Grammer - Back Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pmmakNMzJ7Y",
    "duration": 3.8
  },
  {
    "id": 2678,
    "title": "Lil Twist and Justin Bieber and Miley Cyrus - Twerk (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rR_tkAIIFXE",
    "duration": 3.85
  },
  {
    "id": 2679,
    "title": "Poppy - Bleach Blonde Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CzEZ9xmnNLw",
    "duration": 3.82
  },
  {
    "id": 2680,
    "title": "Lana Del Rey - Video Games (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=tzzF4vALNhE",
    "duration": 4.43
  },
  {
    "id": 2681,
    "title": "Ed Sheeran ft. Ella Mai - Put It All On Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WbIpVLsCWQ4",
    "duration": 3.42
  },
  {
    "id": 2682,
    "title": "Christine and the Queens - Tilted (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7IaPvlHvVqI",
    "duration": 4.47
  },
  {
    "id": 2683,
    "title": "P!nk - Try (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=LJRNmdCSc3Q",
    "duration": 3.48
  },
  {
    "id": 2684,
    "title": "HRVY - Told You So (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7WTHUMRkPDI",
    "duration": 3.2
  },
  {
    "id": 2685,
    "title": "Melissa Steel and Popcaan - Kisses For Breakfast (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z2jPqqpNq0A",
    "duration": 3.87
  },
  {
    "id": 2686,
    "title": "CHVRCHES - The Mother We Share (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=sJNtB1jRQog",
    "duration": 3.72
  },
  {
    "id": 2687,
    "title": "Anson Seabra - Robin Hood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hEViWpjU3Hs",
    "duration": 4.08
  },
  {
    "id": 2688,
    "title": "Kesha - Learn To Let Go (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cBj9udL0KNk",
    "duration": 3.88
  },
  {
    "id": 2689,
    "title": "Trevor Moran - I Wanna Fly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9vL1HBADzmU",
    "duration": 3.85
  },
  {
    "id": 2690,
    "title": "The 1975 - The City (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pNr5LSMXG94",
    "duration": 3.68
  },
  {
    "id": 2691,
    "title": "Charlie Puth - Some Type Of Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QVwLVXX7CHY",
    "duration": 3.4
  },
  {
    "id": 2692,
    "title": "Bucks Fizz - Making Your Mind Up (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EMwBoAI-PHg",
    "duration": 3.0
  },
  {
    "id": 2693,
    "title": "Cheryl Cole - Call My Name (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DIdYR6XUj0o",
    "duration": 3.82
  },
  {
    "id": 2694,
    "title": "John Martin - Anywhere for You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3KbcNzvOEj8",
    "duration": 4.95
  },
  {
    "id": 2695,
    "title": "Union J - Beautiful Life (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7IM-A_tLqq0",
    "duration": 4.38
  },
  {
    "id": 2696,
    "title": "Freya Ridings - Blackout (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=msTHlwnmbQk",
    "duration": 3.27
  },
  {
    "id": 2697,
    "title": "One Bit, Noah Cyrus - My Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oEKyXKL25FU",
    "duration": 3.25
  },
  {
    "id": 2698,
    "title": "Chris Brown and Aaliyah - Don't Think They Know (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=e76TSYl5T1A",
    "duration": 4.3
  },
  {
    "id": 2699,
    "title": "Bad Bunny - Moscow Mule (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cf06sXPkNA0",
    "duration": 4.45
  },
  {
    "id": 2700,
    "title": "Nick Jonas - Chainsaw (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pU_pOefSxzI",
    "duration": 3.85
  },
  {
    "id": 2701,
    "title": "Da\u00f0i Freyr (Da\u00f0i & Gagnamagni\u00f0) - Think About Things (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=paLqOMmRqG0",
    "duration": 3.18
  },
  {
    "id": 2702,
    "title": "Lauren Spencer Smith - Fingers Crossed (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=Ydco4uHmanM",
    "duration": 3.42
  },
  {
    "id": 2703,
    "title": "Candi Staton - Nights On Broadway (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-f2wo_2aM14",
    "duration": 3.93
  },
  {
    "id": 2704,
    "title": "Jessie J and Becky G - Excuse My Rude (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rFzx3VH4vPU",
    "duration": 3.45
  },
  {
    "id": 2705,
    "title": "No Rome ft. The 1975 - Narcissist (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=f-Ug1J1dC-Q",
    "duration": 3.53
  },
  {
    "id": 2706,
    "title": "Christina Perri - you mean the whole wide world to me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_iummmt0xZg",
    "duration": 2.07
  },
  {
    "id": 2707,
    "title": "LoveLeo - BOYFREN (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=4XdwLORfj1o",
    "duration": 2.52
  },
  {
    "id": 2708,
    "title": "Stereo Kicks - Love Me So (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DZa2NOnahTM",
    "duration": 4.02
  },
  {
    "id": 2709,
    "title": "Halsey - I HATE EVERYBODY (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LdiU9n6vlP8",
    "duration": 3.3
  },
  {
    "id": 2710,
    "title": "Demi Lovato ft. Sirah - Waitin For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MYeP6CTaeMM",
    "duration": 3.67
  },
  {
    "id": 2711,
    "title": "Lil Peep - Cry Alone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=69LBAsBcZ-M",
    "duration": 3.0
  },
  {
    "id": 2712,
    "title": "Arctic Monkeys - Brianstorm (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ixD5G-fzvUE",
    "duration": 3.05
  },
  {
    "id": 2713,
    "title": "Lil Xxel - LMK (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fegULDqE9GM",
    "duration": 3.37
  },
  {
    "id": 2714,
    "title": "Lil Mayo - Be Gone Thot! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SuCg7ZUe8F0",
    "duration": 1.63
  },
  {
    "id": 2715,
    "title": "The Everly Brothers - Let It Be Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DML7SdkO5ZQ",
    "duration": 2.8
  },
  {
    "id": 2716,
    "title": "Travie McCoy ft. Sia - Golden (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oo96H1OG5VY",
    "duration": 3.9
  },
  {
    "id": 2717,
    "title": "JLS - Love You More (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z1Uh8Gxxci4",
    "duration": 4.15
  },
  {
    "id": 2718,
    "title": "Little Mix - Happiness (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MRbbzT9iJw8",
    "duration": 3.7
  },
  {
    "id": 2719,
    "title": "Noah Cyrus - I'm Stuck (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dGf12oesrBw",
    "duration": 3.47
  },
  {
    "id": 2720,
    "title": "Sigrid - SUCKER PUNCH (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=8cE3XUX6F20",
    "duration": 3.65
  },
  {
    "id": 2721,
    "title": "Lauv, Conan Gray - Fake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=t4s37bZQuSY",
    "duration": 2.85
  },
  {
    "id": 2722,
    "title": "Bea Miller - Dracula (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JYhavU3IhfQ",
    "duration": 3.48
  },
  {
    "id": 2723,
    "title": "The Weeknd - Where You Belong (from 'Fifty Shades of Grey' Soundtrack) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=HOfKC4FGM7I",
    "duration": 5.33
  },
  {
    "id": 2724,
    "title": "Kygo, Imagine Dragons - Born To Be Yours (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_ETGf6r1zJU",
    "duration": 3.53
  },
  {
    "id": 2725,
    "title": "Rauw Alejandro - Tattoo (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CzNBYF2tGNs",
    "duration": 3.6
  },
  {
    "id": 2726,
    "title": "Dan Hill - Never Thought That I Could Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Lqfn-J82-O8",
    "duration": 3.62
  },
  {
    "id": 2727,
    "title": "Vance Joy - Call If You Need Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pkleV8mlxwg",
    "duration": 3.13
  },
  {
    "id": 2728,
    "title": "DJ Khaled ft. Drake - For Free (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vIIIxiFzpSU",
    "duration": 3.63
  },
  {
    "id": 2729,
    "title": "Troye Sivan - Lucky Strike (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=fmtAusg2mls",
    "duration": 3.87
  },
  {
    "id": 2730,
    "title": "Jess Glynne - Right Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T3LzwxVpm7o",
    "duration": 4.0
  },
  {
    "id": 2731,
    "title": "Charlie Puth - I Warned Myself (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Eww8-Ky_VNc",
    "duration": 3.03
  },
  {
    "id": 2732,
    "title": "Troye Sivan - Angel Baby (Karaoke Piano)",
    "video_url": "https://www.youtube.com/watch?v=T4KyhB9l-L4",
    "duration": 4.05
  },
  {
    "id": 2733,
    "title": "Alesso, TINI - Sad Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ARBJv24WtHs",
    "duration": 2.82
  },
  {
    "id": 2734,
    "title": "Foxes - Let Go For Tonight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_ukBxzYp6DA",
    "duration": 4.23
  },
  {
    "id": 2735,
    "title": "The Chainsmokers ft. XYL\u00d8 - Setting Fires (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=cQ3TSUnfNhA",
    "duration": 4.53
  },
  {
    "id": 2736,
    "title": "Drake - I'm Upset (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ebgYlvQ7Jm0",
    "duration": 3.42
  },
  {
    "id": 2737,
    "title": "Fuse ODG - Million Pound Girl (Badder Than Bad) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=MfL3EQaytvs",
    "duration": 3.45
  },
  {
    "id": 2738,
    "title": "Union J - Carry You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hET7cow11KQ",
    "duration": 3.38
  },
  {
    "id": 2739,
    "title": "John Newman - Cheating (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=QseRWDhVHsg",
    "duration": 3.92
  },
  {
    "id": 2740,
    "title": "Benny - Boys Will Be Boys (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Tl90y31RWnI",
    "duration": 4.2
  },
  {
    "id": 2741,
    "title": "Noah Cyrus, Lil Xan - Live Or Die (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b48aAThhrMs",
    "duration": 3.48
  },
  {
    "id": 2742,
    "title": "Major Lazer ft. Ariana Grande  - All My Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=msqBvKWsf7Q",
    "duration": 3.85
  },
  {
    "id": 2743,
    "title": "Noah Cyrus, Tanner Alexander - Lately (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dnDl1hjM6AI",
    "duration": 3.68
  },
  {
    "id": 2744,
    "title": "LANY - If You See Her (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rjRPAKBHFTI",
    "duration": 3.28
  },
  {
    "id": 2745,
    "title": "Rita Ora - Shine Ya Light (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=L0u8R04l4Mk",
    "duration": 3.82
  },
  {
    "id": 2746,
    "title": "Zara Larsson - Don't Worry Bout Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IPTrk6ZHHoY",
    "duration": 3.73
  },
  {
    "id": 2747,
    "title": "Samantha Harvey - Please (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UrFasuSeBPg",
    "duration": 3.1
  },
  {
    "id": 2748,
    "title": "Bazzi - Rene\u0301e's Song (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=DLR8zu7aHDM",
    "duration": 2.47
  },
  {
    "id": 2749,
    "title": "Leona Lewis - Fire Under My Feet (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=mAH8lsmDEB8",
    "duration": 4.03
  },
  {
    "id": 2750,
    "title": "iann dior, Trippie Redd - gone girl (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=drEzuXi8mT0",
    "duration": 2.68
  },
  {
    "id": 2751,
    "title": "Lucy Spraggan - Lighthouse (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kF1JFT96oWk",
    "duration": 3.7
  },
  {
    "id": 2752,
    "title": "Marshmello  - Rooftops (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=u-3kXgZQEBU",
    "duration": 3.25
  },
  {
    "id": 2753,
    "title": "Jordan Pruitt - Merry Christmas Baby (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vavvsJmo4h4",
    "duration": 3.85
  },
  {
    "id": 2754,
    "title": "347aidan - Demons and Monsters (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=bD4lL-Fx_IE",
    "duration": 3.8
  },
  {
    "id": 2755,
    "title": "Lady Gaga - Million Reasons (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=2Si9GK36rVw",
    "duration": 3.62
  },
  {
    "id": 2756,
    "title": "nothing,nowhere. - hammer (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ec4vC2QnLwc",
    "duration": 3.75
  },
  {
    "id": 2757,
    "title": "Jessie J - It's My Party (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=b6wXoujOMGw",
    "duration": 3.83
  },
  {
    "id": 2758,
    "title": "Cher Lloyd - Bind Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=EevP04l97PA",
    "duration": 3.95
  },
  {
    "id": 2759,
    "title": "Marshmello x Juicy J ft. James Arthur - You Can Cry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s4rqxsx1-7k",
    "duration": 3.53
  },
  {
    "id": 2760,
    "title": "CMTEN - NEVER MET! (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=hCU_wjR9hZA",
    "duration": 2.83
  },
  {
    "id": 2761,
    "title": "Owl City - Humbug (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6ctk_hsJ_-o",
    "duration": 4.92
  },
  {
    "id": 2762,
    "title": "Panic! At The Disco - Dancing's Not A Crime (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZKArR5KM5mc",
    "duration": 3.9
  },
  {
    "id": 2763,
    "title": "WSTRN - In2 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zj2vI9EASdo",
    "duration": 4.53
  },
  {
    "id": 2764,
    "title": "Shane Filan - Everything To Me (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=SkwcAhRaEIg",
    "duration": 3.73
  },
  {
    "id": 2765,
    "title": "5 Seconds Of Summer - Wildflower (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=W34p3ag0qgA",
    "duration": 4.18
  },
  {
    "id": 2766,
    "title": "Bethany Mota feat. Mike Tompkins - Need You Right Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=P1OgjSlXzK8",
    "duration": 4.07
  },
  {
    "id": 2767,
    "title": "HRVY - I Wish You Were Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RBGUINaCLtA",
    "duration": 2.33
  },
  {
    "id": 2768,
    "title": "5 Seconds Of Summer and Scott Mills - Hearts Upon Our Sleeve (World Cup 2014 Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Ohg5_yH0fQ8",
    "duration": 3.92
  },
  {
    "id": 2769,
    "title": "Little Mix - Joan Of Arc (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Jr6MwretpMQ",
    "duration": 3.4
  },
  {
    "id": 2770,
    "title": "boygenius - Emily I'm Sorry (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_0ctZUD65Xc",
    "duration": 3.67
  },
  {
    "id": 2771,
    "title": "Jonas Blue ft. Theresa Rex - What I Like About You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=olNGLHKj9_c",
    "duration": 3.9
  },
  {
    "id": 2772,
    "title": "Fuse ODG and Sean Paul - Dangerous Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dFGokH0hG_8",
    "duration": 4.35
  },
  {
    "id": 2773,
    "title": "Little Mix - A.D.I.D.A.S (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wejyFn4GDcs",
    "duration": 3.75
  },
  {
    "id": 2774,
    "title": "Madison Beer - Selfish (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=IH-dkzl9by4",
    "duration": 3.98
  },
  {
    "id": 2775,
    "title": "Neon Jungle - Trouble (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yCanOK-R6sw",
    "duration": 2.88
  },
  {
    "id": 2776,
    "title": "Alex Aiono - Question (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jQjpf57IQq8",
    "duration": 4.13
  },
  {
    "id": 2777,
    "title": "United Kingdolls - UK Hun? (from RuPaul\u2019s Drag Race UK) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NpozZ2UHU5I",
    "duration": 3.2
  },
  {
    "id": 2778,
    "title": "Lana Del Rey - Looking For America (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kAGdsoH2l3E",
    "duration": 3.08
  },
  {
    "id": 2779,
    "title": "Rixton - Make Out (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=NWWXvzat7lk",
    "duration": 3.72
  },
  {
    "id": 2780,
    "title": "Miley Cyrus -  Younger Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Fmk4Hsb-A_s",
    "duration": 4.17
  },
  {
    "id": 2781,
    "title": "Incubus - No Fun (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1cGYpyEFgMQ",
    "duration": 3.78
  },
  {
    "id": 2782,
    "title": "Sage The Gemini ft. Nick Jonas - Good Thing (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1gfFImcYgAE",
    "duration": 4.08
  },
  {
    "id": 2783,
    "title": "Breaking Benjamin - Blood (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zDug9jMBf7E",
    "duration": 3.58
  },
  {
    "id": 2784,
    "title": "Swedish House Mafia ft. Tinie Tempah - Miami 2 Ibiza (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=9JZi1XSvTdU",
    "duration": 3.28
  },
  {
    "id": 2785,
    "title": "Charli XCX ft. Lizzo - Blame It On Your Love (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=dKXbO31RmiU",
    "duration": 3.48
  },
  {
    "id": 2786,
    "title": "X Ambassadors - Don't Stay (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ZUQ9xNWNSzk",
    "duration": 3.45
  },
  {
    "id": 2787,
    "title": "Rita Ora - Radioactive (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Nv5boiav3ek",
    "duration": 4.23
  },
  {
    "id": 2788,
    "title": "McBusted - Air Guitar (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UvyKFvSlYjk",
    "duration": 3.67
  },
  {
    "id": 2789,
    "title": "David Guetta ft. Chris Brown and Lil Wayne - I Can Only Imagine (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=-VxukGeyqGQ",
    "duration": 3.83
  },
  {
    "id": 2790,
    "title": "Lewis Capaldi - Forget Me (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=6BPSquDTD5Q",
    "duration": 3.77
  },
  {
    "id": 2791,
    "title": "Conor Maynard - Talking About (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=pMfSc5VSp6o",
    "duration": 3.62
  },
  {
    "id": 2792,
    "title": "Chris Brown - Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=izr_9HpTZaU",
    "duration": 3.0
  },
  {
    "id": 2793,
    "title": "Carly Rae Jepsen - Too Much (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lZ9ZUrgMnOA",
    "duration": 3.53
  },
  {
    "id": 2794,
    "title": "Diplo ft. M\u00d8 - Get It Right (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UmEFwcj1wlY",
    "duration": 3.2
  },
  {
    "id": 2795,
    "title": "Khalid - Right Back ft. A Boogie Wit Da Hoodie (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WYmdxnw2sWc",
    "duration": 4.35
  },
  {
    "id": 2796,
    "title": "Coldplay - Hypnotised (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=M4ZxAIzVJt8",
    "duration": 6.17
  },
  {
    "id": 2797,
    "title": "The Gaslight Anthem - 45 (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=o83nHAszSrQ",
    "duration": 3.62
  },
  {
    "id": 2798,
    "title": "DJ Fresh ft. Rita Ora - Hot Right Now (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0Qn0loeMRQs",
    "duration": 3.33
  },
  {
    "id": 2799,
    "title": "Migos ft. 2 Chainz - Deadz (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=GxtFwKKSmT0",
    "duration": 5.0
  },
  {
    "id": 2800,
    "title": "Amy Shark - Sink In (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=T123rkm7x60",
    "duration": 4.9
  },
  {
    "id": 2801,
    "title": "Daya - Cool (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=IXx2MMuGFzM",
    "duration": 4.07
  },
  {
    "id": 2802,
    "title": "Noah Cyrus ft. M\u00d8 - We Are... (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RzQ3esPuewY",
    "duration": 3.7
  },
  {
    "id": 2803,
    "title": "Lil Pump ft. Juice WRLD - Oh Yeah (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Iu2CKCW9zdc",
    "duration": 1.98
  },
  {
    "id": 2804,
    "title": "Sam Smith - Like I Can (Piano Karaoke)",
    "video_url": "https://www.youtube.com/watch?v=046zCU6C5qY",
    "duration": 2.97
  },
  {
    "id": 2805,
    "title": "BTS - Blue & Grey (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TKqhYZ_MRsU",
    "duration": 4.55
  },
  {
    "id": 2806,
    "title": "Mary MacGregor - Torn Between Two Lovers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=JOI1FEhsMq8",
    "duration": 4.15
  },
  {
    "id": 2807,
    "title": "Snakehips, Anne-Marie ft. Joey Bada$$ - Either Way (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=AyXr1RTColg",
    "duration": 3.52
  },
  {
    "id": 2808,
    "title": "The Chainsmokers - Kills You Slowly (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=oCkoEMDryqA",
    "duration": 3.78
  },
  {
    "id": 2809,
    "title": "Nick Jonas, Anne Marie ft. Mike Posner - Remember I Told You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Zi2XxyhpRuM",
    "duration": 3.52
  },
  {
    "id": 2810,
    "title": "AJR - Role Models (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=TwXS-MW5vi0",
    "duration": 3.38
  },
  {
    "id": 2811,
    "title": "Bastille - Torn Apart (Bastille VS. Grades) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w8m7vg9BCaM",
    "duration": 3.42
  },
  {
    "id": 2812,
    "title": "Phora ft. Jhene\u0301 Aiko - Stars In The Sky (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=iJFM66wRttY",
    "duration": 4.43
  },
  {
    "id": 2813,
    "title": "The Chainsmokers - Do You Mean ft. Ty Dolla $ign, bu\u0308low (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=gWBEtVoX3K0",
    "duration": 3.5
  },
  {
    "id": 2814,
    "title": "Fifth Harmony - Me & My Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=79MtlwBg0ik",
    "duration": 3.72
  },
  {
    "id": 2815,
    "title": "Charli XCX ft. M\u00d8 - 3am (Pull Up) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BhEvk0d0zn4",
    "duration": 4.5
  },
  {
    "id": 2816,
    "title": "Biffy Clyro - Black Chandelier (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=16ngyFp4QdY",
    "duration": 4.02
  },
  {
    "id": 2817,
    "title": "Iggy Azalea - Iggy Szn (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2OfWJZPK3X8",
    "duration": 3.67
  },
  {
    "id": 2818,
    "title": "Nine Days - Absolutely (Story of a Girl) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=r-w__4au_Tc",
    "duration": 3.37
  },
  {
    "id": 2819,
    "title": "DJ Fresh and Ellie Goulding - Flashlight (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=jhNLW2_Oejg",
    "duration": 3.83
  },
  {
    "id": 2820,
    "title": "Foxes - Holding Onto Heaven (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RxXWFl8Fmk4",
    "duration": 3.78
  },
  {
    "id": 2821,
    "title": "Louisa ft. 2 Chainz - YES (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=5r7uxdWzyCY",
    "duration": 3.3
  },
  {
    "id": 2822,
    "title": "Pale Waves - The Tide (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xAA751IOyts",
    "duration": 3.62
  },
  {
    "id": 2823,
    "title": "DJ Fresh VS Diplo and Dominique Young Unique - Earthquake (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=wM-C3Z8Nem8",
    "duration": 3.12
  },
  {
    "id": 2824,
    "title": "CHVRCHES ft. Matt Berninger - My Enemy (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=qtOaQH1eEIQ",
    "duration": 3.88
  },
  {
    "id": 2825,
    "title": "blackbear, Lauv - if i were u (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=0M8RAAxmnts",
    "duration": 3.27
  },
  {
    "id": 2826,
    "title": "Katy Perry - Who Am I Living For? (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=WX2Zp0XK0G4",
    "duration": 4.42
  },
  {
    "id": 2827,
    "title": "Spencer Crandall ft. Julia Cole - Things I Can't Say (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=zO4MJqHd6SQ",
    "duration": 3.12
  },
  {
    "id": 2828,
    "title": "Tom Walker -  Wait For You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=w5qaM7G1HnQ",
    "duration": 3.42
  },
  {
    "id": 2829,
    "title": "Nicole Scherzinger - Boomerang (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=3u7dyorgyBU",
    "duration": 3.35
  },
  {
    "id": 2830,
    "title": "Charlie Puth - I Warned Myself (Karaoke Version with Backing Vocals)",
    "video_url": "https://www.youtube.com/watch?v=Eyumo4hFhcE",
    "duration": 3.02
  },
  {
    "id": 2831,
    "title": "Why Don't We - Kiss You This Christmas (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=RpxNeN6UnWE",
    "duration": 2.85
  },
  {
    "id": 2832,
    "title": "Megan Nicole - Electrified (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=1OOuQ5CMQTw",
    "duration": 3.88
  },
  {
    "id": 2833,
    "title": "Alex Aiono, T-Pain - One At A Time (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=UyJzRKIhlBM",
    "duration": 3.67
  },
  {
    "id": 2834,
    "title": "Elyar Fox - A Billion Girls (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=yVu-4OAcMI0",
    "duration": 3.77
  },
  {
    "id": 2835,
    "title": "Wretch 32 - 6 Words (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=s2GEl7Ple9U",
    "duration": 3.88
  },
  {
    "id": 2836,
    "title": "Union J - Tonight (We Live Forever) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z-mdz2aKPgE",
    "duration": 3.65
  },
  {
    "id": 2837,
    "title": "Ne-Yo - Coming With You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Z0iCPfzgPqA",
    "duration": 4.7
  },
  {
    "id": 2838,
    "title": "James Newman - Embers (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xVnqSeLX84c",
    "duration": 3.17
  },
  {
    "id": 2839,
    "title": "The Kid LAROI - Kids Are Growing Up (Part 1) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=vJilneCLSbU",
    "duration": 2.25
  },
  {
    "id": 2840,
    "title": "Kylie Minogue - Into the Blue (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eGa2T3ilPdU",
    "duration": 4.48
  },
  {
    "id": 2841,
    "title": "Mr. Probz - Praying To A God (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6reOzil6yKc",
    "duration": 3.87
  },
  {
    "id": 2842,
    "title": "Naughty Boy and Emeli Sand\u00e9 - Lifted (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=FH4XRaC9Ze0",
    "duration": 3.55
  },
  {
    "id": 2843,
    "title": "ZAYN ft. Nicki Minaj - No Candle No Light (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=BC9TJI0qP7k",
    "duration": 3.4
  },
  {
    "id": 2844,
    "title": "Matrix & Futurebound and Max Marshall - Control (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Rt2vt7U-6jU",
    "duration": 4.08
  },
  {
    "id": 2845,
    "title": "ZHU x AlunaGeorge - Automatic (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=07z6eOSpWp8",
    "duration": 4.22
  },
  {
    "id": 2846,
    "title": "CARYS - No More (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=xidiyjf94MQ",
    "duration": 3.38
  },
  {
    "id": 2847,
    "title": "Naughty Boy and Sam Romans - Home (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=2v-PoJdMsfg",
    "duration": 3.75
  },
  {
    "id": 2848,
    "title": "Pixie Lott - Lay Me Down (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=lfm5wEn08h0",
    "duration": 3.77
  },
  {
    "id": 2849,
    "title": "Poo Bear ft. Zara Larsson - Either (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=CYHSlM19CiU",
    "duration": 3.5
  },
  {
    "id": 2850,
    "title": "Britney Spears - Showdown (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=osaAtdKMHz8",
    "duration": 3.65
  },
  {
    "id": 2851,
    "title": "Elina - Another Round (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=eOk5HzVhe8g",
    "duration": 3.17
  },
  {
    "id": 2852,
    "title": "Oliver Heldens ft. KStewart - Last All Night (Koala) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=rFfsmRca5SA",
    "duration": 3.52
  },
  {
    "id": 2853,
    "title": "Sam Smith, Koffee, Jessie Reyez - Gimme (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=_jq-e2QtSV4",
    "duration": 3.1
  },
  {
    "id": 2854,
    "title": "Lucy Spraggan - Someone (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=LRcXnBQ_nsk",
    "duration": 2.75
  },
  {
    "id": 2855,
    "title": "Maverick Sabre - Emotion (Ain't Nobody) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=7SadKnEYzMI",
    "duration": 3.77
  },
  {
    "id": 2856,
    "title": "The Kid LAROI - I Can\u2019t Go Back To The Way It Was (Intro) (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=x-2ogfKAZbY",
    "duration": 3.55
  },
  {
    "id": 2857,
    "title": "Disclosure - F for You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=Jv7hnWeUmIM",
    "duration": 4.37
  },
  {
    "id": 2858,
    "title": "Selena Gomez - Vulnerable (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=ltriLBa-NkU",
    "duration": 3.43
  },
  {
    "id": 2859,
    "title": "Rudimental and Foxes - Right Here (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=d20XBaOnzOY",
    "duration": 5.53
  },
  {
    "id": 2860,
    "title": "Tulisa - Living Without You (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=6QSsqDgUn20",
    "duration": 3.67
  },
  {
    "id": 2861,
    "title": "Matrix & Futurebound and Tanya Lacey - Don't Look Back (Karaoke Version)",
    "video_url": "https://www.youtube.com/watch?v=kt0Bv3RSAL8",
    "duration": 4.37
  }
];

export default songs;