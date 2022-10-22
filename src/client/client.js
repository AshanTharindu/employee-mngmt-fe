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

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (!token) Promise.reject(`Please authenticate`);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

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

const updateEmployee = async (id, type, employee) => {
  const response = await instance({
    url: `/employees/${id}?type=${type}`,
    timeout: 1000 * 5,
    data: employee,
    method: 'patch',
  });

  if (response.status !== 200) throw new Error('Registering employee failed');
  return response.data;
};

const addEmployees = async (employees) => {
  const response = await instance({
    url: '/employees/csv-import',
    timeout: 1000 * 5,
    data: employees,
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

const deleteEmployee = async (id, type) => {
  const response = await instance({
    url: `/employees/${id}?type=${type}`,
    timeout: 1000 * 5,
    method: 'delete',
  });

  if (response.status !== 200) throw new Error('Registering employee failed');
  return response.data;
};

const addComment = async (empId, empType, comment) => {
  const response = await instance({
    url: `/employees/${empId}/comments?empType=${empType}`,
    timeout: 1000 * 5,
    data: comment,
    method: 'post',
  });

  if (response.status !== 200) throw new Error('Adding comment failed');
  return response.data;
};

export default {
  fetchEmployees,
  registerEmployee,
  signIn,
  addEmployees,
  deleteEmployee,
  updateEmployee,
  addComment,
};
