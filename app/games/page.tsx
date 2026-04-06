"use client";

import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";

function GamesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const allGames = getOtherGames();

  const filtered = useMemo(() => {
    if (!query.trim()) return allGames;
    const q = query.toLowerCase();
    return allGames.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q)
    );
  }, [query, allGames]);

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Hot Games</h1>
          <p className="text-muted-foreground mt-1">
            {filtered.length} free games — play instantly, no download needed
          </p>
        </div>
        <input
          type="search"
          placeholder="Filter games..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-lg px-4 py-2 text-sm w-full sm:w-60 bg-background"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-20 text-lg">
          No games found for &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map((game) => (
            <Link
              key={game.id}
              href={game.url}
              className="group relative block rounded-xl overflow-hidden bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-200"
              aria-label={`Play ${game.title}`}
            >
              <span className="absolute top-1.5 left-1.5 z-10 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide shadow">
                HOT
              </span>
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="px-2 py-1.5">
                <p className="text-xs font-semibold text-foreground truncate leading-tight">
                  {game.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense
        fallback={
          <main className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">Hot Games</h1>
            <p className="text-muted-foreground">Loading games...</p>
          </main>
        }
      >
        <GamesContent />
      </Suspense>
      <Footer />
    </div>
  );
}
