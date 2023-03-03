import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const BrandingInputGroupColors = () => {
	const { store, actions } = useContext(Context);
	const [form, setform] = useState({});

	const handleChange = (event) => {
		setform({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		setform(store.currentRestaurantBranding)
	}, [store.currentRestaurantBranding]);

	useEffect(() => {
		actions.setSetBrandingFormData(form);
	}, [form]);

	return (
		<>
			<h2 className="caption-text my-4">Paleta de colores</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="color_bg1" className="form-label">
						Color de fondo 1
					</label>
					<input
						type="color"
						value={form.color_bg1}
						onChange={handleChange}
						className="form-control color-input"
						id="color_bg1"
						aria-label="Color de fondo 1"
					/>
				</div>
				<div className="col">
					<label htmlFor="color_bg2" className="form-label">
						Color de fondo 2
					</label>
					<input
						type="color"
						value={form.color_bg2}
						onChange={handleChange}
						className="form-control color-input"
						id="color_bg2"
						aria-label="Color de fondo 2"
					/>
				</div>
				<div className="col">
					<label htmlFor="color_font1" className="form-label">
						Color de fuente 1
					</label>
					<input
						type="color"
						value={form.color_font1}
						onChange={handleChange}
						className="form-control color-input"
						id="color_font1"
						aria-label="Color de fuente 1"
					/>
				</div>
				<div className="col">
					<label htmlFor="color_font2" className="form-label">
						Color de fuente 2
					</label>
					<input
						type="color"
						value={form.color_font2}
						onChange={handleChange}
						className="form-control color-input"
						id="color_font2"
						aria-label="Color de fuente 2"
					/>
				</div>
				<div className="col">
					<label htmlFor="color_hover1" className="form-label">
						Color de hover
					</label>
					<input
						type="color"
						value={form.color_hover1}
						onChange={handleChange}
						className="form-control color-input"
						id="color_hover1"
						aria-label="Color de fuente 2"
					/>
				</div>
			</div>
		</>
	);
};
