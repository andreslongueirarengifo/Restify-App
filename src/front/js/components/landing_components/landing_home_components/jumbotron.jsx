import React from "react";
import RegisterModal from "./register_modal.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const JumbotronLP = () => {
    return(

            <Row>
                <Col className="d-flex align-items-center">
                    <div className="jumbotron">
                        <h1>La mejor plataforma para <span style={{color: ""}}>tu restaurante</span></h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <RegisterModal/>
                        </p>
                    </div>
                </Col>
                <Col>
                    <img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png" width={"100%"} />
                </Col>
            </Row>
        
    );
}

export default JumbotronLP;