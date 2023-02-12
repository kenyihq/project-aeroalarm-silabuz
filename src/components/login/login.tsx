import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import appvideoUrl from "../../Assets/video.mp4";
import axios from "axios";
import Swal from 'sweetalert2'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const navigate = useNavigate();

  const { firstName, lastName, email, password, confirmPassword, phone } = formValue;
  const [showRegister, setShowRegister] = useState(false);

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phone) {
      Swal.fire({
        title: 'Campos vacíos',
        text: 'Por favor rellene todos los campos antes de continuar.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Contraseñas no coinciden',
        text: 'Por favor verifica que las contraseñas coincidan.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:4000/api/v1/supabase/user", {
        firstName,
        lastName,
        email,
        password,
        phone,
      });
      if (response.status === 200) {
        navigate("/filtrado");
        Swal.fire({
          title: 'Registro Exitoso!',
          text: 'El registro se ha realizado con éxito.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
      }
  
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error en el registro',
        text: 'Hubo un error al realizar el registro, por favor inténtelo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/filtrado");
        Swal.fire({
          title: 'Inicio de Sesión Exitoso!',
          text: 'Has iniciado sesión con éxito.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error al iniciar sesión',
        text: 'Hubo un error al iniciar sesión, por favor verifica tus credenciales e intenta nuevamente',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <section className="home">
      <video className="videoBg" src={appvideoUrl} muted autoPlay loop></video>
      <div className="homeContent container">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-4 text-center">
                <div className="mb md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    {!showRegister ? "login" : "Register"}
                  </h2>
                  <p className="text-white-50 mb-4">
                    {!showRegister
                      ? "please enter your Email & Password"
                      : "Please enter User detail "}
                  </p>
                  {showRegister && (
                    <>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="text"
                          name="firstName"
                          value={firstName}
                          onChange={handleChange}
                          label="First Name"
                          className="form-control form control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                          label="Last Name"
                          className="form-control form control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={handleChange}
                          label="Phone"
                          className="form-control form control-lg"
                        />
                      </div>
                    </>
                  )}
                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      label="Email"
                      className="form-control form control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      label="Password"
                      className="form-control form control-lg"
                    />
                  </div>
                  
                  {showRegister && (
                    <div className="form-outline form-white mb-4">
                      <MDBInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        className="form-control form control-lg"
                      />
                    </div>
                  )}
                  {showRegister ? (
                    <button
                      className="btn btn-ontline-light btn-lg px-5"
                      type="button"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-lg btn-primary btn-block mt-3 mb-3"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  )}
                </div>
                <div>
                  <h5 className="mb-0">
                    {!showRegister ? (
                      <>
                        Don¨t have an account ?
                        <p
                          className="text-white-50 fw-bold"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowRegister(true)}
                        >
                          Sign Up
                        </p>
                      </>
                    ) : (
                      <>
                        Already have an account ?
                        <p
                          className="text-white-50 fw-bold"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowRegister(false)}
                        >
                          Sign In
                        </p>
                      </>
                    )}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login