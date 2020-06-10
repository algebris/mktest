import React from 'react';
import {
  Box,
  Container,
  Button,
} from '@material-ui/core';
import { useStyles, DisplayInfo, DisplaySummary } from './Display.styles';

export function Display() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <DisplayInfo />
      <DisplaySummary />
    </Box>
  );
}
