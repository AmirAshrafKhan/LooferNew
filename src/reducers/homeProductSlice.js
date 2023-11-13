import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiToken';
import { homeProductList } from './action';


const initialState = {
  homeProductItems: [],
  status: 'idle',
  error: null,
};


const productSlice = createSlice({
  name: 'homeProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeProductList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(homeProductList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.homeProductItems.push(action.payload);
      })
      .addCase(homeProductList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice;
