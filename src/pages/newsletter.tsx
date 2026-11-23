import NewsletterForm from '@/components/NewsletterForm'
import Seo from '@/components/Seo'

export default function NewsletterPage() {
  return (
    <>
      <Seo title="NCU updates" description="Request occasional NCU story and release updates by email." />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">NCU dispatch</p>
          <h1>Stay close<br />to the story.</h1>
          <p className="page-lead">Request occasional NCU story and release updates. Your email is sent only after you submit the form and confirm consent.</p>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="newsletter-grid">
            <div>
              <h2>Updates, when they are ready.</h2>
              <p>Newsletter delivery is not active until the mailing-list webhook is configured and tested. If it is unavailable, the form will tell you directly rather than pretending to subscribe you.</p>
              <p><a className="text-link" href="/legal/privacy">Read the privacy notice <span aria-hidden="true">↗</span></a></p>
            </div>
            <NewsletterForm />
          </div>
          <div className="feature-grid" style={{ marginTop: 44 }}>
            <article className="feature-card"><span className="card-index">WHAT TO EXPECT</span><h3>Confirmed NCU news.</h3><p>Updates may include official universe-guide changes and announcements when they are ready.</p></article>
            <article className="feature-card"><span className="card-index">NO RELEASE PROMISES</span><h3>Only approved details.</h3><p>No unpublished dates, chapter plans or production claims will be sent as confirmed information.</p></article>
            <article className="feature-card"><span className="card-index">YOUR EMAIL</span><h3>Sent only on signup.</h3><p>The form requests only an email address and consent, and submits only after you choose to send it.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}
