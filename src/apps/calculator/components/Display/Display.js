import React from 'react';
import {
  Box,
  Container,
  Button,
} from '@material-ui/core';
import { useStyles, DisplayInfo, DisplaySummary } from './Display.styles';

export function Display({ number }) {
  const classes = useStyles();

  console.log('* DISP redraw');

  return (
    <Box className={classes.root}>
      <DisplayInfo>{number}</DisplayInfo>
      {/* <DisplaySummary /> */}
    </Box>
  );
}
