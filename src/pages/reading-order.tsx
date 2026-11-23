import Link from 'next/link'
import Seo from '@/components/Seo'
import { universes } from '@/data/universes'
import { PYLOTHOUSE_COMICS_URL } from '@/lib/site'

export default function ReadingOrderPage() {
  return (
    <>
      <Seo title="Reading order" description="Choose any NCU universe to begin. No cross-universe reading chronology has been published." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Reader guide</p>
          <h1>Start with<br />any world.</h1>
          <p className="page-lead">There is no published cross-universe chronology yet. These story worlds are presented as independent starting points; follow each available release on Pylothouse.</p>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A simple route</p>
              <h2>Three steps.<br />No homework.</h2>
            </div>
            <p>NCU stories can be explored without a shared-universe reading checklist.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><span className="card-index">01 / PICK A WORLD</span><h3>Follow your interest.</h3><p>Choose any universe by genre, premise or artwork. The directory is not arranged by timeline.</p></article>
            <article className="feature-card"><span className="card-index">02 / CHECK RELEASES</span><h3>Use the comic library.</h3><p>Find currently available comics and chapter-level reading details on Pylothouse.</p></article>
            <article className="feature-card"><span className="card-index">03 / FOLLOW UPDATES</span><h3>Watch for confirmation.</h3><p>If a crossover order or special sequence is published, it will be added here as an official guide.</p></article>
          </div>
          <p className="notice-strip" style={{ marginTop: 26 }}>The list below is a discovery guide, not a release order. Exact series and chapter links will be added when confirmed.</p>
          <ol className="reading-list">
            {universes.map((universe, index) => (
              <li key={universe.slug}>
                <span className="reading-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{universe.title}</h3>
                  <p>{universe.genre} · {universe.summary}</p>
                </div>
                <Link className="text-link" href={`/universes/${universe.slug}`}>World guide <span aria-hidden="true">↗</span></Link>
              </li>
            ))}
          </ol>
          <a className="button" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">Browse comics on Pylothouse <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  )
}
