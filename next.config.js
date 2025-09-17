/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
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
  // Optimize video loading
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Add video optimization headers
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
