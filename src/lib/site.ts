const configuredSiteUrl = process.env.NEXT_PUBLIC_NCU_SITE_URL?.trim()

if (configuredSiteUrl) {
  const parsedSiteUrl = new URL(configuredSiteUrl)
  const isLocalDevelopment = ['localhost', '127.0.0.1'].includes(parsedSiteUrl.hostname)
  if (parsedSiteUrl.protocol !== 'https:' && !(parsedSiteUrl.protocol === 'http:' && isLocalDevelopment)) {
    throw new Error('NEXT_PUBLIC_NCU_SITE_URL must use HTTPS except for localhost.')
  }
}

export const SITE_URL = configuredSiteUrl ? new URL(configuredSiteUrl).origin : ''
export const NARTSTUDIO_URL = 'https://nartstudio.vercel.app'
export const OUBYT_URL = 'https://oubyt.vercel.app'
export const PYLOTHOUSE_URL = 'https://pylothouse.vercel.app'
export const PYLOTHOUSE_COMICS_URL = `${PYLOTHOUSE_URL}/comics`
export const SITE_NAME = 'NCU'
export const SITE_DESCRIPTION =
  'Explore Nartstudio’s original comic universes, meet their worlds, and find available comics on Pylothouse.'
