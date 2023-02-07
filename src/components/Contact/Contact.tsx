import "./contact.css"
import vdchat from '../../Assets/vdmsg.mp4';
import React from "react";
import { Link } from "react-router-dom";



const Contact = () => {

return (
<section>
    <video className="videoBg" src={vdchat} muted autoPlay loop></video>
    <div className="card5">
    <div className="chat-header">Chat</div>
      <div className="chat-window">
        <ul className="message-list"></ul>
      </div>
      <div className="chat-input">
          <input type="text" className="message-input" placeholder="Type your message here"/>
          <button className="send-button">Send</button>
      </div>
    </div>
    
</section>
  

)
}

export default Contact