import type { CSSProperties } from 'react'
import type { Universe } from '@/data/universes'

interface UniverseArtworkProps {
  universe: Universe
  className?: string
}

export default function UniverseArtwork({ universe, className = '' }: UniverseArtworkProps) {
  const style = { '--universe-accent': universe.accent } as CSSProperties
  return (
    <div className={`universe-artwork ${className}`} style={style}>
      {universe.image ? (
        <img src={universe.image} alt={`${universe.title} universe artwork`} loading="lazy" decoding="async" />
      ) : (
        <div className="artwork-placeholder" aria-hidden="true">
          <span className="artwork-orbit" />
          <span className="artwork-wordmark">{universe.title}</span>
          <span className="artwork-caption">NCU STORY WORLD</span>
        </div>
      )}
      <span className="artwork-index" aria-hidden="true">{String(Number(universesIndex(universe.slug))).padStart(2, '0')}</span>
    </div>
  )
}

function universesIndex(slug: string): number {
  const order = ['lords-lounge', 'mod', 'natoverse', 'the-unliving-sage', 'false-magic', 'holo-host', 'royal-target']
  return order.indexOf(slug) + 1
}
