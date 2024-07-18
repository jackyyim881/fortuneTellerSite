import withBundleAnalyzer from "@next/bundle-analyzer";

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  compress: true,
  env: {
    API_KEY: process.env.API_URL,
    NEXT_ABLY_API_KEY: process.env.NEXT_ABLY_API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-.*",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
};

export default analyzer(nextConfig);
