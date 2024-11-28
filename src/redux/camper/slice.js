import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
