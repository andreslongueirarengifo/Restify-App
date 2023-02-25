import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const BrandingInputGroupName = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({});

	const handleChange = (event) => {
		setForm({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		actions.setSetBrandingFormData(form);
	}, [form]);

	return (
		<>
			<h2 className="caption-text my-4">Contacto</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="brand_name" className="form-label">
						Nombre de marca
					</label>
					<input defaultValue={store.currentRestaurantBranding.brand_name} type="text" onChange={handleChange} id="brand_name" className="form-control" />
				</div>
			</div>
		</>
	);
};
