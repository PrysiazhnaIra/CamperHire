import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favoriteCampers',
  initialState: {
    favoriteItems: [],
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
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
