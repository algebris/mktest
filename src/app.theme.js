import { createMuiTheme } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

export const simple = createMuiTheme({
  spacing: 10,
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: pink[900],
    },
  },
});

export const custom = createMuiTheme({
  spacing: 10,
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#673ab7',
    },
    info: {
      main: '#ffeb3b',
    },
    error: {
      main: '#f48fb1',
    },
  },
});
