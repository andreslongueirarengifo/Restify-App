import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import food from "../../../../img/food.jpeg";
import Modal from 'react-bootstrap/Modal';

function Dish_card(props) {
  const dish = props.dish
  const index = props.index
  const styles = props.styles
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div key={index} className="col mx-auto p-5">
        <Card style={{ width: '', background: 'transparent'}} className="mx-auto border-0" onClick={handleShow}>
        <Card.Header className="border-0">
          <h5 style={styles.color1} className="fs-3">
            {dish.name}
          </h5></Card.Header>
      <Card.Img variant="top" src={food} className="rounded-circle"/>
      <Card.Body>
        <Card.Text style={styles.color1} className="fs-4">
          {dish.description}
        </Card.Text>
      </Card.Body>
    </Card>


    
    <Modal show={show} size="lg" onHide={handleClose} centered>
        <Modal.Header closeButton style={{background: 'rgba(185, 155, 107, 0.55)'}}>
          <Modal.Title style={styles.color2}>{dish.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: 'rgba(105, 130, 105, 0.55)'}}>
          <div className="row">
            <img className="col rounded-circle img-fluid" src={food}/>
            <div className="col text-center pt-3">
              <p className="fs-4" style={styles.color1} >{dish.description}</p>
              <p className="fs-3 float-end" style={styles.color1}>{dish.price}</p>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </div> 
   
    </>
  );
}

export default Dish_card;