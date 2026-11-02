import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ITEMS = [
  { icon: '🏊', title: 'Piscina Privada',    sub: 'Cristalina y exclusiva'       },
  { icon: '🔒', title: '100% Privado',       sub: 'Sin extraños ni vecinos'      },
  { icon: '👨‍👩‍👧‍👦', title: 'Ambiente Familiar', sub: 'Para todas las edades'      },
  { icon: '📍', title: 'Guaynabo, PR',       sub: 'Fácil acceso y parking'       },
]

const delays = ['', 'delay-100', 'delay-200', 'delay-300']

export default function TrustStrip() {
  const ref = useScrollAnimation()

  return (
    <section className="bg-white border-b border-cream-200">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-200">
          {ITEMS.map((item, i) => (
            <div key={item.title} className={`reveal ${delays[i]} flex flex-col items-center gap-2 py-8 px-4 text-center`}>
              <div className="w-12 h-12 rounded-2xl bg-pool-50 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div className="font-bold text-sm text-slate-800">{item.title}</div>
              <div className="text-xs text-slate-500">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
