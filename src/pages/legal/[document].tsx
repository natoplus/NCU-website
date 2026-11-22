import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Seo from '@/components/Seo'

interface LegalDocument {
  slug: string
  title: string
  description: string
  sections: { heading: string; paragraphs: string[] }[]
}

const documents: LegalDocument[] = [
  {
    slug: 'privacy',
    title: 'Privacy notice',
    description: 'How this NCU website handles information submitted through its optional newsletter form.',
    sections: [
      { heading: 'Browsing this site', paragraphs: ['This site has no visitor accounts and does not embed comic chapters. No analytics provider is configured, and the site does not load optional analytics by default.'] },
      { heading: 'Newsletter requests', paragraphs: ['If the newsletter service is configured, submitting the signup form sends the email address, consent state and submission time to the endpoint configured by Nartstudio. Do not send sensitive or confidential information through this form. If delivery is not configured, the site reports that signup is unavailable.'] },
      { heading: 'Before launch', paragraphs: ['The operator must identify the mailing-list provider, retention period, responsible legal entity and privacy contact before enabling signups. This draft should be reviewed for the final domain and applicable jurisdiction.'] },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of use',
    description: 'Draft terms for using the NCU universe guide and its links to external reading destinations.',
    sections: [
      { heading: 'Using the guide', paragraphs: ['This site provides informational introductions to NCU story worlds. Comics are hosted on Pylothouse, which has its own terms and reader services.'] },
      { heading: 'External services', paragraphs: ['Links to Pylothouse and other Nartstudio family sites open services operated separately from this NCU website. Their own terms and privacy notices apply there.'] },
      { heading: 'Review before launch', paragraphs: ['These draft terms are not a substitute for review by the rights-holder and a qualified legal adviser. Confirm the operating entity, governing law and final domain before publication.'] },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie and storage notice',
    description: 'Current use of cookies, local storage and optional analytics on the NCU website.',
    sections: [
      { heading: 'Current site behavior', paragraphs: ['The current NCU site does not use a visitor login, analytics provider or non-essential cookie banner. No optional analytics scripts are loaded.'] },
      { heading: 'Newsletter', paragraphs: ['If newsletter signup is enabled, the submitted email and consent will be sent to the configured delivery provider. That provider’s storage and cookie practices must be reviewed before launch.'] },
      { heading: 'Future changes', paragraphs: ['If optional analytics or other non-essential storage is added, the site must provide an appropriate consent flow and update this notice before those tools are enabled.'] },
    ],
  },
  {
    slug: 'copyright',
    title: 'Copyright and fan use',
    description: 'Guidance on NCU story material, artwork, fan creativity and permission requests.',
    sections: [
      { heading: 'Respect the source material', paragraphs: ['Do not copy, repost or redistribute comic pages, artwork or other NCU story material without permission from the relevant rights-holder. Linking to the official reading destination is encouraged.'] },
      { heading: 'Fan creations', paragraphs: ['Fan discussion and original fan creations should be clearly identified as unofficial and must not imply endorsement. Do not use NCU material in a way that is unlawful, deceptive or harmful.'] },
      { heading: 'Ask about permission', paragraphs: ['For licensing, adaptation or other rights questions, contact Nartstudio. No permission or license is granted merely by viewing or linking to this site.'] },
    ],
  },
]

interface LegalPageProps {
  document: LegalDocument
}

export default function LegalPage({ document: legalDocument }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title={legalDocument.title} description={legalDocument.description} />
      <section className="page-hero">
        <div className="site-container page-hero-inner">
          <p className="eyebrow">Legal information · Draft for review</p>
          <h1>{legalDocument.title}</h1>
          <p className="page-lead">{legalDocument.description}</p>
        </div>
      </section>
      <div className="site-container legal-page">
        <p className="notice-strip">This is draft site guidance, not legal advice. Review it with the responsible rights-holder and legal adviser before public launch.</p>
        {legalDocument.sections.map((section, index) => (
          <section className="content-block legal-section" key={section.heading}>
            <span className="content-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <div className="content-end-links">
          <Link className="text-link" href="/community">Community guidelines <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/contact">Contact Nartstudio <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: documents.map((document) => ({ params: { document: document.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<LegalPageProps, { document: string }> = async ({ params }) => {
  const document = documents.find((item) => item.slug === params?.document)
  if (!document) return { notFound: true }
  return { props: { document } }
}
