import type { AppProps } from 'next/app'
import PageScrollReveal from '@/components/PageScrollReveal'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageScrollReveal />
      <SiteHeader />
      <main id="main-content"><Component {...pageProps} /></main>
      <SiteFooter />
    </>
  )
}
