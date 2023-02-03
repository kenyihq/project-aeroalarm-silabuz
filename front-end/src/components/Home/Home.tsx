import React from "react";

import "./home.css";

import {GrLocation} from "react-icons/gr";
import {HiFilter} from "react-icons/hi";
import {FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsListTask} from "react-icons/bs";
import {TbApps} from "react-icons/tb";


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Ofertas imperdibles</span>
          <h1 className="homeTitle">ENCUENTRA EL VIAJE DE TUS SUEÑOS</h1>
        </div>

        <div className="cardDiv grid">
          <div className="OriginInput">
            <label htmlFor="city">Origen</label>
             <select className="input grid">
              <option value="rojo">Arequipa</option>
              <option value="azul">lima</option>
            
              <GrLocation className="icon" />
            </select>
          </div>

          <div className="destinationInput">
            <label htmlFor="city">Destino</label>
            <div className="input flex">
              <input type="text" placeholder="Ciudad de destino" />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInputI">
            <label htmlFor="date">Fecha de Ida</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="dateInputV">
            <label htmlFor="date">Fecha de Vuelta</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="city">Pasajeros</label>
            <div className="input flex">
              <input type="text" placeholder="Ciudad de destino" />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span> Filtros </span>
          </div>
        </div>

        <div className="homeFooterIcon flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
