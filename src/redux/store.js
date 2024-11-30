import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './camper/slice.js';
import { filterReducer } from './filter/slice.js';
import { favoriteReducer } from './favorite/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorite: persistReducer(persistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
