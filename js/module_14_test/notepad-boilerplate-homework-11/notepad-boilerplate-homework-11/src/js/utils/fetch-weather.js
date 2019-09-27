const fetchWeather = async ({latitude, longitude}) => {
    try{
        const proxy = `https://cors-anywhere.herokuapp.com`;
        const darksky = `https://api.darksky.net/forecast`;
        const darkskyKey = `c913d2be48d1807c80bc09987fa3860b`
        const response = await fetch (
            `${proxy}/${darksky}/${darkskyKey}/${latitude},${longitude}`
        );
        const weather = await response.json();
        return weather;
    } catch(error) {
        throw error;
    }
   };

export default fetchWeather;