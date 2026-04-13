<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 本项目（Undead Invasion）

- **约束来源：** `.cursor/rules/*.mdc`（游戏门户哲学、SEO、性能、布局、安全、技术栈与命名、Git 提交语言等）。修改行为前请先阅读对应规则。
- **Git 提交语言：** 全仓库提交说明须使用**中文**，详见 `.cursor/rules/git-commit-chinese.mdc`（类型前缀可用 `feat`/`fix` 等英文缩写，描述主体用中文）。
- **环境变量模板：** `.env.example` — 将复制为 `.env.local` 并填入 iframe、分析 ID、站点 URL、R2/CDN 前缀等；勿把真实密钥提交进仓库。
