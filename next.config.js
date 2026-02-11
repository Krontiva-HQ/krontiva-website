/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api-server.krontiva.africa'],
  },
  turbopack: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig; 