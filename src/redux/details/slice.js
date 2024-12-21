import { createSlice } from '@reduxjs/toolkit';
import { getTsById } from './operations';

const initialState = {
  transport: {},
  isLoading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getTsById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transport = action.payload;
        state.error = null;
      })
      .addCase(getTsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const detailsReducer = detailsSlice.reducer;
