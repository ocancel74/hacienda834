const OWNER = 'ocancel74'
const REPO  = 'hacienda834'

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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const TOKEN = process.env.GITHUB_TOKEN
  const PASS  = process.env.ADMIN_PASSWORD

  const { password, filename, content } = req.body
  if (password !== PASS) return res.status(401).json({ error: 'No autorizado' })
  if (!filename || !content) return res.status(400).json({ error: 'Faltan datos' })

  // Sanitize filename: only allow safe characters
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '-')
  const path = `public/${safeName}`
  const url  = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`

  try {
    // Check if file already exists (to get SHA for update)
    let sha
    const check = await fetch(url, { headers: ghHeaders(TOKEN) })
    if (check.ok) {
      const existing = await check.json()
      sha = existing.sha
    }

    const body = { message: `Subir imagen: ${safeName}`, content }
    if (sha) body.sha = sha

    const putR = await fetch(url, {
      method: 'PUT',
      headers: ghHeaders(TOKEN),
      body: JSON.stringify(body),
    })

    if (!putR.ok) {
      const err = await putR.json()
      return res.status(500).json({ error: err.message || 'Error subiendo imagen' })
    }

    return res.status(200).json({ src: `/${safeName}` })
  } catch {
    return res.status(500).json({ error: 'Error subiendo imagen' })
  }
}
