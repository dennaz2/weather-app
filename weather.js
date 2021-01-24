//Define variables
let latitude;
let longitude;
let apiKey = "cf1061f2db824499aa730543211401";

//elements on html page
let weatherTempHeader = document.querySelector('.weather');
let weatherDetails = document.querySelector('.weather-details');

//Get the coordinates of the user 
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            console.log(longitude);
            console.log(latitude);
        });
    } else {
        weather_temp.innerText = "Please enable your location for the weather to display";
    }
});

//getting weather forecast data

setTimeout(() => {
   fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7`)
    .then(respone => respone.json())
    .then(data => {
        console.log(data);

        //Display elements and create elements needed
        weatherTempHeader.innerText = `${data.current.temp_f} F`;
});         
}, 1000);


