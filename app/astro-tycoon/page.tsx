import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { astroTycoonContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Astro Tycoon – Free Online Space Tycoon Game",
  description:
    "Play Astro Tycoon free online. Build your space empire, launch rockets, and colonize planets in this idle tycoon game. No download — play unblocked now!",
  openGraph: {
    title: "Astro Tycoon – Free Online Space Tycoon Game",
    description:
      "Build a space empire in this free idle tycoon game. Launch rockets, colonize planets, no download needed — play unblocked in your browser.",
    type: "website",
    url: `${siteConfig.url}/astro-tycoon/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/astro tycoon/astro-tycoon-what is.webp`,
        alt: "Astro Tycoon – Free Online Space Tycoon Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Tycoon – Free Online Space Tycoon Game",
    description:
      "Build your space empire in this free unblocked idle tycoon game. No download needed!",
    images: [`/assets/astro tycoon/astro-tycoon-what is.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/astro-tycoon/`,
  },
};

const gameConfig = {
  metadata: {
    title: "Astro Tycoon",
    description:
      "Play Astro Tycoon free online — build your space empire, launch rockets, and colonize planets in this idle tycoon game. No download required.",
    url: "/astro-tycoon",
  },
  content: astroTycoonContent,
};

export default function AstroTycoonPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.6, ratingCount: 278 }),
      generateFAQSchema(astroTycoonContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(astroTycoonContent.howToPlay, gameConfig.metadata.url),
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
