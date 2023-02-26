import React from "react";

function Section_welcome_menu(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  function hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }
  
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