import React from "react";
import { NavbarCP } from "../../components/controlpanel_components/navbar_cp.jsx";

export const BrandingCP = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-2">
          <NavbarCP />
        </div>
        <div className="col-2">
          <h1>Branding Input bodys</h1>
        </div>
      </div>
    </div>
  );
};