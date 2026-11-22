import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NARTSTUDIO_URL, OUBYT_URL, PYLOTHOUSE_COMICS_URL, PYLOTHOUSE_URL } from '@/lib/site'

const navigation = [
  { label: 'Start here', href: '/start-here' },
  { label: 'Universes', href: '/universes' },
  { label: 'Characters', href: '/characters' },
  { label: 'Reading order', href: '/reading-order' },
  { label: 'News', href: '/news' },
  { label: 'Community', href: '/community' },
]

function BrandSwitcher() {
  return (
    <nav className="brand-switcher" aria-label="Nartstudio family">
      <a href={NARTSTUDIO_URL} target="_blank" rel="noopener noreferrer">Nartstudio</a>
      <span aria-current="page">NCU</span>
      <a href={OUBYT_URL} target="_blank" rel="noopener noreferrer">Oubyt</a>
      <a href={PYLOTHOUSE_URL} target="_blank" rel="noopener noreferrer">Pylothouse</a>
    </nav>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const updateCompact = () => setCompact(window.scrollY > 24)
    updateCompact()
    window.addEventListener('scroll', updateCompact, { passive: true })
    return () => window.removeEventListener('scroll', updateCompact)
  }, [])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    router.events.on('routeChangeStart', closeMenu)
    return () => router.events.off('routeChangeStart', closeMenu)
  }, [router.events])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header${compact ? ' site-header-compact' : ''}`}>
        <BrandSwitcher />
        <div className="header-inner site-container">
          <Link className="site-logo" href="/" aria-label="NCU home">
            <img src="/assets/brand/ncu-logo.webp" alt="" width="90" height="52" />
            <span>NARTSTUDIO<br />COMIC UNIVERSE</span>
          </Link>
          <div className="header-tools">
            <Link className="button button-small read-cta" href="/search">
              <span className="read-cta-wide">Explore NCU</span>
              <span className="read-cta-compact">Explore</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <button
              className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                aria-current={router.pathname === item.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a className="button button-small button-outline nav-reader" href={PYLOTHOUSE_COMICS_URL} target="_blank" rel="noopener noreferrer">
              Read on Pylothouse <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-brand">
          <Link className="footer-mark" href="/" aria-label="NCU home">
            <img src="/assets/brand/ncu-logo.webp" alt="" width="180" height="102" />
          </Link>
          <p>Original comic worlds from Nartstudio. Discover the stories here; read available comics on Pylothouse.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/universes">All universes</Link>
          <Link href="/start-here">Start here</Link>
          <Link href="/characters">Characters</Link>
          <Link href="/reading-order">Reading order</Link>
          <Link href="/news">News</Link>
        </div>
        <div className="footer-column">
          <h2>The family</h2>
          <a href={NARTSTUDIO_URL} target="_blank" rel="noopener noreferrer">Nartstudio</a>
          <span aria-current="page">NCU</span>
          <a href={OUBYT_URL} target="_blank" rel="noopener noreferrer">Oubyt</a>
          <a href={PYLOTHOUSE_URL} target="_blank" rel="noopener noreferrer">Pylothouse</a>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Community &amp; rights</h2>
          <Link href="/community">Fan guidelines</Link>
          <Link href="/licensing">Licensing</Link>
          <Link href="/press">Press</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/legal/cookies">Cookies</Link>
          <Link href="/legal/copyright">Copyright</Link>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} NCU · A Nartstudio property</span>
        <Link href="/newsletter">Get NCU updates</Link>
      </div>
    </footer>
  )
}
