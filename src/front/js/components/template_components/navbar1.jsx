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
  const restaurantname = props.restaurantname
  const linkhome = `/${restaurantname}/home`
  const linkmenu = `/${restaurantname}/menu`
  const linkcontact = `/${restaurantname}/contact`
  {console.log(styles.styleback1)}
  return (
    <>
            <Navbar collapseOnSelect expand="lg" style={ styles.back2 }>
              <Container className="text-center">
                  <Navbar.Brand>
                    <div className="row">
                      <div className="col">
                        <img src={restaurantinfo.logo_url} height="80vh" className=""/>
                      </div>
                      <div className="col">
                        <p className="fs-1 px-3 pt-4" style={styles.color1}>{restaurantinfo.restaurant_name}</p>
                      </div>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={styles.color1} />
                  <Navbar.Collapse id="responsive-navbar-nav" style={styles.color1}>
                      <Nav className="mx-auto" >
                          <Nav.Item className="">
                              <Nav.Link href={linkhome}>
                                <p className="fs-3 ps-1 text-center fw-bold" style={styles.color1}>
                                  Home
                                </p>
                              </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link href={linkmenu}>
                                <p className="fs-3 ps-1 text-center fw-bold" style={styles.color1}>
                                  Menu
                                </p>
                              </Nav.Link>
                          </Nav.Item>
                          <Nav.Item >
                              <Nav.Link  href={linkcontact}>
                                <p className="fs-3 ps-1 text-center fw-bold" style={styles.color1}>
                                  Contacto
                                </p>
                              </Nav.Link>
                          </Nav.Item>
                      </Nav>
                      <Nav className="flex-column text-center">
                        <Nav.Item className="pe-2 fs-3" style={styles.color1}>
                          ¡Síguenos en redes!
                        </Nav.Item>
                        <Nav.Item>
                          <a href={restaurantinfo.facebook_url} style={styles.color1}><Facebook className="mx-1" size="40" /></a>
                          <a href={restaurantinfo.instagram_url} style={styles.color1}><Instagram className="mx-1" size="40" /></a>
                          <a href={restaurantinfo.twitter_url} style={styles.color1}><Twitter className="mx-1" size="40" /></a>
                        </Nav.Item>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </>
          
  );
}

export default Navbar1;