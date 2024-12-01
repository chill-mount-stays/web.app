import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tamilnadutourism.tn.gov.in",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
