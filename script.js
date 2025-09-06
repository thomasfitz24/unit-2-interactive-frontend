document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const errorMsg = document.getElementById("errorMsg");
  const weatherResult = document.getElementById("weatherResult");

  const apiKey = "d98f72edd0e88f4fd41bbd5af84ecc24";

  function renderResult(data) {
    const icon = data.weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : "";
    const desc = data.weather?.[0]?.description || "";
    const temp = Math.round(data.main?.temp);
    const feels = Math.round(data.main?.feels_like);
    const humidity = data.main?.humidity;
    const wind = data.wind?.speed;

    weatherResult.innerHTML = `
      <article class="weather-card" role="region" aria-label="Current weather for ${data.name}">
        <h2>${data.name}</h2>
        <div class="weather-top">
          ${icon ? `<img src="${icon}" alt="${desc}">` : ""}
          <div class="weather-nums">
            <p class="temp">${temp}°C</p>
            <p class="desc">${desc}</p>
          </div>
        </div>
        <ul class="meta">
          <li>Feels like: ${feels}°C</li>
          <li>Humidity: ${humidity}%</li>
          <li>Wind: ${wind} m/s</li>
        </ul>
      </article>
    `;
  }

  function setLoading(state) {
    weatherResult.textContent = state ? "Loading..." : "";
  }

  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    try {
      setLoading(true);
      const res = await fetch(url);
      setLoading(false);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      errorMsg.textContent = "";
      renderResult(data);
    } catch (e) {
      weatherResult.innerHTML = "";
      errorMsg.textContent = e.message || "Something went wrong";
    }
  }

  function handleSearch() {
    const city = cityInput.value.trim();
    if (!city) {
      errorMsg.textContent = "Please enter a city name.";
      return;
    }
    errorMsg.textContent = "";
    weatherResult.innerHTML = "";
    getWeather(city);
  }

  searchBtn.addEventListener("click", handleSearch);
  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });
});
