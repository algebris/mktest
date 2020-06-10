import { createTypesSequence } from 'lib/state.utils';
import { CalculatorActionGroups } from '../model/Calculator.model';

export const types = {
  ...createTypesSequence(CalculatorActionGroups.Calculator),
};

export const userLoadSuccess = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SUCCESS, payload });
};
