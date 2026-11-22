import Link from 'next/link'
import Seo from '@/components/Seo'

export default function NewsPage() {
  return (
    <>
      <Seo title="News" description="Official news and announcements from the Nartstudio Comic Universe." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">News and releases</p>
          <h1>Signal from<br />the worlds.</h1>
          <p className="page-lead">Official NCU announcements will appear here. Release dates are shared only when confirmed.</p>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="empty-state">
            <p className="eyebrow">No announcements yet</p>
            <h2>The next update is still being prepared.</h2>
            <p>Explore the current universe guides or sign up for email updates when the newsletter service is connected.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="button" href="/universes">Explore universes</Link>
              <Link className="button button-secondary" href="/newsletter">Get updates</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
