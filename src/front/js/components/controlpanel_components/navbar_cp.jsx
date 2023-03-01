import React from "react";
import { useNavigate } from "react-router-dom";

//images
import logoWhite from "../../../img/logo-white.png";

export const NavbarCP = (props) => {

	const navigate = useNavigate();

	return (
		<nav className="m-0 w-100">
			<ul className="navbar-nav flex-column vertical-navbar p-2 px-4">
				<li className="nav-item text-center mb-2">
					<img src={logoWhite} alt="Restify" width="88" height="24" onClick={() => navigate(`/rest-manager`)} />
				</li>
				<li className="nav-item">
					<a className="nav-link cpnav-item" aria-current="page" onClick={() => navigate(`/controlpanel/home/${props.webName}`)}>
						<i className="fa-solid fa-house me-2 cpnav-icon text-center"></i> Content
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link cpnav-item" onClick={() => navigate(`/controlpanel/branding/${props.webName}`)}>
						<i className="fa-solid fa-brush me-2 cpnav-icon text-center"></i> Branding
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link cpnav-item" onClick={() => navigate(`/controlpanel/menu/${props.webName}`)}>
						<i className="fa-solid fa-utensils me-2 cpnav-icon text-center"></i> Menu
					</a>
				</li>
			</ul>
		</nav>
	);
};
