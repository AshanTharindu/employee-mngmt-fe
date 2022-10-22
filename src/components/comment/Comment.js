import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const Comment = ({ comment, date, author }) => {
  console.log(
    '🚀 ~ file: Comment.js ~ line 13 ~ Comment ~ comment, date, autho',
    comment,
    date,
    author
  );
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 275 }} variant='outlined'>
      <div className={classes.root}>
        <Typography variant='body2' gutterBottom>
          {comment}
        </Typography>
        <Typography variant='button' display='block' gutterBottom>
          {date}
        </Typography>
        {author && (
          <Typography variant='button' display='block' gutterBottom>
            {`${author.firstname} ${author.lastname}`}
          </Typography>
        )}
      </div>
    </Card>
  );
};

export default Comment;
