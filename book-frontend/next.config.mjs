/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.S3_URL,
        protocol: "https",
      },
    ],
  },
};

// eslint-disable-next-line import/no-default-export
export default nextConfig;
