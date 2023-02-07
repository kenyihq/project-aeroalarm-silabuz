import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Home from './Home/Home';
import Promo from './Promo/Promo';
import Filtrado from './Filtrado/Filtrado';


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/filtrado" element={<Filtrado />} />
     
    </Routes>
  );
}

export default Routing;