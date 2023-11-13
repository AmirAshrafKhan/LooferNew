import { createSlice } from "@reduxjs/toolkit";
import { showAddress } from "./action";

const showAddressSlice = createSlice({
  name: "addressDetails",
  initialState: {
    addressItems: [],
    status: "idle",
    error: null,
  },
  reducers: {
    showAddresses(state, action) {
      state.addressItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(showAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addressItems = action.payload;
      })
      .addCase(showAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default showAddressSlice;
export const { showAddresses } = showAddressSlice.actions;
