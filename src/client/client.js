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

const fetchEmployees = async () => {
  const response = await instance({
    url: '/employees',
    timeout: 1000 * 5,
    method: 'get',
  });

  if (response.status !== 200)
    throw new Error('Could not fetch employee data!');

  return response.data;
};

const registerEmployee = async (employee) => {
  const response = await instance({
    url: '/employees',
    timeout: 1000 * 5,
    data: employee,
    method: 'post',
  });

  if (response.status !== 200) throw new Error('Registering employee failed');
  return response.data;
};

const signIn = async (username, password) => {
  const response = await instance({
    url: '/login',
    timeout: 1000 * 5,
    data: { username, password },
    method: 'post',
  });

  if (response.status !== 200) throw new Error('Authentication failed');
  return response.data.token;
};

export default { fetchEmployees, registerEmployee, signIn };
