import { CALCULATOR_STORE_KEY } from 'apps/calculator/model/Calculator.model';
import calculator from 'apps/calculator/store/calculator.reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  [CALCULATOR_STORE_KEY]: calculator,
});
