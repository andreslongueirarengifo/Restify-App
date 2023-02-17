import React from "react";

//import components
import { InputGroupBasicInfo } from "./inputgroup_basicinfo.jsx";
import { InputGroupBrandingName } from "./inputgroup_brandname.jsx";
import { InputGroupLogo } from "./inputgroup_logo.jsx";
import { InputGroupFont } from "./inputgroup_font.jsx";
import { InputGroupColors } from "./inputgroup_colors.jsx";

export const RegisterBodyInputSide = () => {

    const handleClick = (event) => {
        event.preventDefault();
    }
    
    return(
        <div className="col-8 white-test p-5 rounded-end">
            <h2 className="text-center mb-4">
                Crea tu web de tu restaurante.
            </h2>
            <InputGroupBasicInfo />
            <InputGroupBrandingName />
            <InputGroupLogo />
            <InputGroupFont />
            <InputGroupColors />

            <button onClick={handleClick} type="button" className="btn btn-primary btn-form col-12 mt-4">
                Crear restaurante
            </button>
        </div>
    )
}