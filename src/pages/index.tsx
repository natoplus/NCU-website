import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import Seo from '@/components/Seo'
import UniverseCard from '@/components/UniverseCard'
import { universes } from '@/data/universes'
import { NARTSTUDIO_URL, OUBYT_URL, PYLOTHOUSE_COMICS_URL, PYLOTHOUSE_URL } from '@/lib/site'

const storyPaths = [
  { index: '01', title: 'Divine comedy', text: 'A celestial court where power meets very human dysfunction.', world: 'Lord’s Lounge', href: '/universes/lords-lounge' },
  { index: '02', title: 'Cyberpunk & colossal sci-fi', text: 'Machine-shaped futures, rebellion and threats at enormous scale.', world: 'M.O.D · Holo Host', href: '/universes/mod' },
  { index: '03', title: 'Magic, illusion & fantasy', text: 'Forbidden knowledge, deception and kingdoms shaped by power.', world: 'The Unliving Sage · False Magic · Royal Target', href: '/universes/the-unliving-sage' },
  { index: '04', title: 'Multiverse adventure', text: 'Connected dimensions where different versions of a story collide.', world: 'NATOVERSE', href: '/universes/natoverse' },
]

const guideSteps = [
  { index: '01', title: 'Choose a world', text: 'Use each genre and spoiler-light premise to find a starting point.' },
  { index: '02', title: 'Check the release', text: 'Open the Pylothouse library for currently available comics and chapter details.' },
  { index: '03', title: 'Follow confirmed updates', text: 'Use NCU News and the optional newsletter for announcements when they are published.' },
]

const family = [
  { name: 'Nartstudio', role: 'Original stories & creative services', description: 'The studio behind the Nartstudio family and its original creative worlds.', href: NARTSTUDIO_URL, label: 'Visit Nartstudio' },
  { name: 'Oubyt', role: 'Animation & visual development', description: 'A motion-focused home for visual development and animation pre-production.', href: OUBYT_URL, label: 'Discover Oubyt' },
  { name: 'Pylothouse', role: 'Publishing & discovery', description: 'The creator-first platform where readers discover and read comics.', href: PYLOTHOUSE_URL, label: 'Explore Pylothouse' },
]

