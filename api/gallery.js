const OWNER = 'ocancel74'
const REPO  = 'hacienda834'
const PATH  = 'src/data/gallery.json'

function ghHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'hacienda834-admin',
    'Content-Type': 'application/json',
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const TOKEN = process.env.GITHUB_TOKEN
  const PASS  = process.env.ADMIN_PASSWORD
  const url   = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`

  if (req.method === 'GET') {
    if (req.headers['x-admin-password'] !== PASS) {
      return res.status(401).json({ error: 'No autorizado' })
    }
    try {
      const r    = await fetch(url, { headers: ghHeaders(TOKEN) })
      const file = await r.json()
      const data = JSON.parse(Buffer.from(file.content, 'base64').toString('utf-8'))
      return res.status(200).json(data)
    } catch {
      return res.status(500).json({ error: 'Error leyendo galería' })
    }
  }

  if (req.method === 'POST') {
    const { password, images, videos } = req.body
    if (password !== PASS) return res.status(401).json({ error: 'No autorizado' })

    try {
      const getR   = await fetch(url, { headers: ghHeaders(TOKEN) })
      const file   = await getR.json()
      const body   = JSON.stringify({ images, videos }, null, 2) + '\n'
      const content = Buffer.from(body, 'utf-8').toString('base64')

      const putR = await fetch(url, {
        method: 'PUT',
        headers: ghHeaders(TOKEN),
        body: JSON.stringify({
          message: 'Actualizar galería desde panel de administración',
          content,
          sha: file.sha,
        }),
      })

      if (!putR.ok) {
        const err = await putR.json()
        return res.status(500).json({ error: err.message || 'Error guardando' })
      }

      return res.status(200).json({ success: true })
    } catch {
      return res.status(500).json({ error: 'Error actualizando galería' })
    }
  }

  return res.status(405).json({ error: 'Método no permitido' })
}
