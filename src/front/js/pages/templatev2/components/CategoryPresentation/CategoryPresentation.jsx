import React, { useContext, useState } from "react";
import "animate.css";
import { Context } from "../../../../store/appContext";

export const CategoryPresentation = (props) => {
	const { store, actions } = useContext(Context);
	const {
		colorback1,
        colorback2,
		color1,
		font,
		colorextra1,
	} = store.templateData;
	const { backgroundColor1, colorExtra, fontFamily, categoryName, firstDishPhoto, link } = props;
	const [isHovered, setIsHovered] = useState(false);

	const imageStyle = {
		width: "13rem",
		height: "13rem",
		objectFit: "cover",
        borderRadius: "50%"
	};

	const containerStyle = {
		width: "15rem",
		height: "15rem",
		display: "flex",
        justifyContent: "center"
	};

	const categoryNameStyle = {
		color: color1,
		fontFamily: font,
		fontWeight: "bold",
	};

	return (
		<div className="d-flex flex-column gap-2" width="10rem">
			<p className="m-0" style={categoryNameStyle}>{categoryName}</p>
			<a href={link} style={containerStyle}>
				<img src={firstDishPhoto} alt="dish" style={imageStyle} />
			</a>
		</div>
	);
};
