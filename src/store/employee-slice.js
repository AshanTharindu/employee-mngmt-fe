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
      state.employees = action.payload.employees;
    },
    addEmloyee(state, action) {
      state.employees.push(action.payload);
    },
    addEmloyees(state, action) {
      state.employees = action.payload;
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice;
