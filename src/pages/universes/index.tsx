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
        </div>
      </section>
      <section className="section section-border">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How to use the directory</p>
              <h2>Find the tone<br />that pulls you in.</h2>
            </div>
            <p>These are separate story worlds under one Nartstudio banner. The directory is organized for discovery, not by chronology.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><span className="card-index">01 / GENRE</span><h3>Start with a feeling.</h3><p>Choose celestial comedy, cyberpunk drama, multiverse adventure, fantasy, illusion or kaiju science fiction.</p></article>
            <article className="feature-card"><span className="card-index">02 / WORLD GUIDE</span><h3>Read the spoiler-light notes.</h3><p>Each profile gives a high-level premise and its currently published story themes.</p></article>
            <article className="feature-card"><span className="card-index">03 / COMIC LIBRARY</span><h3>Continue on Pylothouse.</h3><p>Use the external library for available comics, releases and chapter-level reading details.</p></article>
          </div>
          <div className="content-end-links">
            <Link className="button button-secondary" href="/start-here">Need a starting point? <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/reading-order">How reading order works <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
