import React, { useContext, useState } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupSM = () => {
	const { store, actions } = useContext(Context);
	const [registerForm, setRegisterForm] = useState({});

	const handleChange = (event) => {
		setRegisterForm({ ...registerForm, [event.target.id]: event.target.value });
		actions.setContentFormData(registerForm);
	};

	return (
		<>
            <h2 className="caption-text my-4">Redes sociales</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
                        <i className="fa-brands fa-instagram me-2"></i> Instagram
					</label>
					<input type="text" onChange={handleChange} id="instagram" className="form-control" aria-label="Nombre" />
				</div>
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
                        <i className="fa-brands fa-twitter me-2"></i>Twitter
					</label>
					<input
						type="text"
						onChange={handleChange}
						id="twitter"
						className="form-control"
						aria-label="Apellidos"
					/>
				</div>
			</div>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
                        <i className="fa-brands fa-facebook me-2"></i>Facebook
					</label>
					<input type="text" onChange={handleChange} id="facebook" className="form-control" aria-label="Nombre" />
				</div>
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
                        <i class="fa-brands fa-tiktok me-2"></i>Tiktok
					</label>
					<input
						type="text"
						onChange={handleChange}
						id="tiktok"
						className="form-control"
						aria-label="Apellidos"
					/>
				</div>
			</div>
		</>
	);
};
