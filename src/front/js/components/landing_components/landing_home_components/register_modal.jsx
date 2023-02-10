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
      <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#registerModal">
        Regístrate
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <h1 className="modal-title fs-5 text-center" id="registerModalLabel">
              Ingresa los datos tu usuario. ☝
            </h1>
            <div className="modal-body p-0 py-3">
              <div className="row">
                <div className="col">
                  <input type="text" onChange={handleChange} id="name" className="form-control" placeholder="Nombre" aria-label="Nombre"/>
                </div>
                <div className="col">
                  <input type="text" onChange={handleChange} id="lastname" className="form-control" placeholder="Apellidos" aria-label="Apellidos"/>
                </div>
              </div>
              <div className="row py-3">
                <div className="col">
                  <input type="text" onChange={handleChange} id="email" className="form-control" placeholder="Email" aria-label="Email"/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" onChange={handleChange} id="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Confirmar contraseña" aria-label="Confirmar contraseña"/>
                </div>
              </div>
            </div>
            <button onClick={handleClick} type="button" className="btn btn-primary">
              Registrar usuario
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
