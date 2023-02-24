export const getWebInfoByName = async (web_name) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+`/api/restaurants/`+web_name, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        return data;
    }
    catch(e){
        return e
    }
}

export const getContent = async (web_id) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+`/branding/${web_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        return data;
    }
    catch(e){
        return e
    }
}

export const setContent = async (formData) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+"/api/setcontent", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        return data;
    }
    catch(e){
        return e
    }
}