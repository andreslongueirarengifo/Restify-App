import React from "react";

//import components
import { NavbarHome } from "../../components/landing_components/landing_home_components/navbar_home_lp.jsx";
import { RegisterBody } from "../../components/landing_components/landing_createRestaurant_components/register_body.jsx";
import { Footer } from "../../components/landing_components/footer.jsx";

export const CreateRestaurantLP = () => {
  return(
    <div className="container-fluid p-0">
      <NavbarHome />
      <RegisterBody />
      <Footer />
    </div>
  );
};
