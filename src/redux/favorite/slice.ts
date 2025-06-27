import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteState } from '../../types/favorite';
import { CamperData } from '../../types/camper';

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteCampers',
  initialState,
  reducers: {
    toggleFavorite(
      state,
      action: PayloadAction<CamperData['id'] | CamperData>
    ) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          item => item != action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
