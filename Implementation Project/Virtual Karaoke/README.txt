Prerequisites
    Install Docker Desktop  
    Have Docker Desktop running in background

How to run Virtual Karaoke:
    Open a terminal and navigate to the project root folder:
        "Virtual Karaoke"

    Build and start both the client and server containers:
        docker compose up --build

    When containers are built, you will see:
        server-1  | Server running on port 4000
        client-1  | Client running on port 3000

    Open your web browser and visit:
        http://localhost:3000 -> For Virtual Karaoke
        http://localhost:5000/songs -> For API of Song libraries
        http://localhost:3000/test-songs -> Test song library

    To close the web:
        Ctrl + C