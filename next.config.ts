import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/aeroblade-hyper",
  images: { unoptimized: true },
};

export default nextConfig;
