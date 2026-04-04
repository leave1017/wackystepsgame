"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
  // Legacy props kept for compatibility with HomeTemplate
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: (e: React.FormEvent) => void;
}

export function Header({ searchQuery: _sq, onSearchChange: _osc, onSearch: _os }: HeaderProps) {
  if (!layout.header.isVisible) return null;

  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/games?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/games");
    }
  };

  const headerClassName = cn(
    theme.header.layout.position,
    theme.header.layout.zIndex,
    theme.header.colors.border,
    theme.header.colors.background,
    theme.header.layout.blur,
  );

  return (
    <header className={headerClassName}>
      <div className={cn(
        "container flex h-16 items-center justify-between",
        layout.header.container.padding
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
          <img
            src={layout.header.logo.src}
            alt={content.header.title}
            className={cn(layout.header.logo.size, "object-contain")}
          />
          <span className={cn("text-xl font-bold hidden sm:block", theme.header.colors.text)}>
            {content.header.title}
          </span>
        </Link>

        {/* Desktop nav + search */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {content.header.navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : theme.header.colors.text
                )}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearch} className="flex items-center gap-1">
            <Input
              type="search"
              placeholder="Search games..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-8 w-44 text-sm"
              aria-label="Search games"
            />
            <Button type="submit" size="icon" className="h-8 w-8" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={cn("md:hidden border-t px-4 py-4 space-y-3", theme.header.colors.background)}>
          {content.header.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <form onSubmit={(e) => { setMenuOpen(false); handleSearch(e); }} className="flex gap-1 pt-1">
            <Input
              type="search"
              placeholder="Search games..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-8 text-sm"
            />
            <Button type="submit" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </header>
  );
}
