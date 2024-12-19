import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const getAllTransport = createAsyncThunk(
  '/campers',
  async (page, thunkApi) => {
    try {
      const params = { page, limit: 4 };
      const { data } = await instance.get('/campers', { params });
      console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
