import { createFileRoute } from '@tanstack/react-router'
import { HeartHandshake } from 'lucide-react'
import { EmailForm } from '../components/NetlifyForm'
import { PageShell } from '../components/SiteChrome'
import { siteUrl } from '../content'

export const Route = createFileRoute('/community')({
  head: () => ({
    meta: [
      { title: 'Live Learning Circles | My Locs Thrive' },
      { name: 'description', content: 'Learn about Lisa’s future Live Learning Circles and join the notification list.' },
      { property: 'og:title', content: 'Live Learning Circles | My Locs Thrive' },
      { property: 'og:description', content: 'A thoughtful future community for honest loc questions and shared learning.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${siteUrl}/community` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/community` }],
  }),
  component: CommunityPage,
})

function CommunityPage() {
  return (
    <PageShell>
      <header className="page-hero community-hero"><div className="shell narrow-shell"><p className="eyebrow"><span />Community, with care</p><h1>Learning together, <em>without pressure.</em></h1><p>A future space for honest questions, real experiences and carefully facilitated conversations.</p></div></header>
      <section className="section community-section">
        <div className="shell community-grid">
          <div className="community-copy"><p className="coming-label">Coming Later</p><h2>Live Learning Circles</h2><p className="large-copy">Small, carefully facilitated sessions where women can ask honest questions, discuss real experiences and learn from appropriately qualified contributors.</p><p>These sessions are a future programme and are not currently open. Join the notification list to hear when the format, contributors and dates are confirmed.</p></div>
          <div className="community-card"><HeartHandshake aria-hidden="true" /><h3>Be first to know</h3><p>No booking pressure. Just one clear email when sessions open.</p><EmailForm formName="locs-thrive-circles" buttonLabel="Notify me when sessions open" successTitle="You’re on the notification list." successMessage="We’ll email you only when the Learning Circles are ready to open." source="community-page" compact /></div>
        </div>
      </section>
    </PageShell>
  )
}
