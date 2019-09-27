import './sass/main.scss';
import getLocation from './js/get-location';
import fetchWeather from './js/utils/fetch-weather';


// const foo = async x => {
//     const val = await Promise.resolve(x);

//     console.log(val);
// };

// foo(5);

// feature detection

// const onGetPositionSuccess = position => {
//     console.log(position);
//     fetchWeather(position.coords)
// };

// const onGetPositionError = error => {
//     console.log(error);
// };


const run = async () => {
    
if (!navigator.geolocation) {
    return console.log("Geolocation is not available in your browser")
} 

try {
    const location = await getLocation();
    const weather = await fetchWeather(location.coords); 
    console.log(weather);
} catch(error) {
    console.log(error);
}    
};

run();



