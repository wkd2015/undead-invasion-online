import type { NextConfig } from "next";

const rawPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX?.trim();
const assetPrefix = rawPrefix ? rawPrefix.replace(/\/$/, "") : undefined;

const nextConfig: NextConfig = {
  assetPrefix: assetPrefix || undefined,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "undeadinvasiononline.com",
          },
        ],
        destination: "https://www.undeadinvasiononline.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
