import React, { useEffect } from "react";
import { useState } from "react";
import Footer1 from "../../components/template_components/footer1.jsx";
import Navbar1 from "../../components/template_components/navbar1.jsx";
import Section_cagetories from "../../components/template_components/template_menu_components/section_categories.jsx";
import Section_welcome_menu from "../../components/template_components/template_menu_components/section_welcome_menu.jsx";
import restaurant_background from "../../../img/restaurant_background.jpg";
import { useParams } from "react-router-dom";

export const MenuTEMP = () => {
	const params = useParams();
	let domain = "https://sample-service-name-v7xh.onrender.com";
	let apirequesturl = `${domain}/api/template_data/${params.webname}`;
	const [Restaurantinfo, setRestaurantinfo] = useState({});
	const [Styles, setStyles] = useState({
		back1: {},
		back2: {},
		color1: {},
		color2: {},
		colorextra1: {},
		font: {},
	});
	{
		console.log(apirequesturl);
	}
	useEffect(() => {
		fetch(apirequesturl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setStyles({
					back1: { backgroundColor: `${data.result.colorback1}` },
					back2: { backgroundColor: `${data.result.colorback2}` },
					color1: { color: `${data.result.color1}` },
					color2: { color: `${data.result.color2}` },
					colorextra1: { color: `${data.result.colorextra1}` },
					font: { fontFamily: `${data.result.font}` },
				});
			});
	}, []);
	useEffect(() => {
		fetch(apirequesturl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setRestaurantinfo(data.result);
			});
	}, []);
	return (
		<>
			{Object.keys(Restaurantinfo).length > 0 && (
				<div
					className="row position-relative gx-0"
					style={{
						backgroundImage: `url(${restaurant_background})`,
						minWidth: "100%",
						backgroundSize: "cover",
						objectPosition: "bottom",
					}}
				>
					<style>
						{`body {
        max-width: 100%;
        overflow-x: hidden;
      }`}
					</style>

					<Navbar1 restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />
					<Section_welcome_menu restaurantinfo={Restaurantinfo} Styles={Styles} />
					<Section_cagetories restaurantinfo={Restaurantinfo} Styles={Styles} />
					<Footer1 restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />
				</div>
			)}
		</>
	);
};
