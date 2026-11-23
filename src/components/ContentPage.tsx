import Link from 'next/link'
import type { StaticPage } from '@/data/pages'
import Seo from '@/components/Seo'
import UniverseArtwork from '@/components/UniverseArtwork'
import UniverseCard from '@/components/UniverseCard'
import { universes } from '@/data/universes'
import { NARTSTUDIO_URL } from '@/lib/site'

const featuredWorldByPage: Record<string, string> = {
  'start-here': 'mod',
  about: 'lords-lounge',
  contact: 'natoverse',
  press: 'holo-host',
  licensing: 'royal-target',
  faq: 'false-magic',
}

const pageFeatureCopy: Record<string, { heading: string; description: string }> = {
  'start-here': {
    heading: 'Begin with the world that feels right.',
    description: 'There is no required order across the NCU. Choose a genre or premise, then use its guide to find a starting point.',
  },
  about: {
    heading: 'Seven distinct worlds. One creative home.',
    description: 'The universe directory brings each listed story world together without flattening its own tone, setting or identity.',
  },
  contact: {
    heading: 'The right question, routed to the right place.',
    description: 'Use the universe guides for story context, Pylothouse for comic-reading support and Nartstudio for studio enquiries.',
  },
  press: {
    heading: 'A clear source for NCU context.',
    description: 'Use the published universe descriptions as a spoiler-light reference and ask Nartstudio for approved assets.',
  },
  licensing: {
    heading: 'Start with the world and the intended use.',
    description: 'A clear property, format and purpose help the studio understand a rights enquiry. This guide does not promise availability.',
  },
  faq: {
    heading: 'Find the answer in its story context.',
    description: 'Browse the world guides for introductions, then use the reader resources for release and community guidance.',
  },
}

export default function ContentPage({ page }: { page: StaticPage }) {
  const featuredWorld = universes.find((universe) => universe.slug === featuredWorldByPage[page.slug]) ?? universes[0]
  const featureCopy = pageFeatureCopy[page.slug] ?? pageFeatureCopy.about

  return (
    <>
      <Seo title={page.title} description={page.description} />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-lead">{page.description}</p>
        </div>
      </section>
      <div className="site-container content-page">
        {page.sections.map((section, index) => (
          <section className="content-block" key={section.heading}>
            <span className="content-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul className="content-list">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
        <div className="content-end-links">
          <Link className="button button-secondary" href="/universes">Browse universes</Link>
          {['contact', 'press', 'licensing'].includes(page.slug) ? (
            <a className="text-link" href={`${NARTSTUDIO_URL}/contact`} target="_blank" rel="noopener noreferrer">
              Contact Nartstudio <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link className="text-link" href="/contact">Contact the studio <span aria-hidden="true">↗</span></Link>
          )}
        </div>
      </div>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container editorial-split">
          <div className="editorial-split-art">
            <UniverseArtwork universe={featuredWorld} />
          </div>
          <div className="editorial-split-copy">
            <p className="eyebrow">{featuredWorld.genre}</p>
            <h2>{featureCopy.heading}</h2>
            <p>{featureCopy.description}</p>
            <div className="hero-actions">
              <Link className="button" href={`/universes/${featuredWorld.slug}`}>Explore {featuredWorld.title} <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href="/universes">All universes</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2>Choose another<br />doorway.</h2>
            </div>
            <p>These are discovery suggestions, not a reading order or promise of crossover connections.</p>
          </div>
          <div className="universe-grid">
            {universes.filter((universe) => universe.slug !== featuredWorld.slug).slice(0, 3).map((universe) => (
              <UniverseCard key={universe.slug} universe={universe} />
            ))}
          </div>
          <div className="content-end-links">
            <Link className="text-link" href="/reading-order">How reading order works <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/news">NCU announcements <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
