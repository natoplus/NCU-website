/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: '/universes/natoversse',
        destination: '/universes/natoverse',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
