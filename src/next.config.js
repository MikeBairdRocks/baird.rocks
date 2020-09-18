const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },

  target: 'serverless',
  reactStrictMode: true,
  trailingSlash: true,

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

module.exports = withPWA(nextConfig);