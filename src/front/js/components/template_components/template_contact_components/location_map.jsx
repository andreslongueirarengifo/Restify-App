import React from "react";
import { useState, useEffect } from "react";

function Location_map(props) {
  const restaurantinfo = props.restaurantinfo;
  const styles = props.Styles;
  const Location = `https://maps.google.com/?q=${restaurantinfo.restaurant_coordinates}&z=14&t=m&output=embed`
  

  return (
    <>
      <p className="text-center pt-2 pb-1 fs-1 fw-bold" style={styles.color1}>
        Encuéntranos en
      </p>
      <div className="text-center pb-3">
        <iframe
          src={Location}
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </>
  );
}

export default Location_map;
