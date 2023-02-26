import React from "react";
import Dish_card from "./dish_card.jsx"

function Section_cagetories(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  const categories = restaurantinfo.food_categories
  function hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }
  const sectionstyle = {
    first: {
      back: {background: `rgba(${hexToRgb(restaurantinfo.colorback1)}, 0.55)`},
      color: {color: `#${restaurantinfo.color1}` }
    },
    second: {
      back: {background: `rgba(${hexToRgb(restaurantinfo.colorback2)}, 0.55)`},
      color: {color: `#${restaurantinfo.color2}` }
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