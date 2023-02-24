import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ContentInputBody } from "../../components/controlpanel_components/cp_home_components/contentInputBody.jsx";
import { NavbarCP } from "../../components/controlpanel_components/navbar_cp.jsx";
import { TopBarCP } from "../../components/controlpanel_components/topbar_cp.jsx";
import { Context } from "../../store/appContext.js";

export const HomeCP = () => {

  const { store, actions } = useContext(Context);

  let currentRestaurant = useParams();

  useEffect(() => {
    actions.setCurrentRestaurantName(currentRestaurant.webName)
  }, [])

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-2 p-0">
          <NavbarCP webName={currentRestaurant.webName}/>
        </div>
        <div className="col-10 p-0">
          <TopBarCP />
          <ContentInputBody webName={currentRestaurant.webName} />
        </div>
      </div>
    </div>
  );
};
