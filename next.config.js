/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'better.com'],
  },
  // Enable static exports for the `next export` command
  output: 'standalone',
};

module.exports = nextConfig;
