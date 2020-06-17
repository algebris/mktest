import React, { useState, useEffect, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import {
  Container,
} from '@material-ui/core';
import { doOperation } from '../store/calculator.actions';
import { Display } from '../components/Display/Display';
import { Keyboard } from '../components/Keyboard/Keyboard';
import Core from './Core';
import { useStyles } from './Calculator.styles';

const core = new Core();

export function Calculator() {
  const intl = useIntl();
  const classes = useStyles();
  const [display, setDisplay] = useState('0');
  const dispatch = useDispatch();

  const handleCalculateAPI = useCallback((payload) => dispatch(doOperation(payload)), [dispatch]);

  useEffect(() => {
    core.handleCalculateAPI = handleCalculateAPI;
  }, [handleCalculateAPI]);

  async function keyboardHandler(id) {
    const value = await core.process(id);
    if (value !== undefined) {
      setDisplay(value);
    }
    if (core.error) {
      setDisplay(intl.formatMessage({ id: 'display.notaNumber' }));
    }
  }

  return (
    <>
      <Container className={classes.root}>
        <Display display={display} error={core.error} />
        <Keyboard keyboardHandler={keyboardHandler} />
      </Container>
    </>
  );
}
