/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Izinkan gambar dari Unsplash
  },
};

module.exports = withBundleAnalyzer(nextConfig);
