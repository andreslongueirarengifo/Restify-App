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
    location_street: "Dirección",
    location_city: "Barcelona",
    location_coordinates: "41.379118,2.175238",
    image_link: "https://m.media-amazon.com/images/I/71vonbE-r2L._AC_SY355_.jpg",
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