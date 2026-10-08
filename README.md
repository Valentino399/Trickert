# TRICKERT ✦ Official Website

![Trickert Cover](https://trickertmusic.netlify.app/img/og-trickert.png)

🌍 **Sitio en vivo:** [trickertmusic.netlify.app](https://trickertmusic.netlify.app/)

> Landing page oficial y portafolio visual para **Trickert**, proyecto musical enfocado en los géneros Dark Trap, Phonk y Experimental Beats.

Este repositorio contiene el código fuente completo del sitio web. El proyecto fue diseñado y desarrollado con un fuerte enfoque en UI/UX para transmitir una atmósfera "underground", utilizando tecnologías web nativas (Vanilla) para garantizar un alto rendimiento, animaciones fluidas y una experiencia inmersiva.

## 🚀 Características Principales (Features)

*   **Efectos Visuales Nativos:** Implementación de partículas interactuando en tiempo real mediante la API de `<canvas>` de HTML5.
*   **Animaciones CSS Avanzadas:** Efectos de "Glitch" en tipografías, ruido visual (grain) dinámico en SVG y scanlines retro.
*   **Scroll Interactivo:** Efectos Parallax en fondos y elementos clave gestionados a través de un `IntersectionObserver` para revelar contenido (Fade-in) optimizando el rendimiento.
*   **SEO Técnico Implementado:** Etiquetas Open Graph (OG), Twitter Cards, Schema.org (JSON-LD) y estructura semántica de encabezados para un correcto posicionamiento orgánico.
*   **Diseño Responsivo:** Adaptación fluida a dispositivos móviles y de escritorio mediante CSS Grid, Flexbox y tipografía fluida (`clamp`).

## 🛠️ Stack Tecnológico

El proyecto está construido sin frameworks externos pesados para mantener el control total sobre el DOM y el rendimiento:

*   **Estructura:** HTML5 Semántico.
*   **Estilos:** CSS3 (Custom Properties / Variables, animaciones `@keyframes`, Media Queries).
*   **Interactividad:** JavaScript (ES6+, Vanilla JS, Canvas 2D API, Intersection Observer API).
*   **Despliegue:** Preparado y optimizado para [Netlify](https://www.netlify.com/).

## 📂 Estructura del Proyecto

```text
├── index.html        # Landing page principal
├── genre.html        # Página de catálogo y géneros musicales
├── styles.css        # Hoja de estilos global y animaciones
├── script.js         # Lógica de interacciones, Canvas y Observers
├── robots.txt        # Directivas de rastreo para buscadores
├── sitemap.xml       # Mapa del sitio estructurado
└── /img              # Assets gráficos (portadas, logos, fondos)
