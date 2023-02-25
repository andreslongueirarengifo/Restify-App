import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupContact = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({});

	const handleChange = (event) => {
		setForm({ ...form, [event.target.id]: parseInt(event.target.value) });
	};

	useEffect(() => {
		actions.setSetContentFormData(form);
	}, [form]);

	return (
		<>
			<h2 className="caption-text my-4">Contacto</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
						Número de teléfono
					</label>
					<input type="number" onChange={handleChange} id="phone_number" className="form-control" />
				</div>
			</div>
		</>
	);
};
