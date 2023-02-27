import React from "react";
import { ListServicesLP } from "./services_list.jsx";

export const ServicesLP = () =>{
    return(
        <>
            <h4 style={{color:"#352970", marginTop: "6rem"}}><b>Servicios</b></h4>
                <h3><b>¿Qué podemos hacer por <span  style={{color:"#0B638F"}}>tu negocio?</span></b></h3>
            <div className="mt-5">
                <ListServicesLP/>
            </div>
        </>
    )
}