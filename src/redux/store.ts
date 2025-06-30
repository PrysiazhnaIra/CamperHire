import { configureStore } from '@reduxjs/toolkit';
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

//import reducers
import { campersReducer } from './camper/slice';
import { filterReducer } from './filter/slice';
import { favoriteReducer } from './favorite/slice';

//import types for each reducer
import { FavoriteState } from '../types/favorite';

const persistConfig = {
  key: 'favorite',
  version: 1,
  storage,
};

const persistedFavoriteReducer = persistReducer<FavoriteState>(
  persistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorite: persistedFavoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
