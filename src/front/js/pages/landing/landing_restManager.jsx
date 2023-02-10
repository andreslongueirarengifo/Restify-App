import React from "react";

//include your index.scss file into the bundle
import "../../../styles/landing.css";

//import components
import { NavbarRestManager } from "../../components/landing_components/landing_restManager_components/navbar_restManager_lp.jsx";

export const RestManagerLP = () => {
  return (
    <div className="container-fluid p-0">
      <NavbarRestManager />
    </div>
  );
};
