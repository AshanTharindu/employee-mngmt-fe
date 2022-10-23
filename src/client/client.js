import axios from 'axios';
/**
 * Handles the request sending of the appliation
 */

const instance = axios.create({
  baseURL: 'https://whispering-castle-21078.herokuapp.com/employee-management', //todo this can be moved to env variable
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Inteceptor handles the authentication headers for request
 */
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); // get the token from local storage
    if (!token) Promise.reject(`Please authenticate`);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * Gets all the employees.
 * @returns employee list
 */
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

/**
 * Registeres the employee.
 * @param {*} employee 
 * @returns registered employee
 */
const registerEmployee = async (employee) => {
  try {
    const response = await instance({
      url: '/employees',
      timeout: 1000 * 5,
      data: employee,
      method: 'post',
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};

/**
 * Updates the employee with the sent update
 * Error if employee not found or already delete
 * @param {*} id
 * @param {*} employeeUpdate
 * @returns updated employee
 */
const updateEmployee = async (id, type, employee) => {
  try {
    const response = await instance({
      url: `/employees/${id}?type=${type}`,
      timeout: 1000 * 5,
      data: employee,
      method: 'patch',
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};

/**
 * Upload employees
 * @param {*} id 
 * @param {*} type 
 * @param {*} employee 
 * @returns added employees list
 */
const addEmployees = async (employees) => {
  try {
    const response = await instance({
      url: '/employees/csv-import',
      timeout: 1000 * 5,
      data: employees,
      method: 'post',
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};

const signIn = async (username, password) => {
  try {
    const response = await instance({
      url: '/login',
      timeout: 1000 * 5,
      data: { username, password },
      method: 'post',
    });

    return response.data.token;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};

/**
 * Deletes the employee of given id.
 * Error if employee not found or already deleted
 * @param {*} id
 */
const deleteEmployee = async (id, type) => {
  try {
    const response = await instance({
      url: `/employees/${id}?type=${type}`,
      timeout: 1000 * 5,
      method: 'delete',
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};

/**
 * Add comment to the employee.
 * @param {*} empId 
 * @param {*} empType 
 * @param {*} comment 
 * @param {*} author 
 * @returns saved comment
 */
const addComment = async (empId, empType, comment) => {
  try {
    const response = await instance({
      url: `/employees/${empId}/comments?empType=${empType}`,
      timeout: 1000 * 5,
      data: comment,
      method: 'post',
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
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
