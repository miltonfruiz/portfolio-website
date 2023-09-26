import { configureStore } from "@reduxjs/toolkit";
import cityReducers from "./reducers/city";
import userReducers from "./reducers/user";

export const store = configureStore({
  reducer: {
    cityReducer: cityReducers,
    userReducer: userReducers,
  },
});
