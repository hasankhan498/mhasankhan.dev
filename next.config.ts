import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Adjust the size limit as needed (e.g., '5mb', '10mb', '50mb')
    },
  },
};

export default nextConfig;
