const apikey = "355f472b77f1d22bd68199badca97ce2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weather = document.querySelector(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main === "Clouds"){
        weather.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weather.src = "images/clear.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weather.src =  "images/drizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        weather.src = "images/mist.png"
    }
    else if(data.weather[0].main === "Rain"){
        weather.src = "images/rain.png"
    }
    else if(data.weather[0].main === "Snow"){
        weather.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
    
btn.addEventListener("click", ()=>{
    checkweather(search.value);
} )
