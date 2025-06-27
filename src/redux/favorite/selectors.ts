import { RootState } from '../store';
import { CamperData } from '../../types/camper';

export const selectFavoriteCampers = (state: RootState): CamperData['id'][] =>
  state.favorite.favorites;
