import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import * as timerActions from "../redux/timerActions";

const Timer = ({ socket }) => {
  const sendMessage = (value) => {
    socket.emit("send_message", value);
  };
  const dispatch = useDispatch();
  const value = useSelector((state) => state.timer);

  // useEffect(() => {
  //   socket.on("receive_message", (data) => timerActions.set(data));
  // }, [socket, value]);

  useEffect(() => {
    socket.on("receive_message", (data, userNum) => {
      console.log(data, "recieve");
      console.log(userNum, "userNum");
      dispatch(timerActions.setUser(userNum));
      dispatch(timerActions.set(data));
    });
  }, [socket]);

  // useEffect(() => {
  //   console.log(value, "useEff");

  //   setInterval(() => {
  //     dispatch(timerActions.increment(1));
  //     console.log(value);
  //     socket.emit("send_message", value);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   console.log(value, " send");
  //   sendMessage(value);
  // }, [value]);

  // if (value >= 30) {
  //   dispatch(timerActions.reset());
  // }
  return <div>{value.value}</div>;
};

export default Timer;
