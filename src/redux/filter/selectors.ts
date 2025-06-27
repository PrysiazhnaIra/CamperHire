import { RootState } from '../store';

export const selectCity = (state: RootState) => state.filters.location;
export const selectEquipment = (state: RootState): string[] =>
  state.filters.equipment;
export const selectType = (state: RootState): string => state.filters.type;
