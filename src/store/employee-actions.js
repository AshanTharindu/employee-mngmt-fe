import { employeeActions } from './employee-slice';
import client from '../client/client';
import { statusActions } from './status-slice';

export const fetchEmloyees = () => {
  return async (dispatch) => {
    try {
      const employees = await client.fetchEmployees();
      dispatch(employeeActions.fetchEmloyees(employees || []));
    } catch (error) {
      console.log(error);
      dispatch(
        statusActions.failedRequset({
          statusMsg: error.message,
        })
      );
    }
  };
};

export const registerEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const registeredEmployee = await client.registerEmployee(employee);
      dispatch(employeeActions.addEmloyee(registeredEmployee));
      dispatch(
        statusActions.successRequest({
          statusCode: 201,
          statusMsg: 'Employee Registered Succussfully',
        })
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        statusActions.failedRequset({
          statusMsg: error.message,
        })
      );
    };
  }
};

export const updateEmployee = ({ id, type, employee }) => {
  return async (dispatch) => {
    try {
      const updatedEmployee = await client.updateEmployee(id, type, employee);
      dispatch(employeeActions.updateEmployee(updatedEmployee));
      dispatch(
        statusActions.successRequest({
          statusCode: 201,
          statusMsg: 'Employee Updated Succussfully',
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        statusActions.failedRequset({
          statusMsg: error.message,
        })
      );
    }
  };
};

export const addEmployees = (employees) => {
  return async (dispatch) => {
    try {
      const registeredEmployees = await client.addEmployees({ employees });
      dispatch(employeeActions.addEmloyees(registeredEmployees));
      dispatch(
        statusActions.successRequest({
          statusCode: 201,
          statusMsg: 'Employees Uploaded Succussfully',
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        statusActions.failedRequset({
          statusMsg: error.message,
        })
      );
    }
  };
};

export const deleteEmployee = ({ id, type }) => {
  return async (dispatch) => {
    try {
      await client.deleteEmployee(id, type);
      dispatch(employeeActions.deleteEmployee(id));
      dispatch(
        statusActions.successRequest({
          statusCode: 201,
          statusMsg: 'Employee Removed Succussfully',
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        statusActions.failedRequset({
          statusMsg: error.message,
        })
      );
    }
  };
};

export const addComment = ({ empId, empType, comment }) => {
  return async (dispatch) => {
    try {
      comment = await client.addComment(empId, empType, { comment });
      dispatch(employeeActions.addComments({ empId, comment }));
      dispatch(
        statusActions.successRequest({
          statusCode: 201,
          statusMsg: 'Comment Added Succussfully',
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        statusActions.failedRequset({
          statusMsg: error.message,
        })
      );
    }
  };
};
