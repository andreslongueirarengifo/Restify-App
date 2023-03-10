import React from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

//images
import logoWhite from "../../../../img/logo-white.png";

export const NavbarRestManager = (props) => {
	const navigate = useNavigate();

	const handleClick = (event) => {
		event.preventDefault();
		localStorage.removeItem("jwt-token");
		action.logoutState();
		navigate(`/`);
	};

	console.log(props);

	return (
		<nav
			className="navbar navbar-dark navbar-expand-lg bg-body-tertiary nav-size"
			style={{ backgroundColor: "#352970", alignItems: "center" }}
		>
			<div className="container d-flex justify-content-between">
				<a className="navbar-brand p-0 m-0" href="#">
					<img src={logoWhite} alt="Restify" width="88" height="24" />
				</a>
			</div>
			<div className="mx-5">
				<Dropdown>
					<Dropdown.Toggle
						id="dropdown-basic"
						className="img-user"
						style={{ backgroundImage: `url(${props.user.avatar})` }}
					></Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" className="d-flex">
							<div className="d-flex align-items-center">
								<img className="img-user" src={props.user.avatar} alt="avatar" />
							</div>
							<div className="data-user-dropdown">
								<p>
									{props.user.name} {props.user.lastname}
								</p>
								<p>{props.user.email}</p>
							</div>
						</Dropdown.Item>
						<Dropdown.Item className="p-2" onClick={handleClick}>
							<i className="fa-solid fa-power-off p-2"></i>Cerrar sesión
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
