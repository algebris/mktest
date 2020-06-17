import React from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { useIntl } from 'react-intl';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './ToolBar.styles';

export function ToolBar() {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        {intl.formatMessage({ id: 'root.title' })}
      </Typography>
    </Toolbar>
  );
}
