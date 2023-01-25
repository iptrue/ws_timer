import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Room from "./components/Room";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:3001");
function App() {
  return (
    <Router>
      {/* Rest of the code remains same */}
      <Routes>
        <Route path="/" element={<Room socket={socket} />} />
      </Routes>
    </Router>
  );
}

export default App;
