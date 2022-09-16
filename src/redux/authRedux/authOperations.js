import { signup, loginUser } from 'api/authAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await signup(data);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginUser(data);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
