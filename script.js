// Create object to store the functions and variables needed to use th API


// require('dotenv').config();
// console.log(process.env);
// const apiKey = process.env.API_KEY;

let weather = {

    apiKey : "2777b8c6c5389c694ffa01fef664a91b",

    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },


    // New function that displays the weather on the page
    displayWeather: function(data) {
        // get variables such city name, temperature by looking at api link
        const {name} = data;
        const {country} = data.sys;
        const {icon, description} = data.weather[0];
        const {temp} = data.main;
        const {humidity} = data.main;
        const {speed} = data.wind;
        const {temp_min} = data.main;
        const {temp_max} = data.main;
        // display this on the console
        console.log(name, icon, description, temp);

        // display this info on the page
        // .city, .icon, these are class names from index.html
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: "+ humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind Speed: "+ speed + "m/s";
        document.querySelector(".temp-min").innerText = "Min Temp: " + temp_min + "°C";
        document.querySelector(".temp-max").innerText = "Max Temp: " + temp_max + "°C";
    },

    // search function
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

let btn = document.querySelector("button")
let info = document.querySelector(".weather-info");


// Search Bar with click
btn.addEventListener("click", () => {

    weather.search();
    info.style.visibility = "visible";
});


// Search bar with enter key
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
    {
        weather.search();
        info.style.visibility = "visible";
    }
});

