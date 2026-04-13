# Undead Invasion

基于 **Next.js（App Router）**、**TypeScript**、**Tailwind CSS** 与 **Shadcn UI** 的浏览器游戏门户骨架：首屏游戏区（iframe）、相关游戏网格占位、底部 SEO 正文区，以及 sitemap / robots / 结构化数据与可选 GA4、Clarity 注入。

## 开发

```bash
npm install
cp .env.example .env.local
# 编辑 .env.local：填入 NEXT_PUBLIC_GAME_IFRAME_URL、站点 URL、分析 ID、assetPrefix 等
npm run dev
```

## 约束与文档

- 产品与技术约束见仓库内 **`.cursor/rules/`**。
- 初始化阶段的设计与计划见 **`docs/superpowers/specs/`** 与 **`docs/superpowers/plans/`**。

## 构建

```bash
npm run build
npm run start
```

## 部署说明摘要

- 静态大资源请走 **R2/CDN**，通过 **`NEXT_PUBLIC_ASSET_PREFIX`** 与 `next.config.ts` 中的 `assetPrefix` 引用。
- **Cloudflare Pages** 需保留根目录 **`public/404.html`**，避免错误 URL 返回 200。
