import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateForCounterMiddleware = {
  user: "Afgani",
  counter: 500000,
};

export const userAsync = createAsyncThunk(
  "counterRTK_Middleware/comotDataUser",
  async (id) => {
    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
    return data.data;
  }
);

const counterMiddlewareSlice = createSlice({
  name: "counterMiddleware",
  initialState: initialStateForCounterMiddleware,
  reducers: {
    ditambah(state) {
      state.counter += 1;
    },
    dikurang(state) {
      state.counter -= 1;
    },
    balikNol(state) {
      state.counter = 0;
    },
    ditambahDengan(state, action) {
      state.counter += action.payload;
    },
    dikurangDengan(state, action) {
      state.counter -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.pending, () => {
        console.log("Nunggu data user nih...");
      })
      .addCase(userAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userAsync.rejected, () => {
        console.log("gagal comot data nih...");
      });
  },
});

// --- ACTION ---
export const { ditambah, dikurang, balikNol, ditambahDengan, dikurangDengan } =
  counterMiddlewareSlice.actions;

// --- SELECTOR ---
export const selectUser = (state) => state.counterMiddleware.user;
export const selectCounter = (state) => state.counterMiddleware.counter;

// --- REDUCER ---
export default counterMiddlewareSlice.reducer;
