import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_generico from "../../../img/logo_generico.jpeg"

function Navbar1(props) {
  const restaurantinfo = props.restaurantinfo
  return (
    <>


            <Navbar collapseOnSelect expand="lg" className='styleback2'>
              <Container>
                  <Navbar.Brand>
                    <img src={logo_generico} width="100px" className='me-3'></img>
                  <t className="stylecolor1 fs-2">{restaurantinfo.Restaurant_name}</t>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="m-auto stylecolor1">
                          <Nav.Item className=''>
                              <Nav.Link href="#features"><t className="fs-3 stylecolor1">Home</t></Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link href="#features"><t className="fs-3 stylecolor1">Menu</t></Nav.Link>
                          </Nav.Item>
                          <Nav.Item >
                              <Nav.Link  href="#features"><t className="fs-3 stylecolor1">Contacto</t></Nav.Link>
                          </Nav.Item>
                      </Nav>
                      <Nav className='flex-column text-center'>
                        <Nav.Item className='stylecolor1 my-2 fs-3'>
                          ¡Síguenos en redes!
                        </Nav.Item>
                        <Nav.Item>
                          <a href={restaurantinfo.Facebook_url} className="stylecolor1"><Facebook className='mx-1' size="40" /></a>
                          <a href={restaurantinfo.Facebook_url} className="stylecolor1"><Instagram className='mx-1' size="40" /></a>
                          <a href={restaurantinfo.Facebook_url} className="stylecolor1"><Twitter className='mx-1' size="40" /></a>
                        </Nav.Item>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </>
          
  );
}

export default Navbar1;