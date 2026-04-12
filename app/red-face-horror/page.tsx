import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { redFaceHorrorContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Red Face Horror – Free Online 3D Horror Game",
  description:
    "Play Red Face Horror free online. Survive the terrifying Red Face creature in this 3D browser horror game. No download needed — unblocked and instant play!",
  openGraph: {
    title: "Red Face Horror – Free Online 3D Horror Game",
    description:
      "Survive the Red Face creature in this free 3D browser horror game. No download needed — play instantly, fully unblocked.",
    type: "website",
    url: `${siteConfig.url}/red-face-horror`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/Red face horror/Red face horror.webp`,
        alt: "Red Face Horror – Free Online 3D Horror Game Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Face Horror – Free Online 3D Horror Game",
    description:
      "Survive the Red Face in this free unblocked 3D horror browser game. No download needed!",
    images: [`/assets/Red face horror/Red face horror.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/red-face-horror`,
  },
};

const gameConfig = {
  metadata: {
    title: "Red Face Horror",
    description:
      "Play Red Face Horror free online — survive the terrifying Red Face creature in this 3D browser horror game. No download required.",
    url: "/red-face-horror",
  },
  content: redFaceHorrorContent,
};

export default function RedFaceHorrorPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.2, ratingCount: 294 }),
      generateFAQSchema(redFaceHorrorContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(redFaceHorrorContent.howToPlay, gameConfig.metadata.url),
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
