import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../../store/appContext";

export const InputGroupLogo = () => {

    const {store, actions} = useContext(Context)
    const [registerForm, setRegisterForm]= useState({})
    const [files, setFiles] = useState(null)



    useEffect(()=>{
        //let body = new FormData()
        //body.append("profile_image", files)
        //console.log(body)
        setRegisterForm({...registerForm, ['files']:files})
        actions.setSetBrandingFormData(registerForm)
        console.log(files)
    },[files])

    return (
    <div className="p-0 mt-3">
        <div className="row">
        <div className="col">
            <label htmlFor="logo" className="form-label">
                Logo
            </label>
            <input type="file" onBlur={e => setFiles({...files, [e.target.id]:e.target.files[0]})} id="logo" className="form-control" aria-label="Nombre"/>
        </div>
        <div className="col">
            <label htmlFor="logo_favicon" className="form-label">Favicon</label>
            <input type="file" onBlur={e => setFiles({...files, [e.target.id]:e.target.files[0]})} id="logo_favicon" className="form-control" aria-label="Apellidos"/>
        </div>
        </div>
    </div>
    );
}