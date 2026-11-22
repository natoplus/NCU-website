import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import Seo from '@/components/Seo'
import UniverseCard from '@/components/UniverseCard'
import { universes } from '@/data/universes'
import { PYLOTHOUSE_COMICS_URL } from '@/lib/site'

const paths = [
  { index: '01', title: 'Choose a world', text: 'Start with the genre and atmosphere that sound right to you.', href: '/universes', label: 'Browse universes' },
  { index: '02', title: 'Find your first story', text: 'Open the Pylothouse library to see what is currently available to read.', href: PYLOTHOUSE_COMICS_URL, label: 'Open comic library', external: true },
  { index: '03', title: 'Meet the cast', text: 'The character archive is in progress; profiles will be added when approved content is ready.', href: '/characters', label: 'Visit the archive' },
]

export default function HomePage() {
  return (
    <>
      <Seo title="NCU" description="Original comic worlds from Nartstudio. Explore seven universes and discover available comics on Pylothouse." />
      <section className="hero-section">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Nartstudio Comic Universe</p>
            <h1>Original<br /><span>worlds,</span><br />connected.</h1>
            <p>Seven distinct story worlds. A growing home for original comics, memorable characters and ideas made to keep unfolding.</p>
            <div className="hero-actions">
              <Link className="button" href="/universes">Explore the universes <span aria-hidden="true">↗</span></Link>
              <a className="button button-secondary" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">Read on Pylothouse <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-stats" aria-label="NCU overview">
              <span><strong>07</strong> story worlds</span>
              <span><strong>01</strong> creative home</span>
              <span><strong>0</strong> comics hosted here</span>
            </div>
          </div>
          <div className="hero-art">
            <img src="/assets/universes/mod.webp" alt="M.O.D universe artwork" width="900" height="1280" fetchPriority="high" />
            <div className="hero-art-label">
              <strong>M.O.D</strong>
              <span>Enter a world in motion</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="site-container intro-grid">
          <div>
            <p className="eyebrow">Inside NCU</p>
            <h2>One banner.<br />Many realities.</h2>
          </div>
          <div className="intro-copy">
            <p>NCU is the home of Nartstudio’s original comic universes: a growing slate of character-led stories, each with its own tone, setting and mythology. From celestial comedy to dark fantasy, these are distinct worlds built to reward curious readers.</p>
            <p>Use this site as your guide. When you are ready to read, follow the Pylothouse link to discover available releases. No comics are embedded here.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Choose your doorway</p>
              <h2>Seven universes.<br />Seven ways in.</h2>
            </div>
            <p>Every world has its own premise, genre and visual atmosphere. Start with the one that catches your imagination.</p>
          </div>
          <div className="universe-grid">
            {universes.map((universe) => <UniverseCard key={universe.slug} universe={universe} />)}
          </div>
          <div className="content-end-links">
            <Link className="button button-secondary" href="/universes">Explore all universes <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">New to the worlds?</p>
              <h2>Start wherever<br />you are.</h2>
            </div>
            <p>No complicated entry path. Pick a world, explore the guide, then continue on the comic platform.</p>
          </div>
          <div className="path-grid">
            {paths.map((path) => (
              <article className="path-card" key={path.index}>
                <span className="card-index">{path.index} / YOUR NEXT STEP</span>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                {path.external ? (
                  <a className="text-link" href={path.href} target="_blank" rel="noopener noreferrer">{path.label} <span aria-hidden="true">↗</span></a>
                ) : (
                  <Link className="text-link" href={path.href}>{path.label} <span aria-hidden="true">↗</span></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What defines NCU</p>
              <h2>Distinct worlds.<br />Shared ambition.</h2>
            </div>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><span className="card-index">01 / ORIGINAL FRANCHISES</span><h3>Built with a point of view.</h3><p>Distinct settings and story concepts developed under the Nartstudio banner.</p></article>
            <article className="feature-card"><span className="card-index">02 / CHARACTER-LED</span><h3>People at the center.</h3><p>Relationships and points of view give each world its emotional center.</p></article>
            <article className="feature-card"><span className="card-index">03 / ROOM TO GROW</span><h3>More to discover.</h3><p>Each universe has room for new arcs, characters and formats as it develops.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="site-container">
          <div className="dark-callout">
            <div>
              <p className="eyebrow">The reading platform</p>
              <h2>Discover the comics on Pylothouse.</h2>
              <p>NCU is the universe guide. Pylothouse is where readers discover and read available comics.</p>
            </div>
            <a className="button" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">Browse the library <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="site-container newsletter-grid">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2>Worlds keep<br />unfolding.</h2>
            <p>Get occasional NCU story and release updates. Signup is available once the mailing-list service has been configured.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
