const withPlugins = require('next-compose-plugins');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public',
    runtimeCaching,
  },

  //target: 'serverless',
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    deviceSizes: [640, 768, 1024, 1280, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    domains: [],
    path: '/_next/image',
    loader: 'default'
  },

  async redirects() {
    return [
      {
        source: '/writing-clean-code',
        destination: '/blog/writing-clean-code',
        permanent: true
      },
      {
        source: '/why-coding-conventions-matter',
        destination: '/blog/why-coding-conventions-matter',
        permanent: true
      }
    ]
  },
};

module.exports = withPlugins([withPWA], nextConfig);