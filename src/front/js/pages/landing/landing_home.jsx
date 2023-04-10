import React from "react";

//include your index.scss file into the bundle
import "../../../styles/landing.css";

//import components
import { NavbarHome } from "../../components/landing_components/landing_home_components/navbar_home_lp.jsx";
import JumbotronLP from "../../components/landing_components/landing_home_components/jumbotron.jsx";
import { Footer } from "../../components/landing_components/footer.jsx";
import { ServicesLP } from "../../components/landing_components/landing_home_components/landing_services/landing_services.jsx";
import { AboutUsLP } from "../../components/landing_components/landing_home_components/aboutus_lp.jsx";

export const HomeLP = () => {
	return (
		<div className="container-fluid p-0">
			<NavbarHome />

			<div style={{ backgroundColor: "white" }}>
				<JumbotronLP />
			</div>

			<ServicesLP />

			<div className="py-4" style={{ backgroundColor: "white" }}>
				<AboutUsLP />
			</div>

			<Footer />
		</div>
	);
};
