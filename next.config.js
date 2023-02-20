/** @type {import('next').NextConfig} */
const nextConfig = {
  
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["acnhcdn.com"]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
