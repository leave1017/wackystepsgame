'use client';

import { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames, Game } from "@/app/games/game-data";
import { CategorySidebar } from "@/components/layout/CategorySidebar";
import Link from "next/link";

interface GamePageTemplateProps {
  gameConfig: {
    metadata: {
      title: string;
      description: string;
      url: string;
    };
    content: any;
  };
}

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

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  const [theaterMode, setTheaterMode] = useState(false);

  const gameTitle = gameConfig.content.gameSection?.title || gameConfig.metadata.title;
  const allGames = getOtherGames().filter(g => g.url !== gameConfig.metadata.url);
  const tags: string[] = (gameConfig.content as any).tags ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">

        {/* Breadcrumb — hidden in theater mode */}
        {!theaterMode && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <ol className="flex items-center gap-1 flex-wrap">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li><Link href="/games" className="hover:text-primary">Hot Games</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-foreground font-medium" aria-current="page">{gameTitle}</li>
            </ol>
          </nav>
        )}

        {/* H1 — hidden in theater mode */}
        {!theaterMode && (
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {gameTitle}
          </h1>
        )}

        {/* ── Desktop: 3-col layout ── */}
        <div className="flex gap-3 items-start">
          {/* Left: category sidebar */}
          {!theaterMode && <CategorySidebar />}

          {/* Center: game iframe */}
          <div className="flex-1 min-w-0">
            <GameSection
              content={gameConfig.content}
              theaterMode={theaterMode}
              onTheaterModeChange={setTheaterMode}
            />
          </div>

          {/* Right: all other games single column */}
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

        {/* Full-width content sections — hidden in theater mode */}
        {!theaterMode && (
          <>
            <Features content={gameConfig.content} />
            <WhatIs content={gameConfig.content} />
            <HowToPlay content={gameConfig.content} />

            {/* Game tags - before FAQ */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
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

            <FAQ content={gameConfig.content} />
          </>
        )}

      </main>

      <Footer />
    </div>
  );
}
