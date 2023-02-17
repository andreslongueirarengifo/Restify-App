export const getWebCard= async ()=>{
    try{
        const response = await fetch(process.env.BACKEND_URL+"/api/signup", {
            method: "GET",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        return data;
    }
    catch(e){
        return e
    }
}