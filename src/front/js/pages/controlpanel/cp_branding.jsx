import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavbarCP } from "../../components/controlpanel_components/navbar_cp.jsx";

export const BrandingCP = () => {

  let currentRestaurant = useParams();

useEffect(() => {
  console.log("hola")
}, [])

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-2 p-0">
          <NavbarCP webName={currentRestaurant.webName}/>
        </div>
        <div className="col-10 p-0">
          <h1>Branding Input bodys</h1>
        </div>
      </div>
    </div>
  );
};