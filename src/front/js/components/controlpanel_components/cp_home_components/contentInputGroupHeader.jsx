import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const ContentInputGroupHeader = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({});
	const [ files, setFiles ] = useState({});

	const handleChange = (event) => {
		setForm({ ...form, [event.target.id]: event.target.value });
	};

	useEffect(()=>{
		setForm({...form, ["img"]:files});
		if(files){
			let file = new FormData()
			file.append("img",files[0])
			actions.setBodyUploadImg(file)
		}
	},[files])

	useEffect(() => {
		actions.setSetContentFormData(form);
	}, [form]);

	return (
		<>
            <h2 className="caption-text my-4">Header</h2>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="logo_favicon" className="form-label">
                    	Imagen de fondo
					</label>
					<input
						defaultValue={store.currentRestaurantContent.image_link}
						type="file"
						onChange={(e)=>{setFiles(e.target.files)}}
						id="image_link"
						className="form-control"
					/>
				</div>
			</div>
		</>
	);
};
