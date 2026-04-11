import { X, Calendar, ExternalLink } from 'lucide-react'

// ─── INSTRUCCIONES ────────────────────────────────────────────────────────────
// 1. Ve a calendar.google.com y crea un calendario llamado "Hacienda834"
// 2. En Configuración del calendario → "Integrar calendario"
// 3. Copia la URL del iframe y pégala en CALENDAR_EMBED_URL abajo
// 4. Para dar acceso al administrador: Configuración → "Compartir con personas"
//    → agrega su correo con permiso "Hacer cambios en eventos"
// ─────────────────────────────────────────────────────────────────────────────

const CALENDAR_EMBED_URL =
  'https://calendar.google.com/calendar/embed?src=TU_CALENDAR_ID%40group.calendar.google.com&ctz=America%2FNew_York&mode=MONTH&bgcolor=%23ffffff&color=%230ea5e9&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&hl=es'
  // ↑ Reemplaza esto con tu URL real de Google Calendar

export default function CalendarModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pool-100 rounded-xl">
              <Calendar className="w-5 h-5 text-pool-600" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-slate-900 text-lg">
                Disponibilidad de Fechas
              </h2>
              <p className="text-slate-400 text-xs">
                Las fechas marcadas ya están reservadas
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar calendario"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar iframe */}
        <div className="flex-1 min-h-0 p-4">
          {CALENDAR_EMBED_URL.includes('TU_CALENDAR_ID') ? (
            // Placeholder si aún no se ha configurado el calendario
            <div className="h-96 flex flex-col items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center px-6">
              <Calendar className="w-12 h-12 text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium mb-1">
                Calendario no configurado aún
              </p>
              <p className="text-slate-400 text-sm max-w-sm">
                Crea un Google Calendar y reemplaza{' '}
                <code className="bg-slate-100 px-1 rounded text-xs">CALENDAR_EMBED_URL</code>
                {' '}en <code className="bg-slate-100 px-1 rounded text-xs">CalendarModal.jsx</code>
              </p>
            </div>
          ) : (
            <iframe
              src={CALENDAR_EMBED_URL}
              className="w-full rounded-2xl border border-slate-100"
              style={{ height: 'min(520px, 60vh)' }}
              frameBorder="0"
              scrolling="no"
              title="Calendario de disponibilidad Hacienda834"
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            ¿Ves tu fecha disponible? Contáctanos para reservar.
          </p>
          <a
            href="https://wa.me/19399692376?text=Hola%2C%20me%20interesa%20reservar%20Hacienda834.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
