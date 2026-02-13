function Home() {
  const createRoom = async () => {
    const res = await fetch("http://localhost:4000/create-room", {
      method: "POST"
    });

    const data = await res.json();
    const roomId = data.roomId;

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