import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

const Routing: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Home/>} />
    </Routes>
  );
};

export default Routing;