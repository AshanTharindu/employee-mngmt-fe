import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../store/employee-actions';
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
  onDeleteHandler,
}) => {
  const [showEdit, setShowEdit] = React.useState(false);

  const dispatch = useDispatch();

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

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {showEdit ? (
          <EmployeeEditForm
            id={id}
            firstname={firstname}
            lastname={lastname}
            email={email}
            address={address}
            role={role}
            onUpdateHandler={onUpdateHandler}
          />
        ) : (
          <Employee
            id={id}
            name={`${firstname} ${lastname}`}
            email={email}
            address={address}
            role={role}
          />
        )}
        <Button
          variant='contained'
          color='success'
          onClick={() => setShowEdit(!showEdit)}
        >
          {showEdit ? 'Close' : 'Edit'}
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={() => onDeleteHandler(id, registered)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
