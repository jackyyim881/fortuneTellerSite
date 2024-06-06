/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
