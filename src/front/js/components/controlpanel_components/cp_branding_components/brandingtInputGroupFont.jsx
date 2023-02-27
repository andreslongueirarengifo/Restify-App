import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const BrandingInputGroupFont = () => {
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
					<label htmlFor="font" className="form-label">
						Tipografía
					</label>
					<select defaultValue={store.currentRestaurantBranding.font} id="font" onChange={handleChange} className="form-select" aria-label="Default select example">
						<option value="Helvetica">Helvetica</option>
						<option value="Roboto">Roboto</option>
						<option value="Raleway">Raleway</option>
					</select>
				</div>
			</div>
		</>
	);
};
