import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Routing;