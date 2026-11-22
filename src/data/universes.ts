export interface UniverseFeature {
  title: string
  description: string
}

export interface Universe {
  slug: string
  title: string
  genre: string
  summary: string
  tagline: string
  accent: string
  image?: string
  features: UniverseFeature[]
}

export const universes: Universe[] = [
  {
    slug: 'lords-lounge',
    title: 'Lord’s Lounge',
    genre: 'Celestial comedy',
    summary: 'Gods, cosmic authority and the dysfunction of a divine court.',
    tagline: 'Where gods hold court and divinity becomes a punchline.',
    accent: '#55d27d',
    image: '/assets/universes/lords-lounge.webp',
    features: [
      { title: 'The Celestial Court', description: 'Heaven’s political machine runs on ego and bad decisions.' },
      { title: 'Divine Comedy', description: 'Omnipotence does not guarantee wisdom — just power.' },
      { title: 'The Lounge', description: 'A metaphysical waiting room between life and legend.' },
    ],
  },
  {
    slug: 'mod',
    title: 'M.O.D',
    genre: 'Cyberpunk drama',
    summary: 'A machine-shaped future, a human rebellion and the fight for agency.',
    tagline: 'Machine orchestrated. Human resisted. Neon dreamed.',
    accent: '#00e6c3',
    image: '/assets/universes/mod.webp',
    features: [
      { title: 'Digital Overlord', description: 'A central AI that does not just control systems — it controls reality.' },
      { title: 'Cyborg Rebellion', description: 'The line between freedom and augmentation is a battlefield.' },
      { title: 'Neon Nightmare', description: 'Where the physical and virtual fuse into something ungovernable.' },
    ],
  },
  {
    slug: 'natoverse',
    title: 'NATOVERSE',
    genre: 'Multiverse adventure',
    summary: 'Connected dimensions where different versions of a story collide.',
    tagline: 'Every dimension holds a version of the truth. Find yours.',
    accent: '#60a5fa',
    features: [
      { title: 'Dimensional Gates', description: 'Portals between realities — not all of them stable.' },
      { title: 'Animated Realms', description: 'Stories do not just unfold here. They become alive.' },
      { title: 'Mystery Zones', description: 'Strange phenomena that defy every law of physics.' },
    ],
  },
  {
    slug: 'the-unliving-sage',
    title: 'The Unliving Sage',
    genre: 'Dark fantasy',
    summary: 'Forbidden knowledge and the consequences of stepping beyond death.',
    tagline: 'The oldest magic carries a price no one survives paying twice.',
    accent: '#9acb42',
    image: '/assets/universes/the-unliving-sage.webp',
    features: [
      { title: 'Forbidden Scrolls', description: 'Knowledge encoded in languages that rewrite the reader.' },
      { title: 'Arcane Arts', description: 'Spellcasters who traded years for power — and paid.' },
      { title: 'Shadow Hunters', description: 'Those who fight darkness by becoming part of it.' },
    ],
  },
  {
    slug: 'false-magic',
    title: 'False Magic',
    genre: 'Illusion and action',
    summary: 'A world where deception is an art, a weapon and a way of life.',
    tagline: 'Every spell is a lie. Every truth is a trick. Trust nothing.',
    accent: '#ff4da6',
    features: [
      { title: 'Mirage Masters', description: 'Illusionists who have made deception an art form and a weapon.' },
      { title: 'False Prophets', description: 'Seers who see the future and rewrite it for profit.' },
      { title: 'Trickster Guild', description: 'Chaos embodied — with enough style to make it beautiful.' },
    ],
  },
  {
    slug: 'holo-host',
    title: 'Holo Host',
    genre: 'Kaiju science fiction',
    summary: 'Humanity faces colossal threats in a future built around survival.',
    tagline: 'Titans clash. Cities fall. Humanity adapts or disappears.',
    accent: '#ff784d',
    image: '/assets/universes/holo-host.webp',
    features: [
      { title: 'Kaiju Titans', description: 'Colossal beings whose footsteps rewrite geography.' },
      { title: 'Holo Defense', description: 'Light-based warriors — humanity’s last engineered miracle.' },
      { title: 'Neon Combat', description: 'Future warfare played out at gigantic, devastating scale.' },
    ],
  },
  {
    slug: 'royal-target',
    title: 'Royal Target',
    genre: 'Medieval fantasy',
    summary: 'A contested throne, shifting alliances and the cost of power.',
    tagline: 'Kingdoms built on bloodlines. Thrones built on betrayal.',
    accent: '#b59aff',
    image: '/assets/universes/royal-target.webp',
    features: [
      { title: 'Royal Decree', description: 'Kingdom politics where every alliance is a ticking countdown.' },
      { title: 'Noble Knights', description: 'Warriors bound to codes that the world keeps breaking.' },
      { title: 'Castle Sieges', description: 'Medieval warfare with stakes that rewrite entire bloodlines.' },
    ],
  },
]

export function getUniverse(slug: string): Universe | undefined {
  return universes.find((universe) => universe.slug === slug)
}
