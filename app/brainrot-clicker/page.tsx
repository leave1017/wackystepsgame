import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { brainrotClickerContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Italian Brainrot Clicker - Free Online Game`,
  description: "Play Italian Brainrot Clicker unblocked online for free! Tap into meme madness in this addictive clicker game. No download, instant browser play. Click to Play!",
  openGraph: {
    title: `Italian Brainrot Clicker - Free Online Game`,
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    type: 'website',
    url: `${siteConfig.url}/brainrot-clicker`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/brainrot-clicker/brainrot-clicker.jpg`,
        alt: `Italian Brainrot Clicker Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italian Brainrot Clicker - Free Online Game',
    description: 'Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!',
    images: [`/assets/brainrot-clicker/brainrot-clicker.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/brainrot-clicker/`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Italian Brainrot Clicker",
    description: "Play Italian Brainrot Clicker - a free addictive clicker game right in your browser. No downloads required.",
    url: "/brainrot-clicker"
  },
  content: brainrotClickerContent
};

export default function BrainrotClickerPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.7, ratingCount: 187 }),
      generateFAQSchema(brainrotClickerContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(brainrotClickerContent.howToPlay, gameConfig.metadata.url),
    ].map(({ "@context": _, ...rest }: any) => rest),
  };

  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
    </>
  );
}
