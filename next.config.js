/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'images.expedia.com',
      'cf.bstatic.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
