import { Phone, Mail, MessageCircle, Copy, CheckCheck } from 'lucide-react'
import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { contact } from '../data/contact'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback silencioso
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copiar ${text}`}
      title="Copiar"
      className="p-1.5 rounded-lg text-slate-300 hover:text-pool-400 hover:bg-pool-50 transition-colors"
    >
      {copied
        ? <CheckCheck className="w-4 h-4 text-green-500" />
        : <Copy className="w-4 h-4" />}
    </button>
  )
}

export default function Contact() {
  const cardsRef = useScrollAnimation(0.05)
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Contacto"
          title="Estamos aquí para ayudarte"
          subtitle="Contáctanos por teléfono, correo o WhatsApp. Respondemos rápido."
        />

        <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ── Phone card ──────────────────────────────────────────────── */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pool-500/10 transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="inline-flex p-4 bg-pool-100 text-pool-600 rounded-2xl mb-5 group-hover:bg-pool-500 group-hover:text-white transition-all duration-300">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1">Teléfono</h3>
            <div className="flex items-center justify-center gap-1 mb-5">
              <p className="text-slate-600 font-medium">{contact.phone}</p>
              <CopyButton text={contact.phone} />
            </div>
            <a
              href={contact.phoneLink}
              className="
                inline-flex items-center gap-2
                bg-pool-500 hover:bg-pool-600
                text-white font-semibold text-sm
                px-6 py-3 rounded-full w-full justify-center
                transition-all hover:shadow-lg hover:shadow-pool-500/30
              "
            >
              <Phone className="w-4 h-4" />
              Llamar ahora
            </a>
          </div>

          {/* ── WhatsApp card ───────────────────────────────────────────── */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Recomendado
            </div>
            <div className="inline-flex p-4 bg-green-100 text-green-600 rounded-2xl mb-5 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1">WhatsApp</h3>
            <div className="flex items-center justify-center gap-1 mb-5">
              <p className="text-slate-600 font-medium">{contact.phone}</p>
              <CopyButton text={contact.phone} />
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-green-500 hover:bg-green-600
                text-white font-semibold text-sm
                px-6 py-3 rounded-full w-full justify-center
                transition-all hover:shadow-lg hover:shadow-green-500/30
              "
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp
            </a>
          </div>

          {/* ── Email card ──────────────────────────────────────────────── */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pool-500/10 transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="inline-flex p-4 bg-indigo-100 text-indigo-600 rounded-2xl mb-5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1">Correo</h3>
            <div className="space-y-2 mb-5">
              {contact.emails.map(email => (
                <div key={email.address} className="flex items-center justify-center gap-1">
                  <a
                    href={`mailto:${email.address}`}
                    className="text-slate-600 hover:text-pool-600 text-sm transition-colors"
                  >
                    {email.address}
                  </a>
                  <CopyButton text={email.address} />
                </div>
              ))}
            </div>
            <a
              href={`mailto:${contact.emails[0].address}`}
              className="
                inline-flex items-center gap-2
                bg-indigo-500 hover:bg-indigo-600
                text-white font-semibold text-sm
                px-6 py-3 rounded-full w-full justify-center
                transition-all hover:shadow-lg hover:shadow-indigo-500/30
              "
            >
              <Mail className="w-4 h-4" />
              Enviar correo
            </a>
          </div>
        </div>

        {/* Hours note */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            Atendemos consultas de lunes a domingo · Respuesta rápida por WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}
