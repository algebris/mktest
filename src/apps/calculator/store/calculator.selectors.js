import { CALCULATOR_STORE_KEY } from '../model/Calculator.model';
import { selectModelValue } from 'lib/selectors';
import { createSelector } from 'reselect';

export const selectCalculatorModel = (state) => state[CALCULATOR_STORE_KEY];

export const selectCalculatorSomeValue = createSelector(
  selectCalculatorModel,
  selectModelValue((calc) => calc && calc.email),
);
