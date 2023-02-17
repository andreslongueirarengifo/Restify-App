// import { Context } from "../store/appContext";

// import { useContext } from "react";

// const {store , actions} = useContext(Context)

export const createUser = async (formData) => {
    try{
        const response = await fetch(process.env.BACKEND_URL+"/api/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        
        localStorage.setItem("jwt-token", data.token);
        return data;
    }
    catch(e){
        return e
    }
}

export const loginUser = async (formData) => { // formData = {email: "sample@email.com", password: "123456"}
    try{
        const response = await fetch(process.env.BACKEND_URL+"/api/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        console.log(data)
        localStorage.setItem("jwt-token", data.token);
        return data;
    }
    catch(e){
        return e
    }
}
