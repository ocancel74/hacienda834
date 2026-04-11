// ─── GALERÍA DE FOTOS ────────────────────────────────────────────────────────
// Para agregar tus fotos reales:
//   1. Coloca los archivos en src/assets/images/
//   2. Importa cada imagen arriba: import foto1 from '../assets/images/foto1.jpg'
//   3. Reemplaza el campo `src` con la variable importada.
//
// Las imágenes actuales son placeholders. Cámbilas por las tuyas cuando tengas fotos.

export const galleryImages = [
  {
    id:  1,
    src: 'https://placehold.co/800x600/0ea5e9/ffffff?text=Piscina+Principal',
    alt: 'Vista de la piscina principal',
    label: 'Piscina',
  },
  {
    id:  2,
    src: 'https://placehold.co/800x600/0369a1/ffffff?text=Área+Recreativa',
    alt: 'Área recreativa y patio',
    label: 'Área Recreativa',
  },
  {
    id:  3,
    src: '/foto-bbq.jpg',
    alt: 'Terraza y área de BBQ',
    label: 'Terraza',
  },
  {
    id:  4,
    src: 'https://placehold.co/800x600/0c4a6e/ffffff?text=Cancha+Baloncesto',
    alt: 'Cancha de baloncesto',
    label: 'Cancha',
  },
  {
    id:  5,
    src: 'https://placehold.co/800x600/e4a54d/ffffff?text=Área+Familiar',
    alt: 'Área familiar y mesas de patio',
    label: 'Área Familiar',
  },
  {
    id:  6,
    src: 'https://placehold.co/800x600/d9892a/ffffff?text=Mesa+de+Billar',
    alt: 'Mesa de billar',
    label: 'Billar',
  },
  {
    id:  7,
    src: 'https://placehold.co/800x600/0284c7/ffffff?text=Piscina+Nocturna',
    alt: 'Piscina en la tarde',
    label: 'Tarde en la piscina',
  },
  {
    id:  8,
    src: 'https://placehold.co/800x600/38bdf8/ffffff?text=Vista+General',
    alt: 'Vista general de Hacienda834',
    label: 'Vista General',
  },
]

// ─── GALERÍA DE VIDEOS ───────────────────────────────────────────────────────
// Para agregar videos de YouTube: reemplaza youtubeId con el ID del video.
// Para videos locales: usa el campo `src` con la ruta del archivo.
// Ejemplo de ID de YouTube: en "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   el ID es "dQw4w9WgXcQ"

export const galleryVideos = [
  {
    id:        1,
    youtubeId: null,   // Reemplaza con el ID de YouTube cuando tengas el video
    src:       null,   // O usa una ruta local: '/videos/video1.mp4'
    thumbnail: 'https://placehold.co/800x450/0ea5e9/ffffff?text=Video+1+-+Tour+General',
    title:     'Tour por Hacienda834',
    duration:  '2:30',
  },
  {
    id:        2,
    youtubeId: null,
    src:       null,
    thumbnail: 'https://placehold.co/800x450/0369a1/ffffff?text=Video+2+-+Piscina',
    title:     'La piscina y sus alrededores',
    duration:  '1:45',
  },
  {
    id:        3,
    youtubeId: null,
    src:       null,
    thumbnail: 'https://placehold.co/800x450/075985/ffffff?text=Video+3+-+Áreas+Recreativas',
    title:     'Áreas recreativas y entretenimiento',
    duration:  '2:10',
  },
]
