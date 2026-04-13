import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategorySidebar } from "@/components/layout/CategorySidebar";
import { getGamesByCategory, categories } from "@/app/games/game-data";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  const title = `${cat.label} – Free Online Games`;
  const description = `Play free online ${cat.label.toLowerCase()} games instantly in your browser. No download needed — fully unblocked.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/games/${cat.slug}/` },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const gameList = getGamesByCategory(params.category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-3 items-start">
          {/* Left: category sidebar */}
          <CategorySidebar />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold mb-6">
              {cat.icon} {cat.label}
            </h1>

            {gameList.length === 0 ? (
              <p className="text-muted-foreground">No games in this category yet. Check back soon!</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {gameList.map((game) => (
                  <Link
                    key={game.id}
                    href={game.url}
                    className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors bg-card"
                    aria-label={`Play ${game.title}`}
                  >
                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {game.isNew && (
                        <span className="absolute top-1.5 left-1.5 bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          NEW
                        </span>
                      )}
                      {game.isHot && (
                        <span className="absolute top-1.5 left-1.5 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          HOT
                        </span>
                      )}
                    </div>
                    <div className="px-2 py-1.5">
                      <p className="text-[12px] font-semibold text-foreground line-clamp-2 leading-tight">
                        {game.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
