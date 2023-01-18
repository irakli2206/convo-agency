import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { AuthProtectedRoutes, UnauthProtectedRoutes } from './layouts/ProtectedRoutes';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';

function App() {

 
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthProtectedRoutes  />} >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
        <Route element={<UnauthProtectedRoutes  />} >
          <Route path='/main' element={<Main />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
