"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Rating } from "@/components/rating/Rating";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames, Game } from "@/app/games/game-data";
import { content } from "@/config/content";
import Link from "next/link";

function SidebarGameCard({ game }: { game: Game }) {
  return (
    <Link
      href={game.url}
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card"
      aria-label={`Play ${game.title}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="px-2 py-1.5">
        <p className="text-[11px] font-semibold text-foreground line-clamp-2 leading-tight">
          {game.title}
        </p>
      </div>
    </Link>
  );
}

function MobileGameCard({ game }: { game: Game }) {
  return (
    <Link
      href={game.url}
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card"
      aria-label={`Play ${game.title}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="px-1.5 py-1">
        <p className="text-[10px] font-semibold text-foreground truncate leading-tight">
          {game.title}
        </p>
      </div>
    </Link>
  );
}

export function HomeTemplate() {
  const [theaterMode, setTheaterMode] = useState(false);

  const allGames = getOtherGames().filter((g) => g.id !== "wacky-steps");
  const mid = Math.ceil(allGames.length / 2);
  const leftGames = allGames.slice(0, mid);
  const rightGames = allGames.slice(mid);
  const tags: string[] = (content as any).tags ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">

        {/* H1 + description — hidden in theater mode */}
        {!theaterMode && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Wacky Steps
            </h1>
            <p className="text-center text-muted-foreground mb-6 lg:mb-8 text-lg">
              A free browser ragdoll walking game — avoid sidewalk cracks, survive every step, and walk as far as you can.
            </p>
          </>
        )}

        {/* ── Desktop: 3-col U-shape layout ── */}
        <div className="flex gap-3 items-start">
          {/* Left sidebar — hidden in theater mode */}
          {!theaterMode && (
            <aside className="hidden lg:flex flex-col gap-2 w-[152px] flex-shrink-0">
              {leftGames.map((game) => (
                <SidebarGameCard key={game.id} game={game} />
              ))}
            </aside>
          )}

          {/* Center: game iframe */}
          <div className="flex-1 min-w-0">
            <GameSection
              theaterMode={theaterMode}
              onTheaterModeChange={setTheaterMode}
            />
          </div>

          {/* Right sidebar — hidden in theater mode */}
          {!theaterMode && (
            <aside className="hidden lg:flex flex-col gap-2 w-[152px] flex-shrink-0">
              {rightGames.map((game) => (
                <SidebarGameCard key={game.id} game={game} />
              ))}
            </aside>
          )}
        </div>

        {/* ── Mobile: game grid — hidden in theater mode ── */}
        {!theaterMode && (
          <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
            {allGames.map((game) => (
              <MobileGameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {/* Content sections — hidden in theater mode */}
        {!theaterMode && (
          <>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 -mt-8 lg:-mt-10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium uppercase tracking-wide border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Features />
            <WhatIs />
            <HowToPlay />
            <FAQ />
            <section className="mb-16" id="rating">
              <Rating />
            </section>
          </>
        )}

      </main>

      <Footer />
    </div>
  );
}
