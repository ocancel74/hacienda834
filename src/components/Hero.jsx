import { useState } from 'react'
import { Phone, MessageCircle, ChevronDown, Star } from 'lucide-react'
import { contact } from '../data/contact'
import CalendarModal from './CalendarModal'

export default function Hero() {
  const [showCalendar, setShowCalendar] = useState(false)
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image + overlay ──────────────────────────────────────── */}
      {/* Para cambiar la imagen: reemplaza /hero.jpg en public/ por tu foto   */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      {/* Overlay oscuro para que el texto sea legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-900/80 via-pool-800/70 to-pool-600/60" />

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

        {/* Badge — abre el calendario al hacer clic */}
        <button
          onClick={() => setShowCalendar(true)}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in transition-all cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Reservaciones Disponibles
        </button>

        {/* Modal calendario */}
        {showCalendar && <CalendarModal onClose={() => setShowCalendar(false)} />}

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
