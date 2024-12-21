import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const getAllTransport = createAsyncThunk(
  '/campers',
  async ({ page, filters }, thunkApi) => {
    try {
      const params = { page, limit: 4, ...filters };
      console.log('Request Params:', params);
      const { data } = await instance.get('/campers', { params });
      console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
