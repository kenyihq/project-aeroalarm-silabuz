
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

export default function Routing() {
  return (
    <Routes>
     
      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
}