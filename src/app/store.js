import { configureStore } from "@reduxjs/toolkit";

import authReducer, {
  ROOT_STATE_NAME as auth,
} from "~/features/Auth/authSlice";

const store = configureStore({
  reducer: {
    [auth]: authReducer,
  },
});

export default store;
