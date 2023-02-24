export const getSpainCities = async () => {
    try{
        const response = await fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&rows=100&sort=provincia&facet=provincia")
        const data = await response.json();
        return data;
    }
    catch(e){
        return e
    }
}