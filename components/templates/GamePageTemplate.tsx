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
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card relative"
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
      {game.isNew && (
        <span className="absolute top-1 left-1 bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
      )}
      {game.isHot && (
        <span className="absolute top-1 left-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">HOT</span>
      )}
      <div className="px-2 py-1.5">
        <p className="text-xs font-semibold text-foreground truncate leading-tight">{game.title}</p>
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
        <p className="text-xs font-semibold text-foreground truncate leading-tight">
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

      <main className="container mx-auto px-4 py-8 lg:pl-16">

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

          {/* Right: all other games 2-col grid, no titles */}
          {!theaterMode && (
            <aside className="hidden xl:flex xl:flex-col gap-2 w-[200px] flex-shrink-0 self-start">
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
