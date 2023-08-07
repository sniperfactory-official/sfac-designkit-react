/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: ["firebasestorage.googleapis.com", "www.gravatar.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
