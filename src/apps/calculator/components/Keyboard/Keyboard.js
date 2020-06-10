import { throttle } from 'lodash';
import React, { useEffect, useCallback, createRef } from 'react';
import {
  Box,
  Container,
  Button,
} from '@material-ui/core';
import { buttons } from '../../model/Calculator.model';
import { useStyles, CButton } from './Keyboard.styles';

const getButtonName = (id) => `button-${id}`;

export function Keyboard() {
  const classes = useStyles();
  const keyboardContainer = createRef();

  const handleKeyUp = (e) => {
    const button = buttons.find(entry => entry.keys.includes(e.key));
    if(!button) {
      return;
    }
    const target = keyboardContainer.current.children.namedItem(getButtonName(button.id));
  };

  const handleClick = (e) => {
    const event = e.target.id
  };
  
  useEffect(() => {
      window.addEventListener('keyup', handleKeyUp);
      return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <Box className={classes.root} ref={keyboardContainer}>
      {buttons.map( el =>
        <CButton
          id={getButtonName(el.id)}
          key={getButtonName(el.id)}
          onClick={handleClick}
          variant="contained"
          disableElevation
          disableRipple
          color={el.color}>
          {el.label}
        </CButton>
      )}
    </Box>
  );
}
