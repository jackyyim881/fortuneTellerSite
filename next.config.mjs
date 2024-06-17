/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["images.unsplash.com", "img.clerk.com"],
  },
  reactStrictMode: true,
};

export default nextConfig;
