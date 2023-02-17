import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
function Footer1(props) {
    const restaurantinfo = props.restaurantinfo
    const styles = props.Styles
    return (
      <div className="sticky-bottom">
        <div className="row gx-0" style={ styles.back2 }>
          <div className="col">
            <h3 style={styles.color1} className="text-center mt-5">{restaurantinfo.Restaurant_street}</h3>
            <h3 style={styles.color1} className="text-center mb-5">{restaurantinfo.Restaurant_city}</h3>
          </div>
          <div className="col">
            <Nav defaultActiveKey="/home" className="flex-column text-center">
            <Nav.Item className="mt-3">
                  <Nav.Link href="/test-home"><t className="fs-3" style={styles.color1}>Home</t></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href="/test-menu"><t className="fs-3" style={styles.color1}>Menu</t></Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-3">
                  <Nav.Link  href="/test-contact"><t className="fs-3" style={styles.color1}>Contacto</t></Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col">
            <Nav className="flex-column text-center mt-5">
              <Nav.Item className="text-center fs-3 mb-2" style={styles.color1}>
                ¡Síguenos en redes!
              </Nav.Item>
              <Nav.Item>
                <a href={restaurantinfo.Facebook_url} style={styles.color1}><Facebook className="mx-1" size="30" /></a>
                <a href={restaurantinfo.Instagram_url} style={styles.color1}><Instagram className="mx-1" size="30" /></a>
                <a href={restaurantinfo.Twitter_url} style={styles.color1}><Twitter className="mx-1" size="30" /></a>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div> 
    );
  }
  
  export default Footer1;