import Link from 'next/link'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'
import { staticPages } from '@/data/pages'
import { universes } from '@/data/universes'
import UniverseCard from '@/components/UniverseCard'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

const searchResults: SearchResult[] = [
  ...universes.map((universe) => ({
    title: universe.title,
    description: `${universe.genre}. ${universe.summary}`,
    href: `/universes/${universe.slug}`,
    category: 'Universe',
  })),
  ...staticPages.map((page) => ({
    title: page.title,
    description: page.description,
    href: `/${page.slug}`,
    category: 'Guide',
  })),
  { title: 'Character archive', description: 'The NCU character roster is in progress.', href: '/characters', category: 'Archive' },
  { title: 'Reading order', description: 'Start with any world; no cross-universe chronology is published yet.', href: '/reading-order', category: 'Guide' },
  { title: 'News', description: 'Official NCU updates and announcements.', href: '/news', category: 'News' },
]

export default function SearchPage() {
  const router = useRouter()
  const query = typeof router.query.q === 'string' ? router.query.q.trim() : ''
  const normalizedQuery = query.toLocaleLowerCase()
  const results = normalizedQuery
    ? searchResults.filter((result) => `${result.title} ${result.description} ${result.category}`.toLocaleLowerCase().includes(normalizedQuery))
    : []

  return (
    <>
      <Seo title="Search NCU" description="Search NCU universes, reader guides, characters and announcements." />
      <section className="page-hero editorial-page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Explore the archive</p>
          <h1>Search NCU.</h1>
          <p className="page-lead">Look across story worlds, reading guides and published site pages.</p>
          <form className="search-form" role="search" action="/search" method="get">
            <label className="visually-hidden" htmlFor="search-query">Search NCU</label>
            <input id="search-query" type="search" name="q" defaultValue={query} placeholder="Try a universe name or genre" />
            <button className="button" type="submit">Search <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          {!query ? (
            <>
              <p className="notice-strip">Enter a search term to find a universe or guide, or start with one of these directory links.</p>
              <div className="path-grid" style={{ marginTop: 24 }}>
                {universes.slice(0, 3).map((universe, index) => (
                  <article className="path-card" key={universe.slug}>
                    <span className="card-index">{String(index + 1).padStart(2, '0')} / UNIVERSE</span>
                    <h3>{universe.title}</h3>
                    <p>{universe.genre} · {universe.summary}</p>
                    <Link className="text-link" href={`/universes/${universe.slug}`}>Open world guide <span aria-hidden="true">↗</span></Link>
                  </article>
                ))}
              </div>
            </>
          ) : results.length ? (
            <>
              <p className="eyebrow">{results.length} result{results.length === 1 ? '' : 's'} for “{query}”</p>
              <ul className="search-results">
                {results.map((result) => (
                  <li key={`${result.category}-${result.href}`}>
                    <Link className="search-result" href={result.href}>
                      <span className="eyebrow">{result.category}</span>
                      <h2>{result.title}</h2>
                      <p>{result.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="empty-state">
              <p className="eyebrow">No matches</p>
              <h2>No NCU pages match “{query}”.</h2>
              <p>Try a different title, genre or guide topic.</p>
            </div>
          )}
        </div>
      </section>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Browse by world</p>
              <h2>Explore without<br />a search term.</h2>
            </div>
            <p>Go straight to the universe profiles or use a reader guide to find a path through the NCU.</p>
          </div>
          <div className="universe-grid">
            {universes.slice(0, 3).map((universe) => <UniverseCard key={universe.slug} universe={universe} />)}
          </div>
          <div className="editorial-list" style={{ marginTop: 22 }}>
            <article className="editorial-list-item"><strong>New to NCU?</strong><p>Get a quick orientation and find your first world.</p><Link className="text-link" href="/start-here">Start here <span aria-hidden="true">↗</span></Link></article>
            <article className="editorial-list-item"><strong>Looking for updates?</strong><p>Check confirmed announcements and the current newsletter status.</p><Link className="text-link" href="/news">NCU news <span aria-hidden="true">↗</span></Link></article>
          </div>
        </div>
      </section>
    </>
  )
}
