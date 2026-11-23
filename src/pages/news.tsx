import Link from 'next/link'
import Seo from '@/components/Seo'
import UniverseCard from '@/components/UniverseCard'
import { universes } from '@/data/universes'

export default function NewsPage() {
  return (
    <>
      <Seo title="News" description="Official news and announcements from the Nartstudio Comic Universe." />
      <section className="page-hero editorial-page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">News and releases</p>
          <h1>Signal from<br />the worlds.</h1>
          <p className="page-lead">Official NCU announcements will appear here. Release dates are shared only when confirmed.</p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="feature-grid">
            <article className="feature-card"><span className="card-index">01 / RELEASES</span><h3>Confirmed comic updates.</h3><p>Links and release notes will be posted here when they are approved for announcement.</p></article>
            <article className="feature-card"><span className="card-index">02 / UNIVERSE GUIDE</span><h3>New world information.</h3><p>Updates to universe introductions, official artwork and reader resources will be collected here.</p></article>
            <article className="feature-card"><span className="card-index">03 / STUDIO NOTES</span><h3>News from the creative family.</h3><p>Relevant NCU news will be separated from general Nartstudio and Oubyt updates.</p></article>
          </div>
          <div className="empty-state">
            <p className="eyebrow">No announcements yet</p>
            <h2>The next update is still being prepared.</h2>
            <p>Explore the current universe guides or sign up for email updates when the newsletter service is connected.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="button" href="/universes">Explore universes</Link>
              <Link className="button button-secondary" href="/newsletter">Get updates</Link>
            </div>
          </div>
          <p className="notice-strip" style={{ marginTop: 25 }}>No release dates or publication schedule are being announced on this page until they are confirmed.</p>
        </div>
      </section>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Between announcements</p>
              <h2>There is still a world<br />to explore.</h2>
            </div>
            <p>While the news feed is quiet, the universe directory remains the best place to get oriented.</p>
          </div>
          <div className="universe-grid">
            {universes.slice(0, 3).map((universe) => <UniverseCard key={universe.slug} universe={universe} />)}
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="editorial-cta">
            <div>
              <p className="eyebrow">Verified information only</p>
              <h2>Follow updates when they are confirmed.</h2>
            </div>
            <Link className="button" href="/newsletter">Request NCU updates <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
