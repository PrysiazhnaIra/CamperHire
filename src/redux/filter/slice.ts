import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../../types/filter';

const initialValue: FilterState = {
  location: '',
  equipment: [],
  type: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialValue,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setEquipment(state, action: PayloadAction<string[]>) {
      state.equipment = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      if (state.type == action.payload) {
        state.type = '';
      } else {
        state.type = action.payload;
      }
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const filterActions = filterSlice.actions;
