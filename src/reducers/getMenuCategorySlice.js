import { createSlice} from '@reduxjs/toolkit';
import { getMenuCategory } from './action';


const getMenuCategorySlice = createSlice({
    name: 'menuCategory',
    initialState : {
      categoryItem: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getMenuCategory.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getMenuCategory.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.categoryItem=action.payload;
        })
        .addCase(getMenuCategory.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export default getMenuCategorySlice;