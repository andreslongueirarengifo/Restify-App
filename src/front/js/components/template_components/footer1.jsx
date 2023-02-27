import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
function Footer1(props) {
    const restaurantinfo = props.restaurantinfo
    const styles = props.Styles
    const restaurantname = props.restaurantname
    const linkhome = `/${restaurantname}/home`
    const linkmenu = `/${restaurantname}/menu`
    const linkcontact = `/${restaurantname}/contact`
    return (
      <div className="sticky-bottom">
        <div className="row justify-content-center  pt-5" style={ styles.back2 }>
          <div className="col-10 col-md-4 text-center">
            <p style={styles.color1} className="fs-2">
              Visítanos en: <br/>
              <span>
                {restaurantinfo.restaurant_street}, {restaurantinfo.restaurant_city}
              </span>
            </p>
            <h3 style={styles.color1} className="text-center"></h3>
            <h3 style={styles.color1} className="text-center"></h3>
          </div>
          <div className="col-10 col-md-4">
            <Nav defaultActiveKey="/home" className="flex-column text-center">
            <Nav.Item>
                  <Nav.Link href={linkhome}><p className="fs-2 fw-bold" style={styles.color1}>Home</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href={linkmenu}><p className="fs-2 fw-bold" style={styles.color1}>Menu</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link  href={linkcontact}><p className="fs-2 fw-bold" style={styles.color1}>Contacto</p></Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className=" col-10 col-md-4">
            <Nav className="flex-column text-center pb-2">
              <Nav.Item className="text-center fs-1" style={styles.color1}>
                ¡Síguenos en redes!
              </Nav.Item>
              <Nav.Item>
                <a href={restaurantinfo.facebook_url} style={styles.color1}><Facebook className="px-1" size="7vh" /></a>
                <a href={restaurantinfo.instagram_url} style={styles.color1}><Instagram className="px-1" size="7vh" /></a>
                <a href={restaurantinfo.twitter_url} style={styles.color1}><Twitter className="px-1" size="7vh" /></a>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div> 
    );
  }
  
  export default Footer1;