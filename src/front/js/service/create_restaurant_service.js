export const createRestaurant = async (formData) => { // formData = {name: "sample@email.com", user_id: from token}
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+"/api/createrestautant", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch(e){
        return e
    }
}

export const setBranding = async (formData) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+"/api/setbranding", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch(e){
        return e
    }
}