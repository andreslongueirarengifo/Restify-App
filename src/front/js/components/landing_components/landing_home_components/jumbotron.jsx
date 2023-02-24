import React from "react";
import RegisterModal from "./register_modal.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImgJumbotron from '../../../../img/img_jumbotron.png'


const JumbotronLP = () => {
    return(

            <Row className="mt-5">
                <Col className="d-flex align-items-center">
                    <div className="jumbotron">
                        <h1 style={{fontSize:"3.7rem"}}>La mejor plataforma para <span style={{color: "#352970"}}>tu restaurante</span></h1>
                        <p style={{fontSize:"1.25rem"}}>
                            ¡Crea tu restaurante en pocos pasos! Estamos para ayudarte a crecer y mejorar tu negocio
                            con una increible web que <b>tú podrás crear 😎</b>
                        </p>
                        <p>
                            <RegisterModal/>
                        </p>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center">
                    <img src={ImgJumbotron} alt="" />
                </Col>
            </Row>
        
    );
}

export default JumbotronLP;