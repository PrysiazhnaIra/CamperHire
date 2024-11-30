import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../config/api.js';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (filters, thunkAPI) => {
    try {
      console.log(filters);
      const requestParams = { location: filters.city };
      const response = await api.get('/campers', {
        params: requestParams,
      });
      console.log(response);
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
