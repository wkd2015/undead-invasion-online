# Undead Invasion 游戏落地页 — SEO 标题结构与 UI 设计（脑暴纪要）

**日期：** 2026-04-14  
**主关键词（一页一词）：** **Undead Invasion**（品牌 + 游戏名；正文自然覆盖 *play online / free / unblocked / HTML5* 等次要短语，不另立 competing H1）。

## 1. Headings（H1–H6）树 — 符合技术 SEO 规则

规则对齐：全页 **唯一 H1**；**H2→H3** 顺序不跳级；H1 含核心词 *Undead Invasion*。

| 层级 | 标题文案（英文，与页面语言一致） | 意图 |
|------|-----------------------------------|------|
| **H1** | Undead Invasion — Play Free Online in Your Browser | 主关键词 + 价值主张 |
| **H2** | What Is Undead Invasion? | 定义与背景，建立相关性 |
| **H2** | Core Survival Loop: Waves, Coins, and Permadeath | 玩法总览 |
| **H3** | How coins and upgrades feed the next wave | 经济循环 |
| **H3** | Why no checkpoints changes your decisions | 风险与重开 |
| **H2** | How to Play Undead Invasion | How-to 聚合 |
| **H3** | Movement, spacing, and reading the lane | 走位 |
| **H3** | Shooting, reloads, melee, and grenades | 战斗输入 |
| **H2** | Weapons, Items, and Build Variety | 装备维度 |
| **H3** | Firearms, melee, and tactical tools | 分类说明 |
| **H2** | Defenses: Barricades, Traps, and Placement | 塔防式要素 |
| **H3** | Choke points, repairs, and kicks for breathing room | 进阶防守 |
| **H2** | Survival Tactics for Longer Runs | 策略汇总 |
| **H2** | HTML5, Unblocked Access, and Browser Play | 分发与可访问性 |
| **H2** | Practice Without Pressure (Playground Mode) | 练习模式（来源一致时写入） |
| **H2** | Age and Content Advisory (Teen+ / Gory Effects) | 合规与期望管理 |
| **H2** | Frequently Asked Questions | FAQ 区块 |
| **H3** | Is Undead Invasion free in the browser? | FAQ 条目 |
| **H3** | Do I need to install a plugin? | FAQ 条目 |
| **H3** | What happens when I die in a run? | FAQ 条目 |

**排除内容：** `undead_invasion_raw.md` 末尾与 **Evony** 活动相关的「20 waves / Keep」描述与本 HTML5 产品不一致，**不写入**正文以免事实错误与 SEO 风险。

## 2. 正文规模

- 英文正文总长 **≥ 800 words**（满足本次需求；仍保留列表/短段 + 图标提示以改善可读性，主体为段落叙述以保 SSR 收录质量）。

## 3. iframe 与布局

- **URL：** `https://gamea.azgame.io/undead-invasion/`（可用 `NEXT_PUBLIC_GAME_IFRAME_URL` 覆盖）。
- **比例：** 容器 **4:3**（`aspect-[4/3]`），在 max-width 内等比放大。
- **属性：** `title="Undead Invasion"`、`allowFullScreen`、`allow="fullscreen; autoplay; gamepad"`、`loading="lazy"`（用户指定）、`touch-action: manipulation`（Tailwind `touch-manipulation`）。

## 4. UI（ui-ux-pro-max 检索结论 + 项目约束）

- **检索：** gaming landing + dark horror palette → 深色底 `#0F0F23` / 文本浅灰、强调色 **玫瑰红 `#F43F5E` 或紫 `#7C3AED`** 作 CTA/危险提示；**Exaggerated minimalism** → 大号标题、留白、强对比。
- **氛围：** 13+、血腥提示 → **默认 `dark` 主题**、细边框/渐变描边、**iframe 外框 + 阴影**；**加载态**：进度条 +「种子→树」隐喻（短周期动画，`prefers-reduced-motion` 时弱化或跳过）。
- **可访问性：** 图标配合文本（非纯图标传达关键信息）；可点击区域保持足够触控尺寸。

## 5. 实施计划文档

见 `docs/superpowers/plans/2026-04-14-undead-invasion-game-page.md`。

**说明：** 按你的要求 **暂不提交 commit**；本 spec 与 plan 仅落盘于 `docs/`。
