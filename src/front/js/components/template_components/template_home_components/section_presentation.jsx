import React from "react";
import restaurant_background from "../../../../img/restaurant_background.jpg";
import { Container } from "react-bootstrap";
import { hexToRgb } from "../section_call_to_action.jsx";

function Section_presentation(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  return (  
    <div className="row position-relative gx-0" 
    style={{
      backgroundImage: `url(${restaurantinfo.image_link})`,
      minWidth: '100%',
      height: '40vh',
      backgroundSize: 'cover',
      objectPosition: 'bottom',
    }}>
    <div style={{background:`rgba(${hexToRgb(restaurantinfo.colorback1)}, 0.5)`}}>
    <div className="position-absolute bottom-0 start-50 translate-middle-x"> 
        <div >
            <h1 className="text-center py-5 fw-bold" style={styles.color1}>
              Bienvenido a <br/>
              {restaurantinfo.restaurant_name}
            </h1>
        </div> 
    </div>
    </div>   
    </div>
    
  );
}

export default Section_presentation;
