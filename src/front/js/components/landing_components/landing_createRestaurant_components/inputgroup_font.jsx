import React, {useState} from "react";

export const InputGroupFont = () => {

    const [registerForm, setRegisterForm]= useState({})

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
    }

    return (
    <div className="p-0">
        <h2 className="caption-text my-4">Tipografía de la marca</h2>
        <div className="row">
        <div className="col">
            <label htmlFor="brand_name" className="form-label">
                Fuente
            </label>
            <select id="font" onChange={handleChange} className="form-select" aria-label="Default select example">
                <option value="1">Helvetica</option>
                <option value="2">Roboto</option>
                <option value="3">Raleway</option>
            </select>
        </div>
        </div>
    </div>
    );
}