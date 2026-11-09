import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 80, 82, 88],
  },
};

export default nextConfig;
