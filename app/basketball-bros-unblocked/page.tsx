import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { basketballBrosUnblockedContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Basketball Bros Unblocked - Free Online Game`,
  description: "Play Basketball Bros Unblocked online for free! Experience exciting basketball action with unique characters. No download, instant browser play. Click to Play!",
  openGraph: {
    title: `Basketball Bros Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Basketball Bros Unblocked - a free arcade basketball game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/basketball-bros-unblocked`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/basketball-bros-unblocked/basketball-bros-unblocked.png`,
        alt: `Basketball Bros Unblocked Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basketball Bros Unblocked - Free Online Arcade Game',
    description: 'Play Basketball Bros Unblocked - a free arcade basketball game right in your browser. No downloads required.',
    images: [`/assets/basketball-bros-unblocked/basketball-bros-unblocked.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/basketball-bros-unblocked`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Basketball Bros Unblocked",
    description: "Play Basketball Bros Unblocked - a free exciting basketball game right in your browser. No downloads required.",
    url: "/basketball-bros-unblocked"
  },
  content: basketballBrosUnblockedContent
};

export default function BasketballBrosUnblockedPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.7, ratingCount: 187 }),
      generateFAQSchema(basketballBrosUnblockedContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(basketballBrosUnblockedContent.howToPlay, gameConfig.metadata.url),
    ].map(({ "@context": _, ...rest }: any) => rest),
  };

  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
    </>
  );
}
