import React, {useContext, useState} from "react";
import { Context } from "../../../store/appContext";

export const InputGroupLogo = () => {

    const {store, actions} = useContext(Context)
    const [registerForm, setRegisterForm]= useState({})

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
        actions.setSetBrandingFormData(registerForm)
    }

    return (
    <div className="p-0 mt-3">
        <div className="row">
        <div className="col">
            <label htmlFor="logo" className="form-label">
                Logo
            </label>
            <input type="text" onChange={handleChange} id="logo" className="form-control" aria-label="Nombre"/>
        </div>
        <div className="col">
            <label htmlFor="logo_favicon" className="form-label">Favicon</label>
            <input type="text" onChange={handleChange} id="logo_favicon" className="form-control" aria-label="Apellidos"/>
        </div>
        </div>
    </div>
    );
}