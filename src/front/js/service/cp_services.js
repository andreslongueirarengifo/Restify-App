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
        const response = await fetch(process.env.BACKEND_URL+`/api/web_content/${web_id}`, {
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

export const getBranding = async (web_id) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+`/api/branding/${web_id}`, {
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

export const updateContent = async (formData) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+"/api/setcontent", {
            method: "PUT",
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

export const updateBranding = async (formData) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL+"/api/setbranding", {
            method: "PUT",
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