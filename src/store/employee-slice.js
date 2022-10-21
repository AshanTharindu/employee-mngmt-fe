import { createSlice } from '@reduxjs/toolkit';

const intitalEmployeeState = {
  employees: [],
  error: null,
};

const employeeSlice = createSlice({
  name: 'emloyee',
  initialState: intitalEmployeeState,
  reducers: {
    fetchEmloyees(state, action) {
      state.employees = action.payload;
    },
    addEmloyee(state, action) {
      state.employees.push(action.payload);
    },
    addEmloyees(state, action) {
      state.employees = [...state.employees, action.payload];
    },
    updateEmployee(state, action) {
      const updatedEmployee = action.payload;
      state.employees = state.employees.map((emloyee) => {
        if (emloyee._id === updatedEmployee._id) {
          return updatedEmployee;
        }
        return emloyee;
      });
    },
    deleteEmployee(state, action) {
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload
      );
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice;
