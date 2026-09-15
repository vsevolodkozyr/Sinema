import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
        condition: {
          path: "**/public/icons/**",
        },
      },
    },
  },
};

export default nextConfig;
