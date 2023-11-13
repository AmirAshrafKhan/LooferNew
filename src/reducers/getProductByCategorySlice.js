import { createSlice} from '@reduxjs/toolkit';
import { getProductByCategory } from './action';


const getProductByCategorySlice = createSlice({
    name: 'productByCat',
    initialState : {
      categoryProducts: {},
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProductByCategory.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getProductByCategory.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.categoryProducts=action.payload;
        })
        .addCase(getProductByCategory.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default getProductByCategorySlice;