import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoWhite from "../../../../img/logo-white.png";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { getRestaurant, getBranding } from "../../../service/rest_manager_service";

export const CardRestaurant = (props) => {
	const [restaurantData, setRestaurantData] = useState([]);
	const [brandingData, setBrandingData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const getRestaurantData = async () => {
			const data = await getRestaurant(props.id);
			setRestaurantData(data.result);
			const fetchedBranding = await getBranding(props.id);
			setBrandingData(fetchedBranding.result);
			console.log(fetchedBranding);
			setIsLoading(false);
		};
		getRestaurantData();
	}, []);

	if (isLoading) {
		return (
			<div className="card-rest d-flex flex-column shadow" style={{ width: "18rem", height: "25rem" }}>
				<p className="placeholder-glow mx-5 mt-2">
					<span className="placeholder col-12 bg-secondary"></span>
				</p>
				<img src={brandingData.logo} className="img-card m-auto"></img>
				<div className="card-body">
					<label className="form-label">Url del restaurante</label>
					<div className="copy-text rounded justify-content-between align-items-center">
						<p className="placeholder-glow mx-5">
							<span className="placeholder col-12 bg-secondary"></span>
						</p>
						<i className="fa-regular fa-copy"></i>
					</div>
					<div className="d-flex flex-column mt-3">
						<button className="btn btn-restify-secondary btn-rounded mb-2">Panel de control</button>
						<button className="btn btn-restify-primary btn-rounded">Visualizar</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="card-rest d-flex flex-column shadow" style={{ width: "18rem", height: "25rem" }}>
			<h5 className="card-title p-2 m-auto mt-2">
				<b>{restaurantData.name}</b>
			</h5>
			<img src={brandingData.logo} className="img-card m-auto"></img>
			<div className="card-body">
				<label className="form-label">Url del restaurante</label>
				<CopyToClipboard
					text={"https://3000-andreslongue-restifyapp-jwetv065gdg.ws-eu89b.gitpod.io/res/" + restaurantData.name}
				>
					<div className="copy-text rounded justify-content-between align-items-center">
						<p className="copy-text-label m-0">{".../res/" + restaurantData.name}</p>
						<i className="fa-regular fa-copy"></i>
					</div>
				</CopyToClipboard>
				<div className="d-flex flex-column mt-3">
					<Link className="btn btn-restify-secondary btn-rounded mb-2" to={`/controlpanel/home/${props.name}`}>
						Panel de control
					</Link>
					<Link className="btn btn-restify-primary btn-rounded" to={`/res/${props.name}`} target="_blank">
						Visualizar
					</Link>
				</div>
			</div>
		</div>
	);
};
