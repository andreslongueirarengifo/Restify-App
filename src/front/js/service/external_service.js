export const getSpainCities = async () => {
    try {
        const response = await fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&rows=100&sort=provincia&facet=provincia")
        const data = await response.json();
        return data;
    }
    catch (e) {
        return e
    }
}

export const getRandomAvatar = () => {
    const variations = ["Dusty", "Snowball", "Abby", "Lola", "Cleo", "Boots", "Bella", "Lucy", "Cuddles", "Garfield", "George", "Kitty", "Felix", "Maggie"];
    return `https://api.dicebear.com/5.x/thumbs/png?seed=${variations[Math.floor(Math.random() * variations.length)]}`
}