import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { contact } from '../data/contact'
import CalendarModal from './CalendarModal'

const TIPOS = ['Cumpleaños', 'Graduación', 'Reunión familiar', 'Pasadía / Pool party', 'Baby shower', 'Otro']

const STEPS = [
  'Llena el formulario con los datos de tu evento',
  'Te abrirá WhatsApp con tu solicitud lista para enviar',
  'Confirmamos tu fecha y recibes los detalles para el depósito',
]

export default function Contact() {
  const refL = useScrollAnimation()
  const refR = useScrollAnimation()
  const [form, setForm] = useState({ nombre: '', telefono: '', fecha: '', tipo: '', invitados: '', mensaje: '' })
  const [err, setErr] = useState('')
  const [showCal, setShowCal] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  function handleSubmit(e) {
    e.preventDefault()
    const { nombre, telefono, fecha, tipo, invitados } = form
    if (!nombre || !telefono || !fecha || !tipo || !invitados) {
      setErr('Por favor completa todos los campos requeridos.')
      return
    }
    setErr('')
    const fechaFmt = new Date(fecha + 'T12:00:00').toLocaleDateString('es-PR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    const lines = [
      '¡Hola! Me interesa reservar Hacienda834. 🌴',
      '',
      `👤 Nombre: ${nombre}`,
      `📱 Teléfono: ${telefono}`,
      `📅 Fecha: ${fechaFmt}`,
      `🎉 Tipo de evento: ${tipo}`,
      `👥 Invitados: ${invitados}`,
      form.mensaje ? `💬 Notas: ${form.mensaje}` : '',
      '',
      '¿Está disponible esa fecha? ¡Gracias!',
    ].filter(l => l !== undefined)
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  const tomorrow = (() => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().split('T')[0] })()

  const inp = 'block w-full bg-cream-100 border border-cream-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pool-500 focus:ring-2 focus:ring-pool-500/20 transition-all duration-200 font-sans'

  return (
    <>
    <section id="reservar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

          {/* Left */}
          <div ref={refL} className="reveal">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-pool-500 mb-3">Reserva Online</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-5">
              Reserva en<br />
              <span style={{ background: 'linear-gradient(135deg,#2a8a4f,#0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                3 minutos
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Completa el formulario y te contactamos por WhatsApp en menos de 24 horas para confirmar tu fecha y los detalles.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#2a8a4f,#1a6b3a)' }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-sm text-slate-600">{s}</div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-pool-50">
              <div className="text-xs font-bold text-pool-700 mb-1">📞 También puedes llamar directo</div>
              <div className="text-base font-extrabold text-pool-800">{contact.phone}</div>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={refR} className="reveal delay-200 bg-white rounded-3xl border border-cream-200 shadow-sm p-8">
            <h3 className="text-lg font-extrabold text-slate-800 mb-6">Solicitud de Reserva</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="f-nombre">Nombre</label>
                  <input id="f-nombre" type="text" className={inp} placeholder="Tu nombre" required value={form.nombre} onChange={e => set('nombre', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="f-tel">Teléfono</label>
                  <input id="f-tel" type="tel" className={inp} placeholder="787-000-0000" required value={form.telefono} onChange={e => set('telefono', e.target.value)} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="f-fecha">Fecha del Evento</label>
                <div className="relative">
                  <input
                    id="f-fecha"
                    type="date"
                    className={inp}
                    required
                    min={tomorrow}
                    value={form.fecha}
                    onChange={e => set('fecha', e.target.value)}
                    style={{ colorScheme: 'light', paddingRight: '2.75rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCal(true)}
                    title="Ver disponibilidad"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-pool-500 hover:text-pool-700 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCal(true)}
                  className="mt-1.5 text-xs text-pool-500 hover:text-pool-700 font-semibold underline underline-offset-2 transition-colors"
                >
                  Ver fechas disponibles →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="f-tipo">Tipo de Evento</label>
                  <select id="f-tipo" className={inp} required value={form.tipo} onChange={e => set('tipo', e.target.value)} style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>Selecciona…</option>
                    {TIPOS.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="f-inv">Invitados</label>
                  <input id="f-inv" type="number" min="1" max="80" className={inp} placeholder="Ej: 25" required value={form.invitados} onChange={e => set('invitados', e.target.value)} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="f-msg">Mensaje adicional</label>
                <textarea id="f-msg" className={inp} rows={3} placeholder="¿Algo especial que debamos saber?" style={{ resize: 'vertical' }} value={form.mensaje} onChange={e => set('mensaje', e.target.value)} />
              </div>

              {err && (
                <div className="text-sm font-semibold px-4 py-3 rounded-xl bg-red-50 text-red-600">{err}</div>
              )}

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white text-base transition-all hover:-translate-y-0.5 mt-2"
                style={{ background: '#25d366', boxShadow: '0 4px 20px rgba(37,211,102,.4)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    {showCal && <CalendarModal onClose={() => setShowCal(false)} />}
  </>
  )
}
