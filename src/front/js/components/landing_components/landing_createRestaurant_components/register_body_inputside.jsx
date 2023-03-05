import React, { useContext, useEffect, useState } from "react";
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
	uploadImage,
	uploadFavicon,
} from "../../../service/create_restaurant_service.js";

export const RegisterBodyInputSide = () => {
	const { store, actions } = useContext(Context);
	const [isCreating, setIsCreating] = useState(false);
	const [ showButton, setShowButton ] = useState(false);
	const navigate = useNavigate();

	//default content creation
	useEffect(() => {
		actions.setSetContentFormData(defaultContentCreation);
	}, []);

	useEffect(()=>{

		if(Object.keys(store.setBrandingFormData).length==8 && store.setBrandingFormData.logo != null){
			setShowButton(true)
		}

	},[store.setBrandingFormData])

	const handleClick = (event) => {
		event.preventDefault();
		const createRestaurantFromFormData = async () => {
			setIsCreating(true);
			const restaurantData = await createRestaurant(store.createRestaurantFormData); //restaurantData
			actions.setSetBrandingFormData(restaurantData.result);
			actions.setSetContentFormData(restaurantData.result);
			const brandData = await setBranding(store.setBrandingFormData);
			await setContent(store.setContentFormData);
			await uploadImage(store.bodyUploadImage, brandData.result.id);
			await uploadFavicon(store.bodyUploadFavicon, brandData.result.id);
			setIsCreating(false);
			navigate(`/rest-manager`);
		};
		createRestaurantFromFormData();
	};

	return (
		<div className="container-sm white-test p-5 rounded-end scrollable">
			<h2 className="text-center mb-4">Crea la web de tu restaurante.</h2>
			<InputGroupBasicInfo />
			<InputGroupBrandingName />
			<InputGroupLogo />
			<InputGroupFont />
			<InputGroupColors />
			<label className="mt-4" style={{ color: "#9f9f9f" }}>Los campos con * son obligatorios</label>

			{!showButton ? 
			(
				<button
					onClick={handleClick}
					type="button"
					className="btn btn-restify btn-restify-primary btn-form col-12 mt-4"
					disabled
				>
					Crear restaurante
				</button>
			) 
			: isCreating?
			(
				<button
					onClick={handleClick}
					type="button"
					className="btn btn-restify btn-restify-primary btn-form col-12 mt-4"
					disabled
				>
					<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					<span className="visually-hidden">Creating restaurant...</span>
				</button>
			)
			:(
				<button
					onClick={handleClick}
					type="button"
					className="btn btn-restify btn-restify-primary btn-form col-12 mt-4"
				>
					Crear restaurante
				</button>
			)}
		</div>
	);
};
