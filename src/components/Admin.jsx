import { useState } from 'react'

function extractYoutubeId(raw) {
  const m = raw.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return m ? m[1] : raw.trim()
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-base font-semibold text-gray-700 mb-4">{title}</h2>
      {children}
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      {children}
    </div>
  )
}

const inp = 'border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500'

function VideoRow({ video, onChange, onDelete }) {
  const id = video.youtubeId || ''
  return (
    <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl mb-3">
      <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
        {id && <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt="" className="w-full h-full object-cover" />}
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Field label="YouTube URL o ID">
          <input className={inp} placeholder="https://youtube.com/watch?v=..." value={video.youtubeId || ''}
            onChange={e => onChange('youtubeId', extractYoutubeId(e.target.value))} />
        </Field>
        <Field label="Título">
          <input className={inp} placeholder="Nombre del video" value={video.title}
            onChange={e => onChange('title', e.target.value)} />
        </Field>
        <Field label="Duración">
          <input className={inp} placeholder="1:30" value={video.duration}
            onChange={e => onChange('duration', e.target.value)} />
        </Field>
      </div>
      <button onClick={onDelete} title="Eliminar"
        className="text-red-400 hover:text-red-600 text-lg leading-none mt-6 flex-shrink-0">✕</button>
    </div>
  )
}

function PhotoRow({ photo, onChange, onDelete }) {
  return (
    <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl mb-3">
      <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
        {photo.src && <img src={photo.src} alt="" className="w-full h-full object-cover"
          onError={e => { e.target.style.display = 'none' }} />}
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Field label="URL de la foto">
          <input className={inp} placeholder="/foto.jpg o https://..." value={photo.src}
            onChange={e => onChange('src', e.target.value)} />
        </Field>
        <Field label="Descripción">
          <input className={inp} placeholder="Vista de la piscina" value={photo.alt}
            onChange={e => onChange('alt', e.target.value)} />
        </Field>
        <Field label="Etiqueta">
          <input className={inp} placeholder="Piscina" value={photo.label}
            onChange={e => onChange('label', e.target.value)} />
        </Field>
      </div>
      <button onClick={onDelete} title="Eliminar"
        className="text-red-400 hover:text-red-600 text-lg leading-none mt-6 flex-shrink-0">✕</button>
    </div>
  )
}

export default function Admin() {
  const [screen,   setScreen]   = useState('login')
  const [password, setPassword] = useState('')
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)
  const [images,   setImages]   = useState([])
  const [videos,   setVideos]   = useState([])
  const [saving,   setSaving]   = useState(false)
  const [msg,      setMsg]      = useState(null)

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const r = await fetch('/api/gallery', { headers: { 'x-admin-password': password } })
      if (r.status === 401) { setError('Contraseña incorrecta'); setLoading(false); return }
      if (!r.ok) throw new Error()
      const data = await r.json()
      setImages(data.images || [])
      setVideos(data.videos || [])
      setScreen('panel')
    } catch {
      setError('Error de conexión. Intente nuevamente.')
    }
    setLoading(false)
  }

  async function handleSave() {
    setSaving(true)
    setMsg(null)
    try {
      const r = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, images, videos }),
      })
      const data = await r.json()
      setMsg(r.ok
        ? { ok: true,  text: '✓ Cambios guardados. El sitio se actualiza en ~2 minutos.' }
        : { ok: false, text: data.error || 'Error guardando cambios.' }
      )
    } catch {
      setMsg({ ok: false, text: 'Error de conexión. Intente nuevamente.' })
    }
    setSaving(false)
  }

  function updVideo(id, field, value) {
    setVideos(videos.map(v => v.id !== id ? v : {
      ...v, [field]: value,
      ...(field === 'youtubeId' ? { thumbnail: `https://img.youtube.com/vi/${value}/hqdefault.jpg` } : {}),
    }))
  }

  function updImage(id, field, value) {
    setImages(images.map(img => img.id !== id ? img : { ...img, [field]: value }))
  }

  if (screen === 'login') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">&#127968;</div>
            <h1 className="text-2xl font-bold text-gray-800">Hacienda834</h1>
            <p className="text-gray-500 text-sm mt-1">Panel de administración</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input type="password" className={inp} value={password}
                onChange={e => setPassword(e.target.value)} autoFocus required />
            </div>
            {error && <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors">
              {loading ? 'Cargando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-800">&#127968; Hacienda834 — Admin</h1>
            <p className="text-xs text-gray-400">Los cambios aparecen en el sitio en ~2 minutos</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {msg && (
              <span className={`text-sm px-3 py-1.5 rounded-full ${msg.ok ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                {msg.text}
              </span>
            )}
            <a href="/" target="_blank" rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700 underline">Ver sitio &#8599;</a>
            <button onClick={handleSave} disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors">
              {saving ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card title="&#127916; Videos de YouTube">
          {videos.map(v => (
            <VideoRow key={v.id} video={v}
              onChange={(field, val) => updVideo(v.id, field, val)}
              onDelete={() => setVideos(videos.filter(x => x.id !== v.id))} />
          ))}
          {videos.length === 0 && <p className="text-sm text-gray-400 mb-3">No hay videos.</p>}
          <button
            onClick={() => setVideos([...videos, { id: Date.now(), youtubeId: '', src: null, thumbnail: '', title: '', duration: '' }])}
            className="w-full border-2 border-dashed border-gray-300 hover:border-blue-400 text-gray-400 hover:text-blue-500 rounded-xl py-2.5 text-sm transition-colors">
            + Agregar video
          </button>
        </Card>

        <Card title="&#128444;&#65039; Fotos de la galería">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4 text-xs text-blue-700">
            Para agregar una foto nueva, sube el archivo a la carpeta <code className="bg-blue-100 px-1 rounded">public/</code> en GitHub y escribe el nombre aquí (ej: <code className="bg-blue-100 px-1 rounded">/mi-foto.jpg</code>). También puedes pegar una URL externa.
          </div>
          {images.map(img => (
            <PhotoRow key={img.id} photo={img}
              onChange={(field, val) => updImage(img.id, field, val)}
              onDelete={() => setImages(images.filter(x => x.id !== img.id))} />
          ))}
          {images.length === 0 && <p className="text-sm text-gray-400 mb-3">No hay fotos.</p>}
          <button
            onClick={() => setImages([...images, { id: Date.now(), src: '', alt: '', label: '' }])}
            className="w-full border-2 border-dashed border-gray-300 hover:border-blue-400 text-gray-400 hover:text-blue-500 rounded-xl py-2.5 text-sm transition-colors">
            + Agregar foto
          </button>
        </Card>
      </main>
    </div>
  )
}
