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


## Git Command Timeline

1. **Initial commit - Unit 2 project setup**
2. **Initial commit**
3. **Resolved merge conflicts with remote main**
4. **Starting Unit 2: Added index.html, css, js, and updated README**
5. **Set up Weather Dashboard starter files**
6. **Added CSS reset and header styling**
7. **Linked stylesheet correctly and updated HTML head**
8. **Restored header navigation with links**
9. **Added search section heading and error message placeholder**
10. **Added search section with styling and README update**
11. **Set up base JavaScript structure for search button**
12. **Improved accessibility and responsiveness for all devices and impaired users**
13. **Inserted OpenWeatherMap API key and tested weather fetch**
14. **Switch to geocoding + weather by coordinates to fix 'city not found' edge cases**
15. **Geocoding-based weather fetch and styled result card**
16. **Rename weather-nums to weather-stats; clean duplicate CSS**
17. **Added 5-day forecast section with cards and updated styles**
18. **Updated README to include new features: sunrise, sunset, flags, forecast details**
19. **Full update: current weather with flag/sunrise/sunset, 5-day forecast, hourly forecast, Met Office styling**
20. **Updated README to include hourly forecast and styling changes**
21. **Updated layout: current weather on left, 5-day forecast on right**
22. **Updated README to document new side-by-side layout for current weather and forecast**
23. **Updated header with SkyCast branding, boxed nav links, redesigned search bar**
24. **Made search bar responsive with max-width and mobile adjustments**
25. **Unified header, main forecast, and hourly forecast widths for consistent layout**
26. **Updated layout: all sections full-width to fit any screen**
27. **Fixed High Contrast mode: current weather meta boxes visible with dark background and high contrast text**
28. **Updated README with High Contrast Mode details, full color palette with hex codes, typography, and development process for assignment**
29. **Added geolocation support: auto-loads weather for user's current location**
30. **Fixed layout: current weather and 5-day forecast side by side, corrected loading/render issues**
31. **Updated footer: matched header color, added navigation links, and included company description**
32. **Updated header padding to 40px 40px for consistent spacing**
33. **Fixed styling: removed bullet points from meta lists and aligned hourly forecast with main layout**
34. **Added interactive weather map with selectable overlay layers (Clouds, Precipitation, Temperature, Wind)**
35. **Updated README with new features: weather map overlays, styling fixes, and accessibility improvements**
36. **Fix: hide forecast, hourly, and map sections when city search fails**
37. **Created about.html file, starting About page**
38. **Added base layout for about.html with header and footer**
39. **Removed background image from about.html by applying about-page override**
40. **Expanded About page with Our Story, Technology, Commitment sections and styled with card layout**
41. **Added contact form to About page and adjusted styling to match About section width**
42. **Updated README with About page, Contact form, weather map, and styling improvements**
43. **Fix: Enable high contrast toggle on About page (prevents JS errors)**
44. **Fix: Make About page paragraph text white in High Contrast mode**
45. **Add: Initial Contact page with header and footer**
46. **Add: Basic contact form structure to Contact page**
47. **Update: Contact page with white background and high contrast support**
48. **Update: Added info section to Contact page**
49. **Checkpoint: Current state before fixing GitHub Pages heading/image issues**
50. **Fix: cleaned HTML structure, updated footer links, improved accessibility across pages**
51. **Docs: added Table of Contents to README**
52. **Docs: added User Stories section to README**
53. **Docs: added Wireframes & Design Rationale section to README**
54. **Fix: corrected new W3C validation errors on index.html (semantic structure and attribute fixes)**
55. **Fix: W3C validation errors on about.html (added hidden heading to first section for accessibility and structure)**
56. **docs: updated README with mobile/tablet considerations and testing notes**
57. **docs: add Accessibility Notes section to README**
58. **Expanded Development Process section into detailed Development Notes & Workflow, including mobile fixes, accessibility, and validation updates**


## User Stories

- As a user, I want to search for a city so I can view current weather conditions.
- As a user, I want to see a 5-day forecast so I can plan ahead for the week.
- As a user, I want an hourly forecast so I can prepare for short-term changes in the weather.
- As a visually impaired user, I want to toggle High Contrast Mode so I can read the content more easily.
- As a user, I want to see an interactive weather map so I can explore different locations visually.
- As a visitor, I want to learn about the project on the About page so I understand its purpose and technology.
- As a user, I want to contact the developer via the Contact form so I can share feedback or ask questions.


## Features & Highlights

* **Live Weather Data** – Powered by the OpenWeatherMap API, delivering current, hourly, and 5-day forecasts.
* **Interactive Weather Map** – Visualize clouds, precipitation, temperature, and wind with Leaflet.js overlays.
* **Accessibility First** – Includes a High Contrast Mode, ARIA live regions, and keyboard-friendly navigation.
* **Responsive Design** – Works seamlessly across desktop, tablet, and mobile devices.
* **Simple Navigation** – Clean header and footer with clear links to Home, About, and Contact.
* **Engaging Visuals** – Autumn-themed background and card-based layout for readability and appeal.

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

