import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../config/api';

import { CamperData } from '../../types/camper';
import { CamperFilters } from '../../types/filter';

export const fetchCampers = createAsyncThunk<
  CamperData[],
  CamperFilters,
  { rejectValue: string }
>('campers/fetchAll', async (filters: CamperFilters, thunkAPI) => {
  try {
    const response = await api.get('/campers', {
      params: filters,
    });
    return response.data.items as CamperData[];
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to fetch campers');
  }
});
