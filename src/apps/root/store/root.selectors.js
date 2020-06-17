import { createSelector } from 'reselect';
import { ROOT_STORE_KEY } from '../model/Root.model';

export const selectRootStore = (state) => state[ROOT_STORE_KEY];

export const selectTheme = createSelector(
  selectRootStore,
  (store) => store.theme,
);

export const selectLang = createSelector(
  selectRootStore,
  (store) => store.lang,
);

