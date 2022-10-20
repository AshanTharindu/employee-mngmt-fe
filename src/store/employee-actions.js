import { employeeActions } from './employee-slice';
import client from '../client/client';

export const fetchEmloyees = () => {
  return async (dispatch) => {
    try {
      const employees = await client.fetchEmployees();
      dispatch(employeeActions.fetchEmloyees(employees || []));
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const registeredEmployee = await client.registerEmployee(employee);
      dispatch(employeeActions.addEmloyee(registeredEmployee));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addEmployees = (employees) => {
  return async (dispatch) => {
    try {
      const registeredEmployees = await client.addEmployees({ employees });
      dispatch(employeeActions.addEmloyees(registeredEmployees));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteEmployee = ({ id, type }) => {
  return async (dispatch) => {
    try {
      await client.deleteEmployee(id, type);
      dispatch(employeeActions.deleteEmployee(id));
    } catch (error) {
      console.log(error);
    }
  };
};
