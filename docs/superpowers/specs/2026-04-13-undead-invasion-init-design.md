# Undead Invasion 项目初始化 — 设计说明

**日期：** 2026-04-13  
**范围：** 仅工程与页面骨架初始化；不含真实 iframe 链接、关键词矩阵、GA4 / Clarity / Vercel 密钥。

## 目标

- 固定技术栈：**Next.js App Router**、**TypeScript**、**Tailwind CSS**、**Shadcn UI**（Radix）。
- 对齐 `.cursor/rules`：英文根路径、首屏游戏区 + 相关游戏 + SEO 正文信息架构、`assetPrefix` 支持 R2/CDN、Cloudflare Pages `public/404.html`、可复现 `sitemap.xml`、全局与路由级错误边界、Metadata（TDK / canonical / OG / Twitter）、服务端可见 JSON-LD（SoftwareApplication）。
- 第三方脚本（GA4、Clarity）**仅**在对应 `NEXT_PUBLIC_*` 有值时注入，避免空密钥占位请求。

## 方案取舍

| 方案 | 优点 | 缺点 |
|------|------|------|
| A. 在现有 CNA 模板上增量补齐 | 改动面小、与当前依赖一致 | 需手工对齐规则较多 |
| B. 重新 create-next-app | 模板较新 | 已有 `.cursor` 与依赖，迁移成本高 |
| C.  monorepo 拆分 packages | 长期可扩展 | 远超「仅初始化」范围 |

**结论：** 采用 **A**，在现有仓库上安装 Shadcn、补全配置与占位组件。

## 架构要点

- **`lib/site.ts`**：解析 `NEXT_PUBLIC_SITE_URL` / `VERCEL_URL`，供 metadata、sitemap、robots、JSON-LD 使用。
- **`next.config.ts`**：`NEXT_PUBLIC_ASSET_PREFIX` → `assetPrefix`。
- **首页三块组件**：`game-container`、`related-games`、`seo-content-area`（目录 kebab-case，文件 PascalCase）。
- **分析与监控**：`ConditionalAnalytics`（client）按需注入脚本。
- **错误处理**：`app/error.tsx`、`app/global-error.tsx`、`app/not-found.tsx`。

## 后续由你提供

- `NEXT_PUBLIC_GAME_IFRAME_URL`、主关键词与长尾词、`.env.local` 中的 GA4 / Clarity、生产 `NEXT_PUBLIC_SITE_URL` 与 R2 `NEXT_PUBLIC_ASSET_PREFIX` 等。

本说明经脑暴流程收敛；实施步骤见同目录上级 `plans` 文档。
