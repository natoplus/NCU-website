import Link from 'next/link'
import type { CSSProperties } from 'react'
import type { Universe } from '@/data/universes'
import UniverseArtwork from '@/components/UniverseArtwork'

export default function UniverseCard({ universe }: { universe: Universe }) {
  return (
    <article className="universe-card" style={{ '--universe-accent': universe.accent } as CSSProperties}>
      <Link href={`/universes/${universe.slug}`} className="universe-card-link">
        <UniverseArtwork universe={universe} />
        <div className="universe-card-copy">
          <span className="eyebrow">{universe.genre}</span>
          <h3>{universe.title}</h3>
          <p>{universe.summary}</p>
          <span className="text-link">Explore world <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  )
}
