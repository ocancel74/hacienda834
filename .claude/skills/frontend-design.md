# Hacienda834 — Frontend Design Skill

**Trigger**: Load this skill before any UI/component/layout/style work on this project.

---

## Identidad de marca

Hacienda834 es un espacio privado con piscina en Puerto Rico orientado a eventos familiares y celebraciones. El diseño debe transmitir **privacidad, calidez y exclusividad** — no un resort genérico ni una plantilla de SaaS. Cada decisión visual debe reforzar la sensación de "estás reservando algo especial, no un local cualquiera".

---

## Sistema tipográfico

### Fuentes activas (Google Fonts — ya cargadas en `index.html`)
- **Display / Hero**: `Playfair Display` — serif elegante para títulos de sección, precios, nombres propios
- **UI / Body**: `Montserrat` — sans-serif limpio para párrafos, labels, botones

### Migración a Plus Jakarta Sans (mejora pendiente)
Cuando se actualice la tipografía, usar:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
```
En `tailwind.config.js`:
```js
fontFamily: {
  sans:  ['Plus Jakarta Sans', 'sans-serif'],
  serif: ['Playfair Display', 'serif'],
}
```
Plus Jakarta Sans es más moderna, tiene mejor espaciado y legibilidad en móvil que Montserrat para este tipo de site.

### Reglas tipográficas
- Títulos de sección: `font-serif` (Playfair) + `text-3xl sm:text-4xl lg:text-5xl font-bold`
- Eyebrow labels (texto pequeño sobre el título): `text-xs font-semibold uppercase tracking-[0.2em] text-pool-500`
- Cuerpo: `text-base leading-relaxed text-slate-600`
- Precios: `font-serif text-5xl font-bold` — serif hace que los números se sientan premium
- Botones: `font-semibold text-sm` — nunca `font-bold` en botones, se ve agresivo
- **Nunca** usar `font-black` (900) en párrafos ni labels

---

## Paleta de colores

Tokens definidos en `tailwind.config.js`:

```
pool-500  #2a8a4f  → verde principal (CTA, íconos activos, highlights)
pool-600  #1a6b3a  → verde hover
pool-900  #082812  → verde profundo (fondos oscuros, gradientes)
pool-50   #f0f7f2  → verde muy claro (fondos de cards, hover states)

sand-300  #c9a84c  → dorado del logo (badges, acentos, bordes especiales)
sand-400  #b8932e  → dorado hover

cream-100 #f8f4ed  → fondo base del sitio (body background)
cream-200 #f0e8d8  → secciones alternas, inputs
```

### Uso
- Fondo de página: `bg-cream-100` (ya configurado en `index.css`)
- Secciones alternas: alternar entre `bg-cream-100` y `bg-white`
- **Nunca** usar `bg-gray-50` o `bg-slate-50` — rompe la calidez crema
- Gradientes oscuros: siempre `from-pool-900 to-pool-700` (nunca negro puro)
- Acentos dorados: solo para badges, precio, depósito, elementos de high-value — no para decoración genérica
- Evitar azul (`sky-`, `blue-`, `indigo-`) salvo en info cards donde el contraste lo justifica

---

## Sistema de layout — Bento Grid

El Bento Grid es el patrón central para secciones de características, servicios y amenities. Sustituye las grillas uniformes de 3 columnas que parecen plantillas de IA.

### Principios Bento
1. **Celdas de tamaño variado**: mezclar `col-span-1`, `col-span-2`, `row-span-2`
2. **Jerarquía visual**: la celda principal (la más importante) ocupa más espacio
3. **Densidad controlada**: máximo 4-6 celdas por grid — más es ruido
4. **Cada celda cuenta una sola historia**: icono + métrica + label o imagen + badge

### Implementación base
```jsx
{/* Bento Grid — 12 columnas implícitas con grid-cols-3 o grid-cols-4 */}
<div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[200px] gap-4">
  {/* Celda grande — ocupa 2 columnas y 2 filas */}
  <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
    <img src="..." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-pool-900/70 to-transparent" />
    <div className="absolute bottom-6 left-6 text-white">
      <p className="font-serif text-2xl font-bold">Piscina principal</p>
    </div>
  </div>

  {/* Celdas medianas */}
  <div className="col-span-1 row-span-1 bg-pool-900 rounded-3xl p-6 flex flex-col justify-between text-white">
    <span className="text-4xl">🏊</span>
    <div>
      <p className="text-pool-300 text-xs uppercase tracking-widest">Capacidad</p>
      <p className="font-serif text-3xl font-bold">50+</p>
      <p className="text-pool-200 text-sm">personas</p>
    </div>
  </div>

  <div className="col-span-1 row-span-1 bg-sand-300 rounded-3xl p-6 flex flex-col justify-between">
    <span className="text-4xl">🎱</span>
    <p className="font-semibold text-pool-900">Billar & juegos</p>
  </div>
