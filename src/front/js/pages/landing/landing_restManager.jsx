import React, { useEffect, useState } from "react";

import "../../../styles/landing.css";

//components
import { LoadingSpinner } from "../../components/loadingSpinner.jsx";

//import components
import { NavbarRestManager } from "../../components/landing_components/landing_restManager_components/navbar_restManager_lp.jsx";
import { CardListRest } from "../../components/landing_components/landing_restManager_components/card_list_restaurant_lp.jsx";
import { getCurrentUser } from "../../service/user_service";

export const RestManagerLP = () => {
	const [currentUserData, setCurrentUserData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCurrentUserData = async () => {
			const data = await getCurrentUser();
			setCurrentUserData(data.result);
			setIsLoading(false);
		};
		getCurrentUserData();
	}, []);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className="container-fluid p-0">
			<NavbarRestManager user={currentUserData} />
			<div className="cont mt-3">
				<h2 className="welcome">
					¡Bienvenido, <span>{currentUserData.name}</span>!
				</h2>
				<p className="subtitle h5">
					<b>Gestión de restaurantes</b>
				</p>
				<CardListRest />
			</div>
		</div>
	);
};
