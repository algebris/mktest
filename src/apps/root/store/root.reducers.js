import { LoadableAdapter } from 'lib/Loadable.adapter';
import { createReducer } from 'lib/state.utils';
import { types } from './root.actions';

const initialState = LoadableAdapter.createState({
  theme: 'simple',
  language: 'en',
});

export default createReducer(initialState, {
  [types.THEME_UPDATE](state, { payload }) {
    return {
      ...state,
      theme: payload,
    };
  },
  [types.LANG_UPDATE](state, { payload }) {
    return {
      ...state,
      lang: payload,
    };
  },
});
