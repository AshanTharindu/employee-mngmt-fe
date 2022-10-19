import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import EmployeePage from './components/EmployeePage';
import EmloyeeRegister from './components/employeeRegister/EmployeeRegister';
import Home from './components/Home';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './hooks/auth-hook';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/registration' element={<EmloyeeRegister />}></Route>
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
