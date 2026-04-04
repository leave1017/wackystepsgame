import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { cheeseChompersContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Cheese Chompers 3D - Free Online Unblocked Game`,
  description: "Play Cheese Chompers 3D unblocked online for free! Control a hungry mouse in this fun 3D action game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Cheese Chompers 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Cheese Chompers 3D - a free physics-based action game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/cheese-chompers-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/cheese-chompers-3d/cheese-chompers-3d.png`,
        alt: `Cheese Chompers 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheese Chompers 3D - Free Online Unblocked Game',
    description: 'Play Cheese Chompers 3D - a free rat knockout game right in your browser. No downloads required.',
    images: [`/assets/cheese-chompers-3d/cheese-chompers-3d.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/cheese-chompers-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Cheese Chompers 3D",
    description: "Play Cheese Chompers 3D - a free physics-based action game right in your browser. No downloads required.",
    url: "/cheese-chompers-3d"
  },
  content: cheeseChompersContent
};

export default function CheeseChompers3DPage() {
  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGameSchema(gameConfig.metadata)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(cheeseChompersContent.faq.items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(cheeseChompersContent.howToPlay, gameConfig.metadata.url)) }} />
    </>
  );
}