export default function HomePage() {
  return (
    <>
      <Seo title="NCU" description="Explore seven original Nartstudio comic universes, find your starting point and discover available comics on Pylothouse." />
      <section className="home-hero">
        <div className="site-container home-hero-inner">
          <div className="home-hero-logo-frame">
            <img
              className="home-hero-logo"
              src="/assets/brand/ncu-logo.webp"
              alt="The complete NCU logo artwork"
              width="1112"
              height="768"
              fetchPriority="high"
              data-parallax="0.04"
            />
          </div>
          <div className="home-hero-content">
            <div className="hero-kicker-row">
              <span className="hero-kicker-dot" aria-hidden="true" />
              <span>Nartstudio Comic Universe</span>
              <span className="hero-kicker-count">01 / 07 WORLDS</span>
            </div>
            <h1>Original worlds,<br /><span className="accent-line">made to explore.</span></h1>
            <p>Seven distinct comic universes from Nartstudio. Find the world that speaks to you, explore its themes, and continue reading on Pylothouse.</p>
            <div className="hero-actions">
              <Link className="button" href="/universes">Explore all universes <span aria-hidden="true">↗</span></Link>
              <a className="button button-secondary" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">Read on Pylothouse <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="NCU at a glance">
        <div className="site-container stats-grid">
          <div className="stat-cell"><strong>07</strong><span>Original story worlds</span></div>
          <div className="stat-cell"><strong>One guide</strong><span>For worlds, themes and reader paths</span></div>
          <div className="stat-cell"><strong>Pylothouse</strong><span>The place to find available comics</span></div>
        </div>
      </section>

      <section className="genre-marquee" aria-label="Genres across the NCU">
        <div className="genre-marquee-track">
          {universes.map((universe) => <span className="genre-chip" key={universe.slug}>{universe.genre}</span>)}
          {universes.map((universe) => <span className="genre-chip" key={`repeat-${universe.slug}`} aria-hidden="true">{universe.genre}</span>)}
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
            <p>This site is your guide to the worlds—not a comic reader. It brings together introductions, reader guidance, community notes and confirmed NCU announcements. Available comics are discovered and read on Pylothouse.</p>
            <Link className="text-link" href="/about">More about NCU <span aria-hidden="true">↗</span></Link>
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
            <Link className="button button-secondary" href="/universes">Explore the universe directory <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Browse by mood</p>
              <h2>Choose the kind<br />of story you want.</h2>
            </div>
            <p>These are genre-based suggestions, not a shared chronology or crossover order.</p>
          </div>
          <div className="path-grid">
            {storyPaths.map((path) => (
              <article className="path-card" key={path.index}>
                <span className="card-index">{path.index} / STORY MODE</span>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <p className="path-worlds">{path.world}</p>
                <Link className="text-link" href={path.href}>Start exploring <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A clear route for readers</p>
              <h2>From first look<br />to first chapter.</h2>
            </div>
            <p>Start without needing a franchise guidebook. Each step keeps the information in the right place.</p>
          </div>
          <div className="path-grid">
            {guideSteps.map((step) => (
              <article className="path-card" key={step.index}>
                <span className="card-index">{step.index} / READER GUIDE</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="content-end-links">
            <Link className="text-link" href="/start-here">Read the complete Start Here guide <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/reading-order">View reading guidance <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The guide keeps growing</p>
              <h2>More than a list<br />of story worlds.</h2>
            </div>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <span className="card-index">01 / WORLD GUIDES</span>
              <h3>Start with the setting.</h3>
              <p>Each universe page gives a high-level premise, genre and spoiler-light introduction based on currently published information.</p>
              <Link className="text-link" href="/universes">Browse worlds <span aria-hidden="true">↗</span></Link>
            </article>
            <article className="feature-card">
              <span className="card-index">02 / CHARACTERS</span>
              <h3>Meet the cast as it is ready.</h3>
              <p>The character archive is in progress. Profiles will appear when approved details and artwork are available.</p>
              <Link className="text-link" href="/characters">Character archive <span aria-hidden="true">↗</span></Link>
            </article>
            <article className="feature-card">
              <span className="card-index">03 / UPDATES</span>
              <h3>Follow confirmed news.</h3>
              <p>Release dates, announcements and other changes belong in the news feed once they are confirmed.</p>
              <Link className="text-link" href="/news">NCU news <span aria-hidden="true">↗</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="dark-callout">
            <div>
              <p className="eyebrow">Reading order</p>
              <h2>No shared chronology is required to begin.</h2>
              <p>Choose any universe. For chapter-level release details, follow the series on Pylothouse; this guide will add exact links as they are confirmed.</p>
            </div>
            <Link className="button" href="/reading-order">See the reader guide <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Latest from NCU</p>
              <h2>News when it is ready.</h2>
            </div>
            <Link className="text-link" href="/news">Go to news <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="news-empty">
            <span className="card-index">OFFICIAL ANNOUNCEMENTS</span>
            <div>
              <h3>No NCU updates have been published here yet.</h3>
              <p>Confirmed release news, world-guide changes and other NCU announcements will be collected in one place.</p>
            </div>
            <Link className="text-link" href="/newsletter">Request email updates <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">One creative family</p>
              <h2>Distinct doors.<br />Connected work.</h2>
            </div>
            <p>NCU, Oubyt and Pylothouse each serve a different part of how original stories are built, moved and read.</p>
          </div>
          <div className="family-card-grid">
            {family.map((brand, index) => (
              <a className="family-card" href={brand.href} key={brand.name} target="_blank" rel="noopener noreferrer">
                <span className="card-index">{String(index + 1).padStart(2, '0')} / {brand.role}</span>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <span className="text-link">{brand.label} <span aria-hidden="true">↗</span></span>
              </a>
            ))}
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
