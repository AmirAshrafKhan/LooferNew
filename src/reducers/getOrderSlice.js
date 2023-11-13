import { createSlice} from '@reduxjs/toolkit';
import { getOrder } from './action';


const getOrderSlice = createSlice({
    name: 'getOrderDetails',
    initialState : {
      getOrderItem: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getOrder.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getOrder.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.getOrderItem=action.payload;
        })
        .addCase(getOrder.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default getOrderSlice;