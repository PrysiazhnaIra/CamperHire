import { CamperState } from './camper';
import { FilterState } from './filter';
import { FavoriteState } from './favorite';

export interface RootState {
  campers: CamperState;
  filters: FilterState;
  favorite: FavoriteState & {
    _persist?: { version: number; rehydrated: boolean };
  };
}
