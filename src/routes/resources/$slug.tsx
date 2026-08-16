import { createFileRoute } from '@tanstack/react-router'
import { AlertCircle, ArrowLeft, ArrowRight, BookOpen, CalendarDays, Clock3, UserRound } from 'lucide-react'
import { PageShell, StructuredData } from '../../components/SiteChrome'
import { articleBodies, articles, siteUrl } from '../../content'

export const Route = createFileRoute('/resources/$slug')({
  head: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug)
    if (!article) return { meta: [{ title: 'Resource Not Found | My Locs Thrive' }, { name: 'robots', content: 'noindex' }] }
    const url = `${siteUrl}/resources/${article.slug}`
    return {
      meta: [
        { title: `${article.title} | My Locs Thrive` },
        { name: 'description', content: article.description },
        { property: 'og:title', content: `${article.title} | My Locs Thrive` },
        { property: 'og:description', content: article.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `${siteUrl}/images/lisa-hero.jpg` },
        { property: 'article:published_time', content: article.publishedIso },
        { property: 'article:modified_time', content: article.reviewedIso },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: ArticlePage,
})

function ArticlePage() {
  const { slug } = Route.useParams()
  const article = articles.find((item) => item.slug === slug)
  const body = articleBodies[slug]

  if (!article || !body) {
    return <PageShell><section className="page-hero"><div className="shell narrow-shell"><p className="eyebrow"><span />Resource not found</p><h1>This page has moved or does not exist.</h1><a className="button button-primary" href="/resources">Browse all resources</a></div></section></PageShell>
  }

  const url = `${siteUrl}/resources/${article.slug}`
  return (
    <PageShell>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.publishedIso,
        dateModified: article.reviewedIso,
        mainEntityOfPage: url,
        author: { '@type': 'Person', name: 'Dr Lisa', url: `${siteUrl}/story` },
        publisher: { '@type': 'Organization', name: 'My Locs Thrive', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` } },
        image: `${siteUrl}/images/lisa-hero.jpg`,
      }} />
      <article className="editorial-article">
        <header className="article-hero">
          <div className="shell article-shell">
            <a className="back-link" href="/resources"><ArrowLeft aria-hidden="true" />Resource hub</a>
            <p className="eyebrow"><span />{article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-deck">{article.description}</p>
            <div className="article-byline">
              <span><UserRound aria-hidden="true" />Dr Lisa</span>
              <span><CalendarDays aria-hidden="true" />Published <time dateTime={article.publishedIso}>{article.published}</time></span>
              <span><Clock3 aria-hidden="true" />{article.readingTime}</span>
            </div>
            <p className="review-date">Last reviewed: <time dateTime={article.reviewedIso}>{article.reviewed}</time></p>
          </div>
        </header>
        <div className="shell article-layout">
          <aside className="article-aside">
            <p>On this page</p>
            {body.sections.map((section) => <a key={section.heading} href={`#${section.heading.toLowerCase().replaceAll(' ', '-')}`}>{section.heading}</a>)}
          </aside>
          <div className="article-content">
            <p className="article-intro">{body.intro}</p>
            <div className="educational-notice"><AlertCircle aria-hidden="true" /><p><strong>Educational disclaimer</strong>This article provides general education, not a diagnosis or personalised medical or hair-care advice. Consult an appropriate clinician for health concerns and a qualified loctician for method-specific maintenance.</p></div>
            {body.sections.map((section) => (
              <section key={section.heading} id={section.heading.toLowerCase().replaceAll(' ', '-')}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            <section className="further-reading">
              <h2><BookOpen aria-hidden="true" />References and further reading</h2>
              {body.furtherReading ? (
                <ul>{body.furtherReading.map((item) => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer">{item.label} <ArrowRight aria-hidden="true" /></a></li>)}</ul>
              ) : (
                <p>This article is based on general journey planning and clearly labelled experience-led education. No clinical claims or external statistics are used. For health-related concerns, begin with the <a href="/resources/is-this-normal">Is This Normal?</a> resource and its listed clinical sources.</p>
              )}
            </section>
            <div className="article-next"><p>Continue learning</p><a href="/resources">Explore all beginner resources <ArrowRight aria-hidden="true" /></a><a href="/#starter-guide">Get the free starter guide <ArrowRight aria-hidden="true" /></a></div>
          </div>
        </div>
      </article>
    </PageShell>
  )
}