</div>
```

### Cuándo NO usar Bento
- Secciones de reglas/FAQ → usar lista acordeón
- Precios → usar la card vertical con breakdown existente
- Testimonios → usar carrusel horizontal o stack simple
- Formulario de contacto → layout lineal, nunca grid

---

## Componentes interactivos — estándares

### Botones
```jsx
{/* CTA principal — verde */}
<button className="
  inline-flex items-center gap-2
  bg-pool-500 hover:bg-pool-600
  text-white font-semibold text-sm
  px-6 py-3 rounded-full
  transition-all duration-200
  hover:shadow-lg hover:shadow-pool-500/30
  hover:-translate-y-0.5
  active:scale-95
">

{/* CTA secundario — ghost */}
<button className="
  inline-flex items-center gap-2
  border border-pool-500 text-pool-600
  hover:bg-pool-50
  font-semibold text-sm
  px-6 py-3 rounded-full
  transition-all duration-200
">

{/* CTA WhatsApp — siempre verde nativo */}
<a className="
  inline-flex items-center gap-2
  bg-green-500 hover:bg-green-600
  text-white font-semibold
  px-8 py-4 rounded-full
  hover:shadow-xl hover:shadow-green-500/40
  hover:-translate-y-1
  transition-all
  animate-[waPulse_2s_ease-in-out_infinite]
">
```

### Cards
```jsx
{/* Card estándar — no usar sombra gris plana */}
<div className="
  bg-white rounded-3xl p-6
  border border-cream-200
  shadow-sm hover:shadow-xl hover:shadow-pool-500/10
  transition-all duration-300
  hover:-translate-y-1
">

{/* Card oscura — para highlight / feature principal */}
<div className="
  bg-gradient-to-br from-pool-900 to-pool-800
  rounded-3xl p-8 text-white
">
```

### Scroll reveal — usar el hook existente
```jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation'
const ref = useScrollAnimation()
// Aplicar: <div ref={ref} className="reveal delay-200">
```
Siempre escalonar con `.delay-100`, `.delay-200`, `.delay-300` para elementos hermanos.

### Hover en imágenes
```jsx
{/* Patrón estándar — zoom suave */}
<div className="overflow-hidden rounded-3xl">
  <img className="w-full h-full object-cover
    transition-transform duration-700
    group-hover:scale-105"
  />
</div>
```

---

## Layout responsivo — reglas

### Breakpoints (Tailwind defaults)
- `sm`: 640px — tablet pequeña
- `md`: 768px — tablet
- `lg`: 1024px — desktop
- `xl`: 1280px — desktop ancho

### Espaciado de sección
```jsx
<section className="py-20 lg:py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```
Nunca menos de `py-16` en secciones. El espacio en blanco es premium.

### Grid responsivo
```jsx
{/* Para features / amenities */}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

{/* Para bento — colapsa a 2 cols en móvil */}
className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4"
```

### Tipografía responsiva
```jsx
{/* Headline hero */}
className="text-4xl sm:text-6xl lg:text-7xl"

{/* Título de sección */}
className="text-3xl sm:text-4xl lg:text-5xl"

{/* Subtítulo */}
className="text-lg sm:text-xl"
```

---

## Anti-patrones — nunca hacer esto

