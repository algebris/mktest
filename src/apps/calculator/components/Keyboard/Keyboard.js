// import { throttle } from 'lodash';
import React, { useEffect, createRef, useState } from 'react';
import {
  Box,
} from '@material-ui/core';
import { buttons, BUTTON_ID_PREFIX } from '../../model/Calculator.model';
import { useStyles, CButton } from './Keyboard.styles';

export function Keyboard({
  keyboardHandler,
}) {
  const classes = useStyles();
  const keyboardContainer = createRef();

  const handleKeyUp = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event, event.currentTarget, event.target)
    const button = buttons.find(entry => entry.keys.includes(event.key));
    if(!button) {
      return;
    }
    // const target = keyboardContainer.current.children.namedItem(`${BUTTON_ID_PREFIX}${button.id}`);
    // event.target.click();
    keyboardHandler(button.id);
  };

  const handleClick = (event) => {
    const id = event.currentTarget.id.slice(BUTTON_ID_PREFIX.length);
    keyboardHandler(id)
  };
  
  useEffect(() => {
      console.log('* KEYB useEffect');
      window.addEventListener('keyup', handleKeyUp);
      return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);
  // useEffect(() => {
  //   console.log(keyboardContainer);
  //   keyboardContainer.current.focus();
  // }, [keyboardContainer]);

  console.log('* KEYB redraw');

  return (
    <Box className={classes.root} ref={keyboardContainer}>
      {buttons.map(el =>
        <CButton
          id={`${BUTTON_ID_PREFIX}${el.id}`}
          key={`${BUTTON_ID_PREFIX}${el.id}`}
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
