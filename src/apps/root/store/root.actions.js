import { availableThemes } from '../model/Root.model';
import { selectTheme } from './root.selectors';

export const types = {
  THEME_UPDATE: 'THEME_UPDATE',
  LANG_UPDATE: 'LANG_UPDATE',
};

export const switchTheme = () => async (dispatch, getState) => {
  const currentTheme = selectTheme(getState());
  const nextTheme = (availableThemes.indexOf(currentTheme) < availableThemes.length - 1)
    ? availableThemes[availableThemes.indexOf(currentTheme) + 1] : availableThemes[0];

  dispatch({ type: types.THEME_UPDATE, payload: nextTheme });
};

export const langUpdate = (data) => async (dispatch) => {
  dispatch({ type: types.LANG_UPDATE, payload: data });
};
