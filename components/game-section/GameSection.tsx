'use client';

import { useState, useRef, useEffect } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface GameSectionProps {
  content?: typeof defaultContent;
  theaterMode?: boolean;
  onTheaterModeChange?: (val: boolean) => void;
}

// ── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group/tip flex items-center justify-center">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50
                      opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150">
        <div className="bg-gray-900 text-white text-[11px] px-2 py-1 rounded whitespace-nowrap">
          {label}
        </div>
        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px]
                        border-l-transparent border-r-transparent border-t-gray-900 mx-auto" />
      </div>
    </div>
  );
}

// ── Share Modal ───────────────────────────────────────────────────────────────
function ShareModal({ gameTitle, onClose }: { gameTitle: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : siteConfig.url;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`Play ${gameTitle} free online!`);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      bg: 'bg-[#1877F2]',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      bg: 'bg-black',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
      bg: 'bg-[#25D366]',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encoded}&title=${encodedTitle}`,
      bg: 'bg-[#0A66C2]',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Reddit',
      href: `https://reddit.com/submit?url=${encoded}&title=${encodedTitle}`,
      bg: 'bg-[#FF4500]',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-900 mb-6 pr-6">
          Spread the Fun, Share {gameTitle} with Friends!
        </h2>

        {/* URL copy row */}
        <div className="flex items-center border border-gray-200 rounded-full px-4 py-2.5 mb-6 gap-2">
          <span className="text-gray-500 text-sm flex-1 truncate">{url}</span>
          <button
            onClick={handleCopy}
            className="text-purple-600 font-semibold text-sm whitespace-nowrap hover:text-purple-800 transition-colors"
          >
            {copied ? '✓ Copied!' : 'Copy link'}
          </button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity",
                s.bg
              )}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Interactive Star Rating (left side of toolbar) ───────────────────────────
