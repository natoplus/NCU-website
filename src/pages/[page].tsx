import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import ContentPage from '@/components/ContentPage'
import { getStaticPage, staticPages, type StaticPage } from '@/data/pages'

interface PageProps {
  page: StaticPage
}

export default function InformationalPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ContentPage page={page} />
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: staticPages.map((page) => ({ params: { page: page.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<PageProps, { page: string }> = async ({ params }) => {
  const page = params?.page ? getStaticPage(params.page) : undefined
  if (!page) return { notFound: true }
  return { props: { page } }
}
