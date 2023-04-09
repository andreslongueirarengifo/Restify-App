import React, { useContext } from "react";
import "animate.css";
import { Context } from "../../store/appContext";

import { Navbar } from "./components/Navbar/navbar.jsx";
import { Footer } from "./components/Footer/footer.jsx";
import { FoodCategoryAccordion } from "./components/FoodCategoryAccordion/FoodCategoryAccordion.jsx";

export const Menu = () => {
	const { store } = useContext(Context);
	const { colorback1, colorback2, color1, color2, font, image_link, food_categories } = store.templateData;

	const webBackgroundStyle = {
		backgroundColor: store.templateData ? colorback2 : "#ffffff",
	};

	const jumbotronBackgroundStyle = {
		backgroundImage: `url(${image_link})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const jumbotronTextBodyStyle = {
		color: color2,
		fontFamily: font,
		fontWeight: "bold",
		fontSize: "2rem",
		textShadow: "2px 2px 12px rgba(0, 0, 0, 0.9)",
	};

	const bodyTextStyle = {
		color: color1,
		fontFamily: font,
	};

	const tooltipStyle = {
		padding: "0.5rem",
		backgroundColor: colorback2,
		borderRadius: "0.5rem",
		color: color1,
		fontFamily: font,
	};

	return (
		<div className="container-fluid p-0" style={webBackgroundStyle}>
			<Navbar />
			<div className="container-fluid p-0" style={jumbotronBackgroundStyle}>
				<div id="jumbotron-body" className="d-flex justify-content-center align-items-center">
					<div className="d-flex flex-column align-items-center m-4 p-0">
						<p className="text-center" style={jumbotronTextBodyStyle}>
							¡Disfruta de nuestro menú!
						</p>
						<p style={tooltipStyle}>Toca cada plato para obtener más detalles</p>
					</div>
				</div>
				{food_categories &&
					food_categories.map((category, index) => {
						return <FoodCategoryAccordion key={index} category={category.name} dishList={category.dishes} />;
					})}
				<Footer />
			</div>
		</div>
	);
};
