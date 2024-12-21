import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const getTsById = createAsyncThunk(
  '/campers/:id',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
