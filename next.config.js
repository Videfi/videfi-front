/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      tls: false,
      net: false,
    };
    return config;
  },
};

module.exports = nextConfig;
