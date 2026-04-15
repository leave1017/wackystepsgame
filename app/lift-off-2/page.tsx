import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { liftOff2Content } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Lift Off 2 – Free Online Physics Launch Game",
  description:
    "Play Lift Off 2 free online. Launch your character to the sky, upgrade your rocket, and beat your distance record in this fun physics browser game. No download!",
  openGraph: {
    title: "Lift Off 2 – Free Online Physics Launch Game",
    description:
      "Launch your character higher with every run, upgrade your gear, and beat your records. Free physics browser game — no download needed!",
    type: "website",
    url: `${siteConfig.url}/lift-off-2/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/lift off 2/what is.webp`,
        alt: "Lift Off 2 – Physics Launch Game Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lift Off 2 – Free Online Physics Launch Game",
    description:
      "Launch your character to new heights in this free physics browser game. No download needed — play now!",
    images: [`/assets/lift off 2/what is.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/lift-off-2/`,
  },
};

const gameConfig = {
  metadata: {
    title: "Lift Off 2",
    description:
      "Play Lift Off 2 free online — launch your character as high as possible, upgrade your rocket, and break your records in this addictive physics browser game.",
    url: "/lift-off-2",
  },
  content: liftOff2Content,
};

export default function LiftOff2Page() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.4, ratingCount: 298 }),
      generateFAQSchema(liftOff2Content.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(liftOff2Content.howToPlay, gameConfig.metadata.url),
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
