import React from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardAddRestaurant } from "./card_add_rest_lp.jsx";
import { CardRestaurant } from "./card_restaurant_lp.jsx";


export const CardListRest = ()=>{

const tstArrWebs = [{name:"web1"},{name:"web2"},{name:"web3"}]

return (
    <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
            <CardRestaurant />
        </Col>
        ))}
        <Col>
        <CardAddRestaurant />
        </Col>
    </Row>
    );
}