import React, {useState} from "react";

export const InputGroupBrandingName = () => {

    const [registerForm, setRegisterForm]= useState({})

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
    }

    return (
    <div className="p-0">
        <h2 className="caption-text my-4">Nombre de la marca</h2>
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