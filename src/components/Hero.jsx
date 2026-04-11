import { Phone, MessageCircle, ChevronDown, Star } from 'lucide-react'
import { contact } from '../data/contact'

export default function Hero() {
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Gradient background ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-900 via-pool-800 to-pool-600" />

      {/* ── Decorative blobs ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pool-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-pool-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pool-500/10 rounded-full blur-3xl" />
      </div>

      {/* ── Dot grid overlay ────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Wave bottom ─────────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            fill="white"
            d="M0,40 C240,90 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-32">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Reservaciones Disponibles
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none animate-fade-in-up">
          Hacienda<span className="text-sand-300">834</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-pool-100 font-light mb-5 animate-fade-in-up">
          Tu espacio privado con piscina para celebrar y crear recuerdos
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Hacienda834, el espacio ideal para compartir en familia, celebrar y disfrutar
          de un ambiente privado con piscina. Comodidad, diversión y privacidad
          en un solo lugar.
        </p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-10 animate-fade-in">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-sand-300 fill-sand-300" />
          ))}
          <span className="ml-2 text-white/60 text-sm">Experiencia 5 estrellas</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2.5
              bg-green-500 hover:bg-green-600
              text-white font-semibold
              px-8 py-4 rounded-full text-base
              transition-all
              hover:shadow-2xl hover:shadow-green-500/40
              hover:-translate-y-1
              w-full sm:w-auto justify-center
            "
          >
            <MessageCircle className="w-5 h-5" />
            Reservar por WhatsApp
          </a>

          <a
            href={contact.phoneLink}
            className="
              flex items-center gap-2.5
              bg-white/10 hover:bg-white/20
              backdrop-blur-sm border border-white/30
              text-white font-semibold
              px-8 py-4 rounded-full text-base
              transition-all
              hover:-translate-y-1
              w-full sm:w-auto justify-center
            "
          >
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>

          <a
            href="#precios"
            className="
              flex items-center gap-2.5
              bg-sand-400 hover:bg-sand-500
              text-white font-semibold
              px-8 py-4 rounded-full text-base
              transition-all
              hover:shadow-2xl hover:shadow-sand-400/30
              hover:-translate-y-1
              w-full sm:w-auto justify-center
            "
          >
            Ver precios
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────────── */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/40" />
      </div>
    </section>
  )
}
