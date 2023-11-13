import { createSlice } from "@reduxjs/toolkit";
import { productDetails } from "./action";

const productDetailSlice = createSlice({
  name: "productDetails",
  initialState: {
    pDetailsItem: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pDetailsItem = action.payload;
      })

      .addCase(productDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productDetailSlice;
