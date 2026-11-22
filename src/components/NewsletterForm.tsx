import { useState, type FormEvent } from 'react'

interface ApiResponse {
  message?: string
  error?: string
}

export default function NewsletterForm() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          consent: formData.get('consent') === 'on',
          website: formData.get('website'),
        }),
      })
      const result = await response.json() as ApiResponse
      if (!response.ok) {
        setStatus(result.error || 'The signup could not be completed. Please try again later.')
        return
      }
      setStatus(result.message || 'Your signup was received.')
      form.reset()
    } catch (error) {
      console.error('NCU newsletter request failed:', error)
      setStatus('We could not reach the signup service. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required />
      <div className="newsletter-consent">
        <input id="newsletter-consent" name="consent" type="checkbox" required />
        <label htmlFor="newsletter-consent">I agree to receive NCU updates by email. See the privacy notice for details.</label>
      </div>
      <div className="newsletter-honeypot" aria-hidden="true">
        <label htmlFor="newsletter-website">Leave this field empty</label>
        <input id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Get updates'} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  )
}
