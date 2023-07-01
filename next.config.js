/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
