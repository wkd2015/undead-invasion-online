import type { NextConfig } from "next";

const rawPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX?.trim();
const assetPrefix = rawPrefix ? rawPrefix.replace(/\/$/, "") : undefined;

const nextConfig: NextConfig = {
  assetPrefix: assetPrefix || undefined,
};

export default nextConfig;
