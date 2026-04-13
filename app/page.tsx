import { GameContainer } from "@/components/game-container/GameContainer";
import { RelatedGames } from "@/components/related-games/RelatedGames";
import { SeoContentArea } from "@/components/seo-content-area/SeoContentArea";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd
        name="Undead Invasion"
        description="Browser-based Undead Invasion experience with an embedded playable iframe and related titles."
      />
      <div className="flex flex-1 flex-col gap-10 px-4 py-8 sm:px-6 lg:gap-12 lg:px-8">
        <header className="mx-auto w-full max-w-5xl space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Undead Invasion</h1>
          <p className="text-muted-foreground text-pretty">
            Play from the first screen: once{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              NEXT_PUBLIC_GAME_IFRAME_URL
            </code>{" "}
            is set, the game loads above the fold — no scrolling required to start.
          </p>
        </header>
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 lg:gap-16">
          <GameContainer />
          <RelatedGames />
          <SeoContentArea />
        </main>
      </div>
    </>
  );
}
