import Head from 'next/head'
import { useRouter } from 'next/router'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

interface SeoProps {
  title: string
  description?: string
  image?: string
}

export default function Seo({ title, description = SITE_DESCRIPTION, image = '/assets/brand/ncu-logo.webp' }: SeoProps) {
  const router = useRouter()
  const path = router.asPath.split(/[?#]/, 1)[0] || '/'
  const canonical = SITE_URL ? new URL(path, SITE_URL).toString() : undefined
  const imageUrl = SITE_URL ? new URL(image, SITE_URL).toString() : image
  const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | NCU`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#0b0b0f" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Head>
  )
}
