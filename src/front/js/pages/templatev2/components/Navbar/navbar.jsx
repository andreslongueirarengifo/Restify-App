import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../../../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const {
		colorback1,
		colorback2,
		logo_url,
		restaurant_name,
		color1,
		color2,
		font,
		twitter_url,
		facebook_url,
		instagram_url,
		phone_number,
	} = store.templateData;
	const { webname } = useParams();
	const linkHome = `/res/${webname}`;
	const linkMenu = `/res/${webname}/menu`;
	const linkContact = `/res/${webname}/contact`;

	useEffect(() => {
		actions.getRestaurantTemplateData(webname);
	}, []);

	const navbarStyle = {
		backgroundColor: colorback1,
		height: "3rem",
	};

	const logoStyle = {
		height: "3rem",
	};

	const defaultIconStyle = {
		color: color1,
		lineHeight: "0",
		margin: "0",
	};

	const bodyTextStyle = {
		color: color1,
		fontFamily: font,
		lineHeight: "1rem",
		margin: "0rem",
	};

	const brandNameStyle = {
		fontFamily: font,
		color: colorback1,
		fontSize: "2rem",
		lineHeight: "0",
		margin: "0",
		fontWeight: "bold",
	};

	const headerStyle = {
		backgroundColor: colorback2,
		height: "5rem",
	};

	const menuItemsStyle = {
		color: color2,
		fontFamily: font,
		margin: "0rem",
		transition: "background-color 0.3s ease-out",
	};

	const socialMediaIconStyle = {
		color: color2,
	};

	return (
		<>
			<div className="container-fluid p-0 d-flex justify-content-center" style={headerStyle}>
				<div className="col-8 d-flex justify-content-between">
					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<img src={logo_url} alt="logo" style={logoStyle} />
						<h1 style={brandNameStyle}>{restaurant_name}</h1>
					</div>
					<div className="d-none d-md-block">
						<div className="d-flex align-items-center gap-2 align-items-center h-100">
							<i className="fa-solid fa-phone" style={defaultIconStyle}></i>
							<p style={bodyTextStyle}>{phone_number}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0 d-flex justify-content-center" style={navbarStyle}>
				<div className="col-8 m-auto d-flex justify-content-between">
					<div className="justify-content-center" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<Link to={linkHome} style={{ textDecoration: "none" }}>
							<p className="template-menu-item" style={menuItemsStyle}>
								Inicio
							</p>
						</Link>
						<Link to={linkMenu} style={{ textDecoration: "none" }}>
							<p className="template-menu-item" style={menuItemsStyle}>
								Menu
							</p>
						</Link>
						<Link to={linkContact} style={{ textDecoration: "none" }}>
							<p className="template-menu-item" style={menuItemsStyle}>
								Contacto
							</p>
						</Link>
					</div>
					<div className="d-none d-md-block">
						<div className="d-flex align-items-center gap-2 align-items-center h-100">
							<p style={menuItemsStyle}>¡Siguenos en redes!</p>
							<div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
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
		</>
	);
};
