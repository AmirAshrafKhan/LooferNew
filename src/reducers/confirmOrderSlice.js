import { createSlice} from '@reduxjs/toolkit';
import { placeConfirmOrder } from './action';


const confirmOrderSlice = createSlice({
    name: 'confirmOrder',
    initialState : {
      confirmOrderplace: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(placeConfirmOrder.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(placeConfirmOrder.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.confirmOrderplace=action.payload;
        })
        .addCase(placeConfirmOrder.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default confirmOrderSlice;