import React from "react";

import logoWhite from "../../../../img/logo-white.png"

import {CopyToClipboard} from 'react-copy-to-clipboard';

export const CardRestaurant =()=>{
    return (
    <div className="card" style={{width: "18rem"}}>
        {/*<img src={logoWhite} class="card-img-top" alt="..."/>*/}
        <h5 className="card-title m-auto"><b>Restaurante 1</b></h5>
        <img src={logoWhite} className="img-card" ></img>
            <div className="card-body">
                <h6><i><b>Url del restaurante</b></i></h6>
                    <CopyToClipboard text="restify.com/res/restaurant_1">
                    <div className="copy-text rounded d-flex justify-content-between align-items-center">
                        <p><b><i>restify.com/res/restaurant_1</i></b></p>
                        <i className="fa-regular fa-copy"></i>
                    </div>
                    </CopyToClipboard>
                <button className="btn-control-panel"><b>Panel de control</b> <i class="fa-solid fa-arrow-right"></i></button>
                <button className="btn-web"><b>Panel de control</b> <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}