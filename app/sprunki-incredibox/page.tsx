import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { sprunkiIncrediboxContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Sprunki Incredibox - Free Online Music Game`,
  description: "Play Sprunki Incredibox, a unique Incredibox fan-mod, free online! Drag & drop Sprunki characters for amazing beats. Unleash your inner music producer!",
  openGraph: {
    title: `Sprunki Incredibox - Free Online Music Game`,
    description: "Play Sprunki Incredibox, a unique Incredibox fan-mod, free online! Drag & drop Sprunki characters for amazing beats. Unleash your inner music producer!",
    type: 'website',
    url: `${siteConfig.url}/sprunki-incredibox`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/sprunki-incredibox/sprunki-incredibox.webp`,
        alt: `Sprunki Incredibox Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprunki Incredibox | Free Online Music Mode Game',
    description: 'Play Sprunki Incredibox, a unique Incredibox fan-mod, free online! Drag & drop Sprunki characters for amazing beats. Unleash your inner music producer!',
    images: [`/assets/sprunki-incredibox/sprunki-incredibox.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/sprunki-incredibox`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Sprunki Incredibox",
    description: "Play Sprunki Incredibox - a free interactive music creation game right in your browser. No downloads required.",
    url: "/sprunki-incredibox"
  },
  content: sprunkiIncrediboxContent
};

export default function SprunkiIncrediboxPage() {
  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGameSchema(gameConfig.metadata)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(sprunkiIncrediboxContent.faq.items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(sprunkiIncrediboxContent.howToPlay, gameConfig.metadata.url)) }} />
    </>
  );
}