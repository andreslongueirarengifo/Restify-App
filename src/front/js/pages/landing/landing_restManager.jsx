import React from "react";

import "../../../styles/landing.css";

//import components
import { NavbarRestManager } from "../../components/landing_components/landing_restManager_components/navbar_restManager_lp.jsx";
import { CardRestaurant } from "../../components/landing_components/landing_restManager_components/card_restaurant_lp.jsx";
import { CardListRest } from "../../components/landing_components/landing_restManager_components/card_list_restaurant_lp.jsx";

export const RestManagerLP = () => {
  return (
    <div className="container-fluid p-0">
      <NavbarRestManager />
      <div className="cont mt-3">
        <h2 className="welcome">
          <b>
            ¡Bienvenido,<span>Carlos</span>!
          </b>
        </h2>
        <p className="subtitle h5">
          <b>Gestión de restaurantes</b>
        </p>
        <CardListRest />
      </div>
    </div>
  );
};
