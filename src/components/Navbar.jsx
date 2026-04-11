import { useState, useEffect } from 'react'
import { Menu, X, Waves } from 'lucide-react'
import { contact } from '../data/contact'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#inicio'    },
  { label: 'Nosotros',  href: '#nosotros'  },
  { label: 'Galería',   href: '#galeria'   },
  { label: 'Precios',   href: '#precios'   },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto',  href: '#contacto'  },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const reserveUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 shrink-0"
            aria-label="Hacienda834 — inicio"
          >
            <Waves
              className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-pool-500' : 'text-white'
              }`}
            />
            <span
              className={`font-serif text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Hacienda
              <span className={scrolled ? 'text-pool-500' : 'text-sand-300'}>
                834
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-2 text-sm font-medium rounded-lg
                  transition-colors
                  ${scrolled
                    ? 'text-slate-600 hover:text-pool-600 hover:bg-pool-50'
                    : 'text-white/85 hover:text-white hover:bg-white/10'}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Reserve button — desktop */}
          <a
            href={reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:inline-flex items-center gap-2
              bg-pool-500 hover:bg-pool-600
              text-white text-sm font-semibold
              px-5 py-2.5 rounded-full
              transition-all
              hover:shadow-lg hover:shadow-pool-500/30
              hover:-translate-y-0.5
            "
          >
            Reservar
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={`
              md:hidden p-2 rounded-lg transition-colors
              ${scrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'}
            `}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-screen pb-4' : 'max-h-0'}
          `}
        >
          <div className="bg-white rounded-2xl shadow-2xl mt-1 overflow-hidden">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center px-6 py-3.5
                  text-slate-700 font-medium text-sm
                  hover:bg-pool-50 hover:text-pool-600
                  transition-colors border-b border-slate-50 last:border-0
                "
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-4 bg-slate-50">
              <a
                href={reserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  block w-full text-center
                  bg-pool-500 hover:bg-pool-600
                  text-white font-semibold text-sm
                  py-3 rounded-full
                  transition-colors
                "
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