## Mobile and Tablet Considerations

The site has been thoroughly tested on iPhone and iPad devices to ensure full responsiveness. Adjustments were made to the layout, grid system, and header design to maintain usability and readability across all screen sizes.

**Key changes for smaller screens:**

* Navigation collapses into a vertical column for easier tapping.
* Search bar stacks input and button vertically.
* Forecast grids adapt from 5-columns to 1-column (mobile) or 2-columns (small tablets).
* Hourly forecast shows 2 cards per row on mobile for better readability.
* Map height reduces for smaller screens.
* Footer stacks vertically with centered text.

**Screenshots of testing (iPhone & iPad):**

*(Insert screenshots here from your testing)*


## Development Notes & Workflow

The development of SkyCast was carried out in iterative stages, with version control used throughout to track changes and document progress. Below is a summary of the workflow, challenges, and fixes implemented:

### Initial Setup

* Created a new GitHub repository and initialized project files: `index.html`, `style.css`, and `script.js`.
* Linked repository to GitHub for version control and pushing commits.
* Added Leaflet.js and OpenWeatherMap API integration references.

### Layout & Structure

* Built core layout with  **header, navigation, and search bar** .
* Added placeholder sections for weather results, forecasts, and map.
* Styled with an **autumn background image** and **card-based layout** for readability.

### Weather Integration

* Connected to **OpenWeatherMap API** for live weather data.
* Implemented  **current weather** ,  **5-day forecast** , and **hourly forecast** features.
* Ensured data displays dynamically with icons, temperatures, humidity, wind, sunrise, and sunset times.

### Accessibility & Error Handling

* Added **High Contrast Mode toggle** with color-coded highlights.
* Implemented ARIA roles and live regions so screen readers announce weather changes.
* Added error handling: when invalid searches occur, forecast/map sections are hidden and error message displayed.

### Map Integration

* Integrated **Leaflet.js** with OpenStreetMap tiles.
* Added selectable overlay layers for **Clouds, Precipitation, Temperature, and Wind** using OpenWeatherMap layers.
* Made map responsive and hidden until a city is searched or geolocation is granted.

### Mobile & Tablet Responsiveness

* Styled responsive layouts for  **iPhone and iPad** , fixing:
  * Header/nav alignment.
  * Search bar stacking vertically on mobile.
  * Forecast grid adapting from 5-columns → 1-column (mobile) → 2-columns (tablet).
  * Hourly grid limited to 2 cards per row on mobile.
  * Footer stacked with centered alignment.
* Tested extensively with screenshots taken from Chrome DevTools + real devices.

### Validation & Fixes

* Ran **W3C HTML Validator** on all pages: fixed issues with `aria-current`, missing labels, and duplicate attributes.
* Cleaned up CSS to remove redundant code and ensure no style errors.
* Confirmed accessibility compliance with keyboard navigation and visible focus states.

### Final Testing & Polish

* Verified across multiple browsers (Chrome, Safari, Edge).
* Ensured **consistency between About, Contact, and Index pages** with shared header/footer.
* Confirmed no broken file paths (case sensitivity fixed for GitHub Pages).
* Prepared README and documentation for submission.

## Accessibility Notes

Accessibility was a key focus during development to ensure inclusivity:

* **High Contrast Mode** toggle improves readability for visually impaired users.
* **Semantic HTML5** elements used throughout for clear document structure.
* **ARIA roles and live regions** applied to navigation, weather updates, and error messages for screen reader compatibility.
* **Keyboard navigation** fully supported with visible focus indicators.
* **Form labels** linked to inputs for screen reader accessibility.
* **Color contrast** tested in both default and High Contrast modes to meet WCAG standards.
* **Responsive typography and layouts** to prevent zoom or scrolling issues on small devices.

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


## Credits

* **API & Data** : [OpenWeatherMap](https://openweathermap.org/) for live weather data.
* **Mapping** : [Leaflet.js]() with [OpenStreetMap](https://www.openstreetmap.org/) tiles for interactive weather maps.
* **Inspiration** : Project structure and workflow influenced by Code Institute guidelines for Unit 2.
* **Accessibility References** : WCAG guidelines and online resources for implementing ARIA roles, live regions, and high-contrast color schemes.
* **Testing** : Browser DevTools (Chrome, Safari, Edge) and device testing (iPhone, iPad).
* **Icons/Images** : Weather icons and assets provided by OpenWeatherMap; custom autumn background image created for theme consistency.

---

## Final Notes

This project demonstrates my ability to design and implement a fully responsive, accessible, and visually appealing front-end web application.

* All pages validated with **W3C HTML & CSS validators** — no errors remain.
* Mobile and tablet testing completed on  **iPhone and iPad** , with layout fixes applied.
* Accessibility implemented via  **High Contrast Mode, ARIA roles, semantic HTML, and keyboard navigation** .
* GitHub version control was used throughout development, with **58 commits** documenting each stage of progress.

SkyCast (Weather Dashboard) is now complete and ready for deployment. Future work may include adding backend functionality for form submissions, saving favorite cities, and multi-language support.
