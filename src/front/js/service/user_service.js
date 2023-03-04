export const createUser = async (formData) => {
	try {
		const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io" + "/api/signup", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
		localStorage.setItem("jwt-token", data.token);
		return data;
	} catch (e) {
		return e;
	}
};

export const loginUser = async (formData) => {
	// formData = {email: "sample@email.com", password: "123456"}
	try {
		const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io" + "/api/login", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
		localStorage.setItem("jwt-token", data.token);
		return data;
	} catch (e) {
		return e;
	}
};

export const getCurrentUser = async () => {
	try {
		const token = localStorage.getItem("jwt-token");
		const response = await fetch(
			"https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io" + "/api/currentuser",
			{
				method: "GET",
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

export const getUsers = async () => {
	try {
		const response = await fetch("https://3001-andreslongue-restifyapp-esbx6jl2rqv.ws-eu89.gitpod.io" + "/api/users", {
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
