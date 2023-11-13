import { createSlice} from '@reduxjs/toolkit';
import { updateAddress } from './action';


const updateAddressSlice = createSlice({
    name: 'updateAdd',
    initialState : {
      updateAddressItem: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updateAddress.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(updateAddress.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.updateAddressItem=action.payload;
        })
        .addCase(updateAddress.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default updateAddressSlice;