import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Room from "./components/Room";
import socketIO from "socket.io-client";
console.log(process.env.REACT_APP_API_URL);
const socket = socketIO.connect(`${process.env.REACT_APP_API_URL}`);
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
