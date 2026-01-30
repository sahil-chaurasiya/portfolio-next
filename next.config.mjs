/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // minify JS
  productionBrowserSourceMaps: true, // generate source maps for debugging
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // remove console logs in prod
  },
  experimental: {
    optimizeCss: true, // Next 16+ CSS optimization
  },
  // Optional: ensure browserslist targets modern browsers only
}

export default nextConfig;
