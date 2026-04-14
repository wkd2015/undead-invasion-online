import {
  Bomb,
  CircleDot,
  Crosshair,
  Dumbbell,
  Fingerprint,
  Globe,
  HelpCircle,
  Keyboard,
  Move,
  Shield,
  ShieldAlert,
  Skull,
  Swords,
  Target,
  Timer,
  Trophy,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tiny presentational helpers — keep the article readable            */
/* ------------------------------------------------------------------ */

function SectionCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`mx-auto max-w-3xl rounded-xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-6 sm:px-7 sm:py-7 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

function H2({
  id,
  icon: Icon,
  iconColor,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-zinc-50"
    >
      <Icon className={`size-6 shrink-0 ${iconColor}`} aria-hidden />
      <span>{children}</span>
    </h2>
  );
}

function H3({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h3 id={id} className="flex items-center gap-2 text-xl font-semibold text-zinc-100">
      <CircleDot className="size-4 shrink-0 text-rose-400/70" aria-hidden />
      <span>{children}</span>
    </h3>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center rounded border border-zinc-600 bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-zinc-200">
      {children}
    </kbd>
  );
}

/* ------------------------------------------------------------------ */
/*  Article                                                           */
/* ------------------------------------------------------------------ */

export function UndeadInvasionArticle() {
  return (
    <article
      id="undead-invasion-guide"
      className="space-y-6 border-t border-zinc-800 pt-12 text-[0.95rem] leading-relaxed text-zinc-300"
    >
      {/* ── What Is Undead Invasion? ─────────────────────────────── */}
      <SectionCard>
        <div className="space-y-4">
          <H2 id="h2-what" icon={Skull} iconColor="text-rose-400">
            What Is Undead Invasion?
          </H2>
          <p>
            Undead Invasion is a pixel-styled, side-scrolling survival shooter that
            blends fast zombie combat with light defense-building decisions. Published for modern browsers and
            mobile-friendly HTML5 players, it drops you into a lonely post-apocalyptic lane where each day
            escalates the pressure: more zombies, tougher mixes of enemy types, and fewer excuses to waste
            resources. If you are searching for Undead Invasion unblocked access at school or on a locked-down
            network, the HTML5 build is designed to load quickly without installs, which makes it a practical
            pick for short sessions when you still want a high-skill ceiling.
          </p>
          <p>
            The fantasy is intentionally grim: you are not escorting VIPs or solving puzzles between waves—you
            are holding a shrinking perimeter with guns, traps, barricades, and whatever coins you managed to
            bank. That clarity is why Undead Invasion works as a pick-up-and-play browser game while still
            rewarding players who learn weapon cadence, reload windows, and defensive geometry across multiple
            runs. The tone matches the mechanics: mistakes are loud, health bars move fast, and the economy
            between waves forces you to commit to a build instead of hoarding forever.
          </p>
        </div>
      </SectionCard>

      {/* ── Core Survival Loop ───────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-5">
          <H2 id="h2-loop" icon={Timer} iconColor="text-violet-400">
            Core Survival Loop: Waves, Coins, and Permadeath
          </H2>
          <p>
            Every session of Undead Invasion is built around a simple loop that is easy to explain but hard to
            master. You fight through a wave, collect coins from eliminations and from surviving the full day,
            then immediately reinvest that income before the next assault. Stronger firearms, healing items,
            barricades, traps, and utility gear all compete for the same wallet, so each purchase is a bet on
            what the next wave will demand. Portal descriptions consistently emphasize that zombies become more
            aggressive over time—faster, bulkier, and more varied—so your answers must evolve instead of
            repeating the same opener every morning.
          </p>

          <H3 id="h3-coins">How coins and upgrades feed the next wave</H3>
          <p>
            Coins are the spine of progression in Undead Invasion. Early clears reward you just enough to fix
            immediate problems: a thin health pool, a slow reload, or a lane that is too wide to kite safely.
            Mid-run, coin spikes let you pivot—maybe you invest in area denial because clusters thickened, or
            you double down on single-target damage because armored elites started appearing. Some community
            write-ups also describe roguelike-style random upgrades after matches, which can make two
            consecutive runs feel different even if your personal skill is still ramping linearly. Treat coins
            as tempo: banking sounds safe, but under-investing usually collapses your defense exactly when the
            spawn table spikes.
          </p>

          <H3 id="h3-checkpoints">Why no checkpoints changes your decisions</H3>
          <p>
            Undead Invasion is explicit about permadeath: if you die, you restart from the beginning without a
            mid-run bookmark. That single rule reshapes psychology. You take fewer greedy reloads, you respect
            grenade cooldowns as true emergency tools, and you place barricades earlier because &ldquo;I will fix it
            next wave&rdquo; is not a promise the game keeps. For SEO readers comparing browser shooters, this
            design is the headline differentiator—Undead Invasion is not a cinematic campaign with scripted
            safety nets; it is a score-chasing survival lane where discipline matters as much as aim.
          </p>
        </div>
      </SectionCard>

      {/* ── How to Play ──────────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-5">
          <H2 id="h2-how" icon={Keyboard} iconColor="text-emerald-400">
            How to Play Undead Invasion
          </H2>
          <p>
            If your goal is to start Undead Invasion online free in a browser tab, the onboarding is
            intentionally light: you move, you shoot, you spend currency between waves. The depth arrives when
            those basics collide with crowd control, ammo economy, and defensive placement. Public control
            lists vary slightly by portal, so treat the following as a practical superset—test each input on
            your device because embedded frames can steal focus until you click the play surface.
          </p>

          {/* quick-ref key grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" role="list" aria-label="Keyboard controls quick reference">
            {([
              ["Move", "Arrow / WASD"],
              ["Shoot", "Mouse click"],
              ["Reload", "R"],
              ["Switch weapon", "Q"],
              ["Melee / Kick", "E / Space"],
              ["Grenade", "1–9"],
            ] as const).map(([label, keys]) => (
              <div
                key={label}
                role="listitem"
                className="flex flex-col gap-1 rounded-lg border border-zinc-700/50 bg-zinc-800/40 px-3 py-2"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">{label}</span>
                <Kbd>{keys}</Kbd>
              </div>
            ))}
          </div>

          <H3 id="h3-movement">Movement, spacing, and reading the lane</H3>
          <p>
            Movement is your first defense. Sources document arrow keys as well as WASD clusters, which means
            laptop players and desktop players both have viable layouts. The skill is not memorizing keys—it is
            maintaining a buffer between your hitbox and the swarm so that reload animations never overlap with
            melee range. Side-scrolling survival rewards rhythm: micro-adjust left, burst fire, drift right to
            catch pickups, then snap back before a runner slips inside your comfort radius. When portals also
            mention kicks or shoves at close range, interpret that as a panic button that buys a half-second
            for repositioning, not as a primary damage engine.
          </p>

          <H3 id="h3-combat">Shooting, reloads, melee, and grenades</H3>
          <p>
            Combat inputs across Undead Invasion guides converge on mouse aiming plus click-to-fire, with
            spacebar alternates depending on the host page. Reload is commonly mapped to <Kbd>R</Kbd>, while weapon swap
            appears as <Kbd>Q</Kbd> on several portals. Grenades or bombs are sometimes bound to numpad keys or numeric
            item slots, which matters for compact keyboards without a dedicated numpad—remap mentally to the
            digits you can reach. Melee exists as a pressure relief valve: when a zombie touches your barricade
            line or slips into hug range, switching to a bat, blade, or kick animation is cheaper than
            spraying ammo you will need for the next wave&apos;s opener. Undead Invasion is not a pure aim trainer;
            it is a resource-paced shooter where every unnecessary bullet is a future death receipt.
          </p>
        </div>
      </SectionCard>

      {/* ── Weapons ──────────────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-5">
          <H2 id="h2-weapons" icon={Swords} iconColor="text-rose-300">
            Weapons, Items, and Build Variety
          </H2>
          <p>
            Official marketing pages confirm broad categories rather than a complete public loot table:
            firearms, melee weapons, grenades or bombs, health items, traps, and barricades or structures.
            Third-party guides add color by listing archetypes—rifles, shotguns, machine guns, pistols, and
            snipers on the ranged side; bats, axes, katanas, chainsaws, and special blades on the melee side.
            Undead Invasion stays readable because each category has a job: ranged weapons thin crowds, melee
            stabilizes leaks, explosives erase mistakes, and structures convert coins into time. Because exact
            coin costs are not consistently published in crawled sources, treat in-game prices as the source
            of truth and use external pages for philosophy, not spreadsheets.
          </p>

          {/* weapon category highlights */}
          <div className="grid gap-3 sm:grid-cols-3" role="list" aria-label="Weapon categories">
            {([
              [Crosshair, "text-sky-400", "Firearms", "Rifles, shotguns, pistols, snipers, machine guns"],
              [Dumbbell, "text-orange-400", "Melee", "Bats, axes, katanas, chainsaws, special blades"],
              [Bomb, "text-rose-400", "Tactical", "Grenades, armor, bombs, support gear"],
            ] as const).map(([Icon, color, title, desc]) => (
              <div
                key={title}
                role="listitem"
                className="flex items-start gap-3 rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-3"
              >
                <Icon className={`size-5 shrink-0 ${color}`} aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{title}</p>
                  <p className="text-xs text-zinc-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <H3 id="h3-categories">Firearms, melee, and tactical tools</H3>
          <p>
            Firearms scale your reliable damage per second and teach you recoil cadence. Melee covers the
            &ldquo;oops&rdquo; moments when reloads align with bad luck. Tactical items—bombs, armor pieces, supportive
            gear—spike your odds during elite introductions or boss-y moments even if the marketing language
            varies by portal. When you write personal notes about Undead Invasion for your squad, track which
            weapon families solved which wave shapes: narrow corridors reward pierce and lines, while wide lanes
            reward spread and controlled kiting. That observational habit matters more than copying a static
            loadout from a blog because random upgrade lines can reroute your build mid-run.
          </p>
        </div>
      </SectionCard>

      {/* ── Defenses ─────────────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-5">
          <H2 id="h2-defenses" icon={Shield} iconColor="text-emerald-300">
            Defenses: Barricades, Traps, and Placement
          </H2>
          <p>
            Undead Invasion is not only about clicking heads; it is about buying seconds. Barricades and traps
            are meant to be placed between waves—or in the calm pockets inside a wave—so that zombies lose
            sync and arrive in drips instead of walls. Guides stress choke points: narrow passages amplify trap
            value, while wider lanes demand layered slowing tools so you can reload behind cover. When enemies
            begin touching structures, melee kicks or shoves become part of maintenance, a mini-game of
            bumping threats away before your line collapses. If you ignore placement, you will eventually out-dps
            your own bad geometry, which is an expensive way to learn the same lesson Undead Invasion keeps
            teaching.
          </p>

          <H3 id="h3-chokes">Choke points, repairs, and kicks for breathing room</H3>
          <p>
            Think in lanes: where must zombies walk, where can you force them to stop, and where will you
            stand so splash damage does not shred your own barricades? Repair cadence is psychological—players
            who tunnel vision on headshots let structures decay until one runner slips through. Build a rhythm
            of glance-up, glance-down: glance at the lane, glance at structure health, glance at ammo. Undead
            Invasion rewards calm players who treat defense HP as a shared resource with their own health bar.
          </p>
        </div>
      </SectionCard>

      {/* ── Survival Tactics ─────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-4">
          <H2 id="h2-tactics" icon={Target} iconColor="text-amber-300">
            Survival Tactics for Longer Runs
          </H2>

          <ul className="space-y-2 text-sm text-zinc-300" role="list">
            {[
              "Maintain distance until forced otherwise — range is your first resource.",
              "Swap to melee only when value is obvious, not when ammo is merely low.",
              "Save explosives for true density spikes rather than cleaning up stragglers.",
              "Balance offense and defense — pure DPS gamblers crumble once trap placement matters.",
              "Use Playground Mode to internalize weapon timings without risking a full permadeath streak.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2.5">
                <Move className="mt-0.5 size-4 shrink-0 text-amber-400/70" aria-hidden />
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          <p>
            Long runs come from stacking small advantages. Undead Invasion escalates
            faster than most players upgrade if they skip traps entirely. When portals describe Playground
            Mode as a low-pressure practice space, use it to internalize weapon timings without risking a full
            permadeath streak. That mode is also where you can answer curiosity questions—how does this shotgun
            whiff at range, how tight is grenade splash—without paying the full run tax.
          </p>
        </div>
      </SectionCard>

      {/* ── HTML5 / Unblocked ────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-4">
          <H2 id="h2-html5" icon={Globe} iconColor="text-sky-400">
            HTML5, Unblocked Access, and Browser Play
          </H2>
          <p>
            Undead Invasion is commonly described as a gritty HTML5 survival shooter, which is why it appears on
            aggregator portals advertising unblocked access for schools and shared PCs. The practical upside is
            predictable: no installer, no admin prompts, and a control scheme that fits keyboard-first play.
            Performance still matters—close background tabs, prefer wired mice for tracking, and allow the
            iframe focus before expecting hotkeys to register. For parents and teachers evaluating whether to
            allow the page, pair technical openness with the content section below: Undead Invasion is intense,
            noisy on purpose, and visually gory relative to all-ages arcade games.
          </p>
        </div>
      </SectionCard>

      {/* ── Playground Mode ──────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-4">
          <H2 id="h2-playground" icon={Trophy} iconColor="text-emerald-300">
            Practice Without Pressure (Playground Mode)
          </H2>
          <p>
            Several community-facing pages reference a Playground-style environment where you can experiment
            with weapons, traps, and layouts without the survival clock punishing every misclick. Treat that
            mode as a lab: replicate the wave openings that kill you in real runs, test whether a new trap
            placement actually changes pathing, and practice grenade timing on stationary clusters. Even short
            drills build muscle memory that transfers directly to permadeath attempts, which is the difference
            between repeating day one forever and pushing into the harder spawn tables where Undead Invasion
            finally shows its full enemy variety.
          </p>
        </div>
      </SectionCard>

      {/* ── Age Advisory ─────────────────────────────────────────── */}
      <SectionCard className="border-amber-900/40 bg-amber-950/15">
        <div className="space-y-4">
          <H2 id="h2-age" icon={ShieldAlert} iconColor="text-amber-400">
            Age and Content Advisory (Teen+ / Gory Effects)
          </H2>
          <p>
            Undead Invasion is best framed as a teen-and-older experience: pixel art does not mean sanitized.
            Expect blood splatter, dismemberment-adjacent animations, and audio stingers designed to stress you
            out. If you dislike horror-adjacent shooters or need all-ages classroom content, skip this title.
            For players who enjoy zombie pressure and tower-defense hybrids, the gore is part of feedback—you
            read combat state quickly because impacts are exaggerated. Pair gameplay with breaks; survival
            games spike adrenaline and eye strain when played in long, uninterrupted stretches inside embedded
            frames.
          </p>
        </div>
      </SectionCard>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <SectionCard>
        <div className="space-y-5">
          <H2 id="h2-faq" icon={HelpCircle} iconColor="text-violet-300">
            Frequently Asked Questions
          </H2>

          <div className="divide-y divide-zinc-800/60 rounded-lg border border-zinc-700/50 bg-zinc-800/20">
            <details className="group px-5 py-4" open>
              <summary className="flex cursor-pointer list-none items-center gap-2 text-lg font-semibold text-zinc-100 [&::-webkit-details-marker]:hidden">
                <Fingerprint className="size-4 shrink-0 text-rose-400/70" aria-hidden />
                <h3 id="h3-faq-free" className="inline">Is Undead Invasion free in the browser?</h3>
                <span className="ml-auto text-xs text-zinc-500 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <p className="mt-3 text-sm">
                Yes—Undead Invasion is widely distributed as a free-to-play browser experience with optional host
                ads around the frame. You still pay with attention and time, but there is no mandatory install gate
                for the base loop described across portals.
              </p>
            </details>

            <details className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-lg font-semibold text-zinc-100 [&::-webkit-details-marker]:hidden">
                <Fingerprint className="size-4 shrink-0 text-rose-400/70" aria-hidden />
                <h3 id="h3-faq-plugin" className="inline">Do I need to install a plugin?</h3>
                <span className="ml-auto text-xs text-zinc-500 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <p className="mt-3 text-sm">
                Modern builds target HTML5, which means your evergreen browser handles audio, rendering, and input
                without Flash-era plugins. If a network blocks game domains, that is a policy issue rather than a
                missing extension.
              </p>
            </details>

            <details className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-lg font-semibold text-zinc-100 [&::-webkit-details-marker]:hidden">
                <Fingerprint className="size-4 shrink-0 text-rose-400/70" aria-hidden />
                <h3 id="h3-faq-death" className="inline">What happens when I die in a run?</h3>
                <span className="ml-auto text-xs text-zinc-500 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <p className="mt-3 text-sm">
                Runs reset without checkpoints. You keep knowledge—spawn habits, upgrade paths, trap synergies—even
                if the world state snaps back to day one. That loop is why Undead Invasion belongs to the &ldquo;one
                more run&rdquo; family: each failure is a lesson priced in minutes, not a soft story checkpoint that
                hands you victory anyway.
              </p>
            </details>
          </div>
        </div>
      </SectionCard>
    </article>
  );
}
