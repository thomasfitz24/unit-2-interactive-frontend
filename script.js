document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = document.getElementById("searchBtn");
  var cityInput = document.getElementById("cityInput");
  var errorMsg = document.getElementById("errorMsg");
  var weatherResult = document.getElementById("weatherResult");
  var forecastGrid = document.getElementById("forecastGrid");

  var apiKey = "d98f72edd0e88f4fd41bbd5af84ecc24";

  function clearForecast() { forecastGrid.innerHTML = ""; }

  function renderForecast(list) {
    clearForecast();
    list.forEach(function (d) {
      var icon = d.weather[0].icon ? "https://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png" : "";
      var desc = d.weather[0].description;
      var temp = Math.round(d.main.temp);
      var date = new Date(d.dt * 1000).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

      var card = document.createElement("div");
      card.className = "forecast-card";
      card.innerHTML = `
        <h3>${date}</h3>
        <img src="${icon}" alt="${desc}">
        <p>${temp}°C</p>
        <p>${desc}</p>
      `;
      forecastGrid.appendChild(card);
    });
  }

  async function getForecast(lat, lon) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
    var r = await fetch(url);
    var data = await r.json();
    if (!r.ok) throw new Error("Forecast not available");

    // Pick one forecast every 24h at noon
    var daily = data.list.filter(function (d) {
      return d.dt_txt.includes("12:00:00");
    });
    renderForecast(daily);
  }

  async function searchAndRender(q) {
    errorMsg.textContent = "";
    weatherResult.innerHTML = "";
    clearForecast();
    try {
      var geo = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + encodeURIComponent(q) + "&limit=1&appid=" + apiKey);
      var arr = await geo.json();
      if (!arr.length) throw new Error("City not found");
      var place = arr[0];

      var res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + place.lat + "&lon=" + place.lon + "&appid=" + apiKey + "&units=metric");
      var data = await res.json();
      if (!res.ok) throw new Error("Weather not available");

      // Current weather
      weatherResult.innerHTML = `
        <article class="weather-card">
          <h2>${data.name}, ${data.sys.country}</h2>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
          <p class="temp">${Math.round(data.main.temp)}°C</p>
          <p>${data.weather[0].description}</p>
        </article>
      `;

      // Forecast
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
