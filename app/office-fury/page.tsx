import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { officeFuryContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Office Fury – Free Online Game",
  description:
    "Play Office Fury free online. Smash, destroy, and wreak havoc through an entire office in this chaotic 3D rage game. No download — play unblocked now!",
  openGraph: {
    title: "Office Fury – Free Online Game",
    description:
      "Smash everything in sight in this free 3D office destruction game. No download needed — play unblocked instantly in your browser.",
    type: "website",
    url: `${siteConfig.url}/office-fury/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/office-fury/office-fury-what is.webp`,
        alt: "Office Fury – Free Online Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Fury – Free Online Game",
    description:
      "Smash everything in this free unblocked 3D office rage game. No download needed!",
    images: [`/assets/office-fury/office-fury-what is.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/office-fury/`,
  },
};

const gameConfig = {
  metadata: {
    title: "Office Fury",
    description:
      "Play Office Fury free online — smash and destroy everything in this chaotic 3D office rage game. No download required.",
    url: "/office-fury",
  },
  content: officeFuryContent,
};

export default function OfficeFuryPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.5, ratingCount: 312 }),
      generateFAQSchema(officeFuryContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(officeFuryContent.howToPlay, gameConfig.metadata.url),
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
