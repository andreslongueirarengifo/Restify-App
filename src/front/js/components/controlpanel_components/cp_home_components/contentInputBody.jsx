import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import { ContentInputGroupSM } from "./contentInputGroupSM.jsx";

export const ContentInputBody = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container white-test p-3">
			<div className="container-fluid p-0">
				<h2 className="text-center mb-4">Actualiza el contenido de tu restaurante</h2>
			</div>
			<div className="container-fluid d-flex justify-content-center">
				<ContentInputGroupSM />
			</div>
			<div className="container-fluid text-center mt-3">
				<button type="button" className="btn btn-restify btn-restify-primary btn-form" data-bs-dismiss="modal">
					Actualizar información
				</button>
			</div>
		</div>
	);
};
