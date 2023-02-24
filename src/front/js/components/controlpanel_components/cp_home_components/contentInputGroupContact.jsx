import React, { useContext, useState } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupContact = () => {
	const { store, actions } = useContext(Context);
	const [registerForm, setRegisterForm] = useState({});

	const handleChange = (event) => {
		setRegisterForm({ ...registerForm, [event.target.id]: event.target.value });
		actions.setContentFormData(registerForm);
	};

	return (
		<>
            <h2 className="caption-text my-4">Contacto</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
                    	Número de teléfono
					</label>
					<input
						type="text"
						onChange={handleChange}
						id="phone_number"
						className="form-control"
						aria-label="Apellidos"
					/>
				</div>
			</div>
		</>
	);
};
