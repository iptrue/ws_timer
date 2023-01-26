import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as timerActions from "../redux/timerActions";

const Timer = ({ socket }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.timer);

  useEffect(() => {
    socket.on("receive_message", (data, userNum) => {
      console.log(data, "recieve");
      console.log(userNum, "userNum");
      dispatch(timerActions.setUser(userNum));
      dispatch(timerActions.set(data));
    });
  }, [socket]);

  return <div>{value.value}</div>;
};

export default Timer;
