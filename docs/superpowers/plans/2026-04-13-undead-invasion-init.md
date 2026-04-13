# Undead Invasion 初始化实施计划

> **For agentic workers:** 本计划对应一次性初始化；后续功能请另开计划。

**Goal:** 按 `.cursor/rules` 与项目哲学，完成可构建、可部署的 Next.js 门户骨架（无业务密钥、无真实游戏 URL）。

**Architecture:** App Router 单应用；Shadcn + Tailwind v4；环境变量驱动 CDN 前缀与分析脚本；Metadata API + 动态 OG 图 + JSON-LD。

**Tech Stack:** Next.js 16、React 19、TypeScript、Tailwind CSS 4、shadcn/ui（Radix）。

---

### Task 1: UI 基座

**Files:**

- 运行：`npx shadcn@latest init -d --base radix -f`
- 运行：`npx shadcn@latest add card -y`
- 修改：`app/globals.css`（修复 `--font-sans` 与 Geist 变量衔接）

- [x] 完成 Shadcn 初始化并校验 `components.json`、`lib/utils.ts`

### Task 2: 站点配置与构建配置

**Files:**

- 创建：`lib/site.ts`
- 修改：`next.config.ts`（`assetPrefix`）
- 创建：`.env.example`
- 修改：`.gitignore`（`!.env.example`，移除忽略 `next-env.d.ts`）

- [x] `getSiteUrl()` 在本地与 Vercel 下均返回合理绝对 URL

### Task 3: 页面与 SEO

**Files:**

- 修改：`app/layout.tsx`（metadata、Analytics）
- 修改：`app/page.tsx`（H1 + 三块布局 + JSON-LD）
- 创建：`app/opengraph-image.tsx`
- 创建：`app/sitemap.ts`、`app/robots.ts`
- 创建：`components/seo/SoftwareApplicationJsonLd.tsx`

- [x] Title 约 50 字符、Description 约 150–160 字符、canonical / OG / Twitter 一致

### Task 4: 门户组件与容错

**Files:**

- 创建：`components/game-container/GameContainer.tsx`
- 创建：`components/related-games/RelatedGames.tsx`
- 创建：`components/seo-content-area/SeoContentArea.tsx`
- 创建：`components/analytics/ConditionalAnalytics.tsx`
- 创建：`app/error.tsx`、`app/global-error.tsx`、`app/not-found.tsx`
- 创建：`public/404.html`

- [x] 首屏结构就绪；无 iframe URL 时有明确占位

### Task 5: 验证与 Git

- [x] 运行：`cd undead-invasion && npm run build`
- [x] 运行：`npm run lint`（如有问题修复）
- [x] `git init`，首条提交说明使用**中文**（见 `.cursor/rules/git-commit-chinese.mdc`）

---

## 自检

- Spec 覆盖：技术栈、SEO 元信息、布局三块、R2/assetPrefix、404、sitemap、错误边界、分析脚本惰性加载 — 均已映射到任务。
- 无占位符式「稍后实现」步骤；密钥与 iframe 由 `.env.example` 注释说明即可。
