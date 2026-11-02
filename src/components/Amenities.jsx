import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AMENITIES = [
  {
    key: 'piscina',
    icon: '🏊',
    title: 'Piscina Privada',
    sub: 'Cristalina y exclusiva para tu grupo',
    stat: '40',
    statLabel: 'personas máx.',
    bg: 'linear-gradient(145deg,#082812,#0e3a1d)',
    accent: '#4aa36d',
    hero: true,
  },
  {
    key: 'billar',
    icon: '🎱',
    title: 'Mesa de Billar',
    sub: 'Nivel profesional',
    bg: 'linear-gradient(145deg,#0e3a1d,#145229)',
    accent: '#77bc92',
  },
  {
    key: 'cancha',
    icon: '🏀',
    title: 'Cancha de Basket',
    sub: 'Full court privada',
    bg: 'linear-gradient(145deg,#145229,#1a6b3a)',
    accent: '#aad4b8',
  },
  {
    key: 'bbq',
    icon: '🍖',
    title: 'BBQ & Dominó',
    sub: 'El sabor de la isla',
    bg: 'linear-gradient(145deg,#c9a84c,#9a7a1f)',
    accent: '#082812',
    dark: true,
  },
  {
    key: 'techado',
    icon: '🏠',
    title: 'Espacio Techado',
    sub: 'Con lluvia o sol',
    bg: 'linear-gradient(145deg,#2a8a4f,#1a6b3a)',
    accent: '#d5eadb',
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
            Espacio 100% privado con cinco amenidades premium — todo incluido en un solo precio.
          </p>
        </div>

        {/* ── Mobile: 1 col hero + 2×2 ── */}
        <div className="lg:hidden flex flex-col gap-3">
          {/* Hero card */}
          <div
            className="relative rounded-3xl p-7 overflow-hidden"
            style={{ background: AMENITIES[0].bg, minHeight: 200 }}
          >
            {/* glow */}
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 55% at 85% 15%, rgba(74,163,109,.3), transparent)', pointerEvents:'none' }} />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <span className="text-5xl">{AMENITIES[0].icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.8)' }}>Principal</span>
              </div>
              <div className="mt-6">
                <div className="font-serif font-bold text-white" style={{ fontSize:'2.4rem', lineHeight:1 }}>40</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1 mb-3" style={{ color: AMENITIES[0].accent }}>personas máx.</div>
                <h3 className="text-white font-extrabold text-xl">{AMENITIES[0].title}</h3>
                <p className="text-white/55 text-sm mt-1">{AMENITIES[0].sub}</p>
              </div>
            </div>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {AMENITIES.slice(1).map(a => (
              <div
                key={a.key}
                className="relative rounded-3xl p-5 overflow-hidden flex flex-col justify-between"
                style={{ background: a.bg, minHeight: 160 }}
              >
                <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 55% at 80% 15%, rgba(255,255,255,.1), transparent)', pointerEvents:'none' }} />
                <span className="relative z-10 text-3xl">{a.icon}</span>
                <div className="relative z-10 mt-4">
                  <h3 className="font-extrabold text-sm leading-tight" style={{ color: a.dark ? '#082812' : '#fff' }}>{a.title}</h3>
                  <p className="text-xs mt-1" style={{ color: a.dark ? 'rgba(8,40,18,.6)' : 'rgba(255,255,255,.55)' }}>{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop Bento Grid ── */}
        <div
          className="hidden lg:grid gap-4"
          style={{ gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '280px 210px' }}
        >
          {/* Hero — Piscina (2×2) */}
          <div
            className="relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
            style={{ gridColumn:'1/3', gridRow:'1/3', background: AMENITIES[0].bg }}
          >
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 55% 50% at 85% 10%, rgba(74,163,109,.35), transparent)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 40% 40% at 10% 90%, rgba(42,138,79,.2), transparent)', pointerEvents:'none' }} />

            <div className="relative z-10 flex items-start justify-between">
              <span className="text-6xl">{AMENITIES[0].icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ background:'rgba(255,255,255,.08)', color:'rgba(255,255,255,.75)', borderColor:'rgba(255,255,255,.2)' }}>
                ⭐ Amenidad Principal
              </span>
            </div>

            <div className="relative z-10">
              <div className="font-serif font-bold text-white" style={{ fontSize:'4rem', lineHeight:1 }}>40</div>
              <div className="text-sm font-bold uppercase tracking-[.14em] mb-4" style={{ color: AMENITIES[0].accent }}>personas máx.</div>
              <h3 className="text-white font-extrabold" style={{ fontSize:'1.9rem', lineHeight:1.15 }}>Piscina Cristalina<br />Privada</h3>
              <p className="text-white/55 text-base mt-2">Solo para tu grupo · Limpia y lista</p>
            </div>
          </div>

          {/* Billar */}
          <div className="relative rounded-3xl p-6 overflow-hidden flex flex-col justify-between" style={{ background: AMENITIES[1].bg }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 55% at 80% 10%, rgba(119,188,146,.2), transparent)', pointerEvents:'none' }} />
            <span className="relative z-10 text-4xl">{AMENITIES[1].icon}</span>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AMENITIES[1].accent }}>Entretenimiento</p>
              <h3 className="text-white font-extrabold text-xl">{AMENITIES[1].title}</h3>
              <p className="text-white/50 text-sm mt-1">{AMENITIES[1].sub}</p>
            </div>
          </div>

          {/* Cancha */}
          <div className="relative rounded-3xl p-6 overflow-hidden flex flex-col justify-between" style={{ background: AMENITIES[2].bg }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 55% at 80% 10%, rgba(170,212,184,.15), transparent)', pointerEvents:'none' }} />
            <span className="relative z-10 text-4xl">{AMENITIES[2].icon}</span>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AMENITIES[2].accent }}>Deportes</p>
              <h3 className="text-white font-extrabold text-xl">{AMENITIES[2].title}</h3>
              <p className="text-white/50 text-sm mt-1">{AMENITIES[2].sub}</p>
            </div>
          </div>

          {/* BBQ — gold */}
          <div className="relative rounded-3xl p-6 overflow-hidden flex flex-col justify-between" style={{ background: AMENITIES[3].bg }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 55% at 80% 10%, rgba(255,255,255,.2), transparent)', pointerEvents:'none' }} />
            <span className="relative z-10 text-4xl">{AMENITIES[3].icon}</span>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color:'rgba(8,40,18,.55)' }}>Cocina al aire libre</p>
              <h3 className="font-extrabold text-xl" style={{ color:'#082812' }}>{AMENITIES[3].title}</h3>
              <p className="text-sm mt-1" style={{ color:'rgba(8,40,18,.6)' }}>{AMENITIES[3].sub}</p>
            </div>
          </div>

          {/* Techado — green */}
          <div className="relative rounded-3xl p-6 overflow-hidden flex flex-col justify-between" style={{ background: AMENITIES[4].bg }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 55% at 80% 10%, rgba(213,234,219,.2), transparent)', pointerEvents:'none' }} />
            <span className="relative z-10 text-4xl">{AMENITIES[4].icon}</span>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AMENITIES[4].accent }}>Área cubierta</p>
              <h3 className="text-white font-extrabold text-xl">{AMENITIES[4].title}</h3>
              <p className="text-white/55 text-sm mt-1">{AMENITIES[4].sub}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
