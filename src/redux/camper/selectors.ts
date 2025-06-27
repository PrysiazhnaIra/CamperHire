import { RootState } from '../store';
import { CamperData } from '../../types/camper';

export const selectAllCampers = (state: RootState): CamperData[] =>
  state.campers.items;
export const selectLoading = (state: RootState): boolean =>
  state.campers.loading;
export const selectError = (state: RootState): string | null =>
  state.campers.error;
