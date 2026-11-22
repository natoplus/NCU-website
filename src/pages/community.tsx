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
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Fan and community guidance</p>
          <h1>Make room<br />for every reader.</h1>
          <p className="page-lead">These guidelines are a starting point for respectful conversation and fan creativity around NCU stories.</p>
        </div>
      </section>
      <section className="section">
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
    </>
  )
}
