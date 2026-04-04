import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { crazyCattle3DContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Crazy Cattle 3D - Free Online Unblocked Game`,
  description: "Play Crazy Cattle 3D free online! Control a wild cow in this explosive physics-based 3D action game. No download needed – play instantly in your browser.",
  openGraph: {
    title: `Crazy Cattle 3D - Free Online Unblocked Game`,
    description: "Play Crazy Cattle 3D free online – an explosive physics-based action game. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/crazy-cattle-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/crazycattle3d-howto.jpg`,
        alt: `Crazy Cattle 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crazy Cattle 3D - Free Online Unblocked Game',
    description: 'Play Crazy Cattle 3D free online – no download required!',
    images: [`/assets/crazycattle3d-howto.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/crazy-cattle-3d`,
  }
};

const gameConfig = {
  metadata: {
    title: "Crazy Cattle 3D",
    description: "Play Crazy Cattle 3D – a free physics-based action game right in your browser. No downloads required.",
    url: "/crazy-cattle-3d"
  },
  content: crazyCattle3DContent
};

export default function CrazyCattle3DPage() {
  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGameSchema(gameConfig.metadata)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(crazyCattle3DContent.faq.items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(crazyCattle3DContent.howToPlay, gameConfig.metadata.url)) }} />
    </>
  );
}
