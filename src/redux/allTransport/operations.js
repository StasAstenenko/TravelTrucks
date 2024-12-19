import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const getAllTransport = createAsyncThunk(
  '/campers',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/campers');
      const { items } = data;
      console.log(items);
      return items;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
