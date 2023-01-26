import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Room from "./components/Room";
import socketIO from "socket.io-client";

const port = process.env.REACT_APP_API_URL || "http://localhost:3001";
console.log(port, "=my backend port");
const socket = socketIO.connect(port);
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Room socket={socket} />} />
      </Routes>
    </Router>
  );
}

export default App;
