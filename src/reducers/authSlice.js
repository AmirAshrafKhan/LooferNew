import { createSlice } from '@reduxjs/toolkit';



const initialState = {

 token: null,
  user: {
    id: null,
    name: '',
    email: '',
  },
  isAuthenticated: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokenAndUser: (state, action) => {
      console.log(action,'actionss')
        const { token, user } = action.payload;
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
        state.errorMessage = null;
      },
    clearTokenAndUser: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.errorMessage = null;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
console.log(authSlice.actions,'authslice actions ')
export const { setTokenAndUser, clearTokenAndUser, setErrorMessage } = authSlice.actions;
console.log(setTokenAndUser,'setToken and user')

export default authSlice.reducer;