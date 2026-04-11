import { Zap, Armchair, Home } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { extras } from '../data/extras'

const ICON_MAP = { Zap, Armchair, Home }

export default function Extras() {
  const gridRef = useScrollAnimation(0.05)

  return (
    <section id="extras" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Servicios Adicionales"
          title="Extras para hacer tu evento perfecto"
          subtitle="Personaliza tu experiencia con servicios opcionales disponibles por un costo adicional."
        />

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {extras.map((extra, i) => {
            const Icon = ICON_MAP[extra.icon] ?? Zap

            return (
              <div
                key={extra.id}
                className={`
                  bg-white rounded-2xl overflow-hidden
                  border border-slate-100
                  shadow-sm hover:shadow-xl hover:shadow-pool-500/10
                  transition-all duration-300 hover:-translate-y-1
                  delay-${i * 100}
                `}
              >
                {/* Top accent */}
                <div className="h-1.5 bg-gradient-to-r from-pool-400 to-pool-600" />

                <div className="p-7">
                  {/* Icon */}
                  <div className="inline-flex p-3.5 bg-pool-100 text-pool-600 rounded-2xl mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                    {extra.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {extra.description}
                  </p>

                  {/* Note badge */}
                  {extra.note && (
                    <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                      <span>⚠</span>
                      {extra.note}
                    </div>
                  )}

                  {/* Pricing breakdown */}
                  <div className="space-y-2">
                    {extra.pricing.map(p => (
                      <div
                        key={p.item}
                        className="flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3"
                      >
                        <span className="text-slate-600 text-sm">{p.item}</span>
                        <span className="font-bold text-pool-600 text-sm">{p.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-slate-400 text-sm">
          Consulta disponibilidad de extras al momento de hacer tu reservación.
        </p>
      </div>
    </section>
  )
}
