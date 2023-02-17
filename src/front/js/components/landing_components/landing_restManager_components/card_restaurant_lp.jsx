import React from "react";

import logoWhite from "../../../../img/logo-white.png"

import {CopyToClipboard} from 'react-copy-to-clipboard';

export const CardRestaurant =()=>{
    return (
    <div className="card-rest d-flex flex-column" style={{width: "18rem", height: "25rem"}}>
        <h5 className="card-title p-2 m-auto mt-2"><b>Restaurante 1</b></h5>
        <img src={logoWhite} className="img-card m-auto" ></img>
            <div className="card-body">
                <h6><i><b>Url del restaurante</b></i></h6>
                    <CopyToClipboard text="restify.com/res/restaurant_1">
                    <div className="copy-text rounded d-flex justify-content-between">
                        <p><b><i>restify.com/res/restaurant_1</i></b></p>
                        <i className="fa-regular fa-copy"></i>
                    </div>
                    </CopyToClipboard>
                <div className="d-flex flex-column mt-3">
                    <button className="btn-control-panel mb-2"><b>Panel de control</b> <i className="fa-solid fa-arrow-right"></i></button>
                    <button className="btn-web"><b>Visualizar</b> <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}