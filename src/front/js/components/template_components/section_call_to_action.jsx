import React from "react";
import { Container, Button } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";
import restaurant_background from "../../../img/restaurant_background.jpg";

function Section_call_to_action(props) {
	const restaurantinfo = props.restaurantinfo;
	const styles = props.Styles;
	const phonecall = `tel:(+34)${restaurantinfo.Phone_number}`;
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
			<div style={{ background: `rgba(185, 155, 107, 0.5)` }}></div>
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="row text-center">
					<h3 style={styles.color1} className="fs-1 p-4 ">
						<t className="text-center">Llámanos para hacer tu reserva</t>
					</h3>
				</div>
				<div className="row">
					<Button style={styles.back2} className="col-md-4 col-6 mx-auto my-3 fs-2 border-0" href={phonecall}>
						<t style={styles.color1}>Haz tu reserva ahora</t> <Telephone style={styles.color1} />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Section_call_to_action;
