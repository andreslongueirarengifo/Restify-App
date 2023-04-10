import React from "react";
import RegisterModal from "./register_modal.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImgJumbotron from "../../../../img/img_jumbotron.png";

const JumbotronLP = () => {
	return (
		<Row className="pt-4 pb-2 col-8 mx-auto">
			<Col className="d-flex align-items-center p-0">
				<div className="jumbotron">
					<h1>
						La mejor plataforma para <span style={{ color: "#352970" }}>tu restaurante</span>
					</h1>
					<p>
						¡Crea tu restaurante en pocos pasos! Estamos para ayudarte a crecer y mejorar tu negocio con una increible
						web quetú podrás crear 😎
					</p>
					<p>
						<RegisterModal />
					</p>
				</div>
			</Col>
			<Col className="d-flex justify-content-center d-none d-md-block">
				<img src={ImgJumbotron} alt="" />
			</Col>
		</Row>
	);
};

export default JumbotronLP;
