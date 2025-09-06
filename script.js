document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const errorMsg = document.getElementById("errorMsg");
  const weatherResult = document.getElementById("weatherResult");

  const apiKey = "d98f72edd0e88f4fd41bbd5af84ecc24";

  function setLoading(on) {
    weatherResult.textContent = on ? "Loading..." : "";
  }

  function renderResult(data) {
    const icon = data.weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : "";
    const desc = data.weather?.[0]?.description || "";
    const temp = Math.round(data.main?.temp);
    const feels = Math.round(data.main?.feels_like);
    const humidity = data.main?.humidity ?? "-";
    const wind = data.wind?.speed ?? "-";

    weatherResult.innerHTML = `
      <article class="weather-card" role="region" aria-label="Current weather for ${data.name}">
        <h2>${data.name}</h2>
        <div class="weather-top">
          ${icon ? `<img src="${icon}" alt="${desc}">` : ""}
          <div class="weather-stats">
            <p class="temp">${isNaN(temp) ? "-" : temp}°C</p>
            <p class="desc">${desc}</p>
          </div>
        </div>
        <ul class="meta">
          <li>Feels like: ${isNaN(feels) ? "-" : feels}°C</li>
          <li>Humidity: ${humidity}%</li>
          <li>Wind: ${wind} m/s</li>
        </ul>
      </article>
    `;
  }

  async function geocodeCity(q) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(q)}&limit=1&appid=${apiKey}`;
    const r = await fetch(url);
    if (!r.ok) throw new Error("Unable to reach geocoding service");
    const arr = await r.json();
    if (!Array.isArray(arr) || arr.length === 0) throw new Error("City not found");
    return arr[0];
  }

  async function fetchWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const r = await fetch(url);
    if (r.status === 401) throw new Error("API key not active yet or invalid");
    if (!r.ok) throw new Error("Weather not available");
    return r.json();
  }

  async function handleSearch() {
    const raw = cityInput.value.trim();
    if (!raw) {
      errorMsg.textContent = "Please enter a city name.";
      return;
    }
    errorMsg.textContent = "";
    weatherResult.innerHTML = "";
    try {
      setLoading(true);
      const place = await geocodeCity(raw);
      const data = await fetchWeatherByCoords(place.lat, place.lon);
      setLoading(false);
      errorMsg.textContent = "";
      renderResult(data);
    } catch (e) {
      setLoading(false);
      weatherResult.innerHTML = "";
      errorMsg.textContent = e.message || "Something went wrong";
    }
  }

  searchBtn.addEventListener("click", handleSearch);
  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });
});
