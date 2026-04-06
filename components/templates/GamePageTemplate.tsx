'use client';

import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames, Game } from "@/app/games/game-data";
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

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  const gameTitle = gameConfig.content.gameSection?.title || gameConfig.metadata.title;
  const allGames = getOtherGames();
  const mid = Math.ceil(allGames.length / 2);
  const leftGames = allGames.slice(0, mid);
  const rightGames = allGames.slice(mid);
  const tags: string[] = (gameConfig.content as any).tags ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1 flex-wrap">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><Link href="/games" className="hover:text-primary">Hot Games</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li className="text-foreground font-medium" aria-current="page">{gameTitle}</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {gameTitle}
        </h1>

        {/* ── Desktop: 3-col U-shape layout ── */}
        <div className="flex gap-3 items-start">
          {/* Left sidebar */}
          <aside className="hidden lg:flex flex-col gap-2 w-[152px] flex-shrink-0">
            {leftGames.map((game) => (
              <SidebarGameCard key={game.id} game={game} />
            ))}
          </aside>

          {/* Center: game iframe */}
          <div className="flex-1 min-w-0">
            <GameSection content={gameConfig.content} />
          </div>

          {/* Right sidebar */}
          <aside className="hidden lg:flex flex-col gap-2 w-[152px] flex-shrink-0">
            {rightGames.map((game) => (
              <SidebarGameCard key={game.id} game={game} />
            ))}
          </aside>
        </div>

        {/* ── Mobile: game grid below iframe ── */}
        <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
          {allGames.map((game) => (
            <MobileGameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Game tags */}
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

        {/* Full-width content sections */}
        <Features content={gameConfig.content} />
        <WhatIs content={gameConfig.content} />
        <HowToPlay content={gameConfig.content} />
        <FAQ content={gameConfig.content} />
      </main>

      <Footer />
    </div>
  );
}
