import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { useParams, Link } from "react-router-dom";

export const Footer = () => {
	const { store } = useContext(Context);
	const { webname } = useParams();
	const linkHome = `/res/${webname}`;
	const linkMenu = `/res/${webname}/menu`;
	const linkContact = `/res/${webname}/contact`;
	const { colorback1,colorback2, restaurant_street, restaurant_city,color1, color2, font, twitter_url, facebook_url, instagram_url } =
		store.templateData;

	const footerBackgroundStyle = {
		backgroundColor: colorback2,
		height: "9rem",
	};

	const menuItemsStyle = {
		color: color1,
		fontFamily: font,
		margin: "0rem",
		transition: "background-color 0.3s ease-out",
	};

	const socialMediaIconStyle = {
		color: color2,
	};

	return (
		<div className="d-none d-md-block">
			<div className="d-flex justify-content-center container-fluid p-0" style={footerBackgroundStyle}>
				<div className="col-8 mt-3 d-flex justify-content-between">
					<div className="col-4 d-flex flex-column justify-content-star">
						<p style={menuItemsStyle}>Encuéntranos en:</p>
						<p style={menuItemsStyle}>{`${restaurant_street}, ${restaurant_city}`}</p>
					</div>
					<div className="col-4 d-flex flex-column">
						<Link to={linkHome} style={{ textDecoration: "none" }}>
							<p className="template-menu-item text-center" style={menuItemsStyle}>
								Inicio
							</p>
						</Link>
						<Link to={linkMenu} style={{ textDecoration: "none" }}>
							<p className="template-menu-item text-center" style={menuItemsStyle}>
								Menu
							</p>
						</Link>
						<Link to={linkContact} style={{ textDecoration: "none" }}>
							<p className="template-menu-item text-center" style={menuItemsStyle}>
								Contacto
							</p>
						</Link>
					</div>
					<div className="col-4 d-flex flex-column">
						<p className="text-end" style={menuItemsStyle}>
							Síguenos en:
						</p>
						<div className="d-flex gap-1 justify-content-end">
							<Link to={twitter_url} style={{ textDecoration: "none" }}>
								<i className="fa-brands fa-twitter template-menu-item" style={socialMediaIconStyle}></i>
							</Link>
							<Link to={instagram_url} style={{ textDecoration: "none" }}>
								<i className="fa-brands fa-instagram template-menu-item" style={socialMediaIconStyle}></i>
							</Link>
							<Link to={facebook_url} style={{ textDecoration: "none" }}>
								<i className="fa-brands fa-facebook template-menu-item" style={socialMediaIconStyle}></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
