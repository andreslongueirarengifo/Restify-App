import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../../store/appContext";

export const InputGroupColors = () => {

    const {store, actions} = useContext(Context);
    const [registerForm, setRegisterForm]= useState({
        color_bg1: "#352970",
        color_bg2: "#F3F4F8",
        color_font1: "#0a2540",
        color_font2: "#cecece",
        color_hover1: "#000000",
    })
    
    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
        actions.setSetBrandingFormData(registerForm)
    }

    useEffect(() => {
        actions.setSetBrandingFormData(registerForm)
    },[registerForm])

    return (
    <div className="p-0">
        <h2 className="caption-text my-4">Paleta de colores</h2>
        <div className="row">
            <div className="col">
                <label htmlFor="color_bg1" className="form-label">Color de fondo 1</label>
                <input type="color" value={registerForm.color_bg1} onChange={handleChange} className="form-control color-input" id="color_bg1" aria-label="Color de fondo 1"/>
            </div>
            <div className="col">
                <label htmlFor="color_bg2" className="form-label">Color de fondo 2</label>
                <input type="color" value={registerForm.color_bg2} onChange={handleChange} className="form-control color-input" id="color_bg2" aria-label="Color de fondo 2"/>
            </div>
            <div className="col">
                <label htmlFor="color_font1" className="form-label">Color de fuente 1</label>
                <input type="color" value={registerForm.color_font1} onChange={handleChange} className="form-control color-input" id="color_font1" aria-label="Color de fuente 1"/>
            </div>
            <div className="col">
                <label htmlFor="color_font2" className="form-label">Color de fuente 2</label>
                <input type="color" value={registerForm.color_font2} onChange={handleChange} className="form-control color-input" id="color_font2" aria-label="Color de fuente 2"/>
            </div>
            <div className="col">
                <label htmlFor="name" className="form-label">Color de hover</label>
                <input type="color" value={registerForm.color_hover1} onChange={handleChange} className="form-control color-input" id="color_hover1" aria-label="Color de fuente 2"/>
            </div>
        </div>
    </div>
    );
}