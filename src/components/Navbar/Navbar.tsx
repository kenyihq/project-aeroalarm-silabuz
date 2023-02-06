import React, { useState } from "react";
import "./navbar.css";

import logo from "../../Assets/icon/logo.png";
import { Link } from "react-router-dom";



interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [active] = useState("navBar");

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">

          <Link to="/" className="logo grid">
          
            <h3>
              <img src={logo} /> AeroAlarm.
            </h3>
          
          </Link>

        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a  className="navLink" />
            </li>

            <li className="navItem">
              <Link to="/">
                <a  className="navLink">
                Home
                </a>
              </Link>
            </li>


            <li className="navItem">
              <a  className="navLink" >
                Ofertas
              </a>
            </li>

            <li className="navItem">
              <a className="navLink">
                Contactanos
              </a>
            </li>

            <li className="navItem">
              <a  className="navLink">
                Sobre Nosotros
              </a>
            </li>
            

            <button className="btn">
              <Link to="/login">
                <a>Iniciar Sesión</a>
              </Link>
            </button>

          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;