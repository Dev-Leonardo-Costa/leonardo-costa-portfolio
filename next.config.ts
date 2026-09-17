import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-leonardo",
  assetPrefix: "/portfolio-leonardo",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;