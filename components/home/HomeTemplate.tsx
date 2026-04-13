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
import { CategorySidebar } from "@/components/layout/CategorySidebar";
import { getOtherGames, Game } from "@/app/games/game-data";
import { content } from "@/config/content";
import Link from "next/link";

function SidebarGameCard({ game }: { game: Game }) {
  return (
    <Link
      href={game.url}
      className="group flex items-center gap-2 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card p-1"
      aria-label={`Play ${game.title}`}
    >
      <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-muted">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <p className="text-[11px] font-semibold text-foreground line-clamp-2 leading-tight flex-1 min-w-0">
        {game.title}
      </p>
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

        {/* ── Desktop: 3-col layout ── */}
        <div className="flex gap-3 items-start">
          {/* Left: category sidebar */}
          {!theaterMode && <CategorySidebar />}

          {/* Center: game iframe */}
          <div className="flex-1 min-w-0">
            <GameSection
              theaterMode={theaterMode}
              onTheaterModeChange={setTheaterMode}
            />
          </div>

          {/* Right: all games single column */}
          {!theaterMode && (
            <aside className="hidden lg:flex flex-col gap-1 w-[152px] flex-shrink-0">
              {allGames.map((game) => (
                <SidebarGameCard key={game.id} game={game} />
              ))}
            </aside>
          )}
        </div>

        {/* ── Mobile: game grid — hidden in theater mode ── */}
        {!theaterMode && (
          <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6 mt-4">
            {allGames.map((game) => (
              <MobileGameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {/* Content sections — hidden in theater mode */}
        {!theaterMode && (
          <>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 mt-2">
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
