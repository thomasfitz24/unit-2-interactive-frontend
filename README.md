
# Weather Dashboard (SkyCast)

This repository contains my Unit 2 project for the Level 5 Diploma in Web Application Development.

---

## Table of Contents

* [Project Overview](#project-overview)
* [User Stories](#user-stories)
* [Features &amp; Highlights](#features--highlights)
* [Wireframes &amp; Design Rationale](#wireframes--design-rationale)
* [Mobile and Tablet Considerations](#mobile-and-tablet-considerations)
* [Development Notes &amp; Workflow](#development-notes--workflow)
* [Accessibility Notes](#accessibility-notes)
* [Color Palette](#color-palette)
* [Typography](#typography)
* [Setup](#setup)
* [Deployment](#deployment)
* [Git Command Timeline](#git-command-timeline)
* [Future Enhancements](#future-enhancements)
* [Credits](#credits)
* [Final Notes](#final-notes)

---

## Project Overview

The Weather Dashboard (SkyCast) is a front-end web application that allows users to search for a city and view the current weather conditions along with both a 5-day forecast and an hourly forecast. It is built with **HTML, CSS, and JavaScript** and retrieves live data from the  **OpenWeatherMap API** .

The dashboard is fully responsive, visually engaging with an autumn background image, and includes accessibility features such as  **High Contrast Mode** . It also has a dedicated **About Page** and a  **Contact Form** .

---

## User Stories

* As a user, I want to search for a city so I can view current weather conditions.
* As a user, I want to see a 5-day forecast so I can plan ahead.
* As a user, I want an hourly forecast so I can prepare for short-term changes.
* As a visually impaired user, I want to toggle High Contrast Mode for readability.
* As a user, I want to see an interactive weather map to explore different locations.
* As a visitor, I want to learn about the project on the About page.
* As a user, I want to contact the developer via the Contact form.

---

## Features & Highlights

* **Live Weather Data** – Powered by OpenWeatherMap API.
* **Interactive Weather Map** – Leaflet.js overlays for clouds, precipitation, temperature, and wind.
* **Accessibility First** – High Contrast Mode, ARIA live regions, keyboard-friendly navigation.
* **Responsive Design** – Works across desktop, tablet, and mobile.
* **Engaging Visuals** – Autumn background, card-based layout.
* **Consistent Navigation** – Shared header/footer with Home, About, and Contact links.

---

## Wireframes & Design Rationale

### Design Rationale

* **Autumn theme** : visually appealing and distinct.
* **Card-based layout** : weather data grouped for clarity.
* **High Contrast Mode** : inclusive for visually impaired users.
* **Consistent navigation** across all pages.
* **Responsive grid** : adapts smoothly to all devices.

### Wireframes

*(Insert wireframe screenshots here)*

---

## Mobile and Tablet Considerations

The site was tested on iPhone and iPad to ensure responsiveness.

**Key changes for smaller screens:**

* Nav collapses into a vertical list.
* Search bar stacks input and button vertically.
* Forecast grid adapts from 5 → 2 → 1 columns depending on screen size.
* Hourly forecast shows 2 cards per row on mobile.
* Map height reduces on smaller screens.
* Footer stacks vertically and centers text.

*(Insert screenshots from testing here)*

---

## Development Notes & Workflow

Key phases:

* **Setup** : Repo initialized with index.html, CSS, JS.
* **Layout** : Header, nav, search bar, and placeholders created.
* **Weather Integration** : Connected to API for current, 5-day, hourly forecasts.
* **Accessibility** : Added High Contrast Mode, ARIA roles, keyboard navigation.
* **Map** : Leaflet.js with OWM overlays (clouds, temp, wind, precipitation).
* **Responsive Styling** : Fixed mobile/iPad layouts, stacking, grids.
* **Validation** : Fixed all W3C HTML & CSS errors.
* **Testing** : Browser/device tested, screenshots captured.

---

## Accessibility Notes

* High Contrast Mode toggle with contrasting colors.
* Semantic HTML5 tags.
* ARIA roles & live regions for weather updates and errors.
* Keyboard navigation with focus indicators.
* Screen reader-friendly form labels.
* WCAG-level color contrast maintained.

---

## Color Palette

**Main Theme**

* Header/Footer: `#004c3f`
* Nav box: `#00695c`
* Buttons: `#00796b`
* Hover: `#004c3f`
* Highlight Yellow: `#f1c40f` / hover `#d4ac0d`
* Temp Orange: `#e67e22`
* Text: `#333`
* Cards: `#fff` / `#f5f5f5`

**High Contrast Mode**

* Background: `#000`
* Cards: `#111`
* Text: `#fff`
* Temps: `#f1c40f`
* Descriptions: `#00ffff`
* Errors: `#ff4444`

---

## Typography

<pre class="overflow-visible!" data-start="4968" data-end="5042"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-css"><span><span>font-family</span><span>: </span><span>'Segoe UI'</span><span>, Tahoma, Geneva, Verdana, sans-serif;
</span></span></code></div></div></pre>

---

## Setup

1. Clone/download repo.
2. Open `index.html` in a browser (or use Live Server).
3. Get a free OpenWeatherMap API key.
4. Add your API key in `script.js`:
   <pre class="overflow-visible!" data-start="5223" data-end="5282"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-javascript"><span><span>var</span><span> apiKey = </span><span>"YOUR_API_KEY_HERE"</span><span>;
   </span></span></code></div></div></pre>

---

## Deployment

Deployed on GitHub Pages for live access.

---

## Git Command Timeline

The project has  **58 commits** , documenting incremental development. Screenshots of each commit proof should be inserted here.

1. Initial commit - Unit 2 project setup
2. <img width="1786" height="979" alt="Screenshot 2025-09-06 at 20 11 33" src="https://github.com/user-attachments/assets/47700b09-cc64-48ba-a87f-897816dbae95" />
3. Initial commit
4. <img width="1914" height="997" alt="Screenshot 2025-09-06 at 20 28 39" src="https://github.com/user-attachments/assets/5fd8f48a-dd84-4e2e-b51a-6e5eb07d6c70" />
<img width="1903" height="934" alt="Screenshot 2025-09-06 at 20 39 41" src="https://github.com/user-attachments/assets/469c6a26-ebca-4470-afe6-65d7506b169b" />
<img width="1863" height="966" alt="Screenshot 2025-09-06 at 20 37 45" src="https://github.com/user-attachments/assets/7c4008e4-b671-4e41-94b4-8e568aa960bb" />
5. Resolved merge conflicts with remote main
6. Starting Unit 2: Added index.html, css, js, and updated README
7. <img width="180" height="188" alt="Screenshot 2025-09-06 at 20 40 57" src="https://github.com/user-attachments/assets/4dc3440b-cd77-40e6-a1ef-94ab894061e6" />
8. Set up Weather Dashboard starter files
9. Added CSS reset and header styling
10. <img width="1897" height="957" alt="Screenshot 2025-09-06 at 20 45 37" src="https://github.com/user-attachments/assets/b6f4e541-d00d-4511-a514-6b5ae543e476" />
12. Linked stylesheet correctly and updated HTML head
13. Restored header navigation with links
14. <img width="1852" height="935" alt="Screenshot 2025-09-06 at 20 48 42" src="https://github.com/user-attachments/assets/090c69ec-00dd-4b93-b4f6-6591bf9096a5" />
15. Added search section heading and error message placeholder
16. <img width="1907" height="993" alt="Screenshot 2025-09-06 at 21 04 09" src="https://github.com/user-attachments/assets/da4dad81-2b6e-40f0-bc89-2a320d131f25" />
17. Added search section with styling and README update
18. Set up base JavaScript structure for search button
19. <img width="1920" height="991" alt="Screenshot 2025-09-06 at 21 07 52" src="https://github.com/user-attachments/assets/59f21ec7-0fa8-423e-ae6b-25c54f54d750" />
20. Improved accessibility and responsiveness for all devices and impaired users
21. Inserted OpenWeatherMap API key and tested weather fetch
22. <img width="1919" height="1071" alt="Screenshot 2025-09-06 at 21 16 17" src="https://github.com/user-attachments/assets/a68de589-4de3-4c86-8fca-1332021fd714" />
23. Switch to geocoding + weather by coordinates to fix 'city not found' edge cases
24. <img width="1920" height="991" alt="Screenshot 2025-09-06 at 21 07 52" src="https://github.com/user-attachments/assets/4f460780-bfbc-44c1-b0b5-f54080a63782" />
25. Geocoding-based weather fetch and styled result card
26. Rename weather-nums to weather-stats; clean duplicate CSS
27. Added 5-day forecast section with cards and updated styles
28. Updated README to include new features: sunrise, sunset, flags, forecast details
29. Full update: current weather with flag/sunrise/sunset, 5-day forecast, hourly forecast, Met Office styling
30. Updated README to include hourly forecast and styling changes
31. Updated layout: current weather on left, 5-day forecast on right
32. Updated README to document new side-by-side layout for current weather and forecast
33. Updated header with SkyCast branding, boxed nav links, redesigned search bar
34. Made search bar responsive with max-width and mobile adjustments
35. Unified header, main forecast, and hourly forecast widths for consistent layout
36. Updated layout: all sections full-width to fit any screen
37. Fixed High Contrast mode: current weather meta boxes visible with dark background and high contrast text
38. Updated README with High Contrast Mode details, full color palette with hex codes, typography, and development process for assignment
39. Added geolocation support: auto-loads weather for user's current location
40. Fixed layout: current weather and 5-day forecast side by side, corrected loading/render issues
41. Updated footer: matched header color, added navigation links, and included company description
42. Updated header padding to 40px 40px for consistent spacing
43. Fixed styling: removed bullet points from meta lists and aligned hourly forecast with main layout
44. Added interactive weather map with selectable overlay layers (Clouds, Precipitation, Temperature, Wind)
45. Updated README with new features: weather map overlays, styling fixes, and accessibility improvements
46. Fix: hide forecast, hourly, and map sections when city search fails
47. Created about.html file, starting About page
48. Added base layout for about.html with header and footer
49. Removed background image from about.html by applying about-page override
50. Expanded About page with Our Story, Technology, Commitment sections and styled with card layout
51. Added contact form to About page and adjusted styling to match About section width
52. Updated README with About page, Contact form, weather map, and styling improvements
53. Fix: Enable high contrast toggle on About page (prevents JS errors)
54. Fix: Make About page paragraph text white in High Contrast mode
55. Add: Initial Contact page with header and footer
56. Add: Basic contact form structure to Contact page
57. Update: Contact page with white background and high contrast support
58. Update: Added info section to Contact page
59. Checkpoint: Current state before fixing GitHub Pages heading/image issues
60. Fix: cleaned HTML structure, updated footer links, improved accessibility across pages
61. Docs: added Table of Contents to README
62. Docs: added User Stories section to README
63. Docs: added Wireframes & Design Rationale section to README
64. Fix: corrected new W3C validation errors on index.html (semantic structure and attribute fixes)
65. Fix: W3C validation errors on about.html (added hidden heading to first section for accessibility and structure)
66. Docs: updated README with mobile/tablet considerations and testing notes
67. Docs: add Accessibility Notes section to README
68. Expanded Development Process section into detailed Development Notes & Workflow, including mobile fixes, accessibility, and validation updates

*(Insert commit screenshots alongside each entry here)*

---

## Future Enhancements

* Save favorite cities.
* Multi-language support.
* Persistent High Contrast via local storage.
* Multiple map overlays toggled at once.
* Forecast charts (temp, humidity, wind).
* Dedicated Contact page with backend support.

---

## Credits

* **API & Data** : [OpenWeatherMap](https://openweathermap.org/)
* **Mapping** : [Leaflet.js]() + [OpenStreetMap](https://www.openstreetmap.org/)
* **Inspiration** : Code Institute Unit 2 guidelines
* **Accessibility References** : WCAG, ARIA docs
* **Testing** : Browser DevTools, iPhone, iPad
* **Icons/Images** : OpenWeatherMap icons, custom autumn background

---

## Final Notes

* All pages validated with **W3C** – no errors.
* Fully tested on iPhone/iPad with screenshots.
* Accessibility implemented (contrast, ARIA, keyboard navigation).
* 58 commits logged for version control.

**SkyCast is complete and ready for deployment.**
