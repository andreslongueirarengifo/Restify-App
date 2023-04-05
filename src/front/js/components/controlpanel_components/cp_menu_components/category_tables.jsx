import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Category_food_table } from "./category_food_table.jsx";

export const Category_tables = (props) => {
    const domain = process.env.BACKEND_URL;
    const webName = props.webName
    const [Categories, setCategories] = useState([]);
    {console.log(webName)}
    useEffect(() => {
        console.log("fetch started!")
        fetch(`${domain}/api/foodcategories/${webName}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setCategories([...data.result]);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [])
      {console.log(Categories)}
    return (
        <>
        {Object.keys(Categories).length > 0 && (
            Categories.map((Category, index) => {
                return(
                <div id={index} className="py-3">
                    <Category_food_table category={Category.id} name={Category.name}/>
                </div>
                )
            })
            )}
        </>
    );
};