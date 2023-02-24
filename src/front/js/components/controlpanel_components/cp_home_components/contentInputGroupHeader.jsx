import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupHeader = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({});

	const handleChange = (event) => {
		setForm({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		actions.setSetContentFormData(form);
	}, [form]);

	return (
		<>
            <h2 className="caption-text my-4">Header</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
                    	Imagen de fondo
					</label>
					<input
						type="text"
						onChange={handleChange}
						id="image_link"
						className="form-control"
					/>
				</div>
			</div>
		</>
	);
};
