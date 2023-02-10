import React from "react";

//images
import logoWhite from "../../../../img/logo-white.png"

export const NavbarRestManager = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary nav-size" style={{backgroundColor: "#352970"}}>
            <div className="container d-flex justify-content-between align-middle">
                <a className="navbar-brand" href="#">
                    <img src={logoWhite} alt="Restify" width="88" height="24"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
            </div>
        </nav>
    );
};