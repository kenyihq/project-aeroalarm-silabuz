import "./promo.css"
import fla from "../../Assets/mia.jpg";
import videoUrl1 from '../../Assets/hola.mp4';
import { Link } from "react-router-dom";
import React from "react";



const Promo = () => {

return (
    

<section>
<video className="videoBg" src={videoUrl1} muted autoPlay loop></video>
    <div className="homeContent container">
   

        <div className="card1">
            <div className="imgbox">
                <div className="img">
                    <img src={fla}/>
                </div>
            </div>
            <div className="details">
                <h2 className="title">Miami</h2>
                <span className="caption">USD 1,441,34</span>
                <button className="btn"> 
                    <Link to="/login">  
                        <a>Obtenerlo</a>
                    </Link>
                </button>
            </div>
                
        </div>

        

    </div>
</section>
)
}
export default Promo
