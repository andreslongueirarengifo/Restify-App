import React, { useState, useContext } from "react";
import "animate.css";
import { Context } from "../../store/appContext";

import { Navbar } from "./components/Navbar/navbar.jsx";
import { Footer } from "./components/Footer/footer.jsx";

export const Contact = () => {
	const { store } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);
	const {
		colorback1,
		colorback2,
		color1,
		color2,
		font,
		phone_number,
		image_link,
		colorextra1,
		restaurant_city,
		restaurant_street,
		restaurant_coordinates,
	} = store.templateData;
	const phoneCall = `tel:(+34)${phone_number}`;
	const location = `https://maps.google.com/?q=${restaurant_coordinates}&z=14&t=m&output=embed`;

	const webBackgroundStyle = {
		backgroundColor: store.templateData ? colorback2 : "#ffffff",
	};

	const jumbotronBackgroundStyle = {
		backgroundImage: `url(${image_link})`,
		minWidth: "100%",
		height: "30vh",
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

	const jumbotronButtonStyle = {
		backgroundColor: isHovered ? colorextra1 : colorback1,
		color: color2,
		fontFamily: font,
	};

	const bodyTextStyle = {
		color: color1,
		fontFamily: font,
	};

	const mapStyle = {
		width: "100%",
		height: "25rem",
		border: "0"
	}

	return (
		<div className="container-fluid p-0" style={webBackgroundStyle}>
			<Navbar />
			<div className="container-fluid p-0 d-flex justify-content-center">
				<div className="col-8 d-flex flex-column mt-3">
					<p style={bodyTextStyle}>Descubre donde estamos ubicados y cual es nuestro contacto</p>
					<p style={bodyTextStyle}>{`Dirección: ${restaurant_street ? restaurant_street : ""}, ${
						restaurant_city ? restaurant_city : ""
					}`}</p>
					<p style={bodyTextStyle}>{`Teléfono: ${phone_number ? phone_number : ""}`}</p>
				</div>
			</div>
			<div className="col-8 mx-auto mb-3">
				<iframe
					src={location}
					style={mapStyle}
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
				/>
			</div>
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
				<Footer />
			</div>
		</div>
	);
};
