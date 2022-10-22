import React from 'react';
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

const CommentForm = ({ onCommentUpdateHandler }) => {
  const classes = useStyles();
  const [comment, setComment] = React.useState();

  const onChangeHandler = (event) => {
    setComment(event.target.value);
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
          color='success'
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
