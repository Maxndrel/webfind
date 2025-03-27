import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import EmployerRegister from './pages/EmployerRegister';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='EmployerRegister' element={<EmployerRegister/>} />

        <Route path='/' element={< Home />} />

        <Route path='Register' element={ <Register />} />

        <Route path='Login' element={ <Login />} />
      </Routes>
    </div>
    
  );
};

export default App
