# Undead Invasion 游戏页 + SEO 正文 + UI 升级 — 实施计划

> **Goal:** 嵌入指定 iframe（4:3、完整 allow/title/lazy/touch-action）、SSR 英文正文 **≥800 词** 且 **H1–H3 结构符合** `.cursor/rules/game-portal-seo-technical.mdc`；首页 **dark** 视觉升级（血腥 13+ 提示、边框、加载动画）；**不提交 commit**。

**Architecture:** `app/page.tsx` 组装 Hero（H1）+ `GameContainer`（client）+ `RelatedGames` + `UndeadInvasionArticle`（server 长文）；`layout` 启用 `dark`；JSON-LD 增补 `contentRating`。

---

### Task 1: 文档与关键词

- [x] 编写 `docs/superpowers/specs/2026-04-14-undead-invasion-game-page-seo-ui.md`（标题树、排除 Evony 噪音）
- [x] 编写本 plan 文件

### Task 2: 依赖与 UI 基件

- [x] `npx shadcn@latest add progress`
- [x] `npx shadcn@latest add badge`

### Task 3: 游戏嵌入组件

- [x] 更新 `components/game-container/GameContainer.tsx`：默认 URL、4:3、用户给定 iframe 属性、渐变边框、阴影、`onLoad` 关闭遮罩、Progress +「树/种子」隐喻、`prefers-reduced-motion`

### Task 4: SEO 长文组件

- [x] 新增 `components/seo-content-area/UndeadInvasionArticle.tsx`：按 spec 的 H2/H3 撰写英文正文，**词数 ≥800**（不含 HTML 标签）
- [x] `SeoContentArea.tsx` 改为导出/渲染上述文章（或 `page` 直接引用）

### Task 5: 页面与全局样式

- [x] 更新 `app/page.tsx`：深色背景壳、13+ Badge、lucide 小图标提示行、`SoftwareApplicationJsonLd` 参数
- [x] 更新 `app/layout.tsx`：`html` 加 `dark`
- [x] 视需要微调 `app/globals.css`（keyframes 或安全动画）

### Task 6: 环境与相关游戏区

- [x] `.env.example` 写入默认 iframe URL 说明
- [x] `RelatedGames.tsx` 视觉与层级与 dark 主题一致（卡片标题不用多余 H3，避免打乱 FAQ 下 H3 序列）

### Task 7: 验证

- [x] `npm run build` && `npm run lint`
- [x] 本地脚本统计 `UndeadInvasionArticle` 英文词数 ≥800

---

## 自检

- 单一 H1；H2 后仅 H3 子节；无 Evony 混内容。
- iframe 首屏可见；`loading="lazy"` 按用户要求保留。
