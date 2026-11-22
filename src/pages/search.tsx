import Link from 'next/link'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'
import { staticPages } from '@/data/pages'
import { universes } from '@/data/universes'

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
      <section className="page-hero">
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
            <p className="notice-strip">Enter a search term to find a universe or guide.</p>
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
    </>
  )
}
