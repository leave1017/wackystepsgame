'use client';

import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
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

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  const gameTitle = gameConfig.content.gameSection?.title || gameConfig.metadata.title;
  // Derive current game id from the url (e.g. "/crazy-cattle-3d" → "crazy-cattle-3d")
  const currentId = gameConfig.metadata.url.replace(/^\//, "");
  const otherGames = getOtherGames().filter((g) => g.id !== currentId);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* 面包屑 */}
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1 flex-wrap">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><Link href="/games" className="hover:text-primary">Hot Games</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li className="text-foreground font-medium" aria-current="page">{gameTitle}</li>
          </ol>
        </nav>

        {/* H1 — 每个游戏内页只有这一个 H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 lg:mb-12">
          {gameTitle}
        </h1>

        <GameSection content={gameConfig.content} />
        <OtherGames games={otherGames} onGameSelect={() => {}} />
        <Features content={gameConfig.content} />
        <WhatIs content={gameConfig.content} />
        <HowToPlay content={gameConfig.content} />
        <FAQ content={gameConfig.content} />
      </main>

      <Footer />
    </div>
  );
}
