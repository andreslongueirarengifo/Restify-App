import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer1 from "../../components/template_components/footer1.jsx";
import Navbar1 from "../../components/template_components/navbar1.jsx";
import Section_cagetories from "../../components/template_components/template_menu_components/section_categories.jsx"
import Section_welcome_menu from "../../components/template_components/template_menu_components/section_welcome_menu.jsx"
import restaurant_background from "../../../img/restaurant_background.jpg"
export const MenuTEMP = () => {
  const [Restaurantinfo, setRestaurantinfo] = useState ({
    Color1: 'F1DBBF',
    Color2: 'B99B6B',
    ColorBack1: 'B99B6B',
    ColorBack2: '698269',
    ColorExtra1: 'C27664',
    BackgroundImage: '',
    Font: 'Inter',
    Facebook_url: 'https://www.facebook.com',
    Instagram_url: 'https://instagram.com',
    Twitter_url: 'https://twitter.com',
    Logo_url: '',
    Phone_number: '666666666',
    Restaurant_name: 'Restaurant Name',
    Restaurant_coordinates: '',
    Restaurant_city: 'Barcelona',
    Restaurant_street: 'Las ramblas, 35',
    Food_categories:[
      {
        Name:'Entrantes',
        photo_url: '',
        Dishes:[
          {
            name:'Plato 1',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
          {
            name:'Plato 2',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
          {
            name:'Plato 3',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
        ],
      },
      {
        Name:'Comida',
        Dishes:[
          {
            name:'Plato 1',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
          {
            name:'Plato 2',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
          {
            name:'Plato 3',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
        ],
      },
      {
        Name:'Postres',
        Dishes:[
          {
            name:'Plato 1',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
          {
            name:'Plato 2',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
          {
            name:'Plato 3',
            description:'Este plato está buenísimo',
            photo_url:'',
            price:'7€',
            allergens:{
              nuts: true,
              fish: true,
              eggs: false,
            },
          },
        ],
      },
    ]
    
  })

const [Styles, setStyles] = useState({
  back1: {backgroundColor: `#${Restaurantinfo.ColorBack1}`},
  back2: {backgroundColor: `#${Restaurantinfo.ColorBack2}`},
  color1: {color: `#${Restaurantinfo.Color1}`},
  color2: {color: `#${Restaurantinfo.Color2}`},
  colorextra1: {color: `#${Restaurantinfo.ColorExtra1}`},
  font: {font: `${Restaurantinfo.Font}`},
})

{console.log(Styles.font)}

  return (
    <div class="row position-relative gx-0" 
    style={{
      
      backgroundImage: `url(${restaurant_background})`,
      minWidth: '100%',
      backgroundSize: 'cover',
      objectPosition: 'bottom',
    }}>
      <style>
        {
          `body {
            max-width: 100%;
            overflow-x: hidden;
            }`
        }
      </style>
      <Navbar1 restaurantinfo={Restaurantinfo} Styles={Styles}/>
      
      <Section_welcome_menu restaurantinfo={Restaurantinfo} Styles={Styles}/>
      <Section_cagetories restaurantinfo={Restaurantinfo} Styles={Styles}/>

      <Footer1 restaurantinfo={Restaurantinfo} Styles={Styles}/>

    </div>
  )
};