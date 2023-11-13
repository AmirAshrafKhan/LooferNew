import { createSlice} from '@reduxjs/toolkit';
import { getCategoryProduct } from './action';


const getCategoryProductSlice = createSlice({
    name: 'categoryProduct',
    initialState : {
      productItems: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getCategoryProduct.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getCategoryProduct.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.productItems=action.payload;
        })
        .addCase(getCategoryProduct.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default getCategoryProductSlice;