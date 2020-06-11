import React, { useState, useCallback } from 'react';
import {
  Container,
} from '@material-ui/core';
import { Display } from '../components/Display/Display';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { useStyles } from './Calculator.styles';

export function Calculator() {
  const classes = useStyles();
  const [number, setNumber] = useState('0');

  function keyboardHandler(key) {
    // console.log('pressed >>',key);
    switch (key) {
      case 'clear':
        setNumber('0')
        break;
      case 'erase':
        if(number.length === 1) {
          setNumber('0');
        } else {
          setNumber(number.slice(0, -1));
        }
        break;
      case 'dot':
        setNumber(number + '.');
        break;
      default:
        break;
    }
    
    if(!Number.isNaN(Number(key))) {
      console.log('process Number >>', key, number)
      if(number === '0') {
        setNumber(key);
      } else {
        console.log(number + key)
        setNumber(number + key);
      }
    }
  }

  console.log('* CALC redraw', number);

  return (
    <Container className={classes.root}>
      <Display number={number} />
      <Keyboard keyboardHandler={keyboardHandler} />
    </Container>
  );
}
