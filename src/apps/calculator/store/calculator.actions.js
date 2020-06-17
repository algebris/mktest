import { createTypesSequence } from 'lib/state.utils';
import { CalculatorActionGroups } from '../model/Calculator.model';
import { postOperation } from './calculator.client';

export const types = {
  ...createTypesSequence(CalculatorActionGroups.Calculator),
};

export const doOperation = (payload) => async (dispatch) => {
  dispatch({ type: types.CALCULATOR_REQUEST });
  try {
    const { data } = await postOperation(payload);

    dispatch({ type: types.CALCULATOR_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: types.CALCULATOR_FAILURE });
    throw error;
  }
};
