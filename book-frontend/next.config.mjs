/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "book-29ut9zd7c8yip54s2lbc.s3.eu-central-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

// eslint-disable-next-line import/no-default-export
export default nextConfig;
