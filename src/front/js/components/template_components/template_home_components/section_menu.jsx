import React from "react";
import image_category1 from "../../../../img/food.jpeg";
import image_category2 from "../../../../img/entrantes.jpeg";
import image_category3 from "../../../../img/dessert.jpeg";
import { Container } from "react-bootstrap";

function Section_menu(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  {console.log(restaurantinfo.Food_Category_1)}
  return (
    
    <div style={styles.back2} className="pt-4">
      <Container>
        <h3 style={styles.color1} className="text-center mb-4">Menú</h3>
        <div className="row pb-3">
          <div className="col text-center">
            <h4 style={styles.color1}>{restaurantinfo.Food_categories[0].Name}</h4>
            <img src={image_category1} width="275px" height="275px" className="p-4 mt-2"></img>
          </div>       
          <div className="col text-center">
            <h4 style={styles.color1}>{restaurantinfo.Food_categories[1].Name}</h4>
            <img src={image_category2} width="275px" height="275px" className="p-4 mt-2"></img>
          </div>      
          <div className="col text-center">
            <h4 style={styles.color1}>{restaurantinfo.Food_categories[2].Name}</h4>
            <img src={image_category3} width="275px" height="275px" className="p-4 mt-2"></img>
          </div>
        </div>
      </Container>
    </div>
       
  );
}

export default Section_menu;