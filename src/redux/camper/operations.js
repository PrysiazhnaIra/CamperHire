import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../config/api.js';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (filters, thunkAPI) => {
    try {
      const response = await api.get('/campers', {
        params: filters,
      });
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
