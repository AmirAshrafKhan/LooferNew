import { createSlice} from '@reduxjs/toolkit';
import { createAddress } from './action';


const createAddressSlice = createSlice({
    name: 'createAdd',
    initialState : {
      createAddressItem: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createAddress.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(createAddress.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.createAddressItem=action.payload;
        })
        .addCase(createAddress.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default createAddressSlice;