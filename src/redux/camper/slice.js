import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favoriteItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite(state, action) {
      if (state.favoriteItems.includes(action.payload)) {
        state.favoriteItems = state.favoriteItems.filter(
          item => item != action.payload
        );
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.items = [];
      });
  },
});

export const campersReducer = campersSlice.reducer;
