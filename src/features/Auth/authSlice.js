import { createSlice } from "@reduxjs/toolkit";

export const ROOT_STATE_NAME = "auth";
const initialState = {};

const authSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
});

export const authSelector = (state) => state[ROOT_STATE_NAME];
export const {} = authSlice.actions;
export default authSlice.reducer;
