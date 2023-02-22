import React, { useEffect, useState } from "react";
import { createUser } from "../../../service/user_service.js";

import toast, { Toaster } from 'react-hot-toast';

const RegisterModal = () => {
  const [registerForm, setRegisterForm] = useState({});
  const [ showButton, setShowButton ] = useState(false);

  const handleChange = (event) => {
    setRegisterForm({ ...registerForm, [event.target.id]: event.target.value });
    }

    useEffect(()=>{
      if(Object.keys(registerForm).length == 5){
        if(!(registerForm.name === '' || registerForm.lastname === '' || registerForm.password === '' || registerForm.passwordRepeat === '' || registerForm.email === '')){
          setShowButton(true)
        }else{
          setShowButton(false)
        }
    }},[registerForm])
    
    console.log(registerForm)

  const handleClick = async (event) => {
    event.preventDefault();
    //createUser(registerForm);
    console.log(showButton)
    toast.success('Registro exitoso😎')
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-secondary btn-restify-primary btn-rounded"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
        style={{ fontSize: "1.25rem" }}
      >
        Regístrate
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade modal-fade-blur"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content modal-rounded-corners">
            <label className="modal-title text-center h3" id="registerModalLabel">
              Crea tu cuenta de Restify
            </label>
            <div className="modal-body p-0 py-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    onKeyUp={handleChange}
                    id="name"
                    className="form-control"
                    aria-label="Nombre"
                  />
                </div>

                <div className="col">
                  <label htmlFor="lastname" className="form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    onKeyUp={handleChange}
                    id="lastname"
                    className="form-control"
                    aria-label="Apellidos"
                  />
                </div>
              </div>
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    onKeyUp={handleChange}
                    id="email"
                    className="form-control"
                    aria-label="Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    onKeyUp={handleChange}
                    id="password"
                    className="form-control"
                    aria-label="Contraseña"
                  />
                </div>
                <div className="col">
                  <label htmlFor="passwordRepeat" className="form-label">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    onKeyUp={handleChange}
                    id="passwordRepeat"
                    className="form-control"
                    aria-label="Confirmar contraseña"
                  />
                </div>
              </div>
            </div>

            {!showButton?<button
              onClick={handleClick}
              type="button"
              className="btn btn-restify btn-restify-primary btn-form" disabled>
              Registrar usuario
            </button> :
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-restify btn-restify-primary btn-form"
              data-bs-dismiss="modal">
              Registrar usuario
              </button>
            }

          </div>
        </div>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  );
};

export default RegisterModal;

