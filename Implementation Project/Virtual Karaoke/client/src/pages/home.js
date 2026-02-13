function Home() {

  //Send POST request to backend to create room
  const createRoom = async () => {
    const res = await fetch("http://localhost:4000/create-room", {
      method: "POST"
    });

    const data = await res.json(); //Wait for data to be sent from backend
    const roomId = data.roomId; //Get room id

    window.location.href = `/room/${roomId}`; //Send client to new room
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