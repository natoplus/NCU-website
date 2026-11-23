import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import Seo from '@/components/Seo'
import UniverseArtwork from '@/components/UniverseArtwork'
import UniverseCard from '@/components/UniverseCard'
import { getUniverse, universes, type Universe } from '@/data/universes'
import { PYLOTHOUSE_COMICS_URL } from '@/lib/site'

interface UniversePageProps {
  universe: Universe
}

export default function UniversePage({ universe }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title={universe.title} description={universe.summary} image={universe.image} />
      <section className="page-hero universe-detail-hero" style={{ '--universe-accent': universe.accent } as CSSProperties}>
        <div className="site-container universe-detail-grid">
          <div className="page-hero-inner">
            <p className="eyebrow">{universe.genre}</p>
            <h1>{universe.title}</h1>
            <p className="page-lead">{universe.summary}</p>
            <p className="universe-detail-copy">{universe.tagline}</p>
            <div className="hero-actions">
              <a className="button" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">Find comics on Pylothouse <span aria-hidden="true">↗</span></a>
              <Link className="button button-secondary" href="/universes">All universes</Link>
            </div>
          </div>
          <div className="universe-detail-art">
            <UniverseArtwork universe={universe} />
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container editorial-split">
          <div className="editorial-split-art">
            <UniverseArtwork universe={universe} />
          </div>
          <div className="editorial-split-copy">
            <p className="eyebrow">{universe.genre} · NCU world guide</p>
            <h2>{universe.tagline}</h2>
            <p>{universe.summary}</p>
            <p>This introduction stays focused on the world’s published premise and genre. It is a place to get oriented before choosing whether to continue to the comic library.</p>
            <div className="content-end-links">
              <Link className="text-link" href="/start-here">How to start reading <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/characters">Character archive <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A first look</p>
              <h2>What makes this<br />world different?</h2>
            </div>
            <p>These spoiler-light themes are a starting point for exploring the universe. Published comics may reveal more.</p>
          </div>
          <div className="universe-feature-grid">
            {universe.features.map((feature, index) => (
              <article className="universe-feature" key={feature.title}>
                <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <p className="notice-strip" style={{ marginTop: 26 }}>Ratings, content notes and chapter-specific spoiler controls will be shown when approved release information is available.</p>
        </div>
      </section>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Take the next step</p>
              <h2>From the world guide<br />to the comic library.</h2>
            </div>
            <p>This site introduces the setting. The official Pylothouse library is the place to check for currently available comics and chapter details.</p>
          </div>
          <div className="editorial-list">
            <article className="editorial-list-item"><strong>01 / Meet the premise</strong><p>Use this page for the spoiler-light overview and story themes.</p></article>
            <article className="editorial-list-item"><strong>02 / Choose a starting point</strong><p>No cross-universe reading chronology is required or published here.</p></article>
            <article className="editorial-list-item"><strong>03 / Check current availability</strong><p>Follow the external library for published titles and chapter-level information.</p></article>
            <article className="editorial-list-item"><strong>04 / Return for updates</strong><p>Confirmed changes to this guide and NCU announcements will be collected on the news page.</p></article>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Beyond this world</p>
              <h2>Explore another<br />NCU universe.</h2>
            </div>
            <p>Every universe is a separate starting point. These suggestions do not imply a crossover or reading order.</p>
          </div>
          <div className="universe-grid">
            {universes.filter((item) => item.slug !== universe.slug).slice(0, 3).map((item) => (
              <UniverseCard key={item.slug} universe={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container">
          <div className="dark-callout">
            <div>
              <p className="eyebrow">Continue the story</p>
              <h2>See what is available to read.</h2>
              <p>NCU does not host comic chapters. Pylothouse has the current library and release destinations.</p>
            </div>
            <a className="button" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">Open Pylothouse <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: universes.map((universe) => ({ params: { slug: universe.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<UniversePageProps, { slug: string }> = async ({ params }) => {
  const universe = params?.slug ? getUniverse(params.slug) : undefined
  if (!universe) return { notFound: true }
  return { props: { universe } }
}
