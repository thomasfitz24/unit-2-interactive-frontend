document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const weatherResult = document.getElementById("weatherResult");

  searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    }
  });

  async function getWeather(city) {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();

      weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
      `;
    } catch (error) {
      weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
  }
});
