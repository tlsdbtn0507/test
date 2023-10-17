import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [
    {
      value: 0,
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, index) {
      state.arr[index].value += 1;
    },
    makeMoreState(state) {
      state.arr.push({ value: 0 });
    },
  },
});

export const counterActoins = counterSlice.actions;
export default counterSlice.reducer;
