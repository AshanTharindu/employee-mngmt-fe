import { employeeActions } from './employee-slice';
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://0.0.0.0:3001/employee-management',
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'accept-encoding': 'gzip',
  },
});

export const fetchEmloyees = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await instance({
        url: '/employees',
        timeout: 1000 * 5,
        method: 'get',
      });

      if (response.status !== 200)
        throw new Error('Could not fetch employee data!');

      return response.data;
    };

    try {
      const employees = await fetchData();
      dispatch(employeeActions.addEmloyees(employees || []));
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerEmployee = (employee) => {
  return async (dispatch) => {
    const saveEmployee = async (employee) => {
      const response = await instance({
        url: '/employees',
        timeout: 1000 * 5,
        data: employee,
        method: 'post',
      });
      console.log(
        '🚀 ~ file: employee-actions.js ~ line 45 ~ saveEmployee ~ response',
        response
      );

      if (response.status !== 200) throw new Error('Registering employee failed');
    };

    try {
      const registeredEmployee = await saveEmployee(employee);

      dispatch(employeeActions.addEmloyee(registeredEmployee));
    } catch (error) {
      console.log(error);
    }
  };
};
