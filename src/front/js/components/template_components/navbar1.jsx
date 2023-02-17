import React from "react";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo_generico from "../../../img/logo_generico.jpeg"

function Navbar1(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  {console.log(styles.styleback1)}
  return (
    <>
            <Navbar collapseOnSelect expand="lg" style={ styles.back2 }>
              <Container>
                  <Navbar.Brand>
                    <img src={logo_generico} width="100px" className="pe-3 ps-2"></img>
                  <t className="fs-2" style={styles.color1}>{restaurantinfo.Restaurant_name}</t>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={styles.color1} />
                  <Navbar.Collapse id="responsive-navbar-nav" style={styles.color1}>
                      <Nav className="mx-auto" >
                          <Nav.Item className="">
                              <Nav.Link href="/test-home"><t className="fs-3 ps-1" style={styles.color1}>Home</t></Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link href="/test-menu"><t className="fs-3 ps-1" style={styles.color1}>Menu</t></Nav.Link>
                          </Nav.Item>
                          <Nav.Item >
                              <Nav.Link  href="/test-contact"><t className="fs-3 ps-1" style={styles.color1}>Contacto</t></Nav.Link>
                          </Nav.Item>
                      </Nav>
                      <Nav className="flex-column text-center">
                        <Nav.Item className="pe-2 fs-3" style={styles.color1}>
                          ¡Síguenos en redes!
                        </Nav.Item>
                        <Nav.Item>
                          <a href={restaurantinfo.Facebook_url} style={styles.color1}><Facebook className="mx-1" size="40" /></a>
                          <a href={restaurantinfo.Instagram_url} style={styles.color1}><Instagram className="mx-1" size="40" /></a>
                          <a href={restaurantinfo.Twitter_url} style={styles.color1}><Twitter className="mx-1" size="40" /></a>
                        </Nav.Item>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </>
          
  );
}

export default Navbar1;