/**
 * 游戏落地页底部 SEO 正文区占位。
 * 正式上线前：按「一页一词」替换 H2 与正文，并扩展至约 600–800 英文词，含 How to play、FAQ、评论区等模块。
 */
export function SeoContentArea() {
  return (
    <section
      className="max-w-none space-y-4 border-t pt-10 text-sm leading-relaxed text-muted-foreground"
      aria-labelledby="seo-content-heading"
    >
      <h2 id="seo-content-heading" className="text-2xl font-semibold text-foreground">
        About this game
      </h2>
      <p>
        This section will hold the primary long-form description for search engines
        and players: gameplay summary, tips, frequently asked questions, and
        moderated community notes. Replace this placeholder with original copy
        aligned to your target keyword before launch.
      </p>
    </section>
  );
}
