import { ArrowRight, Crown, Menu, X } from 'lucide-react'
import { useState, type ReactNode } from 'react'

const navigation = [
  { label: 'Start Here', href: '/#start' },
  { label: 'Lisa’s Story', href: '/#lisa-story' },
  { label: 'Resources', href: '/resources' },
  { label: 'Self-Check', href: '/#self-check' },
  { label: 'Community', href: '/#community' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="shell header-inner">
        <a className="brand" href="/" aria-label="My Locs Thrive home">
          <span className="brand-mark"><Crown aria-hidden="true" /></span>
          <span>My Locs Thrive</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-primary header-cta" href="/#starter-guide">
          Get the Gentle Starter Guide <ArrowRight aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav shell" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="button button-primary" href="/#starter-guide" onClick={() => setMenuOpen(false)}>
            Get the Gentle Starter Guide
          </a>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand footer-brand" href="/">
            <span className="brand-mark"><Crown aria-hidden="true" /></span>
            <span>My Locs Thrive</span>
          </a>
          <p className="footer-purpose">Clear, caring loc education for women and girls who want clarity without pressure or perfectionism.</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <a href="/#start">Start Here</a>
          <a href="/#lisa-story">Lisa’s Story</a>
          <a href="/resources">Resources</a>
          <a href="/#self-check">Self-Check</a>
          <a href="/#community">Community</a>
        </div>
        <div>
          <p className="footer-heading">Information</p>
          <a href="/privacy">Privacy Notice</a>
          <a href="/terms">Terms of Use</a>
          <a href="/disclaimer">Educational & Medical Disclaimer</a>
          <a href="/disclosures">Sponsorship & Affiliate Disclosure</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-note">
          <p>Grow healthy locs.<br />Enjoy the process.</p>
          <span>General education only. Not personal medical or professional hair-care advice.</span>
        </div>
      </div>
      <div className="shell copyright">© 2026 My Locs Thrive. Newsletter registration is intended for adults aged 18 and over.</div>
    </footer>
  )
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></>
}

export function StructuredData({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
