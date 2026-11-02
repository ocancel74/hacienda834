import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#amenidades', label: 'Amenidades' },
  { href: '#precios',    label: 'Precios'    },
  { href: '#reservar',   label: 'Reservar'   },
  { href: '#faq',        label: 'FAQ'        },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-b border-cream-200' : ''
    }`} style={{ height: 68 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 no-underline">
          <img
            src="/logo.png"
            alt="Hacienda834"
            className="h-10 w-auto object-contain"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
          />
          <span
            style={{ display: 'none' }}
            className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-pool-900' : 'text-white'}`}
          >
            Hacienda<span className="text-sand-300">834</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? 'text-slate-600 hover:text-pool-600 hover:bg-pool-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#reservar"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg, #2a8a4f 0%, #1a6b3a 100%)', boxShadow: '0 4px 14px rgba(42,138,79,.4)' }}
        >
          Reservar Mi Fecha →
        </a>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-pool-900 bg-pool-50' : 'text-white bg-white/10'}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
          style={{ border: 'none', cursor: 'pointer' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-cream-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-pool-50 hover:text-pool-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={close}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #2a8a4f, #1a6b3a)' }}
            >
              Reservar Mi Fecha →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
