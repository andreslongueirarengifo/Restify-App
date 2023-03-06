export const getCurrentUserRestaurants = async () => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-v7xh.onrender.com" + "/api/currentrestaurants", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
			},
		});
		const data = await response.json();
		return data;
	} catch (e) {
		return e;
	}
};

export const getRestaurant = async (web_id) => {
	try {
		const response = await fetch("https://sample-service-name-v7xh.onrender.com" + "/api/restaurants/" + web_id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	} catch (e) {
		return e;
	}
};

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
