import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My Locs Thrive | Evidence-Informed Loc Education' },
      { name: 'description', content: 'Calm, evidence-informed and experience-led loc education from Dr Lisa.' },
      { name: 'theme-color', content: '#244536' },
      { name: 'color-scheme', content: 'light' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap' },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function NotFound() {
  return <main className="not-found" id="main-content"><title>Page Not Found | My Locs Thrive</title><meta name="robots" content="noindex" /><div><p>404 · A gentle redirection</p><h1>This page is no longer on the journey.</h1><p>The resource may have moved, or the address may be incomplete.</p><a className="button button-primary" href="/">Return home</a><a className="text-link" href="/resources">Browse resources</a></div></main>
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>
}
