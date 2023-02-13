import React, {useEffect, useState} from "react";

export const InputGroupBasicInfo = () => {

    const [registerForm, setRegisterForm]= useState({})
    const [urlPreview, setUrlPreview]= useState("")

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
    }

    useEffect(() => {
        setUrlPreview(registerForm.url_name)
    }, [registerForm])

    return (
    <div className="p-0">
        <h2 className="caption-text mb-4">Información básica</h2>
        <div className="row">
        <div className="col">
            <label htmlFor="name" className="form-label">
                Nombre de URL
            </label>
            <input type="text" onChange={handleChange} id="url_name" className="form-control" aria-label="Nombre"/>
        </div>
        <div className="col">
            <label htmlFor="phone_number" className="form-label">Teléfono de contacto</label>
            <input type="text" onChange={handleChange} id="phone_number" className="form-control" aria-label="Telefono"/>
        </div>
        </div>
        <p className="mt-2">La url de la web del restaurante será: restify.com/res/{urlPreview}</p>
    </div>
    );
}