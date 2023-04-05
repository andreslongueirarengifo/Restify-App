import React from "react";
import { useNavigate } from "react-router-dom";

export const CardAddRestaurant = () => {
	const navigate = useNavigate();

	return (
		<div className="card-rest d-flex flex-column shadow" style={{ width: "18rem", height: "25rem" }}>
			<h5 className="card-title p-2 m-auto mt-2">
				<b>Crear restaurante</b>
			</h5>
			<div
				onClick={() => navigate(`/createrestaurant`)}
				className="img-card-add m-auto text-center d-flex align-items-center justify-content-center"
			>
				<i
					className="fa-solid fa-plus"
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-title="Crear restaurante"
				></i>
			</div>
			<div className="card-body">
				<p aria-hidden="true">
					<span className="placeholder col-6 bg-secondary"></span>
				</p>
				<p aria-hidden="true">
					<span className="placeholder col-12 bg-secondary"></span>
				</p>
				<div className="d-flex flex-column mt-3">
					<button className="btn btn-restify-secondary btn-rounded mb-2 disabled placeholder"></button>
					<button className="btn btn-restify-primary btn-rounded disabled placeholder"></button>
				</div>
			</div>
		</div>
	);
};
