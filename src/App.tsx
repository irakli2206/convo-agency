import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import Login from './pages/Signup';
import Main from './pages/Main';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/signup' element={<Signup />} />

        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
