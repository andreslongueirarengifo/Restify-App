import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../../store/appContext";

export const InputGroupLogo = () => {

    const {store, actions} = useContext(Context)
    const [registerForm, setRegisterForm]= useState({})
    const [files, setFiles] = useState(null)

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
        actions.setSetBrandingFormData(registerForm)
    }


    useEffect(()=>{
        setRegisterForm({...registerForm, ['logo']:files})
        actions.setSetBrandingFormData(registerForm)
        actions.setBodyUploadImage(files)
    },[files])

    return (
    <div className="p-0 mt-3">
        <div className="row">
        <div className="col">
            <label htmlFor="logo" className="form-label">
                Logo
            </label>
            <input type="file" onChange={e => setFiles(e.target.files)} id="logo" className="form-control" aria-label="Nombre"/>
        </div>
        </div>
    </div>
    );
}