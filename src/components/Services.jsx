import {
  Droplets, CircleDot, Grid3X3, Coffee,
  Car, Package, Flame, Trophy,
} from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { includedServices } from '../data/services'

// Map de nombre de ícono → componente
const ICON_MAP = {
  Droplets, CircleDot, Grid3X3, Coffee,
  Car, Package, Flame, Trophy,
}

export default function Services() {
  const gridRef = useScrollAnimation(0.05)

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Incluido en tu reservación"
          title="Todo lo que necesitas ya está aquí"
          subtitle="Sin costos ocultos. Estos servicios van incluidos en el precio de tu reservación."
        />

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {includedServices.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] ?? CircleDot
            return (
              <div
                key={svc.label}
                className={`
                  group relative bg-white border border-slate-100
                  rounded-2xl p-6 text-center
                  hover:border-pool-300 hover:shadow-xl hover:shadow-pool-500/10
                  transition-all duration-300 hover:-translate-y-1
                  delay-${(i % 4) * 100}
                `}
              >
                {/* Icon bubble */}
                <div className="
                  inline-flex items-center justify-center
                  w-14 h-14 rounded-2xl mb-4
                  bg-pool-50 text-pool-500
                  group-hover:bg-pool-500 group-hover:text-white
                  transition-all duration-300
                ">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-semibold text-slate-800 text-sm mb-2 leading-snug font-serif">
                  {svc.label}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {svc.description}
                </p>

                {/* Check badge */}
                <div className="absolute top-4 right-4 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-500" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

        {/* Included banner */}
        <div className="mt-10 flex items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4">
          <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="text-green-700 text-sm font-medium">
            Todos estos servicios están <strong>incluidos sin costo adicional</strong> en tu reservación.
          </p>
        </div>
      </div>
    </section>
  )
}
