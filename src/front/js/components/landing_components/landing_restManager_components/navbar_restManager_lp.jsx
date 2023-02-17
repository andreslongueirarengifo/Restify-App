import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

//images
import logoWhite from "../../../../img/logo-white.png";

export const NavbarRestManager = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg bg-body-tertiary nav-size"
      style={{ backgroundColor: "#352970" }}
    >
      <div className="container d-flex justify-content-between align-middle">
        <a className="navbar-brand" href="#">
          <img src={logoWhite} alt="Restify" width="88" height="24" />
        </a>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-user">
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" className="d-flex">
            <div className="d-flex align-items-center">
                <div className="img-user"></div>
            </div>
            <div className="data-user-dropdown">
                <p>Carlos Velázquez</p>
                <p>email@admin.com</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="p-2"><i className="fa-solid fa-gear p-2"></i>Configuración</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="p-2"><i className="fa-solid fa-power-off p-2"></i>Cerrar sesión</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};
