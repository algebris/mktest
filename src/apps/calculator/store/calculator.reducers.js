import { LoadableAdapter } from 'lib/Loadable.adapter';
import { createReducer } from 'lib/state.utils';
import { CalculatorActionGroups } from '../model/Calculator.model';

const initialState = LoadableAdapter.createState({
  email: null,
});

export default createReducer(initialState, {
  ...LoadableAdapter.createHandlers(CalculatorActionGroups.Calculator),
});
