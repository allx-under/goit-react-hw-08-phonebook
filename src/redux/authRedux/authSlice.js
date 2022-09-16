import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
