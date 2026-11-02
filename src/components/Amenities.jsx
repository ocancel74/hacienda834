import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CELLS = [
  {
    key: 'piscina',
    src: '/Piscina.jpeg',
    alt: 'Piscina privada Hacienda834',
    hero: true,
    badge: '⭐ Amenidad Principal',
    title: 'Piscina Cristalina Privada',
    sub: 'Solo para tu grupo · Limpia y lista',
  },
  {
    key: 'billar',
    src: '/billar.jpeg',
    alt: 'Mesa de billar',
    icon: '🎱',
    title: 'Mesa de Billar',
    sub: 'Nivel profesional',
  },
  {
    key: 'cancha',
    src: '/cancha 1.jpeg',
    alt: 'Cancha de baloncesto',
    icon: '🏀',
    title: 'Cancha de Basket',
    sub: 'Full court privada',
  },
  {
    key: 'bbq',
    src: '/foto-bbq.jpg',
    alt: 'Área de BBQ',
    icon: '🍖',
    title: 'BBQ & Dominó',
    sub: 'El sabor de la isla en tu evento',
  },
  {
    key: 'techado',
    src: '/area mesas.jpeg',
    alt: 'Espacio techado',
    icon: '🏠',
    title: 'Espacio Techado',
    sub: 'Para eventos con lluvia o sol',
  },
]

export default function Amenities() {
  const ref = useScrollAnimation()

  return (
    <section id="amenidades" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-pool-500 mb-3">Amenidades</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Todo lo que necesitas,<br />en un solo lugar
          </h2>
          <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            Cinco amenidades premium en un espacio completamente privado. No compartes nada con nadie.
          </p>
        </div>

        {/* ── Mobile layout: stacked cards ── */}
        <div ref={ref} className="reveal lg:hidden flex flex-col gap-3">
          {/* Pool — full width hero card */}
          <div className="relative rounded-3xl overflow-hidden group" style={{ height: 260 }}>
            <img src="/Piscina.jpeg" alt="Piscina privada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 via-pool-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-pool-100 bg-pool-500/80 mb-2">⭐ Amenidad Principal</span>
              <h3 className="text-white font-extrabold text-xl leading-tight">Piscina Cristalina Privada</h3>
              <p className="text-white/65 text-sm mt-0.5">Solo para tu grupo · Limpia y lista</p>
            </div>
          </div>

          {/* 2x2 grid for the other 4 */}
          <div className="grid grid-cols-2 gap-3">
            {CELLS.slice(1).map(cell => (
              <div key={cell.key} className="relative rounded-2xl overflow-hidden group" style={{ height: 160 }}>
                <img src={cell.src} alt={cell.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 via-pool-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3">
                  <div className="text-lg mb-0.5">{cell.icon}</div>
                  <h3 className="text-white font-extrabold text-sm leading-tight">{cell.title}</h3>
                  <p className="text-white/60 text-xs mt-0.5 hidden sm:block">{cell.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop Bento Grid ── */}
        <div
          ref={ref}
          className="reveal hidden lg:grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '260px 210px',
          }}
        >
          {/* Hero — Piscina */}
          <div className="relative rounded-3xl overflow-hidden group" style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
            <img src="/Piscina.jpeg" alt="Piscina privada Hacienda834" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 via-pool-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-pool-100 bg-pool-500/80 mb-3">⭐ Amenidad Principal</span>
              <h3 className="text-white font-extrabold leading-tight" style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)' }}>Piscina Cristalina<br />Privada</h3>
              <p className="text-white/65 text-sm mt-1">Solo para tu grupo · Limpia y lista</p>
            </div>
          </div>

          {/* Billar */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/billar.jpeg" alt="Mesa de billar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-2xl mb-1">🎱</div>
              <h3 className="text-white font-extrabold text-base">Mesa de Billar</h3>
              <p className="text-white/60 text-xs mt-0.5">Nivel profesional</p>
            </div>
          </div>

          {/* Cancha */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/cancha 1.jpeg" alt="Cancha de baloncesto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-2xl mb-1">🏀</div>
              <h3 className="text-white font-extrabold text-base">Cancha de Basket</h3>
              <p className="text-white/60 text-xs mt-0.5">Full court privada</p>
            </div>
          </div>

          {/* BBQ */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/foto-bbq.jpg" alt="Área de BBQ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-2xl mb-1">🍖</div>
              <h3 className="text-white font-extrabold text-base">BBQ & Dominó</h3>
              <p className="text-white/55 text-xs mt-0.5">El sabor de la isla</p>
            </div>
          </div>

          {/* Espacio Techado */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/area mesas.jpeg" alt="Espacio techado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-2xl mb-1">🏠</div>
              <h3 className="text-white font-extrabold text-base">Espacio Techado</h3>
              <p className="text-white/70 text-xs mt-0.5">Con lluvia o sol</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
