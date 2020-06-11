import React, { useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import { Display } from '../components/Display/Display';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { useStyles } from './Calculator.styles';

export function Calculator() {
  const classes = useStyles();
  const [left, setLeft] = useState('0');
  const [right, setRight] = useState(null);
  const [operation, setOperation] = useState(null);

  function performOperation(leftOp, rightOp, oper) {
    let result = Number(leftOp);
    switch (oper) {
      case 'plus':
        result += Number(rightOp);
        break;
      case 'minus':
        result -= Number(rightOp);
        break;
      case 'divide':
        result /= Number(rightOp);
      case 'multiply':
        result *= Number(rightOp);
      default:
        break;
    }
    console.log('=', result);
    setLeft(result);
  }

  function keyboardHandler(keyEvt) {
    const operand = operation ? right : left;
    const setOperand = operation ? setRight : setLeft;

    switch (keyEvt) {
      case 'clear':
        setLeft('0');
        setRight(null);
        setOperation(null);
        break;
      case 'erase':
        if (operand.length === 1) {
          setOperand('0');
        } else {
          setOperand(operand.slice(0, -1));
        }
        break;
      case 'dot':
        if (!operand.includes('.')) {
          setOperand(operand + '.');
        }
        break;
      case 'plus':
        if (operation && right) {
          setRight(null);
        }
        setOperation('plus');
        break;
      case 'minus':
        if (operation && right) {
          setRight(null);
        }
        setOperation('minus');
        break;
      case 'multiply':
        if (operation && right) {
          setRight(null);
        }
        setOperation('multiply');
        break;
      case 'divide':
        if (operation && right) {
          setRight(null);
        }
        setOperation('divide');
        break;
      case 'equal':
        console.log(left, operation, right);
        if (operation && !right) {
          setRight(left);
          return performOperation(left, left, operation);
        }
        performOperation(left, right, operation);
        break;
      default:
        break;
    }

    if (!Number.isNaN(Number(keyEvt))) {
      if(operand === '0' || operand === null) {
        setOperand(keyEvt);
      } else {
        setOperand(operand + keyEvt);
      }
    }
  }

  return (
    <Container className={classes.root}>
      <Display number={left} />
      <Keyboard keyboardHandler={keyboardHandler} />
    </Container>
  );
}
