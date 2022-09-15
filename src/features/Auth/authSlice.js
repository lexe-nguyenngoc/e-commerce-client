import { createSlice } from '@reduxjs/toolkit';
import { status } from '~/constants';

export const ROOT_STATE_NAME = 'auth';
const initialState = {
  auth: {
    status: status.idle,
    data: {},
  },
};

const authSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    login: (state) => {
      state.auth.status = status.loading;
      state.auth.error = null;
    },
    loginSuccess: (state, action) => {
      state.auth.status = status.success;
      state.auth.data = action.payload;
    },
    loginFailure: (state, action) => {
      state.auth.status = status.fail;
      state.auth.error = action.payload;
    },
  },
});

export const authSelector = (state) => state[ROOT_STATE_NAME];
export const { login, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
