import { createSlice } from '@reduxjs/toolkit';
import { getAllTransport } from './operations';

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const allTransportSlice = createSlice({
  name: 'allTransport',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransport.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllTransport.fulfilled, (state, action) => {
        const newItems = action.payload.items;
        // Проверяем, чтобы новые элементы не дублировались
        const existingIds = new Set(state.items.map((item) => item.id));
        const filteredItems = newItems.filter(
          (item) => !existingIds.has(item.id)
        );
        state.items = [...state.items, ...filteredItems];
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllTransport.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const allTransportReducer = allTransportSlice.reducer;
