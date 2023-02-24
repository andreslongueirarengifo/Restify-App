import React, { useContext, useEffect, useState } from "react";
import { getSpainCities } from "../../../service/external_service";
import { Context } from "../../../store/appContext";

export const ContentInputGroupLocation = () => {
	const { store, actions } = useContext(Context);
	const [form, setform] = useState({});
	const [spainCitiesData, setSpainCitiesData] = useState([]);

	const handleChange = (event) => {
		setform({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		actions.setSetContentFormData(form);
	}, [form]);

	useEffect(() => {
		const fetchedSpainCities = async () => {
			const data = await getSpainCities();
			const citiesArray = [];
			data.records.map((record) => {
				citiesArray.push(record.fields.provincia);
			});
			setSpainCitiesData(citiesArray);
		};
		fetchedSpainCities();
	}, []);

	return (
		<>
			<h2 className="caption-text my-4">Ubicación</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo" className="form-label">
						Calle
					</label>
					<input
						type="text"
						onChange={handleChange}
						id="location_street"
						className="form-control"
					/>
				</div>
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
						Ciudad
					</label>
					<select className="form-select" aria-label="Seleccione la ciudad" onChange={handleChange} id="location_city">
						{spainCitiesData.map((city, index) => {
							return <option key={index} value={city}>{city}</option>
						})}
					</select>
				</div>
			</div>
		</>
	);
};
