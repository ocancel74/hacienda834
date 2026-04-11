import { useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { galleryImages } from '../data/gallery'

/* ── Lightbox ────────────────────────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <img
        src={img.src}
        alt={img.alt}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        onClick={e => e.stopPropagation()}
      />

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        className="absolute right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-4 py-2 rounded-full">
        {img.alt}
      </div>
    </div>
  )
}

/* ── Gallery Component ───────────────────────────────────────────────────── */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gridRef = useScrollAnimation(0.05)

  const openLightbox  = (i)  => setLightboxIndex(i)
  const closeLightbox = ()   => setLightboxIndex(null)
  const prevImage     = ()   => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
  const nextImage     = ()   => setLightboxIndex(i => (i + 1) % galleryImages.length)

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Galería"
          title="Conoce nuestros espacios"
          subtitle="Imágenes reales de Hacienda834 — un espacio diseñado para que lo disfrutes al máximo."
        />

        {/* Grid */}
        <div
          ref={gridRef}
          className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => openLightbox(i)}
              aria-label={`Ver foto: ${img.alt}`}
              className={`
                group relative rounded-2xl overflow-hidden
                bg-pool-100 aspect-square
                hover:shadow-xl hover:shadow-pool-500/20
                transition-all duration-300 hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-pool-500
                ${i === 0 ? 'col-span-2 row-span-2' : ''}
              `}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pool-200 to-pool-400 text-white">
                  <ImageIcon className="w-10 h-10 mb-2 opacity-60" />
                  <span className="text-xs opacity-60">Foto próximamente</span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-pool-900/0 group-hover:bg-pool-900/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium">{img.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="mt-6 text-center text-slate-400 text-xs">
          Las imágenes son placeholders. Reemplázalas en <code className="bg-slate-100 px-1 rounded">src/data/gallery.js</code>
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
