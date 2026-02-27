//Backend
const cors = require("cors"); //Allow communication between ports 
const express = require("express"); //Parse JSON requests

const app = express();


app.use(cors());
app.use(express.json());


//Store room ids and partipants
const rooms = {};

//Recicve POST to create a room
app.post("/create-room", (req, res) => {
    //Generate random number (decimal) -> turn into base36 -> get rid of decimal
    const roomId = Math.random().toString(36).substring(2, 8); 
    rooms[roomId] = { users: [] }; 
    res.json({ roomId }); }) //Send room id to front end


app.post("/join-room", (req, res) => {
    const {roomId} = req.body;

    exists = false;

    if(rooms[roomId])
        exists = true;

    return res.json({exists})
})

app.listen(4000, () => console.log("Server running on port 4000"));
