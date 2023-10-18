import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ value: 0, index: 1 }];
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, { payload }) {
      state[payload].value += 1;
    },
    makeMoreState(state) {
      state.push({ value: 0, index: state.length + 1 });
    },
  },
});

export const counterActoins = counterSlice.actions;
export default counterSlice.reducer;
