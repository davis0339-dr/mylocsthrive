import { ArrowRight, Check, Download, LoaderCircle } from 'lucide-react'
import { useId, useState, type FormEvent, type ReactNode } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

type EmailFormProps = {
  formName: 'locs-thrive-guide' | 'locs-thrive-circles'
  buttonLabel: string
  successTitle: string
  successMessage: string
  compact?: boolean
  download?: boolean
  source: string
}

export function EmailForm({ formName, buttonLabel, successTitle, successMessage, compact, download, source }: EmailFormProps) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [botField, setBotField] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormState('submitting')
    try {
      const response = await fetch('/newsletter-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': formName, email, source, 'bot-field': botField }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setEmail('')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className="form-success" role="status" tabIndex={-1}>
        <Check aria-hidden="true" />
        <div>
          <strong>{successTitle}</strong>
          <p>{successMessage}</p>
          {download && (
            <div className="download-links">
              <a className="text-link" href="/downloads/gentle-loc-starter-guide.pdf" download>
                Download the guide <Download aria-hidden="true" />
              </a>
              <a className="text-link" href="/downloads/gentle-starter-locs-checklist.pdf" download>
                Download the checklist <Download aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <form
      className={`email-form${compact ? ' email-form-compact' : ''}`}
      name={formName}
      method="POST"
      action="/newsletter-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="source" value={source} />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${id}-bot`}>Do not fill this field</label>
        <input id={`${id}-bot`} name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(event) => setBotField(event.target.value)} />
      </div>
      <div className="field-group">
        <label htmlFor={`${id}-email`}>Email address</label>
        <div className="email-row">
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            aria-describedby={formState === 'error' ? `${id}-error` : undefined}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="button button-primary" type="submit" disabled={formState === 'submitting'}>
            {formState === 'submitting' ? <><LoaderCircle className="spinner" aria-hidden="true" /> Sending</> : <>{buttonLabel} <ArrowRight aria-hidden="true" /></>}
          </button>
        </div>
      </div>
      {formState === 'error' && <p className="form-error" id={`${id}-error`} role="alert">Something went wrong. Please check your connection and try again.</p>}
    </form>
  )
}

export function ContactForm({ children }: { children?: ReactNode }) {
  const id = useId()
  const [formState, setFormState] = useState<FormState>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormState('submitting')
    const form = event.currentTarget
    try {
      const response = await fetch('/newsletter-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as never).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  return (
    <form className="contact-form" name="locs-thrive-contact" method="POST" action="/newsletter-form.html" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="locs-thrive-contact" />
      <div className="honeypot" aria-hidden="true"><label htmlFor={`${id}-bot`}>Do not fill this field</label><input id={`${id}-bot`} name="bot-field" tabIndex={-1} autoComplete="off" /></div>
      <div className="field-grid">
        <div className="field-group"><label htmlFor={`${id}-name`}>Name</label><input id={`${id}-name`} name="name" autoComplete="name" required /></div>
        <div className="field-group"><label htmlFor={`${id}-email`}>Email address</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="field-group"><label htmlFor={`${id}-message`}>Message</label><textarea id={`${id}-message`} name="message" rows={7} required /></div>
      {children}
      <button className="button button-primary" type="submit" disabled={formState === 'submitting'}>{formState === 'submitting' ? 'Sending…' : 'Send message'}</button>
      {formState === 'success' && <p className="form-success-inline" role="status">Thank you. Your message has been received.</p>}
      {formState === 'error' && <p className="form-error" role="alert">Your message could not be sent. Please try again.</p>}
    </form>
  )
}
