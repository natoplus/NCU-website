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
      <section className="section">
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
      <section className="section section-border">
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
      <section className="section section-border">
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
