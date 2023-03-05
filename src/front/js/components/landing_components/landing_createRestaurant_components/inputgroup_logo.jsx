import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const InputGroupLogo = () => {
	const { store, actions } = useContext(Context);
	const [registerForm, setRegisterForm] = useState({});
	const [files, setFiles] = useState(null);
	//const [favicon, setFavicon] = useState(null)

	useEffect(() => {
		setRegisterForm({ ...registerForm, ["logo"]: files });
		if (files) {
			let file = new FormData();
			file.append("logo", files[0]);
			actions.setBodyUploadImage(file);
		}
	}, [files]);

	useEffect(() => {
		actions.setSetBrandingFormData(registerForm);
	}, [registerForm]);

	/*
    useEffect(()=>{
        setRegisterForm({...registerForm, ['favicon']:favicon})
        if (favicon){
            let fileFavicon = new FormData();
            fileFavicon.append("favicon", favicon[0]);
            actions.setBodyUploadFavicon(fileFavicon)
        }
        actions.setSetBrandingFormData(registerForm)
    },[favicon])*/

	return (
		<div className="p-0 mt-3">
			<div className="row">
				<div className="col">
					<label htmlFor="logo" className="form-label">
						Logo *
					</label>
					<input
						type="file"
						onChange={(e) => setFiles(e.target.files)}
						id="logo"
						className="form-control"
						aria-label="Nombre"
					/>
				</div>
				{/*<div className="col">
            <label htmlFor="logo" className="form-label">
                Fav Icon
            </label>
            <input type="file" onChange={e => setFavicon(e.target.files)} id="fav-icon" className="form-control" aria-label="Nombre"/>
        </div>*/}
			</div>
		</div>
	);
};
