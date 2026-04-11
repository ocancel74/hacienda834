import { AlertTriangle, ShieldAlert } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const RULES = [
  {
    icon:  ShieldAlert,
    title: 'Salvavidas obligatorio para menores de 6 años',
    body:
      'Todo menor de 6 años tiene que usar salvavidas obligatorio o no podrá hacer uso de la piscina. Esta regla es por la seguridad y bienestar de los más pequeños.',
    severity: 'high',   // rojo
  },
  {
    icon:  AlertTriangle,
    title: 'No hay devolución por cancelación',
    body:
      'Si se cancela la actividad no hay devolución del dinero, incluyendo el depósito. Asegúrate de confirmar bien tu fecha antes de reservar.',
    severity: 'warning', // ámbar
  },
]

const SEVERITY = {
  high: {
    bg:     'bg-red-50',
    border: 'border-red-200',
    icon:   'bg-red-100 text-red-600',
    title:  'text-red-900',
    body:   'text-red-700',
    badge:  'bg-red-100 text-red-600',
    label:  'Obligatorio',
  },
  warning: {
    bg:     'bg-amber-50',
    border: 'border-amber-200',
    icon:   'bg-amber-100 text-amber-600',
    title:  'text-amber-900',
    body:   'text-amber-700',
    badge:  'bg-amber-100 text-amber-600',
    label:  'Importante',
  },
}

export default function Rules() {
  const ref = useScrollAnimation()

  return (
    <section id="reglas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Reglas"
          title="Reglas importantes a tener en cuenta"
          subtitle="Para garantizar la seguridad y el disfrute de todos, es fundamental respetar estas normas."
        />

        <div ref={ref} className="reveal space-y-5">
          {RULES.map((rule, i) => {
            const Icon = rule.icon
            const s    = SEVERITY[rule.severity]

            return (
              <div
                key={i}
                className={`
                  flex gap-5 p-6 rounded-2xl border-2
                  ${s.bg} ${s.border}
                `}
              >
                {/* Icon */}
                <div className={`shrink-0 inline-flex p-3 rounded-xl h-fit ${s.icon}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`font-serif font-bold text-lg ${s.title}`}>
                      {rule.title}
                    </h3>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${s.badge}`}>
                      {s.label}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${s.body}`}>
                    {rule.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            El cumplimiento de estas reglas es responsabilidad de quien realiza la reservación.
          </p>
        </div>
      </div>
    </section>
  )
}
