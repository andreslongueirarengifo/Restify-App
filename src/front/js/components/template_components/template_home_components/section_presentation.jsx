import React from "react";
import restaurant_background from "../../../../img/restaurant_background.jpg";
import { Container } from "react-bootstrap";
function Section_presentation(props) {
	const restaurantinfo = props.restaurantinfo;
	const styles = props.Styles;
	return (
		<div
			className="row position-relative gx-0"
			style={{
				backgroundImage: `url(${restaurant_background})`,
				minWidth: "100%",
				height: "40vh",
				backgroundSize: "cover",
				objectPosition: "bottom",
			}}
		>
			<div style={{ background: `rgba(185, 155, 107, 0.5)` }}>
				<div className="position-absolute bottom-0 start-50 translate-middle-x">
					<div>
						<h1 className="text-center pb-5" style={styles.color1}>
							Bienvenido al restaurante {restaurantinfo.Restaurant_name}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section_presentation;
