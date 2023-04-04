import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./DemoReact/DemoReact";

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});
