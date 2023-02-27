import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const BrandingInputGroupLogo = () => {
	const { store, actions } = useContext(Context);
	const [form, setform] = useState({});

	const handleChange = (event) => {
		setform({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		actions.setSetBrandingFormData(form);
	}, [form]);

	return (
		<>
			<h2 className="caption-text my-4">Logotipos</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
						Logo
					</label>
					<input
						defaultValue={store.currentRestaurantBranding.logo}
						type="text"
						onChange={handleChange}
						id="logo"
						className="form-control"
					/>
				</div>
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
						Favicon
					</label>
					<input
						defaultValue={store.currentRestaurantBranding.logo_favicon}
						type="text"
						onChange={handleChange}
						id="logo_favicon"
						className="form-control"
					/>
				</div>
			</div>
		</>
	);
};
