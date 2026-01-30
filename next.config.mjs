/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Next 16+ automatically minifies JS, so `swcMinify` is no longer needed
  productionBrowserSourceMaps: true, // generate source maps for debugging

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // remove console logs in prod
  },

  experimental: {
    optimizeCss: true, // CSS optimization
  },

  // Optional: ensure browserslist targets modern browsers only
  // You can add a `browserslist` key in package.json if needed
};

export default nextConfig;
