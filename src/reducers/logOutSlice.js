import { createSlice} from '@reduxjs/toolkit';
import { logOut } from './action';


const logOutSlice = createSlice({
    name: 'logOuts',
    initialState : {
      logOutItem: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(logOut.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(logOut.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.logOutItem=action.payload;
        })
        .addCase(logOut.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default logOutSlice;