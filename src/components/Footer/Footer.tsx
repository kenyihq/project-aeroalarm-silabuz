import React from "react";
import "./footer.css"
import olas from '../../Assets/olas.mp4'
import {FiSend} from "react-icons/fi"

const Footer=()=>{
  return(
  <section className="footer">
    <div className="videoDiv1">
      <video src={olas} loop autoPlay muted></video>
        
        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text">
              <small>Mantenerse en Contacto</small>
              <h2>Viaja con Nosotros</h2>
            </div>
            <div className="inputDiv flex">

              <input type="text" placeholder="Enter Email Addres"/>
              
              <button className="btn flex" type="submit">
                SEND<FiSend className="icon"/>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
export default Footer