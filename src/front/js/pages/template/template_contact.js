import React from "react";
import { useState, useEffect } from "react";
import Footer1 from "../../components/template_components/footer1.jsx";
import Navbar1 from "../../components/template_components/navbar1.jsx";
import Location_map from "../../components/template_components/template_contact_components/location_map.jsx";
import Section_call_to_action from "../../components/template_components/section_call_to_action.jsx";
import { useParams } from "react-router-dom";

export const ContactTEMP = () => {
  const params = useParams()
  let domain = "https://sample-service-name-tv81.onrender.com";
  let apirequesturl=`${domain}/api/template_data/${params.webname}`
  const [Restaurantinfo, setRestaurantinfo] = useState ({})
  const [Styles, setStyles] = useState({
    back1: {},
    back2: {},
    color1: {},
    color2: {},
    colorextra1: {},
    font: {},
  });
  useEffect(() => {
    fetch(apirequesturl)
    .then(response => response.json())
    .then(data => {
      setStyles({
        back1: { backgroundColor: `${data.result.colorback1}` },
        back2: { backgroundColor: `${data.result.colorback2}` },
        color1: { color: `${data.result.color1}` },
        color2: { color: `${data.result.color2}` },
        colorextra1: { color: `${data.result.colorextra1}` },
        font: { fontFamily: `${data.result.font}` },
      })
    })
  }, []);
  useEffect(() => {
    fetch(apirequesturl)
    .then(response => response.json())
    .then(data => {
      setRestaurantinfo(data.result)
    })
  }, []);
  return (
    <>
      {Object.keys(Restaurantinfo).length > 0 && (
        <div style={Styles.back1}>
          <style>
        {
          `body {
            max-width: 100%;
            overflow-x: hidden;
            }`}
					</style>
					<Navbar1 restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />
					<Location_map restaurantinfo={Restaurantinfo} Styles={Styles} />
					<Section_call_to_action restaurantinfo={Restaurantinfo} Styles={Styles} />
					<Footer1 restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />
				</div>
			)}
		</>
	);
};
