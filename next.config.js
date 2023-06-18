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
  images: {
    loader: "akamai",
    path: "",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
      },
      {
        protocol: "https",
        hostname: "zipmex.com",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
