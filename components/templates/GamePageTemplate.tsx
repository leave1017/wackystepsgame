'use client';

import { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames, getGameBadge, Game } from "@/app/games/game-data";
import { CategorySidebar } from "@/components/layout/CategorySidebar";
import Link from "next/link";
import { AdBanner320x50 } from "@/components/ads/AdBanner320x50";
import { NativeBannerAd } from "@/components/ads/NativeBannerAd";

const BELOW_IFRAME_SLOTS = 15;

const BADGE_STYLES = {
  NEW: "bg-purple-500 text-white",
  HOT: "bg-orange-500 text-white",
};

interface GamePageTemplateProps {
  gameConfig: {
    metadata: { title: string; description: string; url: string };
    content: any;
  };
}

/** Right sidebar — thumbnail only, 2-col, no title */
function SidebarGameCard({ game }: { game: Game }) {
  const badge = getGameBadge(game);
  return (
    <Link
      href={game.url}
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card relative"
      aria-label={`Play ${game.title}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img src={game.image} alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy" />
      </div>
      {badge && (
        <span className={`absolute top-1 left-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${BADGE_STYLES[badge]}`}>
          {badge}
        </span>
      )}
    </Link>
  );
}

/** Below-iframe grid card — thumbnail + badge, no title */
function GridGameCard({ game }: { game: Game }) {
  const badge = getGameBadge(game);
  return (
    <Link
      href={game.url}
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card relative"
      aria-label={`Play ${game.title}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img src={game.image} alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy" />
      </div>
      {badge && (
        <span className={`absolute top-1 left-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${BADGE_STYLES[badge]}`}>
          {badge}
        </span>
      )}
    </Link>
  );
}

/** Mobile card — thumbnail + title */
function MobileGameCard({ game }: { game: Game }) {
  return (
    <Link href={game.url}
      className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-200 bg-card"
      aria-label={`Play ${game.title}`}>
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img src={game.image} alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy" />
      </div>
      <div className="px-1.5 py-1">
        <p className="text-xs font-semibold text-foreground truncate leading-tight">{game.title}</p>
      </div>
    </Link>
  );
}

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  const [theaterMode, setTheaterMode] = useState(false);

  const gameTitle = gameConfig.content.gameSection?.title || gameConfig.metadata.title;
  const allGames = getOtherGames().filter(g => g.url !== gameConfig.metadata.url);
  const tags: string[] = (gameConfig.content as any).tags ?? [];

  const belowGames = allGames.slice(0, BELOW_IFRAME_SLOTS);
  const emptySlots = BELOW_IFRAME_SLOTS - belowGames.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-4 pb-8 lg:pl-16">

        {/* Breadcrumb */}
        {!theaterMode && (
          <nav aria-label="Breadcrumb" className="mb-2 text-sm text-muted-foreground">
            <ol className="flex items-center gap-1 flex-wrap">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li><Link href="/games" className="hover:text-primary">Hot Games</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-foreground font-medium" aria-current="page">{gameTitle}</li>
            </ol>
          </nav>
        )}

        {/* H1 */}
        {!theaterMode && (
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-3">{gameTitle}</h1>
        )}

        {/* ── Desktop layout ── */}
        <div className="flex gap-3 items-start">
          {!theaterMode && <CategorySidebar />}

          {/* Center: iframe + below-iframe grid */}
          <div className="flex-1 min-w-0">
            <GameSection
              content={gameConfig.content}
              theaterMode={theaterMode}
              onTheaterModeChange={setTheaterMode}
            />

            {/* Below-iframe game grid */}
            {!theaterMode && (
              <div className="hidden lg:grid grid-cols-5 gap-2 mt-3">
                {belowGames.map((game) => (
                  <GridGameCard key={game.id} game={game} />
                ))}
                {Array.from({ length: emptySlots }).map((_, i) => (
                  <div key={`empty-${i}`}
                    className="aspect-video rounded-lg bg-muted border border-dashed border-border opacity-40" />
                ))}
              </div>
            )}
          </div>

          {/* Right: 2-col thumbnail grid, no titles */}
          {!theaterMode && (
            <aside className="hidden xl:grid grid-cols-2 gap-2 w-[300px] flex-shrink-0 self-start">
              {allGames.map((game) => (
                <SidebarGameCard key={game.id} game={game} />
              ))}
            </aside>
          )}
        </div>

        {/* ── Mobile: game grid ── */}
        {!theaterMode && (
          <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6 mt-4">
            {allGames.map((game) => (
              <MobileGameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {/* Banner ad — below game grid, above content */}
        {!theaterMode && <AdBanner320x50 />}

        {/* Content sections */}
        {!theaterMode && (
          <>
            <Features content={gameConfig.content} />
            <WhatIs content={gameConfig.content} />
            <HowToPlay content={gameConfig.content} />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium uppercase tracking-wide border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <NativeBannerAd />
            <FAQ content={gameConfig.content} />
          </>
        )}

      </main>
      <Footer />
    </div>
  );
}
