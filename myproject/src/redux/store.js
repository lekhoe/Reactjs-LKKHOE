import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./DemoReact/DemoReact"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
