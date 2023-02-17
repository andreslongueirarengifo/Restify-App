import React from "react";
import { useState, useEffect } from "react";

function Location_map(props) {
  const restaurantinfo = props.restaurantinfo;
  const styles = props.Styles;
  const [Coordenates, setCoordenates] = useState("41.387279,2.169028");
  const [Location, setLocation] = useState(
    `https://maps.google.com/?q=${Coordenates}&z=14&t=m&output=embed`
  );
  const [geocodingData, setGeocodingData] = useState(null);
  const searchQuery = `${restaurantinfo.Restaurant_street} ${restaurantinfo.Restaurant_city}`;
  const querysearch = JSON.stringify(searchQuery);
  {
    console.log(querysearch);
  }

  useEffect(() => {
    const url = "http://api.positionstack.com/v1/forward";
    const params = {
      access_key: "2cf36a4863b2e5d59892ba8631a3d81f",
      query: `${restaurantinfo.Restaurant_street} ${restaurantinfo.Restaurant_city}`,
    };

    const queryString = new URLSearchParams(params).toString();
    fetch(`${url}?${queryString}`,{method: 'GET', headers: {
      'Content-Type': 'application/json'
    },mode: 'cors'})
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2 className="text-center pt-5 pb-1" style={styles.color1}>
        Encuéntranos en
      </h2>
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
