import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../../store/appContext.js";

//import components
import { InputGroupBasicInfo } from "./inputgroup_basicinfo.jsx";
import { InputGroupBrandingName } from "./inputgroup_brandname.jsx";
import { InputGroupLogo } from "./inputgroup_logo.jsx";
import { InputGroupFont } from "./inputgroup_font.jsx";
import { InputGroupColors } from "./inputgroup_colors.jsx";
import {
	createRestaurant,
	setBranding,
	setContent,
	defaultContentCreation,
	uploadImage
} from "../../../service/create_restaurant_service.js";

export const RegisterBodyInputSide = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();


	//default content creation
	useEffect(() => {
		actions.setSetContentFormData(defaultContentCreation);
	}, []);

	const handleClick = (event) => {
		event.preventDefault();
		const createRestaurantFromFormData = async () => {
			const restaurantData = await createRestaurant(store.createRestaurantFormData); //restaurantData
			actions.setSetBrandingFormData(restaurantData.result);
            actions.setSetContentFormData(restaurantData.result);
			await setBranding(store.setBrandingFormData);
            await setContent(store.setContentFormData)
			await uploadImage(store.bodyUploadImage)
            //navigate(`/rest-manager`)
		};
		createRestaurantFromFormData();
	};

	return (
		<div className="container-sm white-test p-5 rounded-end scrollable">
			<h2 className="text-center mb-4">Crea tu web de tu restaurante.</h2>
			<InputGroupBasicInfo />
			<InputGroupBrandingName />
			<InputGroupLogo />
			<InputGroupFont />
			<InputGroupColors />

			<button onClick={handleClick} type="button" className="btn btn-restify btn-restify-primary btn-form col-12 mt-4">
				Crear restaurante
			</button>
		</div>
	);
};
