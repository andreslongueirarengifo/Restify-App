import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const MenuInputBody = (props) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCurrentRestaurantIdbyWebName(props.webName);
	}, []);

	return (
		<div className="container p-4">
			<div className="container-fluid p-0">
				<h2 className="mb-4">Actualiza el contenido de tu menu</h2>
			</div>
			<div className="container-fluid cpbody-container shadow-sm p-3">
				<div className="row px-5">
				</div>
				<div className="row d-flex justify-content-center my-3">
					<button type="button" className="btn btn-restify btn-restify-primary btn-form col-4">
						Actualizar información
					</button>
				</div>
			</div>
		</div>
	);
};
