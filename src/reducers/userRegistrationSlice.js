import { createSlice} from '@reduxjs/toolkit';
import { userRegistration } from './action';


const registrationSlice = createSlice({
    name: 'registration',
    initialState : {
      regiItems: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userRegistration.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(userRegistration.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.regiItems=action.payload;
        })
        .addCase(userRegistration.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default registrationSlice;