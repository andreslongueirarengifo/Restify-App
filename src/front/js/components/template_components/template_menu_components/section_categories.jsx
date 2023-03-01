import React from "react";
import Dish_card from "./dish_card.jsx"

import { hexToRgb } from "../section_call_to_action.jsx";

function Section_cagetories(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  const categories = restaurantinfo.food_categories
  const sectionstyle = {
    first: {
      back: {background: `rgba(${hexToRgb(restaurantinfo.colorback1)}, 0.55)`},
      color: {color: `${restaurantinfo.color1}` }
    },
    second: {
      back: {background: `rgba(${hexToRgb(restaurantinfo.colorback2)}, 0.55)`},
      color: {color: `${restaurantinfo.color2}` }
    },
  }

  return (
    <div>
    {categories.map ((category, index) => (
      index % 2 ?
      (<div key={index} 
      className="text-center"
      style={sectionstyle.first.back}
      >
            <h2 className="fs-2 pt-2" style={styles.color1}>{category.name}</h2>
            <div className="row">
            {category.dishes.map ((dish, index) => 
                <Dish_card dish={dish} index={index} styles={styles} restaurantinfo={restaurantinfo}/>
            )}
            </div>
      </div> ) : (
        <div key={index} 
        className="text-center"
        style={sectionstyle.second.back}
        >
              <h2 className="fs-2 pt-2" style={styles.color1}>{category.name}</h2>
              <div className="row">
              {category.dishes.map ((dish, index) => 
                <Dish_card dish={dish} index={index} styles={styles} restaurantinfo={restaurantinfo}/>
                )
              }
              </div>
        </div>
      )
    ))}
    
    </div>   
  );
}

export default Section_cagetories;