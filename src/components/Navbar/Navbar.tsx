import React, { useState } from "react";
import "./navbar.css";

import logo from "../../Assets/logotipo.png";
import { Link } from "react-router-dom";



interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [active] = useState("navBar");

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo grid">
            <h1>
              <img src={logo} /> Aeroalarm.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink" />
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
              
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Paquetes
              </a>
            </li>

            
            
            <li className="navItem">
              <a href="#" className="navLink">
                Sobre Nosotros
              </a>
            </li>
          

            <li className="navItem">
              <a href= "#" className="navLink" >
                Ofertas
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contactanos
              </a>
            </li>
            

            <button className="btn">
              <Link to="/login">
                   <h1>Login</h1>
              </Link>
            </button>
            
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;