import React from "react";

function Section_welcome_menu(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  return (
    <div className="row text-center"
    style={{
      //background: `#${restaurantinfo.ColorBack1}`,
      background: 'rgba(185, 155, 107, 0.55)',
      //opacity: '0.55',
      width: '100%',
      height: '',
      boxSizing: 'content-box ',
      }}>
         <div className="py-5">
          <t className="fs-1" style={styles.color1}>
            ¡Disfruta de nuestro menú!
          </t>
          </div>
        
    </div>   
  );
}

export default Section_welcome_menu;