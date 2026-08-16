import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, HeartHandshake, SearchCheck, ShieldCheck } from 'lucide-react'
import { PageShell, StructuredData } from '../components/SiteChrome'
import { siteUrl } from '../content'

export const Route = createFileRoute('/story')({
  head: () => ({
    meta: [
      { title: 'Lisa’s Loc Journey | My Locs Thrive' },
      { name: 'description', content: 'Meet Dr Lisa and follow the honest stages of her loc journey from questioning to thriving.' },
      { property: 'og:title', content: 'Lisa’s Loc Journey | My Locs Thrive' },
      { property: 'og:description', content: 'An honest loc journey shaped by patience, simplicity and self-trust.' },
      { property: 'og:image', content: `${siteUrl}/images/journey-thriving.webp` },
      { property: 'og:type', content: 'profile' },
      { property: 'og:url', content: `${siteUrl}/story` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/story` }],
  }),
  component: StoryPage,
})

const journeyStages = [
  { number: '01', title: 'Questioning', text: 'Surely there is a way to enjoy my natural hair consistently?', image: '/images/journey-questioning.webp', width: 473, height: 630, alt: 'Dr Lisa smiling during an everyday moment with her locs worn loose' },
  { number: '02', title: 'Releasing', text: 'I stopped treating my hair texture and volume like a problem.', image: '/images/journey-releasing.webp', width: 471, height: 624, alt: 'Side view showing the natural volume and texture of Dr Lisa’s locs' },
  { number: '03', title: 'Beginning', text: 'I chose locs before I felt fully ready.', image: '/images/journey-beginning.webp', width: 475, height: 623, alt: 'Dr Lisa’s locs during a salon maintenance appointment' },
  { number: '04', title: 'Learning', text: 'Every stage came with learning and asked for patience.', image: '/images/journey-learning.webp', width: 466, height: 626, alt: 'Back view showing the length and development of Dr Lisa’s locs' },
  { number: '05', title: 'Thriving', text: 'Now I’ve reached a stage where I can share my journey.', image: '/images/journey-thriving.webp', width: 900, height: 1352, alt: 'Dr Lisa smiling in a studio portrait with her locs styled up' },
]

const principles = [
  { icon: SearchCheck, title: 'Experience stays labelled', text: 'I say clearly when something is my own experience rather than established health information.' },
  { icon: BookOpen, title: 'Facts get checked', text: 'Health related educational content is checked against credible and traceable sources.' },
  { icon: ShieldCheck, title: 'Professionals matter', text: 'Styling may need a qualified loctician. Persistent scalp or hair loss concerns may need a clinician.' },
  { icon: HeartHandshake, title: 'Transparency comes first', text: 'Sponsored content, affiliate relationships, corrections and collaborations will always be disclosed.' },
]

function StoryPage() {
  return (
    <PageShell>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', name: 'Meet Dr Lisa', url: `${siteUrl}/story`, mainEntity: { '@type': 'Person', name: 'Dr Lisa', image: `${siteUrl}/images/lisa-studio-hero.webp`, description: 'Medical doctor, loc wearer and founder of My Locs Thrive.' } }} />
      <header className="page-hero story-hero"><div className="shell narrow-shell"><p className="eyebrow"><span />Lisa’s story</p><h1>A journey shaped by <em>patience and simplicity.</em></h1><p>The honest version of why I chose locs, what each stage taught me and why I now share what I am learning.</p></div></header>
      <section className="section about-section">
        <div className="shell about-grid">
          <div className="about-portrait"><img src="/images/lisa-candid.webp" width="900" height="1600" alt="Dr Lisa smiling naturally with her locs worn loose" loading="eager" /></div>
          <div className="about-copy">
            <p className="eyebrow"><span />Meet Dr Lisa</p>
            <h2>I’m Dr Lisa, and I’m <em>learning right beside you.</em></h2>
            <p className="large-copy">I started my loc journey after years of feeling that caring for my natural hair asked for too much time, tension and frequent changes.</p>
            <p>Medicine has taught me to value evidence, listen carefully and explain things plainly. Locs taught me process, patience, self-trust and the beauty of simplicity.</p>
            <p className="about-quote">“You do not need perfect hair knowledge. You need a healthy foundation, curiosity, patience and the will to begin.”</p>
            <aside className="boundary-note">My Locs Thrive provides general hair care, lifestyle and wellbeing education. It does not replace personal advice from a clinician or qualified loctician.</aside>
          </div>
        </div>
      </section>
      <section className="section journey-page-section">
        <div className="shell journey-block">
          <div className="section-heading split-heading"><div><p className="eyebrow"><span />The honest version</p><h2>From questioning to thriving.</h2></div><p>My locs did not begin as a trend. They began as a question: could caring for my natural hair feel simpler, kinder and more sustainable?</p></div>
          <ol className="journey-timeline">
            {journeyStages.map((stage) => <li key={stage.number}><figure className="journey-photo"><img src={stage.image} width={stage.width} height={stage.height} alt={stage.alt} loading="lazy" /></figure><div className="journey-copy"><span className="journey-number">{stage.number}.</span><h3>{stage.title}</h3><p>{stage.text}</p></div></li>)}
          </ol>
          <p className="swipe-hint">Swipe to follow the journey</p>
        </div>
      </section>
      <section className="section principles-section">
        <div className="shell"><div className="section-heading centered-heading"><p className="eyebrow"><span />How I share what I learn</p><h2>Carefully considered. <em>Clearly explained.</em></h2></div><div className="principles-grid">{principles.map(({ icon: Icon, title, text }, index) => <article className="principle-card" key={title}><span className="principle-number">0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>
    </PageShell>
  )
}
