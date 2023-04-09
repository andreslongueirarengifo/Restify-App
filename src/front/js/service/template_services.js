export const getTemplateData= async (web_name)=>{
    try{
        const response = await fetch(process.env.BACKEND_URL+"/api/template_data/"+web_name, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json();
        return data;
    }
    catch(e){
        return e
    }
}