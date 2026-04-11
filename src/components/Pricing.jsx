import { Clock, Users, UserPlus, DollarSign, CalendarCheck, ChevronRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { pricing } from '../data/pricing'
import { contact } from '../data/contact'

const fmt = (n) => `$${n.toFixed(2)}`

export default function Pricing() {
  const cardRef  = useScrollAnimation()
  const infoRef  = useScrollAnimation()
  const whatsapp = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section id="precios" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Precios"
          title="Transparencia total, sin sorpresas"
          subtitle="Todo incluido desde el primer día. Así de claro y sencillo."
        />

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Main pricing card ────────────────────────────────────────── */}
          <div
            ref={cardRef}
            className="reveal flex-1 w-full lg:max-w-lg"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pool-500/20">
              {/* Header */}
              <div className="bg-gradient-to-br from-pool-900 to-pool-700 px-8 pt-10 pb-6 text-white">
                <div className="inline-block bg-sand-400 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                  Precio estándar
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-serif text-6xl font-bold">{fmt(pricing.total)}</span>
                </div>
                <p className="text-pool-200 text-sm">Total por evento · hasta {pricing.capacity} personas</p>
              </div>

              {/* Body */}
              <div className="bg-white px-8 py-6">
                {/* Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">Alquiler del espacio</span>
                    <span className="font-semibold text-slate-800">{fmt(pricing.rental)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">Servicio de limpieza</span>
                    <span className="font-semibold text-slate-800">{fmt(pricing.cleaning)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-pool-50 rounded-xl px-4 -mx-1">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="font-bold text-xl text-pool-600">{fmt(pricing.total)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-1">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-sand-400" />
                      <span className="text-slate-500 text-sm">Depósito para reservar</span>
                    </div>
                    <span className="font-semibold text-sand-500">{fmt(pricing.deposit)}</span>
                  </div>
                </div>

                {/* Reserve button */}
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    w-full bg-pool-500 hover:bg-pool-600
                    text-white font-semibold py-4 rounded-2xl
                    transition-all hover:shadow-lg hover:shadow-pool-500/30
                    hover:-translate-y-0.5
                  "
                >
                  Reservar ahora
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Info cards ───────────────────────────────────────────────── */}
          <div
            ref={infoRef}
            className="reveal flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              {
                icon:  Users,
                label: 'Capacidad',
                value: `Hasta ${pricing.capacity} personas`,
                sub:   'Incluida en el precio base',
                color: 'bg-pool-100 text-pool-600',
              },
              {
                icon:  UserPlus,
                label: 'Persona adicional',
                value: fmt(pricing.extraPersonCost),
                sub:   'Por cada persona extra',
                color: 'bg-sky-100 text-sky-600',
              },
              {
                icon:  Clock,
                label: 'Horario',
                value: `${pricing.schedule.start} – ${pricing.schedule.end}`,
                sub:   '9 horas de diversión',
                color: 'bg-indigo-100 text-indigo-600',
              },
              {
                icon:  CalendarCheck,
                label: 'Hora adicional',
                value: fmt(pricing.schedule.extraHour),
                sub:   'Por cada hora extra solicitada',
                color: 'bg-sand-100 text-sand-500',
              },
            ].map(item => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-slate-900 font-serif mb-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-400">{item.sub}</p>
                </div>
              )
            })}

            {/* Deposit note */}
            <div className="sm:col-span-2 bg-gradient-to-r from-pool-900 to-pool-700 text-white rounded-2xl p-6">
              <p className="text-pool-200 text-xs font-semibold uppercase tracking-wider mb-2">
                Para confirmar tu fecha
              </p>
              <p className="font-serif text-2xl font-bold mb-1">
                Depósito de {fmt(pricing.deposit)}
              </p>
              <p className="text-pool-200 text-sm">
                El depósito se aplica al total de tu reservación.
                <span className="block mt-1 text-pool-300">
                  ⚠ Si se cancela la actividad no hay devolución.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
