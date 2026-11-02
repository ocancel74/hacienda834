import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: '¿Hay estacionamiento disponible?',
    a: 'Sí, contamos con espacio de estacionamiento privado para tus invitados. No tendrás que preocuparte por parqueo en la calle. Si esperas muchos vehículos, avísanos al reservar para coordinarlo.',
  },
  {
    q: '¿Puedo contratar un DJ o traer equipo de sonido?',
    a: 'Puedes traer tu propio equipo de sonido o parlantes. Pedimos que la música sea a un volumen moderado y respetuoso con los vecinos, especialmente después de las 6:00 PM.',
  },
  {
    q: '¿Cuánto es el depósito para reservar y cómo lo pago?',
    a: 'El depósito para apartar tu fecha es de $100. Al momento de reservar te daremos los detalles para realizar el pago. El resto se liquida el día del evento.',
  },
  {
    q: '¿Qué pasa si necesito cancelar mi reservación?',
    a: 'Entendemos que los imprevistos ocurren. Sin embargo, el depósito de $100 no es reembolsable en caso de cancelación. Si necesitas cambiar la fecha, contáctanos con anticipación y haremos lo posible para ayudarte.',
  },
  {
    q: '¿Está permitido llevar mascotas?',
    a: 'Las mascotas se evalúan caso a caso. Escríbenos al reservar con los detalles de tu mascota (tipo, tamaño) y te confirmamos la disponibilidad. La seguridad de todos en el espacio es nuestra prioridad.',
  },
  {
    q: '¿Puedo traer mi propia comida, bebidas y decoraciones?',
    a: '¡Absolutamente! Puedes traer todo lo que necesites para tu evento: comida, bebidas, torta, decoraciones, etc. Contamos con área de BBQ y mesas disponibles. Solo pedimos que dejes el espacio en las mismas condiciones que lo encontraste.',
  },
  {
    q: '¿A qué hora tengo acceso y hasta qué hora puedo estar?',
    a: 'El acceso es de 10:00 AM a 7:00 PM (9 horas). Si necesitas tiempo extra, podemos coordinar horas adicionales a $50 por hora, sujeto a disponibilidad. Te recomendamos mencionarlo al reservar.',
  },
]

export default function FAQ() {
  const ref = useScrollAnimation()
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-pool-500 mb-3">Preguntas Frecuentes</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800">
              Todo lo que quieres saber
            </h2>
          </div>

          <div ref={ref} className="reveal">
            {FAQS.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div key={i} className="border-b border-cream-200">
                  <button
                    className="w-full text-left flex items-center justify-between gap-4 py-5 bg-transparent border-none cursor-pointer font-sans"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-800">{item.q}</span>
                    <ChevronDown
                      size={20}
                      className="flex-shrink-0 text-pool-500 transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: isOpen ? 400 : 0 }}
                  >
                    <p className="text-slate-500 text-sm leading-relaxed pb-5">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
