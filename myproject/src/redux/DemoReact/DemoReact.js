import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "demo",
  initialState: {
    count: 0,
    name: "",
  },
  reducers: {
    increment: (state, action) => {
      state.count = action.payload;
    },
    decrement: (state, action) => {
      state.count = action.payload;
    },
    changName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { increment, decrement, changName } = counterSlice.actions;

export default counterSlice.reducer;
