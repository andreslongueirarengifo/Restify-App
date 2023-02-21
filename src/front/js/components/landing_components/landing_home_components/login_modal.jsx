import React, { useState, useContext, useEffect } from "react";
import { loginUser } from "../../../service/user_service.js";

import { Context } from "../../../store/appContext.js";

import { Navigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

const LoginModal = () => {
  const { store, actions } = useContext(Context);

  const [loginForm, setLoginForm] = useState({});

  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.id]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const data = await loginUser(loginForm);
    if (data.token) {
      actions.loginState();
    }
    toast.error("Usuario o contraseña incorrectos")
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {store.isAuthenticated ? (
        <Navigate to="/rest-manager" />
      ) : null}
      <button
        type="button"
        className="btn btn-restify-light btn-rounded"
        data-bs-toggle="modal"
        data-bs-target="#loginModal">
        Ingresar
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade modal-fade-blur"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="false"
        >

        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-rounded-corners">
            <h2 className="modal-title text-center" id="loginModalLabel">
              Inicia sesión en tu cuenta
            </h2>
            <div className="modal-body p-0 py-3">
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    id="password"
                    className="form-control"
                    aria-label="Contraseña"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary btn-form btn-restify-secondary"
              data-bs-dismiss="modal"
              >
              Ingresar
            </button>
          </div>
        </div>
      </div>

      <Toaster   
      position="bottom-center"
      reverseOrder={false}/>
    </>
  );
};

export default LoginModal;
