import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetails } from "./action";

const getOrderDetailsSlice = createSlice({
  name: "singleOrderDetails",
  initialState: {
    singleOrderDetailsItem: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleOrderDetailsItem = action.payload;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getOrderDetailsSlice;
