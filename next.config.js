/** @type {import('next').NextConfig} */

const nextConfig = {
  // Removing 'export' output which causes issues with dev server
  // output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    // appDir is no longer needed as it's the default in Next.js 14+
  },
};

module.exports = nextConfig;
