import Link from 'next/link'
import Seo from '@/components/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The NCU page you are looking for could not be found." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">404 · Lost between worlds</p>
          <h1>This page<br />is not here.</h1>
          <p className="page-lead">The address may have changed, or the page may not be published yet.</p>
          <div className="hero-actions">
            <Link className="button" href="/">Return home</Link>
            <Link className="button button-secondary" href="/universes">Explore universes</Link>
          </div>
        </div>
      </section>
    </>
  )
}
