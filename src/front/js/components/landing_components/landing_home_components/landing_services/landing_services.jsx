import React from "react";
import { ListServicesLP } from "./services_list.jsx";

export const ServicesLP = () =>{
    return(
        <>
            <h4>Servicios</h4>
            <h3>¿Qué podemos hacer por tu negocio?</h3>
            <div className="list-service">
                <ListServicesLP/>
            </div>

        </>
    )
}