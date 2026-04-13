import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * 相关游戏网格占位；接入真实数据后替换为卡片链接列表。
 */
export function RelatedGames() {
  return (
    <section className="space-y-4" aria-labelledby="related-games-heading">
      <h2 id="related-games-heading" className="text-lg font-semibold tracking-tight">
        Related games
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-dashed">
            <CardHeader>
              <CardTitle className="text-base">Coming soon</CardTitle>
              <CardDescription>Related game cards will appear here.</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
