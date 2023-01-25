import { createReducer } from "@reduxjs/toolkit";
import { increment, reset, set, setUser } from "./timerActions";
const initialState = { value: 0, userNum: 0 };

export default createReducer(initialState, {
  [increment]: (state, action) => {
    return { ...state, value: state.value + action.payload };
    //state.value + action.payload}
  },
  [reset]: (state, action) => {
    return { ...state, value: 0 };
  },
  [set]: (state, action) => {
    return { ...state, value: action.payload };
    // state.value = action.payload;
  },
  [setUser]: (state, action) => {
    return { ...state, userNum: action.payload };

    // state.userNum = action.payload;
  },
});
