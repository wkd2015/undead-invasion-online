/**
 * 站点绝对 URL（canonical、sitemap、OG、JSON-LD）。
 * 解析顺序：
 *   1. NEXT_PUBLIC_SITE_URL（显式配置，优先级最高）
 *   2. Vercel 自动注入的 VERCEL_URL（仅预览部署会用到）
 *   3. 生产默认：https://undeadinvasiononline.com
 *   4. 本地开发：http://localhost:3000
 *
 * 生产域名统一为无 www 形态，避免 Google 将 www / 非 www 识别为两个站点而产生索引冲突。
 */
const PRODUCTION_SITE_URL = "https://undeadinvasiononline.com";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }
  return "http://localhost:3000";
}

export const PRODUCTION_ORIGIN = PRODUCTION_SITE_URL;
