# Hacienda834 — Sitio Web Oficial

Sitio web completo para **Hacienda834**, un espacio privado con piscina para eventos, reuniones familiares y celebraciones.

---

## Stack Tecnológico

**Vite + React + Tailwind CSS**

Se eligió este stack porque:
- **Vite** ofrece builds ultrarrápidos y una experiencia de desarrollo fluida.
- **React** permite componentes reutilizables y código limpio.
- **Tailwind CSS** facilita el diseño responsive y el mantenimiento del estilo.
- No requiere servidor — se despliega como un sitio estático en cualquier hosting.
- Fácil de desplegar en **Netlify**, **Vercel**, **GitHub Pages** o cualquier CDN.

---

## Instalación y uso local

### Requisitos previos
- Node.js 18+ ([descargar](https://nodejs.org))
- npm 9+ (viene con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/ocancel74/hacienda834.git
cd hacienda834

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build de producción

```bash
npm run build
```

Los archivos listos para subir quedarán en la carpeta `dist/`.

### Vista previa del build

```bash
npm run preview
```

---

## Estructura del proyecto

```
hacienda834/
├── public/
│   └── favicon.svg              # Ícono del sitio (reemplazar)
├── src/
│   ├── assets/
│   │   └── images/              # 📸 Coloca aquí tus fotos reales
│   ├── components/
│   │   ├── Navbar.jsx           # Barra de navegación sticky
│   │   ├── Hero.jsx             # Sección principal (encabezado)
│   │   ├── About.jsx            # "Sobre el lugar"
│   │   ├── Gallery.jsx          # Galería de fotos con lightbox
│   │   ├── Videos.jsx           # Galería de videos
│   │   ├── Pricing.jsx          # Precios y tarifas
│   │   ├── Services.jsx         # Servicios incluidos
│   │   ├── Extras.jsx           # Servicios adicionales
│   │   ├── Rules.jsx            # Reglas importantes
│   │   ├── FAQ.jsx              # Preguntas frecuentes
│   │   ├── Contact.jsx          # Información de contacto
│   │   ├── CTA.jsx              # Llamada a la acción final
│   │   ├── Footer.jsx           # Pie de página
│   │   ├── WhatsAppButton.jsx   # Botón flotante de WhatsApp
│   │   └── SectionTitle.jsx     # Componente reutilizable de títulos
│   ├── data/
│   │   ├── contact.js           # 📞 Teléfono, correos y WhatsApp
│   │   ├── pricing.js           # 💰 Precios, horario y capacidad
│   │   ├── services.js          # 🎯 Servicios incluidos
│   │   ├── extras.js            # ➕ Servicios adicionales
│   │   ├── faq.js               # ❓ Preguntas frecuentes
│   │   └── gallery.js           # 🖼 Fotos y videos
│   ├── hooks/
│   │   └── useScrollAnimation.js # Hook de animación al hacer scroll
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ¿Cómo cambiar el contenido?

### 📞 Cambiar teléfono y correos
Edita el archivo `src/data/contact.js`:
```js
export const contact = {
  phone:   '939-969-2376',        // ← cambia aquí
  emails: [
    { address: 'tu@correo.com' }, // ← cambia aquí
  ],
}
```

### 💰 Cambiar precios
Edita el archivo `src/data/pricing.js`:
```js
export const pricing = {
  capacity:  40,    // ← personas incluidas
  rental:    400,   // ← precio de alquiler
  cleaning:  50,    // ← limpieza
  total:     450,   // ← total
  deposit:   100,   // ← depósito
}
```

### 🎯 Cambiar servicios incluidos
Edita el archivo `src/data/services.js` — modifica el array `includedServices`.

### ➕ Cambiar servicios adicionales
Edita el archivo `src/data/extras.js` — modifica el array `extras`.

### ❓ Cambiar preguntas frecuentes
Edita el archivo `src/data/faq.js` — modifica el array `faq`.

### 📸 Cambiar fotos
1. Coloca tus imágenes en `src/assets/images/`
2. Abre `src/data/gallery.js`
3. Importa las imágenes al inicio del archivo:
   ```js
   import foto1 from '../assets/images/foto1.jpg'
   ```
4. Reemplaza el campo `src` de cada objeto:
   ```js
   { id: 1, src: foto1, alt: 'Área de piscina', label: 'Piscina' }
   ```

### 🎬 Agregar videos de YouTube
En `src/data/gallery.js`, reemplaza `youtubeId: null` con el ID del video:
```js
// URL del video: https://www.youtube.com/watch?v=XXXXXXXXXXX
{ youtubeId: 'XXXXXXXXXXX', title: 'Mi video' }
```

### 🔤 Cambiar textos del Hero y otras secciones
Los textos están directamente en los componentes. Para cambiarlos:
- `src/components/Hero.jsx` → título principal y descripción
- `src/components/About.jsx` → descripción del lugar
- `src/components/CTA.jsx` → texto del llamado a la acción

---

## Despliegue

### Netlify (recomendado — gratis)
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Haz clic en "Deploy" — listo ✓

### Vercel
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Importa el repositorio
3. Vercel detecta automáticamente Vite
4. Haz clic en "Deploy" — listo ✓

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Agrega en `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
```bash
npm run deploy
```

---

## Personalización de colores

Los colores principales se definen en `tailwind.config.js`:

```js
colors: {
  pool: { /* azules de piscina */ },
  sand: { /* tonos arena/cálidos */ },
}
```

Las fuentes se cargan desde Google Fonts en `index.html`:
- **Montserrat** — texto general
- **Playfair Display** — títulos y encabezados

---

## Licencia

© 2025 Hacienda834. Todos los derechos reservados.
