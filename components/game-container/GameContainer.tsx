"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const IFRAME_URL = process.env.NEXT_PUBLIC_GAME_IFRAME_URL?.trim();

/**
 * 首屏游戏区：有 iframe URL 时嵌入游戏；否则展示占位（待你填入真实链接）。
 * 跨域加载失败时的重试/降级 UI 可在接入具体游戏源后再加强（如超时检测、同源探针等）。
 */
export function GameContainer() {
  if (!IFRAME_URL) {
    return (
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-xl">Play</CardTitle>
          <CardDescription>
            Set <code className="text-xs">NEXT_PUBLIC_GAME_IFRAME_URL</code> in{" "}
            <code className="text-xs">.env.local</code> to load the game iframe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="flex aspect-video w-full max-w-4xl items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
            role="status"
          >
            Game iframe placeholder — configure environment and reload.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Play</CardTitle>
        <CardDescription>Embedded game (iframe)</CardDescription>
      </CardHeader>
      <CardContent>
        <iframe
          title="Game"
          src={IFRAME_URL}
          className="aspect-video w-full max-w-4xl rounded-lg border bg-black"
          allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </CardContent>
    </Card>
  );
}
