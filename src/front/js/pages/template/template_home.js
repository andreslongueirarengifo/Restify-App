import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer1 from "../../components/template_components/footer1.jsx";
import Navbar1 from "../../components/template_components/navbar1.jsx";
import Section_menu from "../../components/template_components/template_home_components/section_menu.jsx";
import Section_presentation from "../../components/template_components/template_home_components/section_presentation.jsx";
import Section_call_to_action from "../../components/template_components/section_call_to_action.jsx";

export const HomeTEMP = () => {
  const params = useParams()
  let domain = process.env.BACKEND_URL;
  let apirequesturl = `${domain}/api/template_data/${params.webname}`
  const [Restaurantinfo, setRestaurantinfo] = useState({})
  const [Styles, setStyles] = useState({
    back1: {},
    back2: {},
    color1: {},
    color2: {},
    colorextra1: {},
    font: {},
  });
  { console.log(apirequesturl) }
  useEffect(() => {
    fetch(apirequesturl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setStyles({
          back1: { backgroundColor: `${data.result.colorback1}` },
          back2: { backgroundColor: `${data.result.colorback2}` },
          color1: { color: `${data.result.color1}` },
          color2: { color: `${data.result.color2}` },
          colorextra1: { color: `${data.result.colorextra1}` },
          font: { fontFamily: `${data.result.font}` },
        })
      })
  }, []);
  useEffect(() => {
    fetch(apirequesturl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRestaurantinfo(data.result)
      })
  }, []);
  return (
    <>
      {Object.keys(Restaurantinfo).length > 0 && (
        <div style={Styles.back1}>
          <style>
            {
              `body {
            max-width: 100%;
            overflow-x: hidden;
            }`
            }
          </style>
          <Navbar1 restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />
          <Section_presentation restaurantinfo={Restaurantinfo} Styles={Styles} />
          {Restaurantinfo.food_categories.length === 0 ? (<h1 style={Styles.color1} className="text-center">No se han creado categorias</h1>) : (<Section_menu restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />)}
          <Section_call_to_action restaurantinfo={Restaurantinfo} Styles={Styles} />
          <Footer1 restaurantinfo={Restaurantinfo} Styles={Styles} restaurantname={params.webname} />
        </div>
      )}
    </>
  )
};