| ❌ Evitar | ✅ Usar en cambio |
|-----------|-----------------|
| `grid-cols-3` uniforme con 3 cards idénticas | Bento grid con tamaños variados |
| `bg-gray-50` o `bg-slate-100` como fondo | `bg-cream-100` / `bg-white` |
| `rounded-lg` en cards | `rounded-2xl` o `rounded-3xl` |
| `shadow-md` estático | `shadow-sm` + `hover:shadow-xl` con color |
| `text-gray-500` para subtítulos | `text-slate-500` o `text-pool-700` |
| Botones cuadrados (`rounded-md`) | `rounded-full` para CTA, `rounded-xl` para secundarios |
| `font-black` en cualquier texto visible | `font-bold` como máximo en display |
| Íconos genéricos sin contexto | Íconos de lucide-react con fondo coloreado (`bg-pool-100 text-pool-600 p-3 rounded-xl`) |
| `border-gray-200` en cards | `border-cream-200` o sin borde con sombra suave |
| Placeholders de imagen con `bg-gray-300` | `bg-cream-200` + shimmer o icono de categoría |
| Animaciones `transition-all duration-150` (muy rápido) | `transition-all duration-300` mínimo para UI, `duration-700` para imágenes |
| `gap-2` o `gap-3` entre secciones | `gap-6` mínimo, `gap-8` preferido |

---

## Patrones de sección por tipo de contenido

### Hero
- Imagen de fondo con overlay `from-pool-900/85 via-pool-800/75 to-pool-700/65`
- Logo SVG o `/logo.png` centrado, no texto
- Ola de transición al fondo con `fill="#f8f4ed"`
- CTA WhatsApp + CTA llamar + CTA ver precios

### Galería
- Bento grid en desktop, masonry 2 cols en móvil
- Lightbox con fondo `bg-black/90`, bordes redondeados en imagen
- Labels de categoría como badges `bg-white/80 backdrop-blur-sm`

### Precios
- Una sola card vertical como elemento principal (ya existente — no reemplazar)
- Cards secundarias de métricas en grid 2×2 (capacidad, horario, extra)
- Gradiente oscuro `from-pool-900 to-pool-700` para el card de depósito

### Servicios / Amenities
- Bento grid — cel. principal con imagen, celdas secundarias con icono + métrica
- Alternar fondos: `bg-pool-900` (oscuro), `bg-sand-300` (dorado), `bg-pool-50` (claro), `bg-white`

### FAQ
- Acordeón con `border-b border-cream-200`
- Icono chevron que rota 180° al abrir (`transition-transform duration-300`)
- Respuesta con `text-slate-600 leading-relaxed`

### CTA final
- Fondo `bg-gradient-to-br from-pool-900 to-pool-800`
- Título serif grande en blanco
- Solo un botón CTA (WhatsApp)
- Opcional: partículas o shapes decorativas con `opacity-10`

---

## Contexto del negocio para decisiones de diseño

- **Público objetivo**: familias puertorriqueñas que celebran cumpleaños, graduaciones, reuniones (30–60 personas)
- **Diferenciador clave**: espacio completamente privado — enfatizar con badges "Privado", "Solo para tu grupo"
- **Fricción de conversión**: el precio ($834+) es un commitment — los componentes de precios deben generar confianza, no impresionar con números grandes
- **Canal de reserva**: WhatsApp — todos los CTA deben apuntar al WhatsApp link de `contact.whatsappMessage`
- **Trust signals importantes**: capacidad exacta, horario claro, política de depósito transparente, fotos reales (no stock)
- **Mobile-first real**: la mayoría de visitas son desde Instagram/Facebook en móvil — el hero y el pricing deben funcionar perfectamente en 390px

---

## Archivos clave de referencia

```
tailwind.config.js          → tokens de color, fuentes, animaciones
src/index.css               → estilos base, clases .reveal, scrollbar
src/data/contact.js         → WhatsApp URL, teléfono, emails
src/data/pricing.js         → precios, capacidad, horario
src/data/gallery.json       → fotos y videos (editable desde /admin)
src/hooks/useScrollAnimation.js → hook de scroll reveal
src/components/SectionTitle.jsx → componente de título de sección estándar
public/logo.png             → logo oficial de la marca
```
