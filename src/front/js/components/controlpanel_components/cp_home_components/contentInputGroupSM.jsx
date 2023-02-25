import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupSM = () => {
	const { store, actions } = useContext(Context);
	const [form, setform] = useState({});

	const handleChange = (event) => {
		setform({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		actions.setSetContentFormData(form);
	}, [form]);

	return (
		<>
			<h2 className="caption-text my-4">Redes sociales</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
						<i className="fa-brands fa-instagram me-2"></i> Instagram
					</label>
					<input type="text" onChange={handleChange} id="instagram" className="form-control" />
				</div>
			</div>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
						<i className="fa-brands fa-twitter me-2"></i>Twitter
					</label>
					<input type="text" onChange={handleChange} id="twitter" className="form-control" />
				</div>
			</div>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
						<i className="fa-brands fa-facebook me-2"></i>Facebook
					</label>
					<input type="text" onChange={handleChange} id="facebook" className="form-control" />
				</div>
			</div>
		</>
	);
};
