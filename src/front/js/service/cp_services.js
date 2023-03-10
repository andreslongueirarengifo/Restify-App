export const getWebInfoByName = async (web_name) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + `/api/restaurants/` + web_name, {
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

export const getContent = async (web_id) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + `/api/web_content/${web_id}`, {
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

export const getBranding = async (web_id) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + `/api/branding/${web_id}`, {
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

export const updateContent = async (formData) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/setcontent", {
			method: "PUT",
			mode: "cors",
			body: JSON.stringify(formData),
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

export const updateBranding = async (formData) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/setbranding", {
			method: "PUT",
			mode: "cors",
			body: JSON.stringify(formData),
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

export const createCategory = async (formData) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/createcategory", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
			},
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (e) {
		return e;
	}
};

export const updateCategory = async (formData) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/createcategory", {
			method: "PUT",
			mode: "cors",
			body: JSON.stringify(formData),
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

export const getCategories = async (web_id) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + `/api/foodcategories/${web_id}`, {
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

export const deleteCategories = async (category_id) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch(
			"https://sample-service-name-tv81.onrender.com" + `/api/deletecategory/${category_id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
				},
			},
		);
		const data = await response.json();
		return data;
	} catch (e) {
		return e;
	}
};

export const createFood = async (formData) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/createfood", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
			},
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (e) {
		return e;
	}
};

export const updateFood = async (formData) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/createfood", {
			method: "PUT",
			mode: "cors",
			body: JSON.stringify(formData),
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

export const getFood = async (web_id) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + `/api/food/${web_id}`, {
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

export const deleteFood = async (food_id) => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch("https://sample-service-name-tv81.onrender.com" + `/api/deletefood/${food_id}`, {
			method: "DELETE",
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
