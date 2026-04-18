import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { treesHateYouContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Trees Hate You – Free Online Survival Game`,
  description: "Play Trees Hate You free online – dodge and outlast waves of angry trees in this addictive browser survival game. No download, play instantly.",
  openGraph: {
    title: `Trees Hate You – Free Online Survival Game`,
    description: "Play Trees Hate You free online – survive waves of angry trees. No download needed.",
    type: 'website',
    url: `${siteConfig.url}/trees-hate-you/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/trees hate you/what is.webp`,
        alt: `Trees Hate You Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trees Hate You – Free Online Survival Game',
    description: 'Play Trees Hate You free online – survive the forest in your browser. No download required!',
    images: [`/assets/trees hate you/what is.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/trees-hate-you/`,
  }
};

const gameConfig = {
  metadata: {
    title: "Trees Hate You",
    description: "Play Trees Hate You free online – dodge and outlast waves of angry trees in this addictive browser survival game. No download, play instantly.",
    url: "/trees-hate-you"
  },
  content: treesHateYouContent
};

export default function TreesHateYouPage() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema({ ...gameConfig.metadata, ratingValue: 4.6, ratingCount: 158 }),
      generateFAQSchema(treesHateYouContent.faq.items),
      generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url),
      generateHowToSchema(treesHateYouContent.howToPlay, gameConfig.metadata.url),
    ].map(({ "@context": _, ...rest }: any) => rest),
  };

  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
    </>
  );
}
