/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        // port: '',
        pathname: '/avatar/**',
      },
    ],
  },
}

module.exports = nextConfig
