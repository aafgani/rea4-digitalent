import { configureStore } from "@reduxjs/toolkit";
// import { initialValue, rootReducer } from "../reducers/rootReducer";
import counterSlice from "../features/counter/sliceCounter.js";

export const storeRTK = configureStore({
  reducer: {
    counterRTK: counterSlice,
  },
});
