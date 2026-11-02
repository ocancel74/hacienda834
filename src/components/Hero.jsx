import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CalendarModal from './CalendarModal'

const STATS = [
  { value: '40',   label: 'Personas máx.' },
  { value: '9h',   label: 'De diversión'  },
  { value: '$450', label: 'Todo incluido' },
  { value: '5',   label: 'Amenidades'    },
]

const BADGES = ['🔒 100% Privado', '📍 Guaynabo, Puerto Rico', '🏊 Piscina Incluida']

export default function Hero() {
  const ref = useScrollAnimation()
  const [showCal, setShowCal] = useState(false)

  return (
    <>
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/hero.jpg')" }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-900/88 via-pool-800/72 to-pool-700/50" />

      <div ref={ref} className="reveal relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 120, paddingBottom: 80 }}>

        {/* Two-column layout on desktop */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {BADGES.map(b => (
                <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-white bg-white/15 border border-white/25">
                  {b}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6 font-sans font-black"
              style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Tu Paraíso<br />
              <span style={{ background: 'linear-gradient(90deg,#4aa36d,#77bc92)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Privado
              </span><br />
              con Piscina
            </h1>

            {/* Subline */}
            <p className="text-white/80 mb-10" style={{ fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.7 }}>
              Celebra, relájate y crea recuerdos que duran. Espacio exclusivo hasta 40 personas — solo para ti y los tuyos, sin extraños.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center gap-2 font-bold text-white px-7 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg,#2a8a4f,#0d9488)', boxShadow: '0 6px 24px rgba(42,138,79,.55)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Reservar Mi Fecha
              </a>
              <button
                onClick={() => setShowCal(true)}
                className="inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-4 rounded-2xl text-sm transition-all hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,.15)', border: '1.5px solid rgba(255,255,255,.35)', backdropFilter: 'blur(8px)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Fechas Disponibles
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,.2)' }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="text-white font-serif font-bold" style={{ fontSize: '2rem', lineHeight: 1 }}>{s.value}</div>
                  <div className="text-white/80 text-xs font-semibold uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pricing card (desktop only) */}
          <div className="hidden lg:flex justify-end">
            <div
              className="w-full max-w-sm rounded-3xl p-8 text-white"
              style={{ background: 'rgba(8,40,18,0.75)', border: '1px solid rgba(255,255,255,.15)', backdropFilter: 'blur(20px)' }}
            >
              <div className="text-xs font-bold uppercase tracking-[.14em] text-pool-300 mb-1">Precio por evento</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-serif font-bold text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>$450</span>
                <span className="text-white/50 text-sm mb-2">total</span>
              </div>
              <p className="text-white/55 text-sm mb-6">Hasta 40 personas incluidas</p>

              <div className="flex flex-col gap-3 mb-6 text-sm">
                {[
                  ['Alquiler del espacio', '$400'],
                  ['Servicio de limpieza', '$50'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-white/60">{label}</span>
                    <span className="font-bold">{val}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,.08)' }}>
                  <span className="font-bold">Total</span>
                  <span className="font-extrabold text-pool-300">$450</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6 text-xs text-white/50">
                <div>🔒 Depósito de $100 para apartar fecha</div>
                <div>👥 Persona adicional: $10 c/u</div>
                <div>⏰ Hora extra: $50</div>
              </div>

              <a
                href="#reservar"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2a8a4f,#1a6b3a)', boxShadow: '0 4px 16px rgba(42,138,79,.5)' }}
              >
                Reservar Ahora →
              </a>
              <button
                onClick={() => setShowCal(true)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-semibold text-white/70 text-sm mt-2 hover:text-white transition-colors"
              >
                Ver fechas disponibles
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,60 L0,60 Z" fill="#f8f4ed" />
        </svg>
      </div>
    </section>

    {showCal && <CalendarModal onClose={() => setShowCal(false)} />}
    </>
  )
}
