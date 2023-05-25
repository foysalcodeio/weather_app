const apiKey = "e013b4ed1f2ccc53913c5e344474b1ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").innerHTML = "City not found";
        return false;
    } else {
        var data = await response.json();

        //console.log(data);

        document.querySelector(".city").innerHTML = data.name + " , " + data.sys.country;
        document.querySelector(".temp").innerHTML = data.main.temp + "" + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";

        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";

        } else if (data.weather[0].main == "Dry") {
            weatherIcon.src = "images/drizzle.png";

        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
    

}

btn.addEventListener("click", () => {
    getWeather(search.value);
})