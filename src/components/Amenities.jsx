import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Amenities() {
  const ref = useScrollAnimation()

  return (
    <section id="amenidades" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-pool-500 mb-3">Amenidades</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Todo lo que necesitas,<br />en un solo lugar
          </h2>
          <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            Cinco amenidades premium en un espacio completamente privado. No compartes nada con nadie.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="reveal grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '240px 200px',
          }}
        >
          {/* Hero cell — Piscina */}
          <div
            className="relative rounded-3xl overflow-hidden group"
            style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}
          >
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80"
              alt="Piscina privada Hacienda834"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/85 via-pool-800/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-pool-100 bg-pool-500/80 mb-3">
                ⭐ Amenidad Principal
              </span>
              <h3 className="text-white font-sans font-extrabold leading-tight" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)' }}>
                Piscina Cristalina<br />Privada
              </h3>
              <p className="text-white/65 text-sm mt-1">Solo para tu grupo · Limpia y lista</p>
            </div>
          </div>

          {/* Billar */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80"
              alt="Mesa de billar"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-2xl mb-1">🎱</div>
              <h3 className="text-white font-sans font-extrabold text-base">Mesa de Billar</h3>
              <p className="text-white/60 text-xs mt-0.5">Nivel profesional</p>
            </div>
          </div>

          {/* Cancha */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80"
              alt="Cancha de baloncesto"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="text-2xl mb-1">🏀</div>
              <h3 className="text-white font-sans font-extrabold text-base">Cancha de Basket</h3>
              <p className="text-white/60 text-xs mt-0.5">Full court privada</p>
            </div>
          </div>

          {/* BBQ */}
          <div className="relative rounded-3xl overflow-hidden bg-pool-900">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 70%, rgba(42,138,79,.4), transparent)' }} />
            <div className="relative z-10 h-full flex flex-col justify-between p-5">
              <div className="text-3xl">🍖</div>
              <div>
                <h3 className="text-white font-sans font-extrabold text-base">BBQ & Dominó</h3>
                <p className="text-white/55 text-xs mt-1">El sabor de la isla en tu evento</p>
              </div>
            </div>
          </div>

          {/* Espacio Techado */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2a8a4f 0%, #0d9488 100%)' }}
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='10' fill='%23ffffff'/%3E%3C/svg%3E\")" }} />
            <div className="relative z-10 h-full flex flex-col justify-between p-5">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="text-white font-sans font-extrabold text-base">Espacio Techado</h3>
                <p className="text-white/70 text-xs mt-1">Para eventos con lluvia o sol</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile fallback styles */}
        <style>{`
          @media (max-width: 767px) {
            .amenities-bento {
              grid-template-columns: repeat(2, 1fr) !important;
              grid-template-rows: 200px repeat(2, 160px) !important;
            }
            .amenities-bento > div:first-child {
              grid-column: 1 / 3 !important;
              grid-row: 1 / 2 !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
