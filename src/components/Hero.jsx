import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STATS = [
  { value: '40',  label: 'Personas máx.' },
  { value: '9h',  label: 'De diversión'  },
  { value: '$450', label: 'Todo incluido' },
  { value: '5',   label: 'Amenidades'    },
]

const BADGES = ['🔒 100% Privado', '📍 Guaynabo, Puerto Rico', '🏊 Piscina Incluida']

export default function Hero() {
  const ref = useScrollAnimation()

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-900/88 via-pool-800/72 to-pool-700/50" />

      <div ref={ref} className="reveal relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 120, paddingBottom: 80 }}>

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
          style={{ fontSize: 'clamp(2.4rem,6vw,5rem)', maxWidth: 720, lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          Tu Paraíso<br />
          <span style={{ background: 'linear-gradient(90deg,#4aa36d,#77bc92)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Privado
          </span><br />
          con Piscina
        </h1>

        {/* Subline */}
        <p
          className="text-white/75 mb-10"
          style={{ fontSize: 'clamp(1rem,2.5vw,1.2rem)', maxWidth: 540, lineHeight: 1.65 }}
        >
          Celebra, relájate y crea recuerdos que duran. Espacio exclusivo hasta 40 personas — solo para ti y los tuyos, sin extraños.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#reservar"
            className="inline-flex items-center justify-center gap-2 font-bold text-white px-8 py-4 rounded-2xl text-base transition-all hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg,#2a8a4f,#0d9488)', boxShadow: '0 6px 24px rgba(42,138,79,.55)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Reservar Mi Fecha
          </a>
          <a
            href="tel:+19399692376"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white px-8 py-4 rounded-2xl text-base transition-all hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,.12)', border: '1.5px solid rgba(255,255,255,.25)', backdropFilter: 'blur(8px)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.43 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            (939) 969-2376
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-14 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,.15)' }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div className="text-white font-serif" style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
              <div className="text-white/55 text-sm font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 wave">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,60 L0,60 Z" fill="#f8f4ed" />
        </svg>
      </div>
    </section>
  )
}
