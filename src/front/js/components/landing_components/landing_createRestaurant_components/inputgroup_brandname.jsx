import React, {useEffect, useContext, useState} from "react";
import { Context } from "../../../store/appContext";

export const InputGroupBrandingName = () => {

    const {store, actions}= useContext(Context)
    const [registerForm, setRegisterForm]= useState({})

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
        actions.setSetBrandingFormData(registerForm)
    }

    useEffect(() => {
        actions.setSetBrandingFormData(registerForm)
    },[registerForm])

    return (
    <div className="p-0">
        <h2 className="caption-text my-4">Información de tu marca</h2>
        <div className="row">
        <div className="col">
            <label htmlFor="brand_name" className="form-label">
                Nombre de la marca
            </label>
            <input type="text" onChange={handleChange} id="brand_name" className="form-control" aria-label="Nombre de marca"/>
        </div>
        </div>
    </div>
    );
}