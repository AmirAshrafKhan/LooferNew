import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { removeFromCart } from "./action";

const initialState = {
  cartItems: null,
  status: "idle",
  error: null,
};

const removeCartSlice = createSlice({
  name: "RemoveCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default removeCartSlice;
