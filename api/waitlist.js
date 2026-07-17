import { sql } from '@vercel/postgres'

// Pure + dependency-free so it can be unit-tested without a database.
export function validateSignup({ email, hp }) {
  if (hp) return { ok: false, error: 'bot' } // honeypot filled → drop silently
  if (typeof email !== 'string') return { ok: false, error: 'email' }
  const e = email.trim().toLowerCase()
  if (e.length < 3 || e.length > 254) return { ok: false, error: 'email' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return { ok: false, error: 'email' }
  return { ok: true, email: e }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' })

  const { email, company } = req.body || {} // `company` is the honeypot field
  const v = validateSignup({ email, hp: company })

  // Honeypot hit: return success so the bot doesn't learn it was caught.
  if (!v.ok && v.error === 'bot') return res.status(200).json({ ok: true })
  if (!v.ok) return res.status(400).json({ error: 'invalid_email' })

  try {
    await sql`
      INSERT INTO waitlist (email, referrer, user_agent)
      VALUES (${v.email}, ${req.headers.referer ?? null}, ${req.headers['user-agent'] ?? null})
      ON CONFLICT (email) DO NOTHING
    `
    // Always generic success — never reveal whether the email was already on the list.
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('waitlist insert failed', err)
    return res.status(500).json({ error: 'server_error' })
  }
}
