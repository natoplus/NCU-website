import type { NextApiRequest, NextApiResponse } from 'next'

type ApiResponse = { message?: string; error?: string }

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8kb',
    },
  },
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function stringValue(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null
  const result = value.trim()
  return result.length <= maxLength ? result : null
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ error: 'Use POST to request NCU email updates.' })
    return
  }

  const origin = req.headers.origin
  const forwardedHost = req.headers['x-forwarded-host']
  const host = Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost || req.headers.host
  if (origin && host) {
    try {
      if (new URL(origin).host.toLowerCase() !== host.toLowerCase()) {
        res.status(403).json({ error: 'This form request did not come from this site.' })
        return
      }
    } catch {
      res.status(403).json({ error: 'The form request origin is invalid.' })
      return
    }
  }

  if (!isRecord(req.body)) {
    res.status(400).json({ error: 'The form data is invalid.' })
    return
  }

  const email = stringValue(req.body.email, 254)
  const honeypot = stringValue(req.body.website, 200)
  if (honeypot === null || honeypot.length > 0) {
    res.status(400).json({ error: 'The form could not be validated. Please try again.' })
    return
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Enter a valid email address.' })
    return
  }
  if (req.body.consent !== true) {
    res.status(400).json({ error: 'Please confirm consent before requesting email updates.' })
    return
  }

  const webhook = process.env.NCU_NEWSLETTER_WEBHOOK_URL
  if (!webhook) {
    res.status(503).json({ error: 'Email updates are not configured yet. Please check back later.' })
    return
  }

  let endpoint: URL
  try {
    endpoint = new URL(webhook)
  } catch {
    res.status(503).json({ error: 'Email updates are not configured correctly. Please check back later.' })
    return
  }
  if (endpoint.protocol !== 'https:' && !(endpoint.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(endpoint.hostname))) {
    res.status(503).json({ error: 'Email updates require a secure HTTPS endpoint.' })
    return
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (process.env.NCU_NEWSLETTER_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.NCU_NEWSLETTER_WEBHOOK_SECRET}`
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        consent: true,
        submittedAt: new Date().toISOString(),
        source: 'ncu-website',
      }),
      redirect: 'error',
      signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) {
      console.error(`NCU newsletter webhook returned HTTP ${response.status}.`)
      res.status(502).json({ error: 'The email service could not deliver your request. Please try again later.' })
      return
    }
  } catch (error) {
    console.error('NCU newsletter webhook request failed:', error)
    res.status(502).json({ error: 'The email service could not deliver your request. Please try again later.' })
    return
  }

  res.status(202).json({ message: 'Your NCU update request was received.' })
}
