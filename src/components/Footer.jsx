import { Waves, Phone, Mail, MessageCircle, Heart } from 'lucide-react'
import { contact } from '../data/contact'

const LINKS = [
  { label: 'Inicio',     href: '#inicio'    },
  { label: 'Nosotros',   href: '#nosotros'  },
  { label: 'Galería',    href: '#galeria'   },
  { label: 'Videos',     href: '#videos'    },
  { label: 'Precios',    href: '#precios'   },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Extras',     href: '#extras'    },
  { label: 'Reglas',     href: '#reglas'    },
  { label: 'Preguntas',  href: '#faq'       },
  { label: 'Contacto',   href: '#contacto'  },
]

export default function Footer() {
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-pool-400" />
              <span className="font-serif text-xl font-bold text-white">
                Hacienda<span className="text-pool-400">834</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Tu espacio privado con piscina para celebrar, descansar y crear recuerdos
              inolvidables junto a tu familia.
            </p>
            {/* Social / contact icons */}
            <div className="flex items-center gap-3">
              <a
                href={contact.phoneLink}
                aria-label="Llamar"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pool-600 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contact.emails[0].address}`}
                aria-label="Correo"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navegación
            </h4>
            <ul className="space-y-2">
              {LINKS.slice(0, 5).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-pool-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              &nbsp;
            </h4>
            <ul className="space-y-2 mt-0">
              {LINKS.slice(5).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-pool-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-pool-400 shrink-0" />
                <a href={contact.phoneLink} className="hover:text-pool-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              {contact.emails.map(email => (
                <li key={email.address} className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 text-pool-400 shrink-0" />
                  <a
                    href={`mailto:${email.address}`}
                    className="hover:text-pool-400 transition-colors break-all"
                  >
                    {email.address}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    bg-green-600 hover:bg-green-500
                    text-white text-xs font-semibold
                    px-4 py-2.5 rounded-full
                    transition-colors
                  "
                >
                  <MessageCircle className="w-4 h-4" />
                  Reservar por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {year} Hacienda834. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para compartir en familia
          </p>
        </div>
      </div>
    </footer>
  )
}