function InteractiveStarRating({
  displayRating,
  onRate,
}: {
  displayRating: number;
  onRate: (n: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || displayRating;

  return (
    <div
      className="flex items-center gap-0.5 cursor-pointer"
      onMouseLeave={() => setHovered(0)}
    >
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          onMouseEnter={() => setHovered(star)}
          onClick={() => onRate(star)}
          className="focus:outline-none transition-transform hover:scale-125 p-0.5"
          aria-label={`Rate ${star} star`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
            stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            fill={star <= active ? "#FBBF24" : "none"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      ))}
      <span className="text-white/60 text-xs ml-1 w-6">{displayRating.toFixed(1)}</span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function GameSection({
  content = defaultContent,
  theaterMode = false,
  onTheaterModeChange,
}: GameSectionProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(content.rating.initialVotes);
  const [showShare, setShowShare] = useState(false);
  const [userRating, setUserRating] = useState<number>(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const gameId = content.gameSection.game.title;
  const gameTitle = content.gameSection.title;

  // Load persisted data from localStorage
  useEffect(() => {
    const storedRating = localStorage.getItem(`wackysteps_rating_${gameId}`);
    if (storedRating) setUserRating(parseInt(storedRating));

    const favorites: string[] = JSON.parse(localStorage.getItem('wackysteps_favorites') || '[]');
    setIsFavorited(favorites.includes(gameId));
  }, [gameId]);

  // Exit theater mode on Escape
  useEffect(() => {
    if (!theaterMode) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onTheaterModeChange?.(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [theaterMode, onTheaterModeChange]);

  // ── Handlers ──
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleLike = () => {
    setLiked(v => !v);
    setLikeCount(c => liked ? c - 1 : c + 1);
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    localStorage.setItem(`wackysteps_rating_${gameId}`, String(rating));
    setShowRate(false);
  };

  const handleFavorite = () => {
    const favorites: string[] = JSON.parse(localStorage.getItem('wackysteps_favorites') || '[]');
    if (isFavorited) {
      const updated = favorites.filter(id => id !== gameId);
      localStorage.setItem('wackysteps_favorites', JSON.stringify(updated));
      setIsFavorited(false);
    } else {
      favorites.push(gameId);
      localStorage.setItem('wackysteps_favorites', JSON.stringify(favorites));
      setIsFavorited(true);
    }
  };

  const handleReload = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = '';
      setTimeout(() => { if (iframeRef.current) iframeRef.current.src = src; }, 100);
    }
  };

  const handleTheater = () => onTheaterModeChange?.(!theaterMode);

  // ── Render ──
  return (
    <section
      id="game-section"
      className={cn(theme.gameSection.layout.section, theme.layout.section.scrollMargin)}
    >
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(theme.gameSection.typography.title, theme.gameSection.spacing.title)}>
          {gameTitle}
        </h2>
      )}

      {/* Game iframe */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-5xl mx-auto overflow-hidden shadow-xl relative mb-0 rounded-t-lg",
          (content.gameSection as any).gameHeight || "h-[65vh] min-h-[480px]",
          theme.gameSection.colors.container,
        )}
      >
        <iframe
          ref={iframeRef}
          src={content.gameSection.game.url}
          className="w-full h-full border-0"
          allow="fullscreen"
          title={content.gameSection.game.title}
          scrolling="no"
        />
      </div>

      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto mb-16
                      bg-gray-800 text-white rounded-b-lg px-3 py-2 shadow-md">

        {/* Left: Game title + Interactive star rating */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm font-bold text-white truncate max-w-[160px]">{gameTitle}</span>
          <InteractiveStarRating
            displayRating={userRating > 0 ? userRating : content.rating.initialRating}
            onRate={handleRate}
          />
        </div>

        {/* Right: icon-only buttons (text shown via tooltip on hover) */}
        <div className="flex items-center gap-0.5">

          {/* Favorites */}
          <Tooltip label={isFavorited ? "Remove from favorites" : "Add to favorites"}>
            <button
              onClick={handleFavorite}
              className={cn(
                "p-2 rounded-full transition-colors",
                isFavorited
                  ? "text-red-400 bg-red-500/20 hover:bg-red-500/30"
                  : "text-white/70 hover:bg-white/20 hover:text-white"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </Tooltip>

          {/* Share */}
          <Tooltip label="Share game">
            <button
              onClick={() => setShowShare(true)}
              className="p-2 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </Tooltip>

          {/* Reload */}
          <Tooltip label="Reload game">
            <button
              onClick={handleReload}
              className="p-2 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2v6h-6"/>
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                <path d="M3 22v-6h6"/>
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
              </svg>
            </button>
          </Tooltip>

          {/* Theater */}
          <Tooltip label={theaterMode ? "Exit theater" : "Theater mode"}>
            <button
              onClick={handleTheater}
              className={cn(
                "p-2 rounded-full transition-colors",
                theaterMode
                  ? "text-yellow-300 bg-yellow-500/20 hover:bg-yellow-500/30"
                  : "text-white/70 hover:bg-white/20 hover:text-white"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </button>
          </Tooltip>

          {/* Fullscreen */}
          <Tooltip label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/>
                  <path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                </svg>
              )}
            </button>
          </Tooltip>

          {/* Divider */}
          <div className="w-px h-5 bg-white/20 mx-1" />

          {/* Like — rightmost */}
          <Tooltip label={liked ? "Unlike" : "Like"}>
            <button
              onClick={handleLike}
              className={cn(
                "flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full transition-colors",
                liked
                  ? "text-blue-300 bg-blue-500/30 hover:bg-blue-500/40"
                  : "text-white/70 hover:bg-white/20 hover:text-white"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v12"/>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
              </svg>
              <span>{likeCount}</span>
            </button>
          </Tooltip>

        </div>
      </div>

      {/* Share Modal */}
      {showShare && (
        <ShareModal
          gameTitle={gameTitle}
          onClose={() => setShowShare(false)}
        />
      )}
    </section>
  );
}
