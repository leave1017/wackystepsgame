"use client";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Rating } from "@/components/rating/Rating";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";

export function HomeTemplate() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Wacky Steps
        </h1>
        <p className="text-center text-muted-foreground mb-8 lg:mb-12 text-lg">
          A free browser ragdoll walking game — avoid sidewalk cracks, survive every step, and walk as far as you can.
        </p>
        <GameSection />
        <OtherGames
          games={getOtherGames()}
          onGameSelect={() => {}}
        />
        <Features />
        <WhatIs />
        <HowToPlay />
        <FAQ />
        <section className="mb-16" id="rating">
          <Rating />
        </section>
      </main>

      <Footer />
    </div>
  );
}
