/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
      {
        protocol: 'https',
        hostname: 'tiktok.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.instagram.com',
      },
    ],
  },
}

module.exports = nextConfig
