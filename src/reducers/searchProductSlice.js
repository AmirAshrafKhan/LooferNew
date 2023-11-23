// import { createSlice } from "@reduxjs/toolkit";
// import { searchProducts } from "./action";

// const searchProductSlice = createSlice({
//   name: "searchProducts",
//   initialState: {
//     query: "",
//     searchResults: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(searchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(searchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.searchItem = action.payload;
//         state.query = action.payload;
//       })
//       .addCase(searchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default searchProductSlice;

// searchSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to fetch data
// export const fetchData = createAsyncThunk(
//   "search/fetchData",
//   async (searchTerm) => {
//     try {
//       const response = await axios.post(
//         "https://loofer.bellazza.in/api/search",
//         { searchTerm }
//       );
//       return response.data;
//       console.log(response.data, "search response");
//     } catch (error) {
//       throw error;
//     }
//   }
// );

export const fetchData = createAsyncThunk(
  "search/fetchData",
  async (searchTerm) => {
    const response = await axios.post("https://loofer.bellazza.in/api/search", {
      searchTerm,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: searchTerm }),
    });
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: [],
    status: "idle", // or 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export default searchSlice.reducer;
export default fetchData;
