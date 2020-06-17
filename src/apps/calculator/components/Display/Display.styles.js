import { Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    padding: [[20, 5]],
    backgroundColor: theme.palette.info.main,
    maxWidth: 287,
  },
  'size-big': {
    fontSize: '1.5rem',
  },
  'size-medium': {
    fontSize: '1.2rem',
  },
  'size-small': {
    fontSize: '1rem',
  },
  'size-tyny': {
    fontSize: '0.8rem',
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
}));

export const DisplayInfo = withStyles((theme) => ({
  root: {
    minHeight: 30,
    direction: 'rtl',
    overflow: 'hidden',
    width: '100%',
    color: theme.palette.info.contrastText,
  },
}))(Box);
