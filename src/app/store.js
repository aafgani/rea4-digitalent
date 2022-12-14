import { configureStore } from "@reduxjs/toolkit";
// import { initialValue, rootReducer } from "../reducers/rootReducer";
import counterSlice from "../features/counter/sliceCounter.js";
import counterMiddlewareSlice from "../features/counter/sliceCounterUsingThunk.js";
import { reqresinColorApi } from "../services/reqresinColorAPI.js";

export const storeRTK = configureStore({
  reducer: {
    counterRTK: counterSlice,
    counterMiddleware: counterMiddlewareSlice,
    [reqresinColorApi.reducerPath]: reqresinColorApi.reducer,
  },
  // middleware:(getDefaultMiddleware)=>{
  //   return getDefaultMiddleware().concat(reqresinColorApi.middleware);
  // }
});
