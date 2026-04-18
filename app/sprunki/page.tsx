import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { sprunkiContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Sprunki – Play Free Online Music Game`,
  description: "Play Sprunki free online – mix sounds, layer characters, and compose music in this Incredibox-style browser game. No download needed, play now.",
  openGraph: {
    title: `Sprunki – Play Free Online Music Game`,
    description: "Play Sprunki free online – mix sounds, layer characters, and compose music. No download needed.",
    type: 'website',
    url: `${siteConfig.url}/sprunki/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/sprunki/what is.webp`,
        alt: `Sprunki Music Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprunki – Play Free Online Music Game',
    description: 'Play Sprunki free online – mix beats and create music in your browser. No download required!',
    images: [`/assets/sprunki/what is.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/sprunki/`,
  }
};

const gameConfig = {
  metadata: {
    title: "Sprunki",
    description: "Play Sprunki free online – mix sounds, layer characters, and compose music in this Incredibox-style browser game. No download needed.",
    url: "/sprunki"
  },
  content: sprunkiContent
};

export default function SprunkiPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.8, ratingCount: 241 }),
      generateFAQSchema(sprunkiContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(sprunkiContent.howToPlay, gameConfig.metadata.url),
    ].map(({ "@context": _, ...rest }: any) => rest),
  };

  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
    </>
  );
}
