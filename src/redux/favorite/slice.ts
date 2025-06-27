import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteState } from '../../types/favorite';
import { string } from 'prop-types';

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteCampers',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter(
          (idInList: string) => idInList !== camperId
        );
      } else {
        state.favorites.push(camperId);
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
