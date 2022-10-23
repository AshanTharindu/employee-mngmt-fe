import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

/**
 * Comment add component
 * @param {*} param0 
 * @returns 
 */
const CommentForm = ({ onCommentUpdateHandler }) => {
  const classes = useStyles();
  const [comment, setComment] = useState();

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id='outlined-multiline-static'
          label='Comment'
          multiline
          rows={4}
          variant='outlined'
          onChange={onChangeHandler}
        />
      </div>
      <Button
        variant='contained'
        color='primary'
        disabled={!comment || comment === ''}
        onClick={() => {
          onCommentUpdateHandler(comment);
        }}
      >
        Add Comment
      </Button>
    </form>
  );
};

export default CommentForm;
