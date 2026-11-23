import Link from 'next/link'
import Seo from '@/components/Seo'

const guidelines = [
  ['Respect people', 'Discuss the work without harassment, hate speech, threats or personal attacks.'],
  ['Mark story spoilers', 'Give readers room to catch up. Use clear warnings when discussing plot details beyond the published introduction.'],
  ['Credit creators', 'When sharing approved NCU material, preserve its context and credit the original rights-holder.'],
  ['Ask before reposting', 'Do not re-upload comic pages, artwork or other protected material without permission.'],
  ['Keep feedback constructive', 'Criticism is welcome when it stays specific, relevant and respectful.'],
  ['Protect private information', 'Do not share another person’s personal information or private messages.'],
]

export default function CommunityPage() {
  return (
    <>
      <Seo title="Community guidelines" description="Respectful fan and community guidance for NCU story worlds." />
      <section className="page-hero editorial-page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Fan and community guidance</p>
          <h1>Make room<br />for every reader.</h1>
          <p className="page-lead">These guidelines are a starting point for respectful conversation and fan creativity around NCU stories.</p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="feature-grid">
            {guidelines.map(([title, description], index) => (
              <article className="feature-card" key={title}>
                <span className="card-index">{String(index + 1).padStart(2, '0')} / COMMUNITY</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="notice-strip" style={{ marginTop: 24 }}>No official NCU Discord or community forum is linked from this site yet. Platform-specific rules will be published if an official space launches.</p>
          <div className="content-end-links">
            <Link className="text-link" href="/legal/copyright">Read copyright guidance <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Ask Nartstudio <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-section-alt">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Fan creativity</p>
              <h2>Celebrate the worlds.<br />Respect the work.</h2>
            </div>
            <p>These notes apply to fan discussion and creation; they do not grant rights to reproduce or commercialize NCU material.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><span className="card-index">FAN ART &amp; FICTION</span><h3>Make it clearly yours.</h3><p>Label fan-created work as unofficial, credit the inspiration where appropriate and do not present it as an official NCU release.</p></article>
            <article className="feature-card"><span className="card-index">SPOILERS</span><h3>Give readers a choice.</h3><p>Use a clear warning before discussing details beyond a published introduction or chapter.</p></article>
            <article className="feature-card"><span className="card-index">OFFICIAL SPACES</span><h3>Follow verified links.</h3><p>Only trust community channels linked directly by Nartstudio. No NCU forum or Discord invite is published here.</p></article>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A useful starting point</p>
              <h2>Keep the conversation<br />welcoming and clear.</h2>
            </div>
            <p>Use published guidance for story questions, permissions, spoilers and finding official destinations.</p>
          </div>
          <div className="editorial-list">
            <article className="editorial-list-item"><strong>Ask a reader question</strong><p>For comic access and chapter support, use Pylothouse’s own support channels.</p><Link className="text-link" href="/faq">Read the FAQ <span aria-hidden="true">↗</span></Link></article>
            <article className="editorial-list-item"><strong>Discuss a release</strong><p>Identify the title or chapter and mark plot details so other readers can choose whether to continue.</p><Link className="text-link" href="/reading-order">Reader guidance <span aria-hidden="true">↗</span></Link></article>
            <article className="editorial-list-item"><strong>Request permission</strong><p>Contact the studio before reproducing, adapting or commercially using NCU material.</p><Link className="text-link" href="/licensing">Rights and licensing <span aria-hidden="true">↗</span></Link></article>
            <article className="editorial-list-item"><strong>Find official channels</strong><p>Use links published by Nartstudio; no independent NCU forum or Discord is listed here.</p><Link className="text-link" href="/contact">Contact Nartstudio <span aria-hidden="true">↗</span></Link></article>
          </div>
        </div>
      </section>
    </>
  )
}
