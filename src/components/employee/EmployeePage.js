import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMPLOYEE_TYPES } from '../../constants';
import { deleteEmployee, fetchEmloyees } from '../../store/employee-actions';
import EmployeeCard from './EmployeeCard';

const EmployeePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmloyees());
  }, [dispatch]);

  const { employees } = useSelector((state) => state.employee);

  /**
   * Employee delete handler.
   * Dispatches delete employee actions
   * @param {*} id
   * @param {*} type
   */
  const onDeleteHandler = (id, type) => {
    dispatch(
      deleteEmployee({
        id,
        type:
          type === 1 ? EMPLOYEE_TYPES.REGISTERED : EMPLOYEE_TYPES.UN_REGISTERED,
      })
    );
  };

  return (
    <>
      {employees.map(
        ({
          _id: id,
          firstname,
          lastname,
          email,
          address,
          role,
          registered,
          comments
        }) => (
          <EmployeeCard
            key={id}
            id={id}
            firstname={firstname}
            lastname={lastname}
            email={email}
            address={address}
            role={role}
            registered={registered}
            onDeleteHandler={onDeleteHandler}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default EmployeePage;
