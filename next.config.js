/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['instagram.com', 'tiktok.com', 'cdn.instagram.com'],
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig