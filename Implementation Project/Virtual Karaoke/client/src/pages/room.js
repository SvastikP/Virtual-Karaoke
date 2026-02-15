import { useParams, useNavigate } from "react-router-dom";

function Room() {
  const { roomId } = useParams(); //Get room id
  const navigate = useNavigate(); //Navigate hook for routing

  //Handle leaving the room
  const handleLeaveRoom = () => {
    navigate("/"); //Navigate back to home page
  };

  
  return (
    <div className="room-container">
      <h1 className="title">Room: {roomId} </h1>
      <div className="button-container">
        <button onClick={handleLeaveRoom}>Leave Room</button>
      </div>
    </div>
  );
}

export default Room;
