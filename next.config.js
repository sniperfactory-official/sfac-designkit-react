/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: ["firebasestorage.googleapis.com", "www.gravatar.com"],
  },
};

module.exports = nextConfig;
