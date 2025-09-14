# Weather Dashboard (SkyCast)

This repository contains my Unit 2 project for the Level 5 Diploma in Web Application Development.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Accessibility](#accessibility)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Setup](#setup)
- [Deployment](#deployment)
- [Development Process](#development-process)
- [Future Enhancements](#future-enhancements)



## User Stories

- As a user, I want to search for a city so I can view current weather conditions.
- As a user, I want to see a 5-day forecast so I can plan ahead for the week.
- As a user, I want an hourly forecast so I can prepare for short-term changes in the weather.
- As a visually impaired user, I want to toggle High Contrast Mode so I can read the content more easily.
- As a user, I want to see an interactive weather map so I can explore different locations visually.
- As a visitor, I want to learn about the project on the About page so I understand its purpose and technology.
- As a user, I want to contact the developer via the Contact form so I can share feedback or ask questions.


## Wireframes & Design Rationale

### Design Rationale

SkyCast was designed to be clean, modern, and user-friendly, with a strong focus on readability and accessibility:

- **Autumn theme**: Warm seasonal imagery provides visual appeal and contrast against the white About page.
- **Card-based layout**: Weather data is grouped into cards (current, forecast, hourly) for clarity and easy scanning.
- **High Contrast Mode**: Ensures inclusivity for visually impaired users.
- **Consistent navigation**: Simple header and footer across all pages (Home, About, Contact).
- **Responsive grid**: Scales across desktop, tablet, and mobile with minimal reflow.

### Wireframes

Initial layout ideas and wireframes were sketched to plan content structure before development.
 *— homepage, About page, Contact form, map view*).

# Weather Dashboard (SkyCast)

This repository contains my Unit 2 project for the Level 5 Diploma in Web Application Development.

---

## Project Overview

The Weather Dashboard (SkyCast) is a front-end web application that allows users to search for a city and view the current weather conditions along with both a 5-day forecast and an hourly forecast. It is built with  **HTML, CSS, and JavaScript** , and it retrieves live data from the  **OpenWeatherMap API** .

The dashboard is fully responsive, visually engaging with an autumn background image, and includes accessibility features such as **High Contrast Mode** for visually impaired users. It also includes a dedicated **About Page** and a **Contact Form** for user interaction.

---

## Features

* **Header and Navigation**
  * Branding with the SkyCast logo
  * Navigation links (Home | About | Contact)
* **Search**
  * Full-width search bar
  * Inline “Get Weather” button
  * Input allows city name queries
* **Current Weather Card**
  * City name and country flag
  * Temperature
  * Weather description
  * Feels-like value
  * Humidity
  * Wind speed
  * Sunrise and sunset times
* **5-Day Forecast**
  * Daily temperatures (min/max)
  * Weather icons
  * Descriptions
  * Additional details: feels-like, humidity, and wind
  * Aligned in a clean row layout (no bullet points)
* **Hourly Forecast**
  * Next 12 time slots (3-hour intervals)
  * Temperature
  * Weather icons
  * Descriptions
  * Feels-like, humidity, and wind
  * Section aligned with main forecast (not full-bleed across screen)
* **Interactive Weather Map**
  * Built using **Leaflet.js** with OpenStreetMap tiles
  * Displays a marker at the selected city or current location
  * User-selectable overlays from  **OpenWeatherMap** :
    * Clouds
    * Precipitation
    * Temperature
    * Wind
  * Map stays hidden until a city is searched or location is granted
* **About Page**
  * Provides background on SkyCast
  * Sections for *Our Story, Technology, Commitment*
  * Plain white background to distinguish from dashboard
* **Contact Form**
  * Located on the About Page
  * Includes:
    * Name input
    * Email input
    * Message textarea
    * Submit button
  * Styled to match About content width
* **Accessibility**
  * **High Contrast Mode toggle** :
  * Black background with white text
  * Temperatures highlighted in **orange/yellow**
  * Descriptions highlighted in **cyan**
  * Error messages shown in **bright red**
  * ARIA attributes and live regions for screen reader support
  * Keyboard accessible navigation
  * Sections hide correctly when invalid searches are made (improved error handling)
* **Design**
  * Autumn-themed background image
  * Card-based layout with drop shadows
  * Consistent grid alignment
  * Fully responsive (desktop, tablet, and mobile)

---

## Accessibility

Accessibility was a key consideration in this project. Features include:

* **High Contrast Mode** for visually impaired users
* Semantic HTML with ARIA roles
* Search input labeled for screen readers
* Navigation with visible focus states
* Weather results update in live regions so assistive technologies announce changes
* About page simplified with plain white background for readability

---

## Color Palette

### Main Theme

* Dark Green (Header/Footer): `#004c3f`
* Medium Teal (Nav box): `#00695c`
* Teal Button: `#00796b`
* Hover Teal: `#004c3f`
* Highlight Yellow (Contrast toggle): `#f1c40f`
* Highlight Yellow Hover: `#d4ac0d`
* Temperature Orange: `#e67e22`
* Text Grey: `#333`
* Card Background White: `#fff`
* Card Background Light Grey: `#f5f5f5`
* Autumn Background Image: *custom JPEG in `images/autumn-image.jpeg`*

### High Contrast Mode

* Background: `#000`
* Card Background: `#000` or `#111`
* Text: `#fff`
* Temperatures: `#f1c40f`
* Descriptions: `#00ffff`
* Error messages: `#ff4444`

---

## Typography

The site uses a modern sans-serif font stack:

<pre class="overflow-visible!" data-start="4045" data-end="4117"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-css"><span><span>font-family</span><span>: </span><span>'Segoe UI'</span><span>, Tahoma, Geneva, Verdana, sans-serif;
</span></span></code></div></div></pre>

---

## Setup

1. Clone or download the repository.
2. Open `index.html` in a browser (or use the Live Server extension in VS Code).
3. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.
4. Insert your API key into `script.js` where indicated:

<pre class="overflow-visible!" data-start="4412" data-end="4463"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-javascript"><span><span>var</span><span> apiKey = </span><span>"YOUR_API_KEY_HERE"</span><span>;
</span></span></code></div></div></pre>

---

## Deployment

The project will be deployed to GitHub Pages for live testing and demonstration. Deployment instructions will be added once published.

---

## Development Process

This project was developed in stages to demonstrate version control and incremental development:

1. **Project Setup**
   * Created repository on GitHub
   * Initialized project with `index.html`, `style.css`, and `script.js`
   * Linked GitHub remote for pushes
2. **Basic Layout**
   * Added header, navigation, search bar, and placeholder sections
   * Created responsive structure
3. **Current Weather**
   * Integrated OpenWeatherMap API for live data
   * Displayed city, temperature, description, feels-like, humidity, wind, sunrise, and sunset
4. **Forecasts**
   * Implemented 5-day forecast using `forecast` endpoint
   * Implemented hourly forecast (12 slots)
5. **Styling**
   * Applied autumn background image
   * Styled cards with shadows, rounded corners, and consistent grids
   * Improved readability with contrast colors
   * Fixed bullet points in forecast/hourly cards
   * Aligned hourly section with main layout
6. **Accessibility**
   * Added ARIA roles and live regions
   * Implemented High Contrast Mode toggle
   * Fixed disappearing text issues in High Contrast Mode
7. **Weather Map**
   * Integrated Leaflet.js with OpenStreetMap base tiles
   * Added marker support
   * Added selectable overlay layers (Clouds, Precipitation, Temperature, Wind) from OpenWeatherMap
   * Made map responsive and hidden until location or search is available
8. **About Page**
   * Created dedicated `about.html`
   * Added “Our Story, Technology, Commitment” sections
   * Styled with plain white background
9. **Contact Form**
   * Added form to About page with inputs and textarea
   * Styled form to match page width
10. **Testing**
    * Verified across multiple screen sizes
    * Checked with screen reader and keyboard navigation
    * Confirmed error handling hides sections on failed search
11. **Final Polish**
    * Documented colors with hex codes
    * Documented font stack
    * Updated README for assessment submission

---

## Future Enhancements

* Option to save favorite cities
* Multi-language support
* Persistent High Contrast preference (saved in local storage)
* Multiple overlay support (toggle multiple layers at once)
* Forecast charts (temperature, humidity, wind trends)
* Dedicated Contact page with backend integration for form submissions
