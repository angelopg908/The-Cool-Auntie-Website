# 🍫 The Cool Auntie Shop * Portfolio Project

Static website built for **The Cool Auntie**, a real small business selling homemade, high-protein healthy desserts in Costa Rica. Portfolio project showcasing UI design, responsive layout, and dependency-free vanilla JavaScript.

🌐 **Live demo:** [thecoolauntieshop.com](https://thecoolauntieshop.com)

---

## About the project

Full design and development of a single page website for a real client. The goal was to create an attractive, functional experience that lets the owner showcase her products, present subscription plans, and receive orders directly through WhatsApp, with no backend or third-party platforms required.

---

## Tech stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **HTML5** — semantic markup with accessibility (`aria-label`, landmarks)
- **CSS3** — custom properties, Flexbox and Grid, no frameworks
- **Vanilla JavaScript** — no libraries or dependencies
- **Google Fonts** — Bowlby One SC, Fraunces, DM Sans
- **Schema.org** structured data for local SEO

---

## Features

- **Responsive design** — mobile, tablet and desktop
- **Animated hamburger menu** for mobile navigation
- **Smooth scroll** between sections via anchor links
- **Reveal on scroll** — entrance animations using `IntersectionObserver`
- **Form → WhatsApp integration** — builds and pre-fills a personalized message on submit
- **Smart plan selection** — plan buttons pre-select the form dropdown and scroll to it
- **Dynamic header** — box shadow appears on scroll
- **Full SEO setup** — Open Graph, Twitter Card, Schema.org `FoodEstablishment`, sitemap and robots.txt

---

## Project structure

```
/
├── index.html              # Main page (single-page)
├── styles.css              # Global styles with CSS custom properties
├── main.js                 # Interactivity logic
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Crawler directives
├── the-cool-auntie-logo.png
└── postres.png             # Hero image and Open Graph image
```

---

## Technical decisions

**No frameworks** — Chose plain HTML/CSS/JS to keep the site lightweight, skip build steps, and maintain full control over the output.

**WhatsApp integration without a backend** — Instead of a server to handle form submissions, the form encodes user data into a `wa.me` URL, redirecting directly to a pre-filled WhatsApp conversation.

**`IntersectionObserver` for scroll animations** — Used the native browser API instead of libraries like AOS, keeping the project dependency-free.

---

## Running locally

No installation needed. Clone the repo and open `index.html` in your browser, or spin up a local server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

---

## Author

Built as a portfolio project. Feel free to reach out on www.linkedin.com/in/angelo-peña-gomez-b54070169 or via angelopg908@gmail.com.

---

*© 2026 The Cool Auntie · Costa Rica*
