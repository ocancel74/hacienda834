import { useState } from 'react'
import { Play, Film } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { galleryVideos } from '../data/gallery'

/* ── Video Card ──────────────────────────────────────────────────────────── */
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)

  // YouTube embed
  if (video.youtubeId && playing) {
    return (
      <div className="rounded-2xl overflow-hidden aspect-video bg-black shadow-xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pool-500/20 transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-pool-800 to-pool-600 overflow-hidden">
        {video.thumbnail && (
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-pool-900/30 group-hover:bg-pool-900/50 transition-colors duration-300" />

        {/* Duration badge */}
        {video.duration && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
            {video.duration}
          </div>
        )}

        {/* Play button */}
        <button
          onClick={() => video.youtubeId && setPlaying(true)}
          aria-label={`Reproducir: ${video.title}`}
          className="
            absolute inset-0 flex items-center justify-center
            group/btn
          "
        >
          <span className="
            flex items-center justify-center
            w-16 h-16 rounded-full
            bg-white/90 group-hover/btn:bg-white
            shadow-xl
            transition-all duration-300
            scale-90 group-hover:scale-100
          ">
            <Play className="w-7 h-7 text-pool-700 translate-x-0.5" />
          </span>
        </button>
      </div>

      {/* Card info */}
      <div className="bg-white px-5 py-4">
        <div className="flex items-center gap-2 mb-1">
          <Film className="w-4 h-4 text-pool-400" />
          <span className="text-xs text-pool-400 font-medium uppercase tracking-wide">Video</span>
        </div>
        <h3 className="font-semibold text-slate-800 text-base leading-snug font-serif">
          {video.title}
        </h3>
        {!video.youtubeId && (
          <p className="text-xs text-slate-400 mt-1">Video próximamente</p>
        )}
      </div>
    </div>
  )
}

/* ── Videos Section ──────────────────────────────────────────────────────── */
export default function Videos() {
  const gridRef = useScrollAnimation(0.05)

  return (
    <section id="videos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Videos"
          title="Mira Hacienda834 en acción"
          subtitle="Explora nuestros espacios a través de videos y vive la experiencia antes de reservar."
        />

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  )
}
