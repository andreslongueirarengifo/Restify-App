import React from "react";
import { Link } from "react-router-dom";

function Section_menu(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  const restaurantname = props.restaurantname
  const linkmenu = `/res/${restaurantname}/menu`
  return (
    <div style={styles.back2} className="pt-4">
      <div className="row py-3">
        <div className="col-12">
          <h3 style={styles.color1} className="text-center">Menú</h3>
        </div>
      </div>
      <div className="row justify-content-center pb-5">
          <div className="col-12 col-lg-4 col-sm-8  text-center">
            <h4 className="" style={styles.color1}>{restaurantinfo.food_categories[0].name}</h4>
            <Link to={linkmenu}>
              <img className="" src={restaurantinfo.food_categories[0].dishes[0].photo_url} width="80%" height="80%"/>
            </Link>
          </div>       
          <div className="col-12 col-lg-4 col-sm-8  text-center">
            <h4 className="" style={styles.color1}>{restaurantinfo.food_categories[1].name}</h4>
            <Link to={linkmenu}>
              <img className="" src={restaurantinfo.food_categories[1].dishes[0].photo_url} width="80%" height="80%"/>
            </Link>
          </div>      
          <div className="col-12 col-lg-4 col-sm-8  text-center">
            <h4 className="" style={styles.color1}>{restaurantinfo.food_categories[2].name}</h4>
            <Link to={linkmenu}>
              <img className="" src={restaurantinfo.food_categories[2].dishes[0].photo_url} width="80%" height="80%"/>
            </Link>
          </div>
      </div>
    </div>
       
  );
}

export default Section_menu;