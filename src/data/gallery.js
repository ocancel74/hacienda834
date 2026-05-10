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
    src: '/piscina1.jpeg',
    alt: 'Vista de la piscina principal',
    label: 'Piscina',
  },
  {
    id:  2,
    src: '/vista-general.jpeg',
    alt: 'Área recreativa y patio',
    label: 'Área Recreativa',
  },
  {
    id:  3,
    src: '/foto-bbq.jpg',
    alt: 'Area de BBQ',
    label: 'Terraza',
  },
  {
    id:  4,
    src: '/Cancha.jpeg',
    alt: 'Cancha de baloncesto',
    label: 'Cancha',
  },
  {
    id:  5,
    src: '/Sombrillas-Bano.jpeg',
    alt: 'Área familiar y mesas de patio',
    label: 'Área Familiar',
  },
  {
    id:  6,
    src: '/foto-billar2.jpeg',
    alt: 'Mesa de billar',
    label: 'Billar',
  },
  {
    id:  7,
    src: '/entrada.jpeg',
    alt: 'Piscina en la tarde',
    label: 'Tarde en la piscina',
  },
  {
    id:  8,
    src: '/Area todo.jpeg',
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
    youtubeId: 'P4QnYEizv6g',
    src:       null,
    thumbnail: 'https://img.youtube.com/vi/P4QnYEizv6g/hqdefault.jpg',
    title:     'Tour por Hacienda834',
    duration:  '0:38',
  },
  {
    id:        2,
    youtubeId: 'tLZkV--foRI',
    src:       null,
    thumbnail: 'https://img.youtube.com/vi/tLZkV--foRI/hqdefault.jpg',
    title:     'La piscina y sus alrededores',
    duration:  '0:23',
  },
  {
    id:        3,
    youtubeId: 'Q3q0M_yiwYo',
    src:       null,
    thumbnail: 'https://img.youtube.com/vi/Q3q0M_yiwYo/hqdefault.jpg',
    title:     'Áreas recreativas y entretenimiento',
    duration:  '1:01',
  },
]
