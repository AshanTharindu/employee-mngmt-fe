import { Route, Routes } from 'react-router-dom';
import './App.css';
import ApplicationBase from './appBar/ApplicationBase';
import SignIn from './components/auth/SignIn';
import CsvImport from './components/csvImport/CsvImport';
import EmployeeAddForm from './components/employee/EmployeeAddForm';
import EmployeePage from './components/employee/EmployeePage';
import EmloyeeRegister from './components/employeeRegister/EmployeeRegister';
import Home from './components/Home';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './hooks/auth-hook';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <ApplicationBase />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/employee' element={<EmployeeAddForm />} />
          <Route path='/registration' element={<EmloyeeRegister />}></Route>
          <Route
            path='/csv-import'
            element={
              <ProtectedRoute>
                <CsvImport />
              </ProtectedRoute>
            }
          />
          <Route
            path='/employees'
            element={
              <ProtectedRoute>
                <EmployeePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
