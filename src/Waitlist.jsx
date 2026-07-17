import { useState } from 'react'
import { track } from '@vercel/analytics'
import { Icon } from './icons'

export default function Waitlist() {
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [email, setEmail] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    const company = e.target.company.value // honeypot
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })
      if (!res.ok) throw new Error('bad_status')
      track('waitlist_signup')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="wl-done">
        <span className="wl-check"><Icon name="check" size={20} /></span>
        You're on the list — we'll email you the moment Madeira opens.
      </div>
    )
  }

  return (
    <>
      <form className="wl-form" onSubmit={onSubmit}>
        {/* honeypot: invisible to humans, tempting to bots */}
        <input className="wl-hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input
          className="wl-input"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button className="btn glass" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
        {status === 'error' && <p className="wl-err">Something went wrong — please try again.</p>}
      </form>
      <p className="wl-note">We'll only email you about the launch. No spam.</p>
    </>
  )
}
