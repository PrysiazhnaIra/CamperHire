import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import { CamperState, CamperData } from '../../types/camper';

const initialState: CamperState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    toggleFavorite(
      state,
      action: PayloadAction<CamperData['id'] | CamperData>
    ) {
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
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<CamperData[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(
        fetchCampers.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Unknown error occurred';
          state.items = [];
        }
      );
  },
});

export const campersReducer = campersSlice.reducer;
