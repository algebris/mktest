import React, { useCallback } from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import MenuIcon from '@material-ui/icons/Menu';
import Face from '@material-ui/icons/Face';
import { switchTheme } from '../../store/root.actions';
import { useStyles } from './ToolBar.styles';

export function ToolBar() {
  const intl = useIntl();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(switchTheme());
  }, [dispatch]);

  return (
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        {intl.formatMessage({ id: 'root.title' })}
      </Typography>
      <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
        <Face />
      </IconButton>
    </Toolbar>
  );
}
