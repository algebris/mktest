import { CALCULATOR_STORE_KEY } from '../model/Calculator.model';

export const selectCalculatorModel = (state) => state[CALCULATOR_STORE_KEY];
