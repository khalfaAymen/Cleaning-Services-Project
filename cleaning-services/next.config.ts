import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables the experimental App Router (for /app directory usage)
  // experimental: {
  //   appDir: true,
  // },

  // Add any other necessary configurations here
  reactStrictMode: true,

  // Example for handling CSS modules (optional)
  webpack(config) {
    return config;
  },
};

export default nextConfig;
