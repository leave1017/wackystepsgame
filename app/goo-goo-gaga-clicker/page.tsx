import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { gooGooGagaClickerContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Goo Goo Gaga Clicker – Free Online Idle Clicker Game`,
  description: "Play Goo Goo Gaga Clicker free online. Unlock 16 meme characters, earn points, and ascend your clicking empire. No download needed — play in your browser now.",
  openGraph: {
    title: `Goo Goo Gaga Clicker – Free Online Idle Clicker Game`,
    description: "Play Goo Goo Gaga Clicker free online. Unlock 16 meme characters, no download needed.",
    type: 'website',
    url: `${siteConfig.url}/goo-goo-gaga-clicker`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/goo-goo-gaga-clicker/goo-goo-gaga-clicker-logo.png`,
        alt: `Goo Goo Gaga Clicker Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goo Goo Gaga Clicker – Free Online Idle Clicker Game',
    description: 'Play Goo Goo Gaga Clicker free online — no download required!',
    images: [`/assets/goo-goo-gaga-clicker/goo-goo-gaga-clicker-logo.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/goo-goo-gaga-clicker`,
  }
};

const gameConfig = {
  metadata: {
    title: "Goo Goo Gaga Clicker",
    description: "Play Goo Goo Gaga Clicker free online — unlock 16 meme characters and build your idle empire. No download required.",
    url: "/goo-goo-gaga-clicker"
  },
  content: gooGooGagaClickerContent
};

export default function GooGooGagaClickerPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.8, ratingCount: 203 }),
      generateFAQSchema(gooGooGagaClickerContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(gooGooGagaClickerContent.howToPlay, gameConfig.metadata.url),
    ].map(({ "@context": _, ...rest }: any) => rest),
  };

  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
    </>
  );
}
