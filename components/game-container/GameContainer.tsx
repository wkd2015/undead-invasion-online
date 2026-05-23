"use client";

import { Maximize2, Sprout, TreeDeciduous } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const DEFAULT_IFRAME_URL = "https://gamea.azgame.io/undead-invasion/";

function getIframeSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_GAME_IFRAME_URL?.trim();
  return fromEnv || DEFAULT_IFRAME_URL;
}

/**
 * 首屏游戏区：4:3 比例、渐变描边与阴影、iframe 加载遮罩（种子→树隐喻进度条）。
 */
export function GameContainer() {
  const src = getIframeSrc();
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [progress, setProgress] = useState(6);
  const reduceMotionRef = useRef(false);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    if (mq.matches) {
      queueMicrotask(() => setProgress(100));
    }
  }, []);

  useEffect(() => {
    if (!overlayVisible || reduceMotionRef.current) return;
    tickRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 92) return 92;
        return p + 4 + Math.random() * 5;
      });
    }, 280);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [overlayVisible]);

  const finishLoading = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    setProgress(100);
    window.setTimeout(
      () => setOverlayVisible(false),
      reduceMotionRef.current ? 80 : 420,
    );
  }, []);

  const treeScale = 0.35 + (Math.min(progress, 100) / 100) * 0.85;

  return (
    <section
      className="relative isolate w-full max-w-5xl scroll-mt-4"
      aria-label="Undead Invasion game player"
    >
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-rose-600/35 via-violet-600/25 to-emerald-500/20 blur-md" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-gradient-to-b from-zinc-900 to-zinc-950 p-2 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.75)] ring-1 ring-rose-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 px-2 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Live player
            </span>
            <Badge className="border border-rose-500/30 bg-rose-950/60 text-rose-100">
              4:3 theater
            </Badge>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="pointer-events-auto h-8 gap-1 border-zinc-600 bg-zinc-900/80 text-xs text-zinc-100 hover:bg-zinc-800"
            onClick={() => {
              const el = document.getElementById("undead-invasion-frame") as HTMLIFrameElement | null;
              el?.requestFullscreen?.();
            }}
          >
            <Maximize2 className="size-3.5" aria-hidden />
            Fullscreen
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-1 pb-2 pt-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black shadow-inner ring-1 ring-black/60">
            {overlayVisible ? (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-zinc-950/92 px-6 text-center backdrop-blur-sm transition-opacity duration-300"
                role="status"
                aria-live="polite"
                aria-busy="true"
              >
                <div className="flex items-center gap-3 text-zinc-200">
                  <Sprout className="size-6 text-emerald-400" aria-hidden />
                  <TreeDeciduous
                    className="size-8 text-emerald-300 transition-transform duration-500 ease-out motion-reduce:transition-none"
                    style={{ transform: `scale(${treeScale})` }}
                    aria-hidden
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-zinc-100">Growing the battlefield…</p>
                  <p className="text-xs text-zinc-400">
                    Seedling signal roots while the arena loads — hang tight for Undead Invasion.
                  </p>
                </div>
                <div className="w-full max-w-xs space-y-2">
                  <Progress value={Math.min(100, Math.round(progress))} className="h-2 bg-zinc-800" />
                  <p className="text-[11px] text-zinc-500">
                    Tip: click inside the frame once if keyboard controls feel unresponsive.
                  </p>
                </div>
              </div>
            ) : null}

            <iframe
              id="undead-invasion-frame"
              title="Undead Invasion"
              src={src}
              className="h-full w-full touch-manipulation rounded-lg bg-black"
              allowFullScreen
              allow="fullscreen; autoplay; gamepad"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={finishLoading}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
