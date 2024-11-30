import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  location: '',
  equipment: [],
  type: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialValue,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setEquipment(state, action) {
      state.equipment = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const filterActions = filterSlice.actions;
