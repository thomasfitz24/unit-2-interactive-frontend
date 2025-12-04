
# Weather Dashboard (SkyCast)

This repository contains my Unit 2 project for the Level 5 Diploma in Web Application Development.

---

## Table of Contents

* [Project Overview](#project-overview)
* [User Stories](#user-stories)
* [Features &amp; Highlights](#features--highlights)
* [Wireframe](#wireframe)
* [Rationale](#Rationale)
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

## Wireframe

### Wireframes
<img width="1024" height="1536" alt="Wireframes3" src="https://github.com/user-attachments/assets/2761a11c-5a5e-4c2c-bc4a-1af71af00746" />
<img width="1024" height="1536" alt="Wireframes2" src="https://github.com/user-attachments/assets/d26c506a-c6e6-4d44-a61f-0440bdb15fab" />
<img width="1024" height="1536" alt="Wireframes" src="https://github.com/user-attachments/assets/43f474c8-7768-4050-a992-bf5a27d49601" />

## Rationale

SkyCast is a responsive weather dashboard designed to give users a clear, accessible view of current and future weather conditions in any city. The project brings together live API data, an interactive map, and multiple forecast views (current, 5-day, hourly) in a single interface. It was built as my Unit 2 project for the Level 5 Diploma in Web Application Development to demonstrate practical front-end skills in JavaScript, API integration, responsive layout, and accessibility.

The idea for SkyCast came from the limitations of many basic weather apps and browser widgets, which often show only a single forecast view, provide limited context, or lack accessibility features. As someone who regularly checks weather across different timescales (today, the week ahead, and the next few hours), I wanted a dashboard that felt more informative and “dashboard-like” rather than just a basic card with temperature and an icon. At the same time, I wanted the project to feel like a realistic product that could be extended in the future, rather than a small one-page demo.

In a wider context, weather information is a common use-case for web apps, but the quality of the implementation can vary significantly. Some sites are cluttered, visually inconsistent, or difficult to use on mobile devices. Others neglect accessibility: low-contrast colour schemes, missing ARIA attributes, and lack of keyboard support all create barriers for users with visual or motor impairments. This project was an opportunity to design a weather dashboard that is both visually engaging and built with accessibility in mind from the outset.

SkyCast focuses on solving a few core problems:

- Bringing together **current**, **5-day**, and **hourly** forecasts in a way that is easy to scan.  
- Making the data understandable and visually structured, rather than just dumping raw API output.  
- Ensuring that the interface remains usable and readable for users who rely on keyboard navigation or high contrast.  
- Providing a sense of geographic context through an interactive map, rather than just text-based city names.

The solution is a multi-page site with a consistent layout and navigation. The main dashboard lets users search for a city and then displays:

- Current weather, including temperature, conditions, and key stats.  
- A 5-day forecast laid out as cards with dates, icons, and summary data.  
- An hourly forecast section to help users see short-term changes.  
- An interactive Leaflet.js map with OpenWeather overlays for clouds, precipitation, temperature, and wind.  

In addition, there is an About page explaining the purpose and technology behind the app, and a Contact page with a form so users can reach the developer. This helps the project feel like a small, cohesive product rather than a single standalone page.

Under the hood, SkyCast uses the OpenWeatherMap API combined with JavaScript to fetch and process weather data. Geocoding is used to improve city search reliability and support edge cases like duplicated city names. The interface is built with semantic HTML5, ARIA roles, and live regions for dynamic updates, so screen readers can announce changes when new weather data loads or errors occur. The High Contrast Mode toggle was added specifically to support users with visual impairments, switching the colour scheme to a high-contrast palette while preserving hierarchy between cards, text, and alerts. All pages were validated using W3C tools, and the structure was refined until the code passed without errors.

This project deliberately stays within a front-end scope. There is no back-end, user login, or database for saving preferences; the contact form is presentational rather than wired to a server. These limitations reflect the Unit 2 brief and the focus on client-side JavaScript, responsiveness, and accessibility. However, the way the code is structured—separating concerns between layout, API calls, and UI updates—means that features like persisted favourite cities, localisation, or a real contact handler could be added in future iterations.

Overall, SkyCast was created to show how a common use case (checking the weather) can be turned into a more thoughtful, accessible web application. By combining live API data, responsive design, high-contrast support, ARIA-aware interactions, and an interactive map, the project demonstrates how front-end technologies can be used to build a dashboard that is both visually engaging and inclusive for a wide range of users.



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


  
<img width="563" height="990" alt="Screenshot 2025-09-14 at 17 26 42" src="https://github.com/user-attachments/assets/700b4a7e-f1f8-490b-80a1-e60bca388268" />
<img width="637" height="982" alt="Screenshot 2025-09-14 at 17 26 36" src="https://github.com/user-attachments/assets/da36482e-4bca-4bd6-bfdb-2472bd66d7ac" />
<img width="650" height="976" alt="Screenshot 2025-09-14 at 17 26 24" src="https://github.com/user-attachments/assets/21bec2d8-ef7c-47dd-825d-f3f1696cbdb7" />
<img width="652" height="986" alt="Screenshot 2025-09-14 at 17 26 15" src="https://github.com/user-attachments/assets/af7e4949-6905-48f0-8dde-8fd3ced29205" />
<img width="732" height="962" alt="Screenshot 2025-09-14 at 17 26 07" src="https://github.com/user-attachments/assets/19d8a134-590a-45a1-96bf-68ef6c2662d7" />
<img width="695" height="963" alt="Screenshot 2025-09-14 at 17 26 00" src="https://github.com/user-attachments/assets/d27ecf2b-87fc-4bf7-bb49-70474baa3255" />
<img width="735" height="967" alt="Screenshot 2025-09-14 at 17 25 50" src="https://github.com/user-attachments/assets/b304aa76-b3b8-4e23-835c-29b8d62c23d8" />
<img width="677" height="956" alt="Screenshot 2025-09-14 at 17 25 44" src="https://github.com/user-attachments/assets/1417a4b7-2761-4fbd-bcc1-179d8d7111a1" />
<img width="635" height="592" alt="Screenshot 2025-09-14 at 17 23 24" src="https://github.com/user-attachments/assets/ccf012fe-ea7d-49f8-9c77-f2a18baee6f5" />
<img width="599" height="896" alt="Screenshot 2025-09-14 at 17 21 15" src="https://github.com/user-attachments/assets/ed028fe1-2de6-4797-b8ce-b536c77ef855" />
<img width="464" height="901" alt="Screenshot 2025-09-14 at 17 21 10" src="https://github.com/user-attachments/assets/fd62825a-3761-44d4-b6a9-ff32ef8dbd1d" />

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
20. Improved accessibility and responsiveness for all devices and impaired users
21. Inserted OpenWeatherMap API key and tested weather fetch
22. <img width="1919" height="1071" alt="Screenshot 2025-09-06 at 21 16 17" src="https://github.com/user-attachments/assets/a68de589-4de3-4c86-8fca-1332021fd714" />
23. Switch to geocoding + weather by coordinates to fix 'city not found' edge cases
24. <img width="1920" height="991" alt="Screenshot 2025-09-06 at 21 07 52" src="https://github.com/user-attachments/assets/4f460780-bfbc-44c1-b0b5-f54080a63782" />
25. Geocoding-based weather fetch and styled result card
26. Rename weather-nums to weather-stats; clean duplicate CSS
27. Added 5-day forecast section with cards and updated styles
28. <img width="1920" height="980" alt="Screenshot 2025-09-06 at 21 19 10" src="https://github.com/user-attachments/assets/aa33eefc-7f3b-482f-a98b-dad4e94e016d" />
29. Updated README to include new features: sunrise, sunset, flags, forecast details
30. Full update: current weather with flag/sunrise/sunset, 5-day forecast, hourly forecast, Met Office styling
32. Updated README to include hourly forecast and styling changes
33. <img width="1919" height="986" alt="Screenshot 2025-09-06 at 21 21 17" src="https://github.com/user-attachments/assets/4e739790-cf51-4a3d-8a62-b9069c235167" />
<img width="1901" height="832" alt="Screenshot 2025-09-06 at 21 29 37" src="https://github.com/user-attachments/assets/5c4927d5-1fe7-4bb9-b663-edb0355fbd6b" />
<img width="1908" height="987" alt="Screenshot 2025-09-06 at 21 26 34" src="https://github.com/user-attachments/assets/5f548f7a-8260-4430-b85d-a62c25b323f7" />
<img width="1470" height="956" alt="Screenshot 2025-09-06 at 21 23 44" src="https://github.com/user-attachments/assets/9ad05746-60e7-4135-aa0b-ab45f769fce6" />
34. Updated layout: current weather on left, 5-day forecast on right
<img width="1648" height="732" alt="Screenshot 2025-09-06 at 21 35 10" src="https://github.com/user-attachments/assets/4732c350-2dd7-4d6d-9ce4-ff8f9ac37beb" />
36. Updated README to document new side-by-side layout for current weather and forecast
38. Updated header with SkyCast branding, boxed nav links, redesigned search bar
39. <img width="1899" height="938" alt="Screenshot 2025-09-06 at 21 42 13" src="https://github.com/user-attachments/assets/28906fe6-eaaa-4234-a71c-5e7a1930fd73" />
40. Made search bar responsive with max-width and mobile adjustments
    <img width="1911" height="984" alt="Screenshot 2025-09-06 at 21 47 32" src="https://github.com/user-attachments/assets/760a65fc-7696-43b2-ac19-65e855365504" />
42. Unified header, main forecast, and hourly forecast widths for consistent layout
43. <img width="1914" height="998" alt="Screenshot 2025-09-06 at 21 49 31" src="https://github.com/user-attachments/assets/19ee2d73-c693-4647-bd8a-56768939adad" />
44. Updated layout: all sections full-width to fit any screen
45. <img width="1918" height="991" alt="Screenshot 2025-09-06 at 21 52 51" src="https://github.com/user-attachments/assets/92cd058f-4490-4f4f-9343-6a8d3fc85215" />
46. Fixed High Contrast mode: current weather meta boxes visible with dark background and high contrast text
<img width="1920" height="994" alt="Screenshot 2025-09-06 at 22 19 50" src="https://github.com/user-attachments/assets/636897c0-a377-4706-b8fa-5af9e0610f39" />
<img width="1907" height="975" alt="Screenshot 2025-09-06 at 22 19 03" src="https://github.com/user-attachments/assets/6bdf077f-fa9d-4997-97a8-d9cf8aa80910" />
<img width="1920" height="981" alt="Screenshot 2025-09-06 at 22 07 40" src="https://github.com/user-attachments/assets/456cf1b0-2c53-4462-ae6b-bb67d7ab8f09" />
48. Updated README with High Contrast Mode details, full color palette with hex codes, typography, and development process for assignment
49. Added geolocation support: auto-loads weather for user's current location
51. Fixed layout: current weather and 5-day forecast side by side, corrected loading/render issues
52. Updated footer: matched header color, added navigation links, and included company description
54. Updated header padding to 40px 40px for consistent spacing
55. Fixed styling: removed bullet points from meta lists and aligned hourly forecast with main layout
56. <img width="1913" height="829" alt="Screenshot 2025-09-06 at 23 31 28" src="https://github.com/user-attachments/assets/b86be97d-bc35-4bac-874c-b144d534db66" />
<img width="1916" height="958" alt="Screenshot 2025-09-06 at 23 25 21" src="https://github.com/user-attachments/assets/561c9c15-ff40-4072-9407-b1f17c6637e0" />
<img width="1906" height="940" alt="Screenshot 2025-09-06 at 22 47 12" src="https://github.com/user-attachments/assets/58d3c465-9c53-4c89-bd5e-32b41d9f8303" />
<img width="1912" height="944" alt="Screenshot 2025-09-06 at 22 42 24" src="https://github.com/user-attachments/assets/5d39dd32-6558-4436-b875-1730ee51e5a2" />
57. Added interactive weather map with selectable overlay layers (Clouds, Precipitation, Temperature, Wind)
58. Updated README with new features: weather map overlays, styling fixes, and accessibility improvements
59. Fix: hide forecast, hourly, and map sections when city search fails
60. <img width="1908" height="979" alt="Screenshot 2025-09-14 at 11 32 52" src="https://github.com/user-attachments/assets/ba1ece74-0b6d-4f08-a5b3-16b51386c23a" />
61. Created about.html file, starting About page
63. Added base layout for about.html with header and footer
64. Removed background image from about.html by applying about-page override
65. <img width="1920" height="978" alt="Screenshot 2025-09-14 at 11 58 19" src="https://github.com/user-attachments/assets/e50c34aa-bcf1-42b5-b91f-ac860f7d29e9" />
<img width="1919" height="953" alt="Screenshot 2025-09-14 at 11 56 17" src="https://github.com/user-attachments/assets/743b0b48-0a0a-4e72-9b59-796b61c0dc98" />
66. Expanded About page with Our Story, Technology, Commitment sections and styled with card layout
67. <img width="1920" height="990" alt="Screenshot 2025-09-14 at 12 52 02" src="https://github.com/user-attachments/assets/3f90afce-5008-4682-b2fa-f0581fbb75f4" />
68. Added contact form to About page and adjusted styling to match About section width
69. Updated README with About page, Contact form, weather map, and styling improvements
70. Fix: Enable high contrast toggle on About page (prevents JS errors)
72. Fix: Make About page paragraph text white in High Contrast mode
73. <img width="1893" height="979" alt="Screenshot 2025-09-14 at 15 25 00" src="https://github.com/user-attachments/assets/2c95b67a-8be9-4a3c-b31d-3174499882be" />
<img width="1907" height="986" alt="Screenshot 2025-09-14 at 15 24 46" src="https://github.com/user-attachments/assets/a10b1e51-05c3-48c0-8c51-9f8d8be390b4" />
74. Add: Initial Contact page with header and footer
75. <img width="1921" height="975" alt="Screenshot 2025-09-14 at 15 28 08" src="https://github.com/user-attachments/assets/9541fc8a-d3d7-4f73-b0c1-6389aadf67cf" />
76. Add: Basic contact form structure to Contact page
77. <img width="1899" height="944" alt="Screenshot 2025-09-14 at 15 30 36" src="https://github.com/user-attachments/assets/4366bc22-b438-4a0a-adcb-787272cb4e8e" />
78. Update: Contact page with white background and high contrast support
79. <img width="1921" height="947" alt="Screenshot 2025-09-14 at 15 36 24" src="https://github.com/user-attachments/assets/300965c2-cc4f-4ce0-a97a-fa2955df68bf" />
<img width="1917" height="864" alt="Screenshot 2025-09-14 at 15 36 31" src="https://github.com/user-attachments/assets/514ee44b-acbe-45e4-ac69-96e5fe10f3de" />
80. Update: Added info section to Contact page
<img width="1907" height="939" alt="Screenshot 2025-09-14 at 15 38 46" src="https://github.com/user-attachments/assets/2af9a386-5dac-4300-9fe8-91511ee9eb65" />
82. Checkpoint: Current state before fixing GitHub Pages heading/image issues
83. <img width="1870" height="985" alt="Screenshot 2025-09-14 at 16 21 35" src="https://github.com/user-attachments/assets/3abb94a3-5e38-4378-8946-c5adc5bac10a" />
<img width="1922" height="1029" alt="Screenshot 2025-09-14 at 15 56 36" src="https://github.com/user-attachments/assets/2f7f76be-88a2-4fbe-a865-7586487082e3" />
84. Fix: cleaned HTML structure, updated footer links, improved accessibility across pages
85. <img width="1921" height="986" alt="Screenshot 2025-09-14 at 16 45 54" src="https://github.com/user-attachments/assets/8844d68a-338e-4a4e-9619-430873d2a879" />
<img width="1920" height="720" alt="Screenshot 2025-09-14 at 16 46 03" src="https://github.com/user-attachments/assets/644ba02b-3e9c-479d-ad09-dcab2ee7753b" />
86. Docs: added Table of Contents to README
87. Docs: added User Stories section to README
88. Docs: added Wireframes & Design Rationale section to README
89. Fix: corrected new W3C validation errors on index.html (semantic structure and attribute fixes)
90. <img width="1917" height="991" alt="Screenshot 2025-09-14 at 17 09 02" src="https://github.com/user-attachments/assets/97968eb2-9b10-4b0a-843e-84ea6a5d85ac" />
<img width="1876" height="419" alt="Screenshot 2025-09-14 at 17 07 41" src="https://github.com/user-attachments/assets/ba702708-0e8c-4b36-aed5-9bef54f20e6a" />
91. Fix: W3C validation errors on about.html (added hidden heading to first section for accessibility and structure)
92. <img width="1917" height="993" alt="Screenshot 2025-09-14 at 17 12 53" src="https://github.com/user-attachments/assets/c9a6adae-11ea-4c76-945b-1181f33a02f0" />
<img width="1914" height="984" alt="Screenshot 2025-09-14 at 17 11 09" src="https://github.com/user-attachments/assets/56215663-3f0b-4efe-ba86-7ec0393d441d" />
93. Docs: updated README with mobile/tablet considerations and testing notes
94. <img width="563" height="990" alt="Screenshot 2025-09-14 at 17 26 42" src="https://github.com/user-attachments/assets/e93942db-36ef-46c1-b35f-a8a0d2ba5ea4" />
<img width="637" height="982" alt="Screenshot 2025-09-14 at 17 26 36" src="https://github.com/user-attachments/assets/32e76e39-21f1-4481-bb81-4fce8148a1a9" />
<img width="650" height="976" alt="Screenshot 2025-09-14 at 17 26 24" src="https://github.com/user-attachments/assets/bf6d30cb-ca57-4091-af7a-e032c183c09f" />
<img width="652" height="986" alt="Screenshot 2025-09-14 at 17 26 15" src="https://github.com/user-attachments/assets/bd76b06c-216d-4561-8230-c7ca16383e41" />
<img width="732" height="962" alt="Screenshot 2025-09-14 at 17 26 07" src="https://github.com/user-attachments/assets/37a7e77f-64a9-4033-a948-3a7bbb4510e1" />
<img width="695" height="963" alt="Screenshot 2025-09-14 at 17 26 00" src="https://github.com/user-attachments/assets/8f3844b0-da42-464b-a313-8d38e17696ba" />
<img width="735" height="967" alt="Screenshot 2025-09-14 at 17 25 50" src="https://github.com/user-attachments/assets/e5212b8e-1aac-4310-be85-07337d7a5c1e" />
<img width="677" height="956" alt="Screenshot 2025-09-14 at 17 25 44" src="https://github.com/user-attachments/assets/4aa5cc25-1fdd-4a66-913e-61877b9119b8" />
<img width="635" height="592" alt="Screenshot 2025-09-14 at 17 23 24" src="https://github.com/user-attachments/assets/cf6e42d3-3551-409a-8910-15802e86fb18" />
<img width="599" height="896" alt="Screenshot 2025-09-14 at 17 21 15" src="https://github.com/user-attachments/assets/e7807b8e-fa16-4394-a559-d19a0c5ee2cc" />

95. Docs: add Accessibility Notes section to README
96. Expanded Development Process section into detailed Development Notes & Workflow, including mobile fixes, accessibility, and validation updates

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
<img width="1917" height="991" alt="Screenshot 2025-09-14 at 17 09 02" src="https://github.com/user-attachments/assets/93ad0c40-7489-4401-9ce0-2de8e738aa4b" />
<img width="1924" height="984" alt="Screenshot 2025-09-14 at 17 14 28" src="https://github.com/user-attachments/assets/90a1fd7c-92a3-4bac-b5ac-4aee4636d50b" />
<img width="1917" height="993" alt="Screenshot 2025-09-14 at 17 12 53" src="https://github.com/user-attachments/assets/9a9f8912-8a2b-40f4-88e2-55cb1a54e834" />

* Fully tested on iPhone/iPad with screenshots.
* Accessibility implemented (contrast, ARIA, keyboard navigation).
* 58 commits logged for version control.

**SkyCast is complete and ready for deployment.**
