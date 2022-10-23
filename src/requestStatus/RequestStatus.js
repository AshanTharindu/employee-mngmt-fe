import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusActions } from '../store/status-slice';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ReqeuestStatus = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showAlert, statusMsg, error } = useSelector((state) => state.status);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    dispatch(statusActions.clearErrorState());
  };

  return (
    <div className={classes.root}>
      {showAlert && (
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
          {statusMsg}
        </Alert>
      )}
    </div>
  );
};

export default ReqeuestStatus;
