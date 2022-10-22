import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { EMPLOYEE_TYPES } from '../../constants';
import { addComment, updateEmployee } from '../../store/employee-actions';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';
import Employee from './Employee';
import EmployeeEditForm from './EmployeeEditForm';

const EmployeeCard = ({
  id,
  firstname,
  lastname,
  email,
  address,
  role,
  registered,
  comments,
  onDeleteHandler,
}) => {
  const [showEdit, setShowEdit] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  const dispatch = useDispatch();

  const name = `${firstname} ${lastname}`;

  const onUpdateHandler = (id, type, employee) => {
    setShowEdit(false);
    dispatch(
      updateEmployee({
        id,
        type,
        employee,
      })
    );
  };

  const onCommentUpdateHandler = (comment) => {
    setShowComment(false);
    dispatch(
      addComment({
        empId: id,
        empType: registered
          ? EMPLOYEE_TYPES.REGISTERED
          : EMPLOYEE_TYPES.UN_REGISTERED,
        comment,
      })
    );
  };

  const getEmployeeCardContent = () => {
    if (showEdit)
      return (
        <EmployeeEditForm
          id={id}
          firstname={firstname}
          lastname={lastname}
          email={email}
          address={address}
          role={role}
          onUpdateHandler={onUpdateHandler}
        />
      );
    return (
      <Employee
        id={id}
        name={name}
        email={email}
        address={address}
        role={role}
      />
    );
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {getEmployeeCardContent()}
        <Comments comments={comments} />
        {showComment && (
          <CommentForm onCommentUpdateHandler={onCommentUpdateHandler} />
        )}
        {!showEdit && (
          <Button
            variant='contained'
            color='success'
            onClick={() => setShowComment(!showComment)}
          >
            {showComment ? 'Close' : 'Comment'}
          </Button>
        )}
        {!showComment && (
          <Button
            variant='contained'
            color='success'
            onClick={() => setShowEdit(!showEdit)}
          >
            {showEdit ? 'Close' : 'Edit'}
          </Button>
        )}
        {!(showComment || showEdit) && (
          <Button
            variant='contained'
            color='error'
            onClick={() => onDeleteHandler(id, registered)}
          >
            Delete
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
