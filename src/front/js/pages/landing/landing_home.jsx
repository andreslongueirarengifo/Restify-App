import React from "react";

//include your index.scss file into the bundle
import "../../../styles/landing.css";

//import components
import { NavbarHome } from "../../components/landing_components/landing_home_components/navbar_home_lp.jsx";
import Jumbotron from "../../components/landing_components/landing_home_components/jumbotron.jsx";


export const HomeLP = () => {
  return (
    <div className="container-fluid p-0">
      <NavbarHome/>
      <div className="container-sm">
        <Jumbotron/>
      </div>

    </div>
  );
};
