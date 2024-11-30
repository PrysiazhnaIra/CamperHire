import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './camper/slice.js';
import { filterReducer } from './filter/slice.js';
import { favoriteReducer } from './favorite/slice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorite: favoriteReducer,
  },
});
