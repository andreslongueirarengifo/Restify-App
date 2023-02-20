import React from "react";
import { useNavigate } from "react-router-dom";

import logoWhite from "../../../../img/logo-white.png"


export const CardAddRestaurant =()=>{

    const navigate = useNavigate();

    return (
    <div className="card-rest d-flex flex-column" style={{width: "18rem", height: "25rem"}}>
        <div onClick={() => navigate(`/createrestaurant`)} className="img-card-add m-auto text-center d-flex align-items-center justify-content-center"><i className="fa-solid fa-plus"></i></div>
        </div>
    )
}