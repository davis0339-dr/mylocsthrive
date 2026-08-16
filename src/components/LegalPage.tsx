import { type ReactNode } from 'react'
import { PageShell } from './SiteChrome'
import { siteUrl } from '../content'

export type LegalSection = { heading: string; content: ReactNode }

export function legalHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title: `${title} | My Locs Thrive` },
      { name: 'description', content: description },
      { property: 'og:title', content: `${title} | My Locs Thrive` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${siteUrl}/${path}` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/${path}` }],
  }
}

export function LegalPage({ eyebrow = 'Site information', title, intro, sections, updated = 'August 4, 2026' }: { eyebrow?: string; title: string; intro: string; sections: LegalSection[]; updated?: string }) {
  return (
    <PageShell>
      <header className="page-hero legal-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Last updated: {updated}</small>
        </div>
      </header>
      <div className="shell legal-layout">
        <aside><p>On this page</p>{sections.map((section) => <a key={section.heading} href={`#${section.heading.toLowerCase().replaceAll(' ', '-')}`}>{section.heading}</a>)}</aside>
        <div className="legal-content">
          {sections.map((section) => <section key={section.heading} id={section.heading.toLowerCase().replaceAll(' ', '-')}><h2>{section.heading}</h2>{section.content}</section>)}
        </div>
      </div>
    </PageShell>
  )
}
