import React from "react";
import { ListServicesLP } from "./services_list.jsx";

export const ServicesLP = () =>{
    return(
        <div className="col-8 mx-auto my-4">
            <h4 style={{color:"#352970"}}>Servicios</h4>
                <h3>¿Qué podemos hacer por <span  style={{color:"#0B638F"}}>tu negocio?</span></h3>
            <div className="mt-5">
                <ListServicesLP/>
            </div>
        </div>
    )
}