import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { futbolLibreContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Futbol Libre - Free Online Unblocked Game`,
  description: "Play Futbol Libre unblocked online for free! Enjoy live football matches with this awesome game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Futbol Libre Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Futbol Libre - a free sports game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/futbol-libre`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/futbol-libre/futbol-libre.webp`,
        alt: `Futbol Libre Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futbol Libre - Free Online Unblocked Game',
    description: 'Play Futbol Libre free online game without download',
    images: [`/assets/futbol-libre/futbol-libre.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/futbol-libre`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Futbol Libre",
    description: "Play Futbol Libre - a free sports game right in your browser. No downloads required.",
    url: "/futbol-libre"
  },
  content: futbolLibreContent
};

export default function FutbolLibrePage() {
  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGameSchema(gameConfig.metadata)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(futbolLibreContent.faq.items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(futbolLibreContent.howToPlay, gameConfig.metadata.url)) }} />
    </>
  );
}




