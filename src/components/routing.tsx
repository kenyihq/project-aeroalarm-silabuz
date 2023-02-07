import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Promo from './Promo/Promo';
import Filtrado from './Filtrado/Filtrado';
import Footer from './Footer/Footer';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/filtrado" element={<Filtrado />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}

export default Routing;