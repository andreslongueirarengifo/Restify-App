export const createRestaurant = async (formData) => { // formData = {name: "sample@email.com", user_id: from token}
    try {
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL + "/api/createrestautant", {
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

export const setBranding = async (formData) => {
    try {
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL + "/api/setbranding", {
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

export const defaultContentCreation = {
    phone_number: 123456789,
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    location_street: "",
    location_city: "",
    location_coordinates: "",
    image_link: "",
}

export const setContent = async (formData) => {
    try {
        const token = localStorage.getItem('jwt-token');
        const response = await fetch(process.env.BACKEND_URL + "/api/setcontent", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        return data;
    }
    catch (e) {
        return e
    }
}

export const uploadImage = async (body, webId) => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/branding/${webId}/image`, {
            body,
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
            }
        })
        const data = await response.json();
        return data;
    } catch (e) {
        return e
    }
}