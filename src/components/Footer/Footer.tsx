import React, { useState, ChangeEvent, FormEvent } from 'react';
import"./footer.css"


const Footer = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ text: 'Hola, ¿en qué puedo ayudarte hoy?' }]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, { text: input }]);
    setInput('');
  };

  return (
    
<div className="card5">
    <div className="chat-bot">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );

};

export default Footer;

