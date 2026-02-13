function Home() {

  //Send POST request to backend to create room
  const createRoom = async () => {
    const res = await fetch("http://localhost:4000/create-room", {
      method: "POST"
    });
    //Wait for data to be sent from backend
    const data = await res.json();
    //Get room id
    const roomId = data.roomId;

    //Send client to new room
    window.location.href = `/room/${roomId}`;
  };

  return (
    <div className="home-container">
      <h1 className="title">Virtual Karaoke</h1>

      <div className="button-container">
        <button onClick={createRoom}>Create Room</button>
        <button>Join Room</button>
      </div>
    </div>
  );
}

export default Home;