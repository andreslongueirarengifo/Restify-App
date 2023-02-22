import React from "react";
import { useNavigate } from "react-router-dom";

//images
import logoWhite from "../../../img/logo-white.png";

export const NavbarCP = (props) => {

	const navigate = useNavigate();

	return (
		<div className="m-0">
			<ul className="nav flex-column vertical-navbar p-4">
				<li className="nav-item">
					<img src={logoWhite} alt="Restify" width="88" height="24" onClick={() => navigate(`/`)} />
				</li>
				<li className="nav-item">
					<a className="nav-link" aria-current="page" onClick={() => navigate(`/controlpanel/home/${props.webName}`)}>
						Content
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" onClick={() => navigate(`/controlpanel/branding/${props.webName}`)}>
						Branding
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" onClick={() => navigate(`/controlpanel/menu/${props.webName}`)}>
						Menu
					</a>
				</li>
			</ul>
		</div>
	);
};
