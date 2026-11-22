import Link from 'next/link'
import Seo from '@/components/Seo'
import UniverseCard from '@/components/UniverseCard'
import { universes } from '@/data/universes'

export default function UniversesPage() {
  return (
    <>
      <Seo title="Story universes" description="Browse the seven original story worlds in the Nartstudio Comic Universe." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">The NCU directory</p>
          <h1>Find your<br />next world.</h1>
          <p className="page-lead">Seven distinct universes, each with its own genre, atmosphere and entry point. Choose the one that sounds like your kind of story.</p>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="universe-grid">
            {universes.map((universe) => <UniverseCard key={universe.slug} universe={universe} />)}
          </div>
          <div className="content-end-links">
            <Link className="button button-secondary" href="/start-here">Need a starting point? <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
