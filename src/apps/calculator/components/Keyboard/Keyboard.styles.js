import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    '& #button-0': {
      gridColumn: 'span 2',
    },
    '& #button-equal': {
      gridRow: 'span 2',
    },
  },
}));

export const CButton = withStyles(() => ({
  root: {
    borderRadius: 0,
    fontSize: '2rem',
  },
}))(Button);
