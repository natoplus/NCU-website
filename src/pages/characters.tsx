import Link from 'next/link'
import Seo from '@/components/Seo'

export default function CharactersPage() {
  return (
    <>
      <Seo title="Character archive" description="The NCU character archive is in progress. Explore the current universe introductions while profiles are prepared." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">The character archive</p>
          <h1>Meet the<br />world-makers.</h1>
          <p className="page-lead">Every universe is shaped by the people who inhabit it. Character profiles are being prepared; this page will grow as approved information becomes available.</p>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="empty-state">
            <p className="eyebrow">Archive in progress</p>
            <h2>New character profiles are on the way.</h2>
            <p>Visit a universe to explore its world and story themes while the roster develops. No unpublished character details are shown here.</p>
            <Link className="button" href="/universes">Explore universes <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
