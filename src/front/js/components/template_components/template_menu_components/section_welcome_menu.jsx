import React from "react";
import { hexToRgb } from "../section_call_to_action.jsx";

function Section_welcome_menu(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  
  return (
    <div className="row justify-content-md-center"
    style={{
      background: `rgba(${hexToRgb(restaurantinfo.colorback1)}, 0.55)`,
      width: '100%',
      height: '20vh',
      boxSizing: 'content-box ',
      }}>
         <div className="position-relative pt-2">
          <div className="position-absolute top-50 start-50 translate-middle">
            <p className="fs-1 text-center fw-bold" style={styles.color1}>
              ¡Disfruta de nuestro menú!
            </p>
          </div>
        </div>
    </div>   
  );
}

export default Section_welcome_menu;