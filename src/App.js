import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeePage from './components/EmployeePage';
import EmloyeeRegister from './components/employeeRegister/EmployeeRegister';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<EmloyeeRegister />}></Route>
        <Route path='/employees' element={<EmployeePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
