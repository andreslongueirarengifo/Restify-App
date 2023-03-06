import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterBodyPreviewSide = () => {
	const navigate = useNavigate();
	return (
		<div className="col-4 p-0 rounded-start d-none d-md-block createres-background">
			<button
				onClick={() => navigate("/rest-manager")}
				type="button"
				className="btn btn-restify btn-restify-transparent btn-rounded m-4"
			>
				<i className="fa-solid fa-angle-left me-2"></i> Volver al dashboard
			</button>
		</div>
	);
};
