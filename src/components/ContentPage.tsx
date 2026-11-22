import Link from 'next/link'
import type { StaticPage } from '@/data/pages'
import Seo from '@/components/Seo'
import { NARTSTUDIO_URL } from '@/lib/site'

export default function ContentPage({ page }: { page: StaticPage }) {
  return (
    <>
      <Seo title={page.title} description={page.description} />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-lead">{page.description}</p>
        </div>
      </section>
      <div className="site-container content-page">
        {page.sections.map((section, index) => (
          <section className="content-block" key={section.heading}>
            <span className="content-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul className="content-list">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
        <div className="content-end-links">
          <Link className="button button-secondary" href="/universes">Browse universes</Link>
          {['contact', 'press', 'licensing'].includes(page.slug) ? (
            <a className="text-link" href={`${NARTSTUDIO_URL}/contact`} target="_blank" rel="noopener noreferrer">
              Contact Nartstudio <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link className="text-link" href="/contact">Contact the studio <span aria-hidden="true">↗</span></Link>
          )}
        </div>
      </div>
    </>
  )
}
