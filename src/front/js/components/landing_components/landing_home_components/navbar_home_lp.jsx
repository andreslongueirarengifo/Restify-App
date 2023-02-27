import React, { useState } from "react";

//images
import logoWhite from "../../../../img/logo-white.png"

//import components
import LoginModal from "./login_modal.jsx";

export const NavbarHome = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary nav-size" style={{backgroundColor: "#352970"}}>
            <div className="container d-flex justify-content-between align-middle">
                <a className="navbar-brand" href="#">
                    <img src={logoWhite} alt="Restify" width="88" height="24"/>
                </a>
                <LoginModal/>

            </div>
        </nav>
    );
};