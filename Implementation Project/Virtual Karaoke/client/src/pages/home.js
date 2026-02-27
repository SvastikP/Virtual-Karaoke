import { useState } from "react";

function Home() {
  const [joinRoomId, setJoinRoomId] = useState("");

  //Send POST request to backend to create room
  const createRoom = async () => {
    const res = await fetch("http://localhost:4000/create-room", {
      method: "POST"
    });

    const data = await res.json(); //Wait for data to be sent from backend
    const roomId = data.roomId; //Get room id

    window.location.href = `/room/${roomId}`; //Send client to new room
  };

  //Send POST reguest to backend to join room x
  const joinRoom = async () => {
     const res = await fetch("http://localhost:4000/join-room", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ roomId: joinRoomId })
    });

    const data = await res.json(); //Wait for data to be sent from backend

    if(data.exists) {
      window.location.href = `/room/${joinRoomId}`; //Send client to room
    }
    else {
      alert("Room does not exist");
    }

  }

  return (
  <div className="homeContainer">
    <h1 className="title">Virtual Karaoke</h1>

    <div className="buttonContainer">
      <button onClick={createRoom}>Create Room</button>

      <div className="joinContainer">
        <input 
          type="text" 
          placeholder="Enter Room ID"
          className="joinInput"
          value={joinRoomId}
          onChange={(e) => setJoinRoomId(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>

    </div>

  </div>
);

}

export default Home;