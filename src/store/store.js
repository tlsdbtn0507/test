import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice";
import goalReducer from '../store/goalSlice'

export default configureStore({
  reducer: {
    counterReducer:counterReducer,
    goal:goalReducer
  },
});
