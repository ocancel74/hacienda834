import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { pricing } from '../data/pricing'
import { contact } from '../data/contact'

const EXTRAS = [
  { icon: '💰', label: 'Depósito',       value: `$${pricing.deposit}`,           sub: 'Para confirmar tu fecha'          },
  { icon: '➕', label: 'Persona extra',  value: `$${pricing.extraPersonCost}`,   sub: `Por cada persona sobre ${pricing.capacity}` },
  { icon: '🕐', label: 'Hora extra',     value: `$${pricing.schedule.extraHour}`, sub: 'Por hora adicional'              },
  { icon: '⚠️', label: 'Cancelación',    value: null,                             sub: 'Depósito no reembolsable', warn: true },
]

export default function Pricing() {
  const refL = useScrollAnimation()
  const refR = useScrollAnimation()
  const waUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section id="precios" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-pool-500 mb-3">Precios</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
            Todo incluido.<br />Sin letras pequeñas.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Main price card */}
          <div
            ref={refL}
            className="reveal rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(155deg,#082812 0%,#047857 60%,#0d9488 100%)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(13,148,136,.35), transparent)' }} />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-white bg-white/15 border border-white/25 mb-6">
                Precio por Evento
              </span>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-white font-serif" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1 }}>${pricing.total}</span>
                <span className="text-white/55 text-sm mb-2.5 font-medium">total</span>
              </div>
              <p className="text-white/55 text-sm mb-8">Hasta {pricing.capacity} personas incluidas</p>

              <div className="flex flex-col gap-4 border-t border-white/12 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-white/65 text-sm">Alquiler del espacio</span>
                  <span className="text-white font-bold">${pricing.rental}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/65 text-sm">Servicio de limpieza</span>
                  <span className="text-white font-bold">${pricing.cleaning}</span>
                </div>
                <div className="flex justify-between items-center bg-white/8 rounded-xl px-4 py-3">
                  <span className="text-white font-bold">Total</span>
                  <span className="font-extrabold text-lg" style={{ color: '#4aa36d' }}>${pricing.total}</span>
                </div>
              </div>

              <a
                href="#reservar"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-base text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,.15)', border: '1.5px solid rgba(255,255,255,.3)' }}
              >
                Reservar Ahora →
              </a>
            </div>
          </div>

          {/* Extra cards */}
          <div ref={refR} className="reveal delay-200 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {EXTRAS.map(e => (
                <div
                  key={e.label}
                  className={`rounded-3xl p-5 flex flex-col gap-2 border ${e.warn ? 'bg-pool-50 border-pool-100' : 'bg-white border-cream-200 shadow-sm'}`}
                >
                  <div className="text-2xl">{e.icon}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${e.warn ? 'text-pool-600' : 'text-pool-500'}`}>{e.label}</div>
                  {e.value
                    ? <div className="font-serif text-2xl font-bold text-slate-800">{e.value}</div>
                    : <div className="text-sm font-bold text-pool-700 mt-1 leading-snug">{e.sub}</div>
                  }
                  {e.value && <div className="text-xs text-slate-500">{e.sub}</div>}
                </div>
              ))}
            </div>

            {/* WhatsApp card */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl p-5 no-underline transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#082812,#065f46)' }}
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#25d366' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm text-white">¿Tienes preguntas?</div>
                <div className="text-xs text-white/60 mt-0.5">Escríbenos por WhatsApp</div>
              </div>
              <span className="text-white font-bold text-sm px-4 py-2 rounded-xl flex-shrink-0" style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.2)' }}>
                Chatear →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
