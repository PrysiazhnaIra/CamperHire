import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './camper/slice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
