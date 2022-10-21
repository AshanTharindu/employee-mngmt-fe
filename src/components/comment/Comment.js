import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const Comment = ({comment}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='body2' gutterBottom>
        {comment}
      </Typography>
    </div>
  );
};

export default Comment;