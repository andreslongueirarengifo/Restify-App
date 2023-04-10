import React, { useState, useContext } from "react";
import "animate.css";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";

import { Navbar } from "./components/Navbar/navbar.jsx";
import { Footer } from "./components/Footer/footer.jsx";
import { CategoryPresentation } from "./components/CategoryPresentation/CategoryPresentation.jsx";

export const Home = () => {
	const { store } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);
	const { webname } = useParams();
	const { colorback1, colorback2, color1, color2, font, phone_number, image_link, colorextra1, food_categories } =
		store.templateData;
	const phoneCall = `tel:(+34)${phone_number}`;
	const linkMenu = `/res/${webname}/menu`;

	const webBackgroundStyle = {
		backgroundColor: store.templateData ? colorback2 : "#ffffff",
	};

	const jumbotronBackgroundStyle = {
		backgroundImage: `url(${image_link})`,
		minWidth: "100%",
		height: "50vh",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const jumbotronTextBodyStyle = {
		color: color1,
		fontFamily: font,
		fontWeight: "bold",
		fontSize: "2rem",
		textShadow: "2px 2px 12px rgba(0, 0, 0, 0.9)",
	};

	const jumbotronButtonStyle = {
		backgroundColor: isHovered ? colorextra1 : colorback1,
		color: color2,
		fontFamily: font,
	};

	const bodyTextStyle = {
		color: color1,
		fontFamily: font,
	};

	return (
		<div className="container-fluid p-0" style={webBackgroundStyle}>
			<Navbar />
			<div className="container-fluid p-0" style={jumbotronBackgroundStyle}>
				<div id="jumbotron-body" className="d-flex justify-content-center align-items-center h-100">
					<div className="d-flex flex-column align-items-center m-4 p-0">
						<p className="text-center" style={jumbotronTextBodyStyle}>
							¡Llámanos para hacer una reserva!
						</p>
						<a
							className="btn d-flex justify-content-center gap-2 align-items-center h-100"
							style={jumbotronButtonStyle}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							href={phoneCall}
						>
							<p className="m-0 animate__animated animate__tada animate__infinite	infinite">📞</p>Llamar ahora
						</a>
					</div>
				</div>
				<div className="container-fluid p-0 d-flex justify-content-center" style={webBackgroundStyle}>
					<div className="col-6 d-flex justify-content-between mt-3 text-center">
						<h5 style={bodyTextStyle} className="fw-bold">
							Descubre en nuestro menu todos los platos de comida que tenemos para ofrecerte
						</h5>
					</div>
				</div>
				<div className="container-fluid p-0 d-flex justify-content-center" style={webBackgroundStyle}>
					<div className="col- d-flex justify-content-center mt-3">
						<ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
							{food_categories && food_categories.length > 0 ? (
								food_categories.map((category, index) => {
									return (
										<li key={index} style={{ display: "inline-block" }}>
											<CategoryPresentation
												categoryName={category.name}
												firstDishPhoto={category.dishes ? category.dishes[0].photo_url : ""}
												link={linkMenu}
											/>
										</li>
									);
								})
							) : (
								<li>
									<p
										style={{
											...bodyTextStyle,
											backgroundColor: `${colorback1}26`,
											padding: "0.5rem",
											borderRadius: "0.3rem",
										}}
									>
										¡Ops! Parece que aun no hay ninguna categoría
									</p>
								</li>
							)}
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};
