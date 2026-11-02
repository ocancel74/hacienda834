import { useScrollAnimation } from '../hooks/useScrollAnimation'

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

        {/* Grid — mobile: 1 col / tablet: 2 col / desktop: bento */}
        <div ref={ref} className="reveal">

          {/* ── Mobile & Tablet (< lg) ── */}
          <div className="lg:hidden flex flex-col gap-3">
            {/* Piscina — foto real */}
            <div className="relative rounded-3xl overflow-hidden group" style={{ height: 280 }}>
              <img src="/Piscina.jpeg" alt="Piscina privada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 via-pool-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-pool-100 bg-pool-500/90 mb-2">⭐ Amenidad Principal</span>
                <h3 className="text-white font-extrabold text-2xl leading-tight">Piscina Cristalina<br />Privada</h3>
                <p className="text-white/70 text-sm mt-1">Solo para tu grupo · Limpia y lista</p>
              </div>
            </div>

            {/* 2×2 — stat cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl p-5 flex flex-col justify-between" style={{ background: '#082812', minHeight: 150 }}>
                <span className="text-3xl">🎱</span>
                <div>
                  <h3 className="text-white font-extrabold text-base">Mesa de Billar</h3>
                  <p className="text-pool-300 text-xs mt-1">Nivel profesional</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group" style={{ minHeight: 150 }}>
                <img src="/cancha 1.jpeg" alt="Cancha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-2xl">🏀</span>
                  <h3 className="text-white font-extrabold text-sm mt-1">Cancha de Basket</h3>
                </div>
              </div>
              <div className="rounded-3xl p-5 flex flex-col justify-between" style={{ background: 'linear-gradient(135deg,#c9a84c,#b8932e)', minHeight: 150 }}>
                <span className="text-3xl">🍖</span>
                <div>
                  <h3 className="text-pool-900 font-extrabold text-base">BBQ & Dominó</h3>
                  <p className="text-pool-900/65 text-xs mt-1">El sabor de la isla</p>
                </div>
              </div>
              <div className="rounded-3xl p-5 flex flex-col justify-between" style={{ background: 'linear-gradient(135deg,#2a8a4f,#1a6b3a)', minHeight: 150 }}>
                <span className="text-3xl">🏠</span>
                <div>
                  <h3 className="text-white font-extrabold text-base">Espacio Techado</h3>
                  <p className="text-white/60 text-xs mt-1">Con lluvia o sol</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop Bento ── */}
          <div
            className="hidden lg:grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: '270px 200px',
            }}
          >
            {/* Hero — Piscina (foto real, 2×2) */}
            <div className="relative rounded-3xl overflow-hidden group" style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
              <img src="/Piscina.jpeg" alt="Piscina privada Hacienda834" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-pool-900/88 via-pool-900/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-pool-100 bg-pool-500/90 mb-3">⭐ Amenidad Principal</span>
                <h3 className="text-white font-extrabold leading-tight" style={{ fontSize: '1.85rem' }}>Piscina Cristalina<br />Privada</h3>
                <p className="text-white/65 text-sm mt-2">Solo para tu grupo · Limpia y lista</p>
              </div>
            </div>

            {/* Billar — dark card */}
            <div className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-6" style={{ background: '#082812' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 20% 80%, rgba(42,138,79,.35), transparent)', pointerEvents: 'none' }} />
              <div className="relative z-10 text-4xl">🎱</div>
              <div className="relative z-10">
                <p className="text-pool-400 text-xs font-bold uppercase tracking-widest mb-1">Entretenimiento</p>
                <h3 className="text-white font-extrabold text-xl">Mesa de Billar</h3>
                <p className="text-white/50 text-sm mt-1">Nivel profesional</p>
              </div>
            </div>

            {/* Cancha — foto real */}
            <div className="relative rounded-3xl overflow-hidden group">
              <img src="/cancha 1.jpeg" alt="Cancha de baloncesto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-2xl mb-1">🏀</div>
                <h3 className="text-white font-extrabold text-base">Cancha de Basket</h3>
                <p className="text-white/60 text-xs mt-0.5">Full court privada</p>
              </div>
            </div>

            {/* BBQ — gold card */}
            <div className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-6" style={{ background: 'linear-gradient(145deg,#c9a84c,#9a7a1f)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(255,255,255,.15), transparent)', pointerEvents: 'none' }} />
              <div className="relative z-10 text-4xl">🍖</div>
              <div className="relative z-10">
                <p className="text-pool-900/60 text-xs font-bold uppercase tracking-widest mb-1">Cocina al aire libre</p>
                <h3 className="text-pool-900 font-extrabold text-xl">BBQ & Dominó</h3>
                <p className="text-pool-900/65 text-sm mt-1">El sabor de la isla</p>
              </div>
            </div>

            {/* Espacio Techado — green card */}
            <div className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-6" style={{ background: 'linear-gradient(145deg,#2a8a4f,#145229)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(119,188,146,.25), transparent)', pointerEvents: 'none' }} />
              <div className="relative z-10 text-4xl">🏠</div>
              <div className="relative z-10">
                <p className="text-pool-200 text-xs font-bold uppercase tracking-widest mb-1">Área cubierta</p>
                <h3 className="text-white font-extrabold text-xl">Espacio Techado</h3>
                <p className="text-white/60 text-sm mt-1">Para eventos con lluvia o sol</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
