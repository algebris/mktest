import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@material-ui/core';
import { useStyles, DisplayInfo } from './Display.styles';

export function Display({ display, error }) {
  const classes = useStyles();
  const [size, setSize] = useState('big');

  useEffect(
    () => {
      const len = String(display).length;
      if (len <= 19) {
        setSize('big');
      } else if (len > 19 && len <= 25) {
        setSize('medium');
      } else if (len > 25 && len <= 30) {
        setSize('small');
      } else if (len > 30) {
        setSize('tiny');
      }
    },
    [display, setSize],
  );

  return (
    <Box className={clsx(classes.root, error && classes.error)}>
      <DisplayInfo className={classes[`size-${size}`]}>
        {display}
      </DisplayInfo>
    </Box>
  );
}
