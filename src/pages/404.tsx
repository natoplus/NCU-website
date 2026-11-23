import Link from 'next/link'
import Seo from '@/components/Seo'
import UniverseCard from '@/components/UniverseCard'
import { universes } from '@/data/universes'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The NCU page you are looking for could not be found." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">404 · Lost between worlds</p>
          <h1>This page<br />is not here.</h1>
          <p className="page-lead">The address may have changed, or the page may not be published yet.</p>
          <div className="hero-actions">
            <Link className="button" href="/">Return home</Link>
            <Link className="button button-secondary" href="/universes">Explore universes</Link>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A new point of entry</p>
              <h2>Try one of these<br />story worlds.</h2>
            </div>
            <p>The address did not resolve, but your next NCU destination is only a click away.</p>
          </div>
          <div className="universe-grid">
            {universes.slice(0, 3).map((universe) => <UniverseCard key={universe.slug} universe={universe} />)}
          </div>
          <div className="content-end-links">
            <Link className="text-link" href="/search">Search the NCU site <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/start-here">Read the guide <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
