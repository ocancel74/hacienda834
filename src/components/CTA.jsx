import { MessageCircle, Phone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { contact } from '../data/contact'

export default function CTA() {
  const ref = useScrollAnimation()
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-pool-900 via-pool-800 to-pool-700 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pool-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pool-400/20 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="white" d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div
          ref={ref}
          className="reveal"
        >
          {/* Eyebrow */}
          <span className="inline-block bg-sand-400/20 text-sand-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ¡No esperes más!
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Reserva tu fecha con tiempo y disfruta de un espacio privado, cómodo y perfecto para compartir
          </h2>

          {/* Subtext */}
          <p className="text-pool-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Hacienda834 te espera. Piscina, BBQ, juegos, comodidad y privacidad total
            para que tu evento sea inolvidable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2.5
                bg-green-500 hover:bg-green-600
                text-white font-bold
                px-10 py-4 rounded-full text-lg
                transition-all
                hover:shadow-2xl hover:shadow-green-500/40
                hover:-translate-y-1
                w-full sm:w-auto justify-center
              "
            >
              <MessageCircle className="w-5 h-5" />
              Reservar por WhatsApp
            </a>

            <a
              href={contact.phoneLink}
              className="
                flex items-center gap-2.5
                bg-white/10 hover:bg-white/20
                border border-white/30
                text-white font-bold
                px-10 py-4 rounded-full text-lg
                transition-all
                hover:-translate-y-1
                w-full sm:w-auto justify-center
              "
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {[
              '✓ Hasta 40 personas',
              '✓ $450 total',
              '✓ Horario 10AM – 7PM',
              '✓ Depósito $100',
            ].map(item => (
              <span
                key={item}
                className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
