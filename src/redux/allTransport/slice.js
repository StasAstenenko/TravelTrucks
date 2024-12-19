import { createSlice } from '@reduxjs/toolkit';
import { getAllTransport } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const allTransportSlice = createSlice({
  name: 'allTransport',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransport.pending, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addCase(getAllTransport.fulfilled, (state, action) => {
        state.items = action.payload;
        console.log(state.items);
      });
  },
});

export const allTransportReducer = allTransportSlice.reducer;
