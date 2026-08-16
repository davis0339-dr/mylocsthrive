import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, BookOpen, Check, Compass, HeartHandshake } from 'lucide-react'
import { PageShell, StructuredData } from '../components/SiteChrome'
import { StarterPack } from '../components/StarterPack'
import { siteUrl } from '../content'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'My Locs Thrive | Grow Healthy Locs and Enjoy the Process' },
      { name: 'description', content: 'Clear, caring guidance for women and girls who want thriving locs without confusion, pressure or perfectionism.' },
      { property: 'og:title', content: 'My Locs Thrive | Grow Healthy Locs and Enjoy the Process' },
      { property: 'og:description', content: 'Clear, caring guidance for growing healthy locs and enjoying the process.' },
      { property: 'og:image', content: `${siteUrl}/images/lisa-studio-hero.webp` },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: siteUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: siteUrl }],
  }),
  component: HomePage,
})

const pathways = [
  { icon: BookOpen, title: 'Learn about locs', text: 'Explore clear beginner resources without information overload.', href: '/resources', link: 'Visit the resource hub' },
  { icon: Compass, title: 'Reflect before starting', text: 'Use a private five-question check to consider what fits your life.', href: '/self-check', link: 'Take the self check' },
  { icon: HeartHandshake, title: 'Grow with community', text: 'Learn what Lisa is planning for future Live Learning Circles.', href: '/community', link: 'Explore the community' },
]

function HomePage() {
  return (
    <PageShell>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'My Locs Thrive', url: siteUrl, logo: `${siteUrl}/favicon.svg` },
          { '@type': 'Person', '@id': `${siteUrl}/#lisa`, name: 'Dr Lisa', description: 'Medical doctor, loc wearer and founder of My Locs Thrive.', image: `${siteUrl}/images/lisa-studio-hero.webp`, worksFor: { '@id': `${siteUrl}/#organization` } },
          { '@type': 'WebSite', name: 'My Locs Thrive', url: siteUrl, publisher: { '@id': `${siteUrl}/#organization` } },
        ],
      }} />
      <section className="hero" id="start">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />A gentler way to begin and grow</p>
            <h1>Grow healthy locs. <em>Enjoy the process.</em></h1>
            <p className="hero-lead">Clear, caring guidance for women and girls who want thriving locs without the confusion, pressure or perfectionism.</p>
            <div className="hero-actions"><a className="button button-primary" href="#starter-guide">Get the free starter pack <ArrowRight aria-hidden="true" /></a><a className="button button-secondary" href="/resources">Explore beginner resources</a></div>
            <p className="brand-line">Honest guidance. <span>No shame. Real life care.</span></p>
          </div>
          <div className="hero-portrait"><div className="portrait-frame"><img src="/images/lisa-studio-hero.webp" width="1200" height="1424" alt="Dr Lisa smiling with her locs styled in an elegant updo" fetchPriority="high" /></div><div className="portrait-caption"><span>Dr Lisa</span>Medical doctor and loc wearer, learning and sharing out loud.</div></div>
        </div>
        <div className="shell trust-strip" aria-label="Our approach">{['Honest guidance', 'Healthy foundations', 'No shame or perfectionism'].map((item) => <span key={item}><Check aria-hidden="true" />{item}</span>)}</div>
        <a className="scroll-cue" href="#meet-lisa" aria-label="Continue to meet Dr Lisa"><ArrowDown aria-hidden="true" /></a>
      </section>
      <section className="section about-section home-about" id="meet-lisa">
        <div className="shell about-grid">
          <div className="about-portrait"><img src="/images/lisa-candid.webp" width="900" height="1600" alt="Dr Lisa smiling naturally with her locs worn loose" loading="lazy" /></div>
          <div className="about-copy"><p className="eyebrow"><span />Meet your guide</p><h2>I’m Dr Lisa, and I’m <em>learning right beside you.</em></h2><p className="large-copy">Medicine taught me to value evidence, listen carefully and explain things plainly. Locs taught me process, patience, self-trust and the beauty of simplicity.</p><a className="button button-secondary" href="/story">Read Lisa’s story <ArrowRight aria-hidden="true" /></a></div>
        </div>
      </section>
      <StarterPack />
      <section className="section pathways-section">
        <div className="shell">
          <div className="section-heading centered-heading"><p className="eyebrow"><span />Choose your next step</p><h2>Explore at your <em>own pace.</em></h2></div>
          <div className="pathways-grid">{pathways.map(({ icon: Icon, title, text, href, link }) => <article className="pathway-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p><a className="text-link" href={href}>{link} <ArrowRight aria-hidden="true" /></a></article>)}</div>
        </div>
      </section>
    </PageShell>
  )
}
