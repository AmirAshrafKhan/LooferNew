import { createSlice} from '@reduxjs/toolkit';
import { deleteAddress } from './action';


const deleteAddressSlice = createSlice({
    name: 'deleteAdd',
    initialState : {
      deleteAddressItem: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(deleteAddress.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(deleteAddress.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.deleteAddressItem=action.payload;
        })
        .addCase(deleteAddress.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default deleteAddressSlice;