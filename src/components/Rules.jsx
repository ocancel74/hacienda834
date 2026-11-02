import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { pricing } from '../data/pricing'

const RULES = [
  { icon: '✅', title: 'Ambiente familiar y respetuoso',    sub: 'Apto para niños, adultos y personas mayores' },
  { icon: '🎵', title: 'Música permitida con moderación',  sub: 'Parlantes o equipo propio bienvenidos'        },
  { icon: '🍽️', title: 'Puedes traer tu comida y bebidas', sub: 'Área de BBQ y parrilleras disponibles'        },
  { icon: '🧹', title: 'Dejar el espacio limpio al salir', sub: 'Limpieza incluida en el precio total'         },
  { icon: '🐾', title: 'Mascotas — consultar disponibilidad', sub: 'Pregunta al reservar tu fecha'             },
]

export default function Rules() {
  const refL = useScrollAnimation()
  const refR = useScrollAnimation()

  return (
    <section id="reglas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div ref={refL} className="reveal">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-pool-500 mb-3">Horario &amp; Reglas</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Transparente y claro,<br />sin sorpresas
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Queremos que tu evento sea perfecto. Por eso te compartimos todo lo que necesitas saber antes de reservar.
            </p>

            <div className="bg-white rounded-3xl border border-cream-200 shadow-sm p-6 mb-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pool-50 flex items-center justify-center text-2xl flex-shrink-0">⏰</div>
              <div>
                <div className="text-xs font-bold text-pool-500 uppercase tracking-wider mb-0.5">Horario de uso</div>
                <div className="text-xl font-extrabold text-slate-800">{pricing.schedule.start} – {pricing.schedule.end}</div>
                <div className="text-sm text-slate-500 mt-0.5">9 horas de disfrute · Hora extra ${pricing.schedule.extraHour}</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-cream-200 shadow-sm p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pool-50 flex items-center justify-center text-2xl flex-shrink-0">👥</div>
              <div>
                <div className="text-xs font-bold text-pool-500 uppercase tracking-wider mb-0.5">Capacidad</div>
                <div className="text-xl font-extrabold text-slate-800">Hasta {pricing.capacity} personas</div>
                <div className="text-sm text-slate-500 mt-0.5">Persona adicional: ${pricing.extraPersonCost} c/u</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={refR} className="reveal delay-200 flex flex-col gap-3">
            {RULES.map(r => (
              <div key={r.title} className="bg-white rounded-3xl border border-cream-200 shadow-sm p-4 flex items-start gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-pool-50 flex items-center justify-center text-lg flex-shrink-0 mt-0.5">{r.icon}</div>
                <div>
                  <div className="font-bold text-sm text-slate-800">{r.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{r.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
