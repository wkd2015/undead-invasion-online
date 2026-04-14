import { Gamepad2 } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * 相关游戏网格占位；与深色游戏页视觉一致。
 */
export function RelatedGames() {
  return (
    <section
      className="space-y-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 shadow-inner"
      aria-labelledby="related-games-heading"
    >
      <div className="flex items-center gap-2">
        <Gamepad2 className="size-5 text-violet-300" aria-hidden />
        <h2 id="related-games-heading" className="text-lg font-semibold tracking-tight text-zinc-50">
          Related games
        </h2>
      </div>
      <p className="text-sm text-zinc-400">
        Curated picks in the same lane will appear here to keep players exploring without leaving the
        survival-shooter mood.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="border-dashed border-zinc-700/80 bg-zinc-900/40 text-zinc-200 shadow-none transition-colors hover:border-rose-500/40 hover:bg-zinc-900/70"
          >
            <CardHeader className="gap-2">
              <CardTitle className="text-base text-zinc-100">Coming soon</CardTitle>
              <CardDescription className="text-zinc-400">
                Related survival and defense shooters will be linked here.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
