import React, { useContext, useState } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupLocation = () => {
	const { store, actions } = useContext(Context);
	const [registerForm, setRegisterForm] = useState({});

	const handleChange = (event) => {
		setRegisterForm({ ...registerForm, [event.target.id]: event.target.value });
		actions.setContentFormData(registerForm);
	};

	return (
		<>
            <h2 className="caption-text my-4">Ubicación</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
                    	Calle
					</label>
					<input type="text" onChange={handleChange} id="location_street" className="form-control" aria-label="Nombre" />
				</div>
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
                    	Ciudad
					</label>
					<input
						type="text"
						onChange={handleChange}
						id="location_city"
						className="form-control"
						aria-label="Apellidos"
					/>
				</div>
			</div>
		</>
	);
};
