import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("timer/increment");
export const reset = createAction("timer/reset");
export const set = createAction("timer/set");
export const setUser = createAction("timer/setUser");
