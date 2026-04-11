import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { faq } from '../data/faq'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className={`
        border rounded-2xl overflow-hidden transition-all duration-200
        ${isOpen
          ? 'border-pool-300 shadow-md shadow-pool-500/10'
          : 'border-slate-100 hover:border-pool-200'}
      `}
    >
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between
          text-left px-6 py-5 gap-4
          bg-white hover:bg-pool-50/50
          transition-colors duration-150
          focus:outline-none focus:ring-2 focus:ring-pool-400 focus:ring-inset
        "
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">
          {item.question}
        </span>
        <ChevronDown
          className={`
            w-5 h-5 shrink-0 text-pool-400
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Answer with smooth expand */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <div className="px-6 pb-5 bg-white">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-500 text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const listRef = useScrollAnimation(0.05)

  const handleToggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Preguntas Frecuentes"
          title="¿Tienes dudas? Aquí las resolvemos"
          subtitle="Las preguntas más comunes sobre Hacienda834, respondidas de forma clara y directa."
        />

        <div ref={listRef} className="reveal space-y-3">
          {faq.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            ¿Tu pregunta no está aquí? Escríbenos por WhatsApp.
          </p>
          <a
            href={`${import.meta.env.VITE_WA_URL || 'https://wa.me/19399692376'}?text=${encodeURIComponent('Hola, tengo una pregunta sobre Hacienda834.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              bg-green-500 hover:bg-green-600
              text-white font-semibold text-sm
              px-6 py-3 rounded-full
              transition-all hover:shadow-lg hover:shadow-green-500/30
            "
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
