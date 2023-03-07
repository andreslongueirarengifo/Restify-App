import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const ListServicesLP = () =>{

    const services = [{
        service: "Página web",
        icon: <i className="fa-solid fa-table-columns"></i>,
        color: {backgroundColor: "#E1DFEA", color:"#352970"},
        content: "Crearás y mantendrás tu web ¡De forma rápida y sencilla!"
    },{
        service: "Branding",
        icon: <i className="fa-solid fa-palette"></i>,
        color: {backgroundColor: "#F6E9E0", color:"#BE6C31"},
        content: "¡Podrás añadir a la web estilos y colores a tu gusto fácil y rápido!"
    },{
        service: "Menu",
        icon: <i className="fa-regular fa-file-lines"></i>,
        color: {backgroundColor: "#DCE8DD", color:"#146117"},
        content: "No importa cual sea tu carta, la podrás crear sin problemas"
    }]


    return(
        <Row xs={1} md={3} className="g-4">
        {services.map((e, idx) => (
        <Col key={idx}>
          <Card className="text-center">
            <div className='service-list-icon m-auto mt-4' style={e.color}>
                {e.icon}
            </div>
            <Card.Body>
              <Card.Title className='mt-3'>{e.service}</Card.Title>
              <Card.Text className='mt-4'>
                {e.content}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    )
}