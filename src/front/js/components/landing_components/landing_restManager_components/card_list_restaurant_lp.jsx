import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getCurrentUserRestaurants } from "../../../service/rest_manager_service.js";
import { CardAddRestaurant } from "./card_add_rest_lp.jsx";
import { CardRestaurant } from "./card_restaurant_lp.jsx";

export const CardListRest = () => {
	const [currentUserRestaurants, setCurrentUserRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getRestaurantsData = async () => {
			const data = await getCurrentUserRestaurants();
			setCurrentUserRestaurants(data.result);
		};
		getRestaurantsData();
	}, []);

	return (
		<>
			{currentUserRestaurants.length === 0 ? (
				<Row className="mb-4">
					<p>Parece que aún no creas ningún restaurante. Presiona en "+" para crear el primero 😊</p>
				</Row>
			) : null}
			<Row xs={1} md={3} className="g-4">
				{currentUserRestaurants.map((restaurant, index) => {
					return (
						<Col key={index}>
							<CardRestaurant id={restaurant.id} name={restaurant.name} key={index} />
						</Col>
					);
				})}
				{currentUserRestaurants.length < 3 ? (
					<Col>
						<CardAddRestaurant />
					</Col>
				) : null}
			</Row>
		</>
	);
};
