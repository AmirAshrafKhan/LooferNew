import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showCart } from "./action";

const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    showCartItem: [],
    status: "idle",
    error: null,
    tax: [],
  },
  reducers: {
    showCarts(state, action) {
      state.showCartItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(showCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.showCartItem = action.payload.cart;
        state.tax = action.payload.tax;
      })
      .addCase(showCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
console.log(showCartSlice, "showcart Slice");

export default showCartSlice;
export const { showCarts } = showCartSlice.actions;
