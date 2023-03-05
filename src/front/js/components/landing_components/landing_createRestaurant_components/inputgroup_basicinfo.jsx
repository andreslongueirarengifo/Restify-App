import React, {useContext, useEffect, useState} from "react";
import { getRestaurants } from "../../../service/create_restaurant_service.js";
import { Context } from "../../../store/appContext.js";



export const InputGroupBasicInfo = () => {

    const {store, actions} = useContext(Context);
    const [registerForm, setRegisterForm]= useState({})
    const [ restaurantList, setRestaurantList ]= useState([])
    //const [ webExist, setWebExist ]= useState(false)
    const [urlPreview, setUrlPreview]= useState("")

    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]:event.target.value})
        actions.setRestautantFormData(event.target.id, event.target.value)
        
        let arrayWebs = [];
        restaurantList.map((el)=>{
            arrayWebs.push(el.name)
        })
        //setWebExist(arrayWebs.includes(event.target.value))
        actions.setWebExist(arrayWebs.includes(event.target.value))
    }

    useEffect(()=>{
        const callGetRest = async () => {
            const data = await getRestaurants();
            setRestaurantList([...data.result])
        }
        callGetRest();
    },[])

    useEffect(() => {
        setUrlPreview(registerForm.url_name)
    }, [registerForm])

    return (
    <div className="p-0">
        <h2 className="caption-text mb-4">Información básica</h2>
        <div className="row">
        <div className="col">
            <label htmlFor="name" className="form-label">
                Nombre de URL *
            </label>
            <input type="text" onChange={handleChange} id="url_name" className="form-control" aria-label="Nombre"/>
        </div>
        </div>
        {store.webExist?<label style={{ color: "#A81409" }}>El nombre ya está en uso</label>:null}
        <p className="mt-2">La url de la web del restaurante será: restify.com/res/{urlPreview}</p>
    </div>
    );
}