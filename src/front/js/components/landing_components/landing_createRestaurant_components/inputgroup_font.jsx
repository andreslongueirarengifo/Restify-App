import React, {useContext, useState, useEffect} from "react";
import { Context } from "../../../store/appContext";

export const InputGroupFont = () => {

    const {store, actions} = useContext(Context)
    const [registerForm, setRegisterForm]= useState({font: "Helvetica"})

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
        actions.setSetBrandingFormData(registerForm)
    }

    useEffect(() => {
        actions.setSetBrandingFormData(registerForm)
    },[])

    return (
    <div className="p-0 mt-3">
        <div className="row">
        <div className="col">
            <label htmlFor="brand_name" className="form-label">
                Fuente
            </label>
            <select id="font" onChange={handleChange} className="form-select" aria-label="Default select example">
                <option value="Helvetica">Helvetica</option>
                <option value="Roboto">Roboto</option>
                <option value="Raleway">Raleway</option>
            </select>
        </div>
        </div>
    </div>
    );
}