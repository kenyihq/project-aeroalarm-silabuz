import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Home from './Home/Home';
import Promo from './Promo/Promo';
import Filtrado from './Filtrado/Filtrado';
import Contact from './Contact/Contact';


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/filtrado" element={<Filtrado/>} />
      <Route path="/contact" element={<Contact/>} />

     
    </Routes>
  );
}

export default Routing;