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
      main: '#5d4037',
    },
    secondary: {
      main: '#673ab7',
    },
    info: {
      main: '#80deea',
    },
    error: {
      main: '#f48fb1',
    },
  },
});
