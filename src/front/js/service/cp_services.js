export const getWebInfoByName = async (web_name) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/restaurants/`+web_name, {
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
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/web_content/${web_id}`, {
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
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/branding/${web_id}`, {
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
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+"/api/setcontent", {
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
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+"/api/setbranding", {
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

export const createCategory = async (formData) => {
    try {
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io" + "/api/createcategory", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch (e) {
        return e
    }
}

export const updateCategory = async (formData) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+"/api/createcategory", {
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

export const getCategories = async (web_id) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/foodcategories/${web_id}`, {
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

export const deleteCategories = async (category_id) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/deletecategory/${category_id}`, {
            method: "DELETE",
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

export const createFood = async (formData) => {
    try {
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io" + "/api/createfood", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch (e) {
        return e
    }
}

export const updateFood = async (formData) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+"/api/createfood", {
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

export const getFood = async (web_id) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/food/${web_id}`, {
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

export const deleteFood = async (food_id) => {
    try{
        const token = localStorage.getItem('jwt-token');
        const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io"+`/api/deletefood/${food_id}`, {
            method: "DELETE",
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