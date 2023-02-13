import React,{useState, useEffect} from "react";
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
import { characters } from "../../api/characters";

import axios from 'axios';
import FlightDetails from "../Filtrado/FlightDetails";


const Home = () => {
    

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [adults, setAdults] = useState('');
    const [flightData, setFlightData] = useState([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
        adults,
        origin,
        destination,
        departureDate
    };
    

    const response = await axios.post(
      `http://localhost:4000/api/v1/flightlabs/all-data`,
      data
      
    );
        console.log ("hh");
    setFlightData(response.data);
  };


    return (
    <>
      {flightData.length > 0 ? (
        <FlightDetails flightData={flightData} />
      ) : (

        
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
                <form onSubmit={handleSubmit}>
                

                    <div className="OriginInput">
                        <label htmlFor="origin">
                            Origen
                        </label>
                        <div className="input flex">
                        <input type="text" id="origin" placeholder="Ciudad de destino" value={origin} onChange={(event) => setOrigin(event.target.value)}/>
                            <GrLocation className="icon"/>

                        </div>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="destination">
                            Destino
                        </label>
                        <div className="input flex">
                            <input type="text" id="destination" placeholder="Ciudad de destino" value={destination} onChange={(event) => setDestination(event.target.value)} />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInputI">
                        <label htmlFor="date">
                            Fecha de Ida
                        </label>
                        <div className="input flex">
                            <input type="text" id="date"  value={departureDate} onChange={(event) => setDepartureDate(event.target.value)}/>
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="passengers">
                            Numero de pasajeros
                        </label>
                        <div className="input flex">
                            <input type="Number" id="passengers" placeholder="ingrese numero de pasajeros" value={adults} onChange={(event) => setAdults(event.target.value)} />
                            <BsFillPeopleFill className="icon"/>
                        </div>
                    </div>

                



                    <div className="searchOptions flex">
                    <button className="btn" type="submit">
                        <HiFilter className="icon"/>
                        <span> Filtrar</span>
                    </button>
                        
                    </div>

                </form>
                
                       
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
     )}
     </>
   );
 };

export default Home