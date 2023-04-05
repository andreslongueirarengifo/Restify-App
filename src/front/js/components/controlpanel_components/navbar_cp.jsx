import React from "react";
import { useNavigate } from "react-router-dom";

//images
import logoWhite from "../../../img/logo-white.png";
import { ConfirmDeleteModal } from "./delete_modal.jsx";

export const NavbarCP = (props) => {
	const navigate = useNavigate();

	return (
		<>
			<nav className="m-0 w-100 d-flex flex-column vertical-navbar justify-content-between">
				<div>
					<ul className="navbar-nav flex-column p-2 px-4">
						<li className="nav-item text-center mb-2">
							<img src={logoWhite} alt="Restify" width="88" height="24" onClick={() => navigate(`/rest-manager`)} />
						</li>
						<li className="nav-item">
							<a
								className="nav-link cpnav-item"
								aria-current="page"
								onClick={() => navigate(`/controlpanel/home/${props.webName}`)}
							>
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
				</div>
				<div>
					<button
						type="button"
						className="btn btn-danger m-4"
						data-bs-toggle="modal"
						data-bs-target="#confirmDeleteModal"
					>
						Eliminar restaurante
					</button>
				</div>
			</nav>
			<ConfirmDeleteModal />
		</>
	);
};
