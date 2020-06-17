import { CALCULATOR_STORE_KEY } from 'apps/calculator/model/Calculator.model';
import { ROOT_STORE_KEY } from 'apps/root/model/Root.model';
import calculator from 'apps/calculator/store/calculator.reducers';
import root from 'apps/root/store/root.reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  [CALCULATOR_STORE_KEY]: calculator,
  [ROOT_STORE_KEY]: root,
});
