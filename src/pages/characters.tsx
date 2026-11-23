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
      <section className="section section-border">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Built from verified details</p>
              <h2>Profiles should<br />add context.</h2>
            </div>
            <p>When official character information is ready, this archive will connect each profile to its universe and reading destination.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><span className="card-index">01 / APPROVED CONTENT</span><h3>Verified story details.</h3><p>Character information will be added from approved source material rather than guessed or inferred.</p></article>
            <article className="feature-card"><span className="card-index">02 / READER CONTEXT</span><h3>Clear universe links.</h3><p>Profiles will make it easy to understand which story world they belong to and where to find published comics.</p></article>
            <article className="feature-card"><span className="card-index">03 / SPOILER CARE</span><h3>Context before reveals.</h3><p>Plot-sensitive information and content notes will be marked when verified release details are available.</p></article>
          </div>
          <div className="content-end-links">
            <Link className="text-link" href="/reading-order">Reader guide <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/newsletter">Request updates <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
