
# Weather Dashboard

This repository contains my Unit 2 project for the Level 5 Diploma in Web Application Development.

## Project Overview

The Weather Dashboard is a front-end web application that allows users to search for a city and view the current weather conditions along with both a 5-day forecast and an hourly forecast. It has been developed using HTML, CSS, and JavaScript. The project retrieves live data from the OpenWeatherMap API and displays it in a responsive, user-friendly layout inspired by the Met Office design.

## Current Features

- Header and navigation menu
- Search bar with input and button
- Error message placeholder
- Search for a city by name
- Display of current weather including:
  - Temperature
  - Feels-like value
  - Weather description
  - Humidity
  - Wind speed
  - Sunrise and sunset times
  - Country flag alongside the city name
- Side-by-side layout:
  - Today’s weather card is displayed on the **left**
  - 5-day forecast cards are displayed on the **right**
- 5-day forecast with daily temperature, min/max values, weather icons, and descriptions
- Hourly forecast showing the next 12 time slots with temperature, icons, and descriptions
- Responsive layout that adapts to desktop and mobile devices (stacks vertically on smaller screens)
- Accessible design with ARIA attributes, keyboard focus states, and screen reader support
- Polished styling with bold temperature highlights, card layouts, and grid-based forecasts

## Setup

1. Clone or download the repository.
2. Open `index.html` in a browser (or use the Live Server extension in VS Code).
3. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.
4. Insert your API key into `script.js` where indicated.

## Deployment

The project will be deployed to GitHub Pages for live testing and demonstration. Deployment details will be added once live.

## Accessibility and Responsiveness

- Navigation can be accessed fully using the keyboard, with visible focus states.
- All form fields have associated labels for screen reader support.
- Error messages are announced using ARIA roles.
- Weather results and forecasts are updated in live regions for assistive technology.
- Responsive design ensures the layout adjusts for mobile, tablet, and desktop users.

## Weather API

The application connects to the OpenWeatherMap API.

**Usage:**

- Type a city name and press Enter or click “Get Weather.”
- The app will display:
  - Current weather on the left (temperature, humidity, wind, sunrise, sunset, country flag, etc.)
  - A 5-day forecast on the right
  - An hourly forecast (next 12 slots) below
