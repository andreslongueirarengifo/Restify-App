import React, { useState } from "react";

//images
import logoWhite from "../../../../img/logo-white.png";

//import components
import LoginModal from "./login_modal.jsx";

export const NavbarHome = () => {
	return (
		<nav
			className="navbar navbar-dark navbar-expand-lg bg-body-tertiary nav-size"
			style={{ backgroundColor: "#352970", alignItems: "center" }}
		>
			<div className="col-8 mx-auto d-flex justify-content-between">
				<a className="navbar-brand p-0 m-0" href="#">
					<img src={logoWhite} alt="Restify" width="88" height="24" />
				</a>
				<LoginModal />
			</div>
		</nav>
	);
};
