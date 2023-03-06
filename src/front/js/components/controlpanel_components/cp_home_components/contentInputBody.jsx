import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import { ContentInputGroupSM } from "./contentInputGroupSM.jsx";
import { ContentInputGroupLocation } from "./contentInputGroupLocation.jsx";
import { ContentInputGroupContact } from "./contentInputGroupContact.jsx";
import { ContentInputGroupHeader } from "./contentInputGroupHeader.jsx";
import { getContent, getWebInfoByName, updateContent, uploadImage } from "../../../service/cp_services";

export const ContentInputBody = (props) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		const getDataOnLoad = async () => {
			await actions.getCurrentRestaurantIdbyWebName(props.webName);
			await actions.getCurrentRestaurantContent(store.currentRestaurantId);

			actions.setSetContentFormData({ content_id: store.currentRestaurantContent.id });
		};
		getDataOnLoad();
	}, []);

	useEffect(() => {
		actions.setSetContentFormData({ web_id: store.currentRestaurantId });
	}, [store.currentRestaurantId]);

	return (
		<div className="container p-4">
			<div className="container-fluid p-0">
				<h2 className="mb-4">Actualiza el contenido de tu restaurante</h2>
			</div>
			<div className="container-fluid cpbody-container shadow-sm p-3">
				<div className="row px-5">
					<ContentInputGroupContact />
					<ContentInputGroupHeader />
					<ContentInputGroupLocation />
					<ContentInputGroupSM />
				</div>
				<div className="row d-flex justify-content-center my-3">
					<button
						type="button"
						className="btn btn-restify btn-restify-primary btn-form col-4"
						onClick={() => {
							updateContent(store.setContentFormData);
							uploadImage(store.bodyUploadImg, store.setContentFormData.content_id);
						}}
					>
						Actualizar información
					</button>
				</div>
			</div>
		</div>
	);
};
