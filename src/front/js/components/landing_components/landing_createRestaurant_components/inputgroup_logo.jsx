import React, {useState} from "react";

export const InputGroupLogo = () => {

    const [registerForm, setRegisterForm]= useState({})

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
    }

    return (
    <div className="p-0">
        <h2 className="caption-text my-4">Imagen de la marca</h2>
        <div className="row">
        <div className="col">
            <label htmlFor="name" className="form-label">
                Logo
            </label>
            <input type="text" onChange={handleChange} id="name" className="form-control" aria-label="Nombre"/>
        </div>
        <div className="col">
            <label htmlFor="phone_number" className="form-label">Favicon</label>
            <input type="text" onChange={handleChange} id="phone_number" className="form-control" aria-label="Apellidos"/>
        </div>
        </div>
    </div>
    );
}