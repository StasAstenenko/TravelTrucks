import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const detailsSlice = createSlice({
  name: 'details',
  initialState: initialState,
  reducers: {},
});

export const detailsReducer = detailsSlice.reducer;
