import React from "react";
import { useState } from "react";
import Dish_card from "./dish_card.jsx"

function Section_cagetories(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  const foodcategories = restaurantinfo.Food_categories
  {console.log(foodcategories)}
  const [categories, setCategories] = useState(foodcategories)
  {console.log(categories)}
  const sectionstyle = {
    first: {
      back: {background: 'rgba(185, 155, 107, 0.55)'},
      color: {color: `#${restaurantinfo.color1}` }
    },
    second: {
      back: {background: 'rgba(105, 130, 105, 0.55)'},
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
            <h2 className="fs-2 pt-3" style={styles.color1}>{category.Name}</h2>
            <div className="row">
            {category.Dishes.map ((dish, index) => 
                <Dish_card dish={dish} index={index} styles={styles}/>
            )}
            </div>
      </div> ) : (
        <div key={index} 
        className="text-center"
        style={sectionstyle.second.back}
        >
              <h2 className="fs-2 pt-3" style={styles.color1}>{category.Name}</h2>
              <div className="row">
              {category.Dishes.map ((dish, index) => 
                <Dish_card dish={dish} index={index} styles={styles}/>
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