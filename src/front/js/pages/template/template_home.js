import React from "react";
import { useState } from "react";
import Navbar1 from "../../components/template_components/navbar1.jsx";

export const HomeTEMP = () => {
const [Restaurantinfo, setRestaurantinfo] = useState ({
  Color1: 'F1DBBF',
  Color2: 'B99B6B',
  ColorBack1: 'B99B6B',
  ColorBack2: '698269',
  ColorExtra1: 'C27664',
  Font: 'Inter',
  Facebook_url: 'https://www.facebook.com',
  Instagram_url: 'https://instagram.com',
  Twitter_url: 'https://twitter.com',
  Logo_url: '',
  Phone_number: '',
  Restaurant_name: 'Restaurant_Name',
  Food_Category_1: {
    Name:'Entrantes',
    Dishes:{
      Dish1:{
        name:'Plato 1',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
      Dish2:{
        name:'Plato 2',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
      Dish3:{
        name:'Plato 3',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
    },
  },
  Food_Category_2: {
    Name:'Comida',
    Dishes:{
      Dish1:{
        name:'Plato 1',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
      Dish2:{
        name:'Plato 2',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
      Dish3:{
        name:'Plato 3',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
    },
  },
  Food_Category_3: {
    Name:'Postres',
    Dishes:{
      Dish1:{
        name:'Plato 1',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
      Dish2:{
        name:'Plato 2',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
      Dish3:{
        name:'Plato 3',
        description:'Este plato está buenísimo',
        photo_url:'',
        allergens:{
          nuts: true,
          fish: true,
          eggs: false,
        },
      },
    },
  },

})

const styleback1=`{background-color:#${Restaurantinfo.ColorBack1};}`
const styleback2=`{background-color:#${Restaurantinfo.ColorBack2};}`
const stylecolor1=`{color:#${Restaurantinfo.Color1};}`
const stylecolor2=`{color:#${Restaurantinfo.Color2};}`
const stylecolorextra1=`{color:#${Restaurantinfo.ColorExtra1};}`
const fontstyle=`{font-family:"${Restaurantinfo.Font}";}`
  return (
    <>
        <head>
        <style>
            body{fontstyle}
            .styleback1 {styleback1}
            .styleback2 {styleback2}
            .stylecolor1 {stylecolor1}
            .stylecolor2 {stylecolor2}
            .stylecolorex1 {stylecolorextra1}
        </style>
        </head>
      <Navbar1 restaurantinfo={Restaurantinfo} />
    </>
  )
};