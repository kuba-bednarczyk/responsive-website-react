import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>

      {/* <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> */}
    </>
  );
}

export default App;
