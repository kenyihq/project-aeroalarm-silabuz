import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { MDBInput } from "mdb-react-ui-kit";

import "./ResetPassword.css";

const ResetPassword = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const verificationCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const response = await axios.post("http://localhost:4000/api/v1/twilio/send-sms", {
        to:phone,
        body: `Su código de verificación es: ${verificationCode}`,
      });
      if (response.status === 200) {
        navigate("/login");
        Swal.fire({
          title: 'Solicitud de contraseña enviada!',
          text: 'Se ha enviado un correo electrónico para restablecer su contraseña.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error al enviar solicitud',
        text: 'Hubo un error al enviar la solicitud de restablecimiento de contraseña, por favor inténtelo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="resetPasswordContainer">
      <h2>Reset Password</h2>
      <MDBInput label="Número de teléfono" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ResetPassword;
