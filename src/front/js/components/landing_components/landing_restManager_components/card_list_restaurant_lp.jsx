import React, {useState, useEffect} from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getCurrentUserRestaurants } from "../../../service/rest_manager_service.js";
import { CardAddRestaurant } from "./card_add_rest_lp.jsx";
import { CardRestaurant } from "./card_restaurant_lp.jsx";


export const CardListRest = ()=>{

    const [currentUserRestaurants, setCurrentUserRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
    const getRestaurantsData = async () => {
        const data = await getCurrentUserRestaurants();
        setCurrentUserRestaurants(data.result)
    }
    getRestaurantsData();
    },[])

return (
    <Row xs={1} md={3} className="g-4">
        {currentUserRestaurants.map((restaurant, index) => {
            return <Col key={index}><CardRestaurant id={restaurant.id} name={restaurant.name} key={index}/></Col>
        })}
        <Col>
        <CardAddRestaurant />
        </Col>
    </Row>
    );
}