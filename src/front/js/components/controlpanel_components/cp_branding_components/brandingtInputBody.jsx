import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import { BrandingInputGroupColors } from "./brandingInputGroupColors.jsx";
import { BrandingInputGroupLogo } from "./brandingInputGroupLogo.jsx";
import { BrandingInputGroupFont } from "./brandingtInputGroupFont.jsx";
import { BrandingInputGroupName } from "./brandingtInputGroupName.jsx";
import { updateBranding } from "../../../service/cp_services";
import { uploadLogo } from "../../../service/create_restaurant_service";

export const BrandingInputBody = (props) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		const getDataOnLoad = async () => {
			await actions.getCurrentRestaurantIdbyWebName(props.webName);
			await actions.getCurrentRestaurantBranding(store.currentRestaurantId);
			actions.setSetBrandingFormData({ branding_id: store.currentRestaurantBranding.id });
		};
		getDataOnLoad();
	}, []);

	useEffect(() => {
		actions.setSetBrandingFormData({ web_id: store.currentRestaurantId });
	}, [store.currentRestaurantId]);

	return (
		<div className="container p-4">
			<div className="container-fluid p-0">
				<h2 className="mb-4">Actualiza el branding de tu web</h2>
			</div>
			<div className="container-fluid cpbody-container shadow-sm p-3">
				<div className="row px-5">
					<BrandingInputGroupName />
					<BrandingInputGroupLogo />
					<BrandingInputGroupFont />
					<BrandingInputGroupColors />
				</div>
				<div className="row d-flex justify-content-center my-3">
					<button
						type="button"
						className="btn btn-restify btn-restify-primary btn-form col-4"
						onClick={() => {
							//updateBranding(store.setBrandingFormData);
							uploadLogo(store.bodyuploadlogo, store.setBrandingFormData.id);
						}}
					>
						Actualizar información
					</button>
				</div>
			</div>
		</div>
	);
};
