'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, games } from "@/app/games/game-data";

export function CategorySidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof games[string][]>([]);
  const [showResults, setShowResults] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Real-time search
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const matched = Object.values(games).filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.tags.some(t => t.toLowerCase().includes(q))
    );
    setResults(matched);
    setShowResults(true);
  }, [query]);

  // Close results when clicking outside search box
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <aside
      className={`hidden lg:flex flex-col fixed left-0 top-16 h-[calc(100vh-64px)] bg-card border-r border-border z-40 overflow-hidden transition-all duration-300 ease-in-out ${
        expanded ? "w-52 shadow-xl" : "w-12"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setShowResults(false);
        setQuery("");
      }}
    >
      {/* Search row */}
      <div className="flex-shrink-0 border-b border-border" ref={searchRef}>
        {expanded ? (
          <div className="p-2 relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search games..."
              autoFocus
              className="w-full text-sm px-3 py-2 pr-8 rounded-md border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            {/* Search results dropdown */}
            {showResults && (
              <div className="absolute top-full left-2 right-2 mt-0.5 bg-background border border-border rounded-md shadow-lg z-50 max-h-72 overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-sm text-muted-foreground px-3 py-2">No games found</p>
                ) : (
                  results.map(game => (
                    <Link
                      key={game.id}
                      href={game.url}
                      onClick={() => { setQuery(""); setShowResults(false); setExpanded(false); }}
                      className="flex items-center gap-2 px-2.5 py-2 hover:bg-muted transition-colors"
                    >
                      <img src={game.image} alt={game.title}
                        className="w-9 h-9 rounded object-cover flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
                        {game.title}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        ) : (
          /* Collapsed: show magnifier icon centered */
          <div className="flex items-center justify-center h-12 text-muted-foreground">
            <svg className="w-4.5 h-4.5 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        )}
      </div>

      {/* Category nav */}
      <nav className="flex-1 overflow-y-auto py-2" aria-label="Game categories">
        <ul className="flex flex-col gap-0.5 px-1">
          {categories.map((cat) => {
            const href = `/games/${cat.slug}`;
            const isActive = pathname === href;
            return (
              <li key={cat.slug}>
                <Link
                  href={href}
                  title={expanded ? undefined : cat.label}
                  className={`flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="text-xl leading-none flex-shrink-0 w-6 flex items-center justify-center">
                    {cat.icon}
                  </span>
                  {expanded && (
                    <span className="text-sm font-medium overflow-hidden">
                      {cat.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
