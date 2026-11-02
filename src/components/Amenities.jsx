export default function Amenities() {
  return (
    <section id="amenidades" className="bg-cream-100">

      {/* ── Banner hero ancho ── */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(260px, 40vw, 420px)' }}>
        <img
          src="/piscina-dia.webp"
          alt="Hacienda834 espacio completo"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,40,18,0.82) 0%, rgba(8,40,18,0.55) 55%, rgba(8,40,18,0.1) 100%)' }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-pool-300 mb-3">Amenidades</p>
            <h2 className="font-serif font-bold text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
              Todo lo que necesitas,<br />
              <em className="not-italic" style={{ color: '#77bc92' }}>en un solo lugar</em>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
              Espacio 100% privado con cinco amenidades premium —<br className="hidden sm:block" />
              todo incluido en un solo precio.
            </p>
          </div>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:40 }}>
            <path d="M0,20 C480,0 960,40 1440,20 L1440,40 L0,40 Z" fill="#f8f4ed" />
          </svg>
        </div>
      </div>

      {/* ── Bento grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

        {/* Desktop */}
        <div className="hidden lg:grid gap-3" style={{ gridTemplateColumns: '1.15fr 1fr 1fr', gridTemplateRows: '260px 220px' }}>

          {/* Piscina — hero, 2 rows */}
          <div className="relative rounded-3xl overflow-hidden group" style={{ gridRow: '1 / 3' }}>
            <img src="/piscina-dia.webp" alt="Piscina privada" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.92) 0%, rgba(8,40,18,0.4) 50%, transparent 100%)' }} />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: 'rgba(42,138,79,0.9)', backdropFilter: 'blur(8px)' }}>
                ⭐ AMENIDAD PRINCIPAL
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center gap-4 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"><path d="M2 12c3.333-4 6.667-4 10 0s6.667 4 10 0"/><path d="M2 17c3.333-4 6.667-4 10 0s6.667 4 10 0"/></svg>
                <div>
                  <div className="text-white/60 text-xs font-semibold">Hasta</div>
                  <div className="font-serif font-bold text-white" style={{ fontSize: '2rem', lineHeight: 1 }}>40</div>
                  <div className="text-pool-300 text-xs font-bold uppercase tracking-widest">Personas máx.</div>
                </div>
              </div>
              <h3 className="text-white font-extrabold text-2xl leading-tight">Piscina Cristalina<br />Privada</h3>
              <p className="text-white/60 text-sm mt-1">Solo para tu grupo • Limpia y lista</p>
            </div>
          </div>

          {/* Billar */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/foto-billar.jpeg" alt="Mesa de billar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.88) 0%, transparent 55%)' }} />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-pool-300 text-xs font-bold uppercase tracking-widest mb-1">Entretenimiento Terraza</p>
              <h3 className="text-white font-extrabold text-lg">Mesa de Billar</h3>
            </div>
          </div>

          {/* Cancha */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/Cancha.jpeg" alt="Cancha de baloncesto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.88) 0%, transparent 55%)' }} />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-pool-300 text-xs font-bold uppercase tracking-widest mb-1">Deportes</p>
              <h3 className="text-white font-extrabold text-lg">Media Cancha de Basket</h3>
            </div>
          </div>

          {/* BBQ */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/foto-bbq.jpg" alt="BBQ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.88) 0%, transparent 55%)' }} />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-pool-300 text-xs font-bold uppercase tracking-widest mb-1">Cocina al aire libre</p>
              <h3 className="text-white font-extrabold text-lg">BBQ</h3>
            </div>
          </div>

          {/* Comedor */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img src="/Sombrillas-Bano.jpeg" alt="Comedor al aire libre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.88) 0%, transparent 55%)' }} />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-extrabold text-lg">Comedor al Aire Libre</h3>
              <p className="text-white/55 text-xs mt-0.5">Con sombrillas</p>
            </div>
          </div>

        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-3">
          <div className="relative rounded-3xl overflow-hidden" style={{ height: 280 }}>
            <img src="/piscina-dia.webp" alt="Piscina" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.9) 0%, rgba(8,40,18,0.3) 50%, transparent 100%)' }} />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'rgba(42,138,79,0.9)' }}>⭐ AMENIDAD PRINCIPAL</span>
            </div>
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-pool-300 text-xs font-bold uppercase tracking-widest mb-1">Hasta 40 personas</p>
              <h3 className="text-white font-extrabold text-xl">Piscina Cristalina Privada</h3>
              <p className="text-white/60 text-sm mt-1">Solo para tu grupo • Limpia y lista</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: '/foto-billar.jpeg',      cat: 'Entretenimiento Terraza', title: 'Mesa de Billar',         sub: '' },
              { src: '/Cancha.jpeg',           cat: 'Deportes',               title: 'Media Cancha de Basket', sub: '' },
              { src: '/foto-bbq.jpg',          cat: 'Cocina al Aire Libre',   title: 'BBQ',                    sub: '' },
              { src: '/Sombrillas-Bano.jpeg',  cat: '',                       title: 'Comedor al Aire Libre',  sub: 'Con sombrillas' },
            ].map(c => (
              <div key={c.title} className="relative rounded-2xl overflow-hidden" style={{ height: 160 }}>
                <img src={c.src} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,40,18,0.88) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-pool-300 text-xs font-bold uppercase tracking-wider mb-0.5">{c.cat}</p>
                  <h3 className="text-white font-extrabold text-sm leading-tight">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, title: 'Espacio Privado', sub: 'Solo para tu grupo' },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Hasta 40 Personas', sub: 'Ideal para celebraciones' },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Ambiente Familiar', sub: 'Cómodo, seguro y equipado' },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Reserva Fácil', sub: 'Consulta disponibilidad' },
          ].map(t => (
            <div key={t.title} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 border border-cream-200">
              <div className="text-pool-500 flex-shrink-0">{t.icon}</div>
              <div>
                <div className="font-bold text-sm text-slate-800">{t.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
