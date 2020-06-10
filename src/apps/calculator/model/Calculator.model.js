export const CALCULATOR_STORE_KEY = 'calculator';

export const CalculatorActionGroups = {
  Calculator: 'CALCULATOR',
};

export const buttons = [
  { id: 'clear', label: 'C', color: 'primary', keys: ['Escape'] },
  { id: 'divide', label: '÷', color: 'primary', keys: ['/'] },
  { id: 'multiply', label: '×', color: 'primary', keys: ['*'] },
  { id: 'erase', label: '⌫', color: 'primary', keys: ['Backspace'] },
  { id: '7', label: '7', color: 'default', keys: ['7'] },
  { id: '8', label: '8', color: 'default', keys: ['8'] },
  { id: '9', label: '9', color: 'default', keys: ['9'] },
  { id: 'plus', label: '+', color: 'primary', keys: ['+'] },
  { id: '4', label: '4', color: 'default', keys: ['4'] },
  { id: '5', label: '5', color: 'default', keys: ['5'] },
  { id: '6', label: '6', color: 'default', keys: ['6'] },
  { id: 'minus', label: '–', color: 'primary', keys: ['-'] },
  { id: '1', label: '1', color: 'default', keys: ['1'] },
  { id: '2', label: '2', color: 'default', keys: ['2'] },
  { id: '3', label: '3', color: 'default', keys: ['3'] },
  { id: 'equal', label: '=', color: 'primary', keys: ['Enter', '='] },
  { id: '0', label: '0', color: 'default', keys: ['0'] },
  { id: 'dot', label: '.', color: 'default', keys: ['.'] },
 ];
