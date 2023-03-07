import { getWebInfoByName, getContent, getBranding } from "../service/cp_services";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isAuthenticated: false,
			createRestaurantFormData: {},
			setBrandingFormData: {},
			setContentFormData: {},
			currentRestaurantContent: {},
			currentRestaurantBranding: {},
			currentRestaurantName: "",
			currentRestaurantId: 0,
			bodyuploadLogo: null,
			bodyUploadFavicon: null,
			webExist: false,
			bodyUploadImg: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			loginState: () => {
				setStore({ isAuthenticated: true });
			},
			logoutState: () => {
				setStore({ isAuthenticated: false });
			},
			setRestautantFormData: (input, inputValue) => {
				const store = getStore();
				setStore({ createRestaurantFormData: { ...store.createRestaurantFormData, [input]: inputValue } });
			},
			setSetBrandingFormData: (obj) => {
				const store = getStore();
				setStore({ setBrandingFormData: { ...store.setBrandingFormData, ...obj } });
			},
			setSetContentFormData: (obj) => {
				const store = getStore();
				setStore({ setContentFormData: { ...store.setContentFormData, ...obj } });
			},
			setCurrentRestaurantName: (webName) => {
				setStore({ currentRestaurantName: webName });
			},
			setCurrentRestaurantId: (webId) => {
				setStore({ currentRestaurantId: webId });
			},
			setBodyuploadLogo: (file) => {
				setStore({ bodyuploadLogo: file });
			},
			setBodyUploadFavicon: (file) => {
				setStore({ bodyUploadFavicon: file });
			},
			setWebExist: (bool) => {
				setStore({ webExist: bool });
			},
			setBodyUploadImg: (file) => {
				setStore({ bodyUploadImg: file });
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch("https://sample-service-name-tv81.onrender.com" + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCurrentRestaurantContent: async (id) => {
				const data = await getContent(id);
				setStore({ currentRestaurantContent: data.result });
			},
			getCurrentRestaurantBranding: async (id) => {
				const data = await getBranding(id);
				setStore({ currentRestaurantBranding: data.result });
			},
			getCurrentRestaurantIdbyWebName: async (name) => {
				const data = await getWebInfoByName(name);
				setStore({ currentRestaurantId: data.result.id });
			},
		},
	};
};

export default getState;
