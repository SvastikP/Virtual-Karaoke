import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

function Room() {
  const { roomId } = useParams(); //Get room id

  return (
    <div className="room-container">
      <h1 className="title">Room: {roomId} </h1>
    </div>
  );
}

export default Room;
