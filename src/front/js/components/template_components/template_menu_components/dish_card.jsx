import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { hexToRgb } from "../section_call_to_action.jsx";

function Dish_card(props) {
	const dish = props.dish;
	const index = props.index;
	const styles = props.styles;
	const restaurantinfo = props.restaurantinfo;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div key={index} className="col-10 col-md-4 mx-auto p-4">
				<Card style={{ width: "", background: "transparent" }} className="mx-auto border-0" onClick={handleShow}>
					<Card.Header className="border-0">
						<h5 style={styles.color1} className="fs-3">
							{dish.name}
						</h5>
					</Card.Header>
					<Card.Img variant="top" src={dish.photo_url} className="rounded-circle" />
					<Card.Body>
						<Card.Text style={styles.color1} className="fs-4">
							{dish.description}
						</Card.Text>
					</Card.Body>
				</Card>

				<Modal show={show} size="lg" onHide={handleClose} centered>
					<Modal.Header closeButton style={{ background: `rgba(${hexToRgb(restaurantinfo.colorback1)}, 0.55)` }}>
						<Modal.Title style={styles.color2}>{dish.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{ background: `rgba(${hexToRgb(restaurantinfo.colorback2)}, 0.55)` }}>
						<div className="row">
							<img className="col-6" src={dish.photo_url} height="70%" />
							<div className="col-6 text-center pt-3">
								<p className="fs-4" style={styles.color1}>
									{dish.description}
								</p>
								<p className="fs-3 float-end" style={styles.color1}>
									{dish.price}€
								</p>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
}

export default Dish_card;
