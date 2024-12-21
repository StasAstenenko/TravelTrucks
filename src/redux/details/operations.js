import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const getTsById = createAsyncThunk(
  'camper/idCamper',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`/campers/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
