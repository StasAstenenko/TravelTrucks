import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const getAllTransport = createAsyncThunk(
  '/campers',
  async ({ page, filters }, thunkApi) => {
    try {
      const params = { page, limit: 4, ...filters };
      const { data } = await instance.get('/campers', { params });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
