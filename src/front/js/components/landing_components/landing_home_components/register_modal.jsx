import React, {useState} from "react";
import {createUser} from "../../../service/user_service.js";

const RegisterModal = () => {

  const [registerForm, setRegisterForm]= useState({})

  const handleChange = (event) => {
    setRegisterForm({...registerForm, [event.target.id]:event.target.value})
  }

  const handleClick = (event) => {
    event.preventDefault();
    createUser(registerForm)
  }


  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-restify-secondary btn-rounded" data-bs-toggle="modal" data-bs-target="#registerModal">
        Regístrate
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade modal-fade-blur" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content modal-rounded-corners">
            <h2 className="modal-title text-center" id="registerModalLabel">
              Crea tu cuenta de Restify
            </h2>
            <div className="modal-body p-0 py-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" onChange={handleChange} id="name" className="form-control" aria-label="Nombre"/>
                </div>
                <div className="col">
                  <label htmlFor="lastname" className="form-label">Apellidos</label>
                  <input type="text" onChange={handleChange} id="lastname" className="form-control" aria-label="Apellidos"/>
                </div>
              </div>
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" onChange={handleChange} id="email" className="form-control" aria-label="Email"/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" onChange={handleChange} id="password" className="form-control" aria-label="Contraseña"/>
                </div>
                <div className="col">
                  <label htmlFor="password-repeat" className="form-label">Confirmar contraseña</label>
                  <input type="password" onChange={handleChange} id="password-repeat" className="form-control" aria-label="Confirmar contraseña"/>
                </div>
              </div>
            </div>
            <button onClick={handleClick} type="button" className="btn-restify btn-restify-primary btn-form">
              Registrar usuario
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
