import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Room from "./pages/room";
import TestSongs from "./pages/TestSongs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/test-songs" element={<TestSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
