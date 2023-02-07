import React from "react";
import "./home.css"

import videoUrl from '../../Assets/video.mp4';
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <section className="home">
    
         <video className="videoBg" src={videoUrl} muted autoPlay loop></video>
            <div className="homeContent container">
            
                <div className="textDiv">

                    <span className="smallText">
                        Ofertas imperdibles
                    </span>

                    <h1 className="homeTitle">
                        ENCUENTRA EL VIAJE DE TUS SUEÑOS
                    </h1>

                </div>

                <div className="cardDiv grid">

                    <div className="OriginInput">
                        <label htmlFor="city">
                            Origen
                        </label>
                        <div className="input flex">
                        <input type="text" placeholder="Ciudad de destino"/>
                            <GrLocation className="icon"/>

                        </div>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="city">
                            Destino
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Ciudad de destino"/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInputI">
                        <label htmlFor="date">
                            Fecha de Ida
                        </label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="">
                        <label >
                            Numero de pasajeros
                        </label>
                        <div className="input flex">
                            <input type="Number" placeholder="ingrese numeor de pasajeros"/>
                            <BsFillPeopleFill className="icon"/>
                        </div>
                    </div>

                     

                    
                        
                    <div className="searchOptions flex">
                    <Link to="./filtrado">
                        <HiFilter className="icon"/>
                        <span> Filtrar</span>
                    </Link>
                    </div>
                    
                    
                    
                </div>

                <div className="homeFooterIcon flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>

                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home