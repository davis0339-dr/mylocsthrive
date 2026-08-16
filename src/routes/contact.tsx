import { createFileRoute } from '@tanstack/react-router'
import { AlertCircle, MessageCircle } from 'lucide-react'
import { ContactForm } from '../components/NetlifyForm'
import { PageShell } from '../components/SiteChrome'
import { legalHead } from '../components/LegalPage'

export const Route = createFileRoute('/contact')({ head: () => legalHead('Contact', 'Contact My Locs Thrive about resources, privacy, corrections or future collaborations.', 'contact'), component: ContactPage })
function ContactPage() {
  return <PageShell>
    <header className="page-hero contact-hero"><div className="shell narrow-shell"><p className="eyebrow"><span />Contact</p><h1>Let’s keep the conversation <em>thoughtful.</em></h1><p>Use this form for resource questions, corrections, privacy requests and carefully aligned collaborations.</p></div></header>
    <section className="section contact-section"><div className="shell contact-grid"><div><MessageCircle aria-hidden="true" /><h2>Before you write</h2><p>My Locs Thrive cannot assess symptoms, diagnose conditions, recommend a personal treatment plan or provide urgent advice through this form.</p><div className="educational-notice"><AlertCircle aria-hidden="true" /><p><strong>Need individual support?</strong>Contact a qualified loctician for method-specific maintenance and an appropriate clinician for persistent scalp symptoms or hair loss. Seek urgent local help for severe symptoms.</p></div></div><ContactForm><p className="form-fineprint">Do not include sensitive medical information. Form submissions are processed by Netlify Forms. See the <a href="/privacy">Privacy Notice</a>.</p></ContactForm></div></section>
  </PageShell>
}
