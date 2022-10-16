import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import EmloyeeRegister from './employeeRegister/EmployeeRegister';

const ApplicationBase = () => {
  return (
    <Home>
      <Routes>
        <Route path='/registration' exact>
          <EmloyeeRegister />
        </Route>
      </Routes>
    </Home>
  );
};

export default ApplicationBase;
