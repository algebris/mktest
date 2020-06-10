import { Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    padding: [[20, 5]],
    backgroundColor: theme.palette.info.main,
  },
}));

export const DisplayInfo = withStyles(() => ({
  root: {
    fontSize: '1.5rem',
    minHeight: 30,
  },
}))(Box);

export const DisplaySummary = withStyles(() => ({
  root: {
    borderRadius: 0,
    fontSize: '1.5rem',
    minHeight: 30,
  },
}))(Box);
