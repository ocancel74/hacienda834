import { contact } from '../data/contact'

const NAV_LINKS = [
  { href: '#inicio',     label: 'Inicio'      },
  { href: '#amenidades', label: 'Amenidades'  },
  { href: '#precios',    label: 'Precios'     },
  { href: '#reservar',   label: 'Reservar'    },
  { href: '#faq',        label: 'FAQ'         },
]

export default function Footer() {
  const waUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <footer className="bg-pool-900 text-white/65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.png"
                alt="Hacienda834"
                className="h-16 w-auto object-contain"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline' }}
              />
              <span className="hidden font-serif text-xl font-bold text-white">
                Hacienda<span className="text-sand-300">834</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Tu espacio privado con piscina en Guaynabo, Puerto Rico. Celebra con los tuyos, sin compartir con nadie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-bold text-white/40 uppercase tracking-[0.12em] mb-4">Navegación</div>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} className="text-sm font-medium text-white/65 hover:text-white transition-colors no-underline">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold text-white/40 uppercase tracking-[0.12em] mb-4">Contacto</div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xs text-white/40 mb-0.5">Teléfono</div>
                <div className="text-base font-bold text-white">{contact.phone}</div>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-0.5">WhatsApp</div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold no-underline hover:text-sand-300 transition-colors" style={{ color: '#4aa36d' }}>
                  Escríbenos directamente
                </a>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-0.5">Correo</div>
                <div className="text-sm text-white/65">{contact.emails[0].address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-between items-center pt-8 border-t border-white/10 text-sm">
          <div>© 2026 Hacienda834 · Guaynabo, Puerto Rico</div>
          <div>Diseñado para crear recuerdos ✦</div>
        </div>
      </div>
    </footer>
  )
}
