import React from 'react';
import {
  Container,
} from '@material-ui/core';
import { Display } from '../components/Display/Display';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { useStyles } from './Calculator.styles';

export function Calculator() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Display />
      <Keyboard />
    </Container>
  );
}
