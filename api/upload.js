export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password, filename, content } = req.body || {}

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!filename || !content) {
    return res.status(400).json({ error: 'Missing filename or content' })
  }

  const repo  = process.env.GITHUB_REPO  || 'ocancel74/hacienda834'
  const token = process.env.GITHUB_TOKEN
  const path  = `public/${filename}`

  if (!token) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not configured' })
  }

  // Check if file exists to get its SHA (needed for updates)
  let sha
  try {
    const check = await fetch(
      `https://api.github.com/repos/${repo}/contents/${path}`,
      { headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'hacienda834-admin' } }
    )
    if (check.ok) {
      const data = await check.json()
      sha = data.sha
    }
  } catch { /* new file */ }

  const body = {
    message: `Subir imagen: ${filename}`,
    content,
    ...(sha ? { sha } : {}),
  }

  const put = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'hacienda834-admin',
      },
      body: JSON.stringify(body),
    }
  )

  if (!put.ok) {
    const err = await put.text()
    return res.status(500).json({ error: `GitHub error: ${err}` })
  }

  return res.status(200).json({ src: `/${filename}` })
}
