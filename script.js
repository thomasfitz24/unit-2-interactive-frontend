document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const errorMsg = document.getElementById("errorMsg");
  const weatherResult = document.getElementById("weatherResult");

  searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city) {
      console.log("Searching weather for:", city);
      errorMsg.textContent = "";
      weatherResult.innerHTML = "";
    } else {
      errorMsg.textContent = "Please enter a city name.";
    }
  });
});
