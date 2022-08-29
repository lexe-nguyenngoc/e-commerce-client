const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  email: "",
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
