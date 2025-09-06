document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = document.getElementById("searchBtn");
  var cityInput = document.getElementById("cityInput");
  var errorMsg = document.getElementById("errorMsg");
  var weatherResult = document.getElementById("weatherResult");
  var forecastGrid = document.getElementById("forecastGrid");
  var hourlyGrid = document.getElementById("hourlyGrid");

  var apiKey = "d98f72edd0e88f4fd41bbd5af84ecc24";

  function clearForecast() { forecastGrid.innerHTML = ""; }
  function clearHourly() { hourlyGrid.innerHTML = ""; }

  function renderForecast(list) {
    clearForecast();
    list.forEach(function (d) {
      var icon = "https://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png";
      var desc = d.weather[0].description;
      var temp = Math.round(d.main.temp);
      var min = Math.round(d.main.temp_min);
      var max = Math.round(d.main.temp_max);
      var date = new Date(d.dt * 1000).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

      var card = document.createElement("div");
      card.className = "forecast-card";
      card.innerHTML = `
        <h3>${date}</h3>
        <img src="${icon}" alt="${desc}">
        <p class="temp">${temp}°C</p>
        <p>Min: ${min}°C / Max: ${max}°C</p>
        <p class="desc">${desc}</p>
      `;
      forecastGrid.appendChild(card);
    });
  }

  function renderHourly(list) {
    clearHourly();
    list.slice(0, 12).forEach(function (d) { // next 12 hours
      var icon = "https://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png";
      var desc = d.weather[0].description;
      var temp = Math.round(d.main.temp);
      var time = new Date(d.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      var card = document.createElement("div");
      card.className = "hourly-card";
      card.innerHTML = `
        <h3>${time}</h3>
        <img src="${icon}" alt="${desc}">
        <p class="temp">${temp}°C</p>
        <p class="desc">${desc}</p>
      `;
      hourlyGrid.appendChild(card);
    });
  }

  async function getForecast(lat, lon) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
    var r = await fetch(url);
    var data = await r.json();
    if (!r.ok) throw new Error("Forecast not available");

    // Daily forecast (pick 12:00 each day)
    var daily = data.list.filter(function (d) {
      return d.dt_txt.includes("12:00:00");
    });
    renderForecast(daily);

    // Hourly forecast (next 12 slots, 3-hourly intervals)
    renderHourly(data.list);
  }

  async function searchAndRender(q) {
    errorMsg.textContent = "";
    weatherResult.innerHTML = "";
    clearForecast();
    clearHourly();
    try {
      var geo = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + encodeURIComponent(q) + "&limit=1&appid=" + apiKey);
      var arr = await geo.json();
      if (!arr.length) throw new Error("City not found");
      var place = arr[0];

      var res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + place.lat + "&lon=" + place.lon + "&appid=" + apiKey + "&units=metric");
      var data = await res.json();
      if (!res.ok) throw new Error("Weather not available");

      var sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      var sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      var flag = data.sys.country ? `<img src="https://flagcdn.com/48x36/${data.sys.country.toLowerCase()}.png" alt="${data.sys.country} flag">` : "";

      weatherResult.innerHTML = `
        <article class="weather-card">
          <h2>${data.name}, ${data.sys.country} ${flag}</h2>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
          <p class="temp">${Math.round(data.main.temp)}°C</p>
          <p>${data.weather[0].description}</p>
          <ul class="meta">
            <li>Feels like: ${Math.round(data.main.feels_like)}°C</li>
            <li>Humidity: ${data.main.humidity}%</li>
            <li>Wind: ${data.wind.speed} m/s</li>
            <li>Sunrise: ${sunrise}</li>
            <li>Sunset: ${sunset}</li>
          </ul>
        </article>
      `;

      getForecast(place.lat, place.lon);

    } catch (e) {
      errorMsg.textContent = e.message;
    }
  }

  function handleSearch() {
    var raw = cityInput.value.trim();
    if (!raw) { errorMsg.textContent = "Please enter a city name."; return; }
    searchAndRender(raw);
  }

  searchBtn.addEventListener("click", handleSearch);
  cityInput.addEventListener("keydown", function (e) { if (e.key === "Enter") handleSearch(); });
});
