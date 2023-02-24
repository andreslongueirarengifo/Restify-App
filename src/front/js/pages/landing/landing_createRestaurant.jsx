import React, {useState, useEffect} from "react";

//import components
import { NavbarRestManager } from "../../components/landing_components/landing_restManager_components/navbar_restManager_lp.jsx";
import { RegisterBody } from "../../components/landing_components/landing_createRestaurant_components/register_body.jsx";
import { getCurrentUser } from "../../service/user_service.js";

export const CreateRestaurantLP = () => {

  const [currentUserData, setCurrentUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentUserData = async () => {
      const data = await getCurrentUser();
      setCurrentUserData(data.result)
      setIsLoading(false);
    }
    getCurrentUserData();
  },[])

  return(
    <div className="container-fluid p-0">
      <NavbarRestManager />
      <RegisterBody />
    </div>
  );
};
