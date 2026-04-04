'use client';

import { useState, useRef } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface GameSectionProps {
  content?: typeof defaultContent;
}

export function GameSection({ content = defaultContent }: GameSectionProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(content.rating.initialVotes);
  const containerRef = useRef<HTMLDivElement>(null);

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
    if (!liked) {
      setLiked(true);
      setLikeCount(c => c + 1);
    } else {
      setLiked(false);
      setLikeCount(c => c - 1);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: content.gameSection.title,
        url: siteConfig.url,
      });
    } else {
      navigator.clipboard.writeText(siteConfig.url);
    }
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(
          theme.gameSection.typography.title,
          theme.gameSection.spacing.title
        )}>
          {content.gameSection.title}
        </h2>
      )}

      {/* 游戏容器 */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-5xl mx-auto overflow-hidden shadow-xl relative",
          (content.gameSection as any).gameHeight || "h-[65vh] min-h-[480px]",
          theme.gameSection.colors.container,
          "mb-0 rounded-t-lg"
        )}
      >
        <iframe
          src={content.gameSection.game.url}
          className="w-full h-full border-0"
          allow="fullscreen"
          title={content.gameSection.game.title}
          scrolling="no"
        />
      </div>

      {/* 按钮行 */}
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto mb-16 bg-gray-800 text-white rounded-b-lg px-4 py-2 shadow-md">
        {/* 左侧：游戏名称 */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white/90">{content.gameSection.title}</span>
        </div>

        {/* 右侧：操作按钮 */}
        <div className="flex items-center gap-1">
          {/* 点赞 */}
          <Button
            onClick={handleLike}
            size="sm"
            variant="ghost"
            className={cn(
              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-colors",
              liked
                ? "bg-blue-500/30 text-blue-300 hover:bg-blue-500/40"
                : "hover:bg-white/20 text-white/80"
            )}
            aria-label="Like this game"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <span>{likeCount}</span>
          </Button>

          {/* 分享 */}
          <Button
            onClick={handleShare}
            size="sm"
            variant="ghost"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full hover:bg-white/20 text-white/80 transition-colors"
            aria-label="Share this game"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Share</span>
          </Button>

          {/* 全屏 */}
          <Button
            onClick={toggleFullscreen}
            size="sm"
            variant="ghost"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full hover:bg-white/20 text-white/80 transition-colors"
            aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
              </svg>
            )}
            <span>{isFullscreen ? "Exit" : "Fullscreen"}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
