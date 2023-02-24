import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const TopBarCP = () => {
	return (
		<div
			className="container-fluid bg-white w-100 shadow-sm align-middle d-flex justify-content-end"
			style={{ height: "3rem", lineHeight: "3rem" }}
		>
			<div className="mx-5">
				<Dropdown className="align-center">
					<Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-user"></Dropdown.Toggle>

					<Dropdown.Menu style={{width: "12rem"}}>
						<Dropdown.Item href="#/action-1" className="d-flex">
							<div className="d-flex align-items-center">
								<div className="img-user"></div>
							</div>
							<div className="data-user-dropdown">
								<p>Carlos Velázquez</p>
								<p>email@admin.com</p>
							</div>
						</Dropdown.Item>
						<Dropdown.Item href="#/action-2" className="p-2">
							<i className="fa-solid fa-gear p-2"></i>Configuración
						</Dropdown.Item>
						<Dropdown.Item href="#/action-3" className="p-2">
							<i className="fa-solid fa-power-off p-2"></i>Cerrar sesión
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};
