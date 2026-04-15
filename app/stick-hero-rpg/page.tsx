import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { stickHeroRpgContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Stick Hero RPG – Free Online Action RPG Game",
  description:
    "Play Stick Hero RPG free online. Battle enemies, level up your stick figure hero, and unlock powerful skills in this action RPG browser game. No download needed!",
  openGraph: {
    title: "Stick Hero RPG – Free Online Action RPG Game",
    description:
      "Battle enemies and level up your stick hero in this free action RPG browser game. No download needed — play now instantly!",
    type: "website",
    url: `${siteConfig.url}/stick-hero-rpg/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/stick hero rpg/what is.webp`,
        alt: "Stick Hero RPG – Action RPG Browser Game Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stick Hero RPG – Free Online Action RPG Game",
    description:
      "Battle enemies and level up your stick figure hero. Free browser action RPG, no download needed!",
    images: [`/assets/stick hero rpg/what is.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/stick-hero-rpg/`,
  },
};

const gameConfig = {
  metadata: {
    title: "Stick Hero RPG",
    description:
      "Play Stick Hero RPG free online — battle waves of enemies, level up your stick figure hero, and unlock powerful skills in this action RPG browser game.",
    url: "/stick-hero-rpg",
  },
  content: stickHeroRpgContent,
};

export default function StickHeroRpgPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.6, ratingCount: 342 }),
      generateFAQSchema(stickHeroRpgContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(stickHeroRpgContent.howToPlay, gameConfig.metadata.url),
    ].map(({ "@context": _, ...rest }: any) => rest),
  };

  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
