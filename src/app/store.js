import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
