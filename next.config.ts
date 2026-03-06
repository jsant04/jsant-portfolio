import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
