import { createSlice} from '@reduxjs/toolkit';
import { userLogin } from './action';


const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: {
      userInfo: null,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userLogin.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.userInfo=action.payload;
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default userLoginSlice;