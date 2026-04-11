import { MessageCircle } from 'lucide-react'
import { contact } from '../data/contact'

export default function WhatsAppButton() {
  const url = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white font-semibold
        pl-4 pr-5 py-3.5
        rounded-full shadow-2xl
        transition-all duration-300
        hover:scale-105 hover:shadow-green-500/40
        animate-wa-pulse
        group
      "
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="text-sm hidden sm:block">Reservar</span>
    </a>
  )
}
