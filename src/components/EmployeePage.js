import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmloyees } from '../store/employee-actions';
import EmployeeCard from './employee/EmployeeCard';

const EmployeePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('here')
    dispatch(fetchEmloyees());
  }, [dispatch]);

  const { employees } = useSelector((state) => state.employee);

  return (
    <>
      {employees.map(({ id, firstname, lastname, email, address, role }) => (
        <EmployeeCard
          key={id}
          name={`${firstname} ${lastname}`}
          email={email}
          address={address}
          role={role}
        />
      ))}
    </>
  );
};

export default EmployeePage;
