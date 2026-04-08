import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { horseMagnifierContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Horse Magnifier – Free Online Indie Exploration Game",
  description:
    "Play Horse Magnifier free online. Zoom into a horse, uncover surreal hidden details, and enjoy this quirky indie exploration game by wer8888. No download needed — play in your browser now.",
  openGraph: {
    title: "Horse Magnifier – Free Online Indie Exploration Game",
    description:
      "Zoom into a horse and uncover surreal hidden details in this quirky free indie game. No download needed — play instantly in your browser.",
    type: "website",
    url: `${siteConfig.url}/horse-magnifier`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/horse-magnifier/horse-magnifier.webp`,
        alt: "Horse Magnifier – Indie Exploration Game Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horse Magnifier – Free Online Indie Exploration Game",
    description:
      "Zoom into a horse and discover surreal hidden details. Free browser game, no download needed!",
    images: [`/assets/horse-magnifier/horse-magnifier.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/horse-magnifier`,
  },
};

const gameConfig = {
  metadata: {
    title: "Horse Magnifier",
    description:
      "Play Horse Magnifier free online — zoom into a horse and uncover surreal hidden details in this quirky indie exploration game. No download required.",
    url: "/horse-magnifier",
  },
  content: horseMagnifierContent,
};

export default function HorseMagnifierPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.9, ratingCount: 386 }),
      generateFAQSchema(horseMagnifierContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(horseMagnifierContent.howToPlay, gameConfig.metadata.url),
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
