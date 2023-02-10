import React, {useState} from "react";
import { loginUser } from "../../../service/user_service.js";

const LoginModal = () => {

  const [loginForm, setLoginForm]= useState({})

  const handleChange = (event) => {
    setLoginForm({...loginForm, [event.target.id]:event.target.value})
  }

  const handleClick = (event) => {
    event.preventDefault();
    loginUser(loginForm)
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#loginModal">
        Ingresar
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <h1 className="modal-title fs-5 text-center" id="loginModalLabel">
              Ingresa los datos tu usuario. ☝
            </h1>
            <div className="modal-body p-0 py-3">
              <div className="row py-3">
                <div className="col">
                  <input type="text" onChange={handleChange} id="email" className="form-control" placeholder="Email" aria-label="Email"/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" onChange={handleChange} id="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña"/>
                </div>
              </div>
            </div>
            <button type="button" onClick={handleClick} className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
