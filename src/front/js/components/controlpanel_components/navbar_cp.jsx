import React from "react";
import { useNavigate } from "react-router-dom";

//images
import logoWhite from "../../../img/logo-white.png";

export const NavbarCP = () => {

    const navigate = useNavigate();

    return (
    <>
    <ul class="nav flex-column vertical-navbar p-4">
        <li class="nav-item">
            <img src={logoWhite} alt="Restify" width="88" height="24" onClick={() => navigate(`/`)}/>
        </li>
        <li class="nav-item">
        <a class="nav-link" aria-current="page" onClick={() => navigate(`/test-cp-home`)}>
            Content
        </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" onClick={() => navigate(`/test-cp-branding`)}>
            Branding
        </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" onClick={() => navigate(`/test-cp-menu`)}>
            Menu
        </a>
        </li>
    </ul>
    </>
);
};
