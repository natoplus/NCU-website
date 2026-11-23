import Link from 'next/link'
import Seo from '@/components/Seo'
import { universes } from '@/data/universes'
import UniverseArtwork from '@/components/UniverseArtwork'
import { PYLOTHOUSE_COMICS_URL } from '@/lib/site'

export default function ReadingOrderPage() {
  return (
    <>
      <Seo title="Reading order" description="Choose any NCU universe to begin. No cross-universe reading chronology has been published." />
      <section className="page-hero editorial-page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Reader guide</p>
          <h1>Start with<br />any world.</h1>
          <p className="page-lead">There is no published cross-universe chronology yet. These story worlds are presented as independent starting points; follow each available release on Pylothouse.</p>
        </div>
      </section>
      <section className="editorial-section">
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
      <section className="editorial-section editorial-section-alt">
        <div className="site-container editorial-split">
          <div className="editorial-split-art">
            <UniverseArtwork universe={universes[2]} />
          </div>
          <div className="editorial-split-copy">
            <p className="eyebrow">A living reader guide</p>
            <h2>Follow published order, not guesswork.</h2>
            <p>If a universe gains an official chapter sequence or a verified crossover order, this page can point readers to that source. Until then, each universe stands as its own entry point.</p>
            <div className="hero-actions">
              <Link className="button" href="/universes">Choose a universe <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href="/faq">Reader FAQ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
