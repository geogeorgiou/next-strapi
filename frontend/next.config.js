/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'el'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
