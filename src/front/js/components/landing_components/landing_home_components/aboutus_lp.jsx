import React from "react";

import HandAboutUs from "../../../../img/hand_aboutus.png";

export const AboutUsLP = () => {
	return (
		<div className="col-8 mx-auto">
			<h4 style={{ color: "#352970" }}>
				Sobre nosotros
			</h4>
			<h3>
				¿Quienes somos?
			</h3>

			<div className="row mt-5">
				<div className="col-lg-5 d-flex justify-content-center">
					<img src={HandAboutUs} alt="" style={{ width: "100%" }} />
				</div>
				<div className="col-lg-6 justify">
					<p>
						Somos una startup creada recientemente que se enfoca en <b>ayudar a restaurantes</b> de todo el mundo a{" "}
						<b>crear sitios web</b> elegantes, funcionales y automatizados.
					</p>
					<p>
						En Restify, nos enfocamos en crear sitios web hermosos que sean fáciles de usar y que funcionen sin
						problemas. Nos aseguramos de que tu sitio web esté <b>optimizado</b> para motores de búsqueda y dispositivos
						móviles, para que los clientes puedan encontrarte en línea y acceder a tu menú desde cualquier lugar.🌎
					</p>
					<p>
						En definitiva, en <b style={{ color: "#352970" }}>Restify</b>, creemos que cada restaurante merece un sitio
						web excepcional y estamos comprometidos en ayudarte a crearlo. Si tienes alguna pregunta, no dudes en
						contactarnos, <b style={{ color: "#025d8b" }}>¡estamos aquí para ayudarte!</b>
					</p>
				</div>
			</div>
		</div>
	);
};
