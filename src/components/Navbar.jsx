import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { contact } from '../data/contact'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#inicio'    },
  { label: 'Nosotros',  href: '#nosotros'  },
  { label: 'Galería',   href: '#galeria'   },
  { label: 'Precios',   href: '#precios'   },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto',  href: '#contacto'  },
]

function Logo({ scrolled }) {
  return (
    <a href="#inicio" className="flex items-center shrink-0" aria-label="Hacienda834 — inicio">
      {/* Logo image — sube /logo.png a la carpeta public para activarlo */}
      <img
        src="/logo.png"
        alt="Hacienda834"
        className="h-12 lg:h-14 w-auto"
        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
      />
      {/* Fallback texto si no hay logo.png */}
      <span className="items-center gap-1 hidden" style={{display:'none'}}>
        <span className={`font-serif text-xl lg:text-2xl font-bold tracking-tight transition-colors ${
          scrolled ? 'text-pool-800' : 'text-white'
        }`}>
          Hacienda
        </span>
        <span className={`font-serif text-xl lg:text-2xl font-black transition-colors ${
          scrolled ? 'text-sand-300' : 'text-sand-200'
        }`}>
          834
        </span>
      </span>
    </a>
  )
}

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
          ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-b border-sand-200'
          : 'bg-transparent'}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Logo scrolled={scrolled} />

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
                    ? 'text-pool-800 hover:text-pool-600 hover:bg-pool-50'
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
              bg-pool-600 hover:bg-pool-700
              text-white text-sm font-semibold
              px-5 py-2.5 rounded-full
              transition-all
              hover:shadow-lg hover:shadow-pool-600/30
              hover:-translate-y-0.5
              border border-sand-300/30
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
                ? 'text-pool-800 hover:bg-pool-50'
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
          <div className="bg-cream-100 rounded-2xl shadow-2xl mt-1 overflow-hidden border border-sand-200">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center px-6 py-3.5
                  text-pool-800 font-medium text-sm
                  hover:bg-pool-50 hover:text-pool-600
                  transition-colors border-b border-sand-100 last:border-0
                "
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-4 bg-cream-200">
              <a
                href={reserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  block w-full text-center
                  bg-pool-600 hover:bg-pool-700
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
