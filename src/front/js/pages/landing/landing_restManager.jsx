import React from "react";

//include your index.scss file into the bundle
import "../../../styles/landing.css";

//import components
import { NavbarRestManager } from "../../components/landing_components/landing_restManager_components/navbar_restManager_lp.jsx";
import { CardRestaurant } from "../../components/landing_components/landing_restManager_components/card_restaurant_lp.jsx";

export const RestManagerLP = () => {
  return (
    <div className="container-fluid p-0">
      <NavbarRestManager />
      <h2>¡Bienvenido, Carlos!</h2>
      <p>Gestión de restaurantes</p>
      <CardRestaurant />
    </div>
  );
};
