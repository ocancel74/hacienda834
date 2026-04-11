import { Waves, Shield, Users, Smile, Home, Sun } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FEATURES = [
  {
    icon:        Waves,
    title:       'Piscina Privada',
    description: 'Disfruta de una piscina exclusiva solo para tu grupo, en total privacidad y comodidad.',
    color:       'bg-pool-100 text-pool-600',
  },
  {
    icon:        Shield,
    title:       'Espacio 100% Privado',
    description: 'Todo el espacio es exclusivo para ti y tus invitados. Sin extraños, sin interrupciones.',
    color:       'bg-sky-100 text-sky-600',
  },
  {
    icon:        Users,
    title:       'Ambiente Familiar',
    description: 'Diseñado para reuniones familiares, celebraciones y momentos especiales de todas las edades.',
    color:       'bg-indigo-100 text-indigo-600',
  },
  {
    icon:        Smile,
    title:       'Diversión Garantizada',
    description: 'Billar, dominó, cancha de baloncesto, BBQ y mucho más para que todos se diviertan.',
    color:       'bg-sand-100 text-sand-500',
  },
  {
    icon:        Home,
    title:       'Comodidad Total',
    description: 'Baños con agua caliente, estacionamiento, mesas de patio y neveritas para tu comodidad.',
    color:       'bg-emerald-100 text-emerald-600',
  },
  {
    icon:        Sun,
    title:       'Ideal para Eventos',
    description: 'Perfecto para cumpleaños, reuniones, actividades y todo tipo de celebraciones privadas.',
    color:       'bg-amber-100 text-amber-600',
  },
]

export default function About() {
  const gridRef = useScrollAnimation(0.05)

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Sobre Nosotros"
          title="El lugar perfecto para tus momentos especiales"
          subtitle="Hacienda834 es un espacio privado pensado para que disfrutes con quienes más quieres, sin preocupaciones."
        />

        {/* Feature cards */}
        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className={`
                  group p-7 rounded-2xl border border-slate-100
                  bg-white hover:shadow-xl hover:shadow-pool-500/10
                  transition-all duration-300 hover:-translate-y-1
                  delay-${(i % 3) * 100}
                `}
              >
                <div className={`inline-flex p-3 rounded-xl mb-5 ${feat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-serif">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-pool-900 to-pool-700 p-10 text-center">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10">
            <p className="text-pool-200 text-sm font-semibold tracking-widest uppercase mb-3">
              ¿Listo para reservar?
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Capacidad para hasta 40 personas
            </h3>
            <p className="text-pool-200 text-base mb-0">
              Horario de 10:00 AM a 7:00 PM • Ambiente privado y exclusivo
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
