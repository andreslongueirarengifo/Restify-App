import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const BrandingInputBody = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-4">
			<div className="container-fluid p-0">
				<h2 className="mb-4">Actualiza el branding de tu web</h2>
			</div>
			<div className="container-fluid cpbody-container shadow-sm p-3">
				<div className="row px-5">
				</div>
				<div className="row d-flex justify-content-center my-3">
					<button type="button" className="btn btn-restify btn-restify-primary btn-form col-4" data-bs-dismiss="modal">
						Actualizar información
					</button>
				</div>
			</div>
		</div>
	);
};
