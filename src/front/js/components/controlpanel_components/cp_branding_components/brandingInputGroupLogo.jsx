import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const BrandingInputGroupLogo = () => {
	const { store, actions } = useContext(Context);
	const [form, setform] = useState({});
	const [files, setFiles] = useState(null);

	const handleChange = (event) => {
		setform({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		setform({ ...form, ["logo"]: files });
		if (files) {
			let file = new FormData();
			file.append("logo", files[0]);
			actions.setBodyuploadLogo(file);
		}
	}, [files]);

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
						type="file"
						onChange={(e) => {
							setFiles(e.target.files);
						}}
						id="logo"
						className="form-control"
					/>
				</div>
				{/*<div className="col">
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
				</div>*/}
			</div>
		</>
	);
};
