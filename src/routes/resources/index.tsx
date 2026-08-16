import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Filter } from 'lucide-react'
import { PageShell, StructuredData } from '../../components/SiteChrome'
import { articles, resourceCategories, siteUrl } from '../../content'

export const Route = createFileRoute('/resources/')({
  head: () => ({
    meta: [
      { title: 'Loc Resource Hub | My Locs Thrive' },
      { name: 'description', content: 'Beginner-friendly loc education covering starting locs, first-month care, scalp questions, maintenance and professional support.' },
      { property: 'og:title', content: 'Loc Resource Hub | My Locs Thrive' },
      { property: 'og:description', content: 'Calm, practical resources for considering, beginning and caring for locs.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${siteUrl}/resources` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/resources` }],
  }),
  component: ResourcesPage,
})

function ResourcesPage() {
  return (
    <PageShell>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'My Locs Thrive Resource Hub', url: `${siteUrl}/resources`, description: 'Educational loc resources by Dr Lisa.' }} />
      <header className="page-hero resource-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow"><span />Resource hub</p>
          <h1>Clear guidance for every <em>early question.</em></h1>
          <p>Start with the decision in front of you. Each resource explains what is personal experience, what belongs in a loctician conversation and when professional health advice matters.</p>
        </div>
      </header>
      <section className="section resource-library">
        <div className="shell">
          <div className="category-panel">
            <span><Filter aria-hidden="true" />Browse by category</span>
            <div>{resourceCategories.map((category) => <span key={category}>{category}</span>)}</div>
          </div>
          <div className="resource-list">
            {articles.map((article, index) => (
              <article key={article.slug}>
                <span className="resource-number">0{index + 1}</span>
                <div>
                  <p className="card-category">{article.category}</p>
                  <h2><a href={`/resources/${article.slug}`}>{article.title}</a></h2>
                  <p>{article.description}</p>
                  <div className="article-meta"><span>By Dr Lisa</span><time dateTime={article.publishedIso}>{article.published}</time><span>{article.readingTime}</span></div>
                </div>
                <a className="round-link" href={`/resources/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <aside className="library-note"><BookOpen aria-hidden="true" /><div><h2>A growing, transparent library</h2><p>New resources are added carefully rather than frequently. Health-related pages include review dates and further reading, and meaningful corrections are disclosed.</p></div></aside>
        </div>
      </section>
    </PageShell>
  )
}
