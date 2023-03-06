import React from "react";
import { useNavigate } from "react-router-dom";

export const TopBarCP = () => {
	const navigate = useNavigate();

	return (
		<div className="container-fluid bg-white w-100 shadow-sm align-middle d-flex justify-content-end p-2">
			<button
				type="button"
				className="btn btn-restify-primary btn-rounded me-4"
				onClick={() => navigate("/rest-manager")}
			>
				Volver al dashboard <i className="fa-solid fa-chevron-right ms-2"></i>
			</button>
		</div>
	);
};
