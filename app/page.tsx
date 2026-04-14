import { Crosshair, Gamepad2, ShieldAlert, Skull } from "lucide-react";
import { GameContainer } from "@/components/game-container/GameContainer";
import { RelatedGames } from "@/components/related-games/RelatedGames";
import { SeoContentArea } from "@/components/seo-content-area/SeoContentArea";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd
        name="Undead Invasion"
        description="Undead Invasion is a free browser survival shooter with wave defense, permadeath runs, and HTML5 play — guns, traps, barricades, and gory zombie combat for teen players."
        contentRating="Teen (13+) — stylized blood and gore"
      />
      <div className="relative min-h-screen flex-1 overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(244,63,94,0.12),transparent),radial-gradient(900px_500px_at_80%_20%,rgba(124,58,237,0.14),transparent),linear-gradient(180deg,#09090b_0%,#020617_55%,#020617_100%)] text-zinc-50">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 lg:gap-12 lg:px-8">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border border-amber-500/30 bg-amber-950/70 text-amber-100">
                Teen 13+
              </Badge>
              <Badge
                variant="outline"
                className="border-rose-500/50 bg-rose-950/40 text-rose-100"
              >
                Gory effects
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-200">
                HTML5 · No install
              </Badge>
            </div>
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Undead Invasion — play free online in your browser
              </h1>
              <p className="max-w-3xl text-pretty text-base text-zinc-300 sm:text-lg">
                Survive escalating waves, spend coins between days, and rebuild your defense line before the
                horde returns. Undead Invasion stays above the fold: hit play, click the frame, and jump
                straight into side-scrolling survival action.
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
              <li className="inline-flex items-center gap-2">
                <Gamepad2 className="size-4 shrink-0 text-emerald-300" aria-hidden />
                <span>Gamepad-friendly iframe when the host enables it</span>
              </li>
              <li className="inline-flex items-center gap-2">
                <Crosshair className="size-4 shrink-0 text-rose-300" aria-hidden />
                <span>Mouse + keyboard controls — click inside to capture input</span>
              </li>
              <li className="inline-flex items-center gap-2">
                <Skull className="size-4 shrink-0 text-violet-300" aria-hidden />
                <span>Permadeath tension: no checkpoints, all skill</span>
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldAlert className="size-4 shrink-0 text-amber-300" aria-hidden />
                <span>Not for young kids — intense zombie combat</span>
              </li>
            </ul>
          </header>

          <main className="flex flex-col gap-14 lg:gap-16">
            <GameContainer />
            <RelatedGames />
            <SeoContentArea />
          </main>
        </div>
      </div>
    </>
  );
}
