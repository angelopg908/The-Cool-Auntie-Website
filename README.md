# 🍫 The Cool Auntie Shop — Portfolio Project

Sitio web estático desarrollado para **The Cool Auntie**, un emprendimiento de repostería saludable y alta en proteína con sede en Costa Rica. Proyecto de portafolio que muestra diseño UI, maquetación responsive y JavaScript vanilla sin dependencias.

🌐 **Live demo:** [thecoolauntieshop.com](https://thecoolauntieshop.com)

---

## Sobre el proyecto

Diseño y desarrollo completo de un sitio web de una sola página para un negocio real. El objetivo fue crear una experiencia visual atractiva y funcional que le permitiera a la clienta presentar sus productos, mostrar sus planes de suscripción y recibir pedidos directamente por WhatsApp — sin necesidad de backend ni plataformas de terceros.

---

## Tech stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **HTML5** semántico con accesibilidad (`aria-label`, landmarks)
- **CSS3** con custom properties, Flexbox y Grid — sin frameworks
- **JavaScript vanilla** — sin librerías ni dependencias
- **Google Fonts** — Bowlby One SC, Fraunces, DM Sans
- **Schema.org** structured data para SEO local

---

## Features implementados

- **Responsive design** — adaptado para móvil, tablet y desktop
- **Menú hamburger** animado para navegación móvil
- **Smooth scroll** entre secciones con anclas
- **Reveal on scroll** — animaciones de entrada con `IntersectionObserver`
- **Formulario → WhatsApp** — construye y pre-llena un mensaje personalizado al enviar
- **Selección de plan inteligente** — los botones de plan preseleccionan el dropdown del form y hacen scroll hasta él
- **Header dinámico** — sombra que aparece al hacer scroll
- **SEO completo** — Open Graph, Twitter Card, Schema.org `FoodEstablishment`, sitemap y robots.txt

---

## Estructura del proyecto

```
/
├── index.html              # Página principal (single-page)
├── styles.css              # Estilos globales con CSS custom properties
├── main.js                 # Lógica de interactividad
├── sitemap.xml             # Sitemap para motores de búsqueda
├── robots.txt              # Directivas para crawlers
├── the-cool-auntie-logo.png
└── postres.png             # Hero image y Open Graph image
```

---

## Desafíos y decisiones técnicas

**Sin frameworks** — Se decidió usar HTML/CSS/JS puro para mantener el sitio liviano, sin tiempos de build y con máximo control sobre el output final.

**Integración WhatsApp sin backend** — En lugar de un servidor para manejar formularios, el submit construye una URL `wa.me` con los datos del usuario codificados, redirigiendo directamente a una conversación pre-llenada.

**Animaciones con `IntersectionObserver`** — Se usó la API nativa del navegador para las animaciones de scroll en lugar de librerías como AOS, manteniendo el sitio sin dependencias externas.

---

## Correr localmente

No requiere instalación. Clonar el repo y abrir `index.html` en el navegador, o levantar un servidor local:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

---

## Autor

Desarrollado como proyecto de portafolio. Si tenés preguntas o querés trabajar juntos, encontrame en [LinkedIn](#) o escribime por [correo](#).

---

*© 2026 The Cool Auntie · Diseñado y desarrollado con ♡ en Costa Rica*
