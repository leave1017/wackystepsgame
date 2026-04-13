'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/app/games/game-data";

export function CategorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[136px] flex-shrink-0">
      <nav aria-label="Game categories">
        <ul className="flex flex-col gap-0.5">
          {categories.map((cat) => {
            const href = `/games/${cat.slug}`;
            const isActive = pathname === href;
            return (
              <li key={cat.slug}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  <span className="text-base leading-none">{cat.icon}</span>
                  <span className="truncate">{cat.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
