import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { pokemonGammaEmeraldContent } from "./content";
import { generateGameSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Pokemon Gamma Emerald - Free Online ROM Hack`,
  description: "Play Pokémon Gamma Emerald, an enhanced Emerald rom hack, online for free! Discover new Pokémon, updated graphics & a challenging adventure. Play now!",
  openGraph: {
    title: `Pokemon Gamma Emerald Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play the enhanced Pokemon Gamma Emerald version online for free.",
    type: 'website',
    url: `${siteConfig.url}/pokemon-gamma-emerald`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/pokemon-gamma-emerald/pokemon-gamma-emerald-logo.webp`,
        alt: `Pokemon Gamma Emerald Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokemon Gamma Emerald - Free Online Rom Hack',
    description: 'Play Pokemon Gamma Emerald enhanced version online for free without download',
    images: [`/assets/pokemon-gamma-emerald/pokemon-gamma-emerald-logo.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/pokemon-gamma-emerald`,
  }
};

const gameConfig = {
  metadata: {
    title: "Pokemon Gamma Emerald",
    description: "Enhanced version of Pokemon Emerald with new features and content.",
    url: "/pokemon-gamma-emerald"
  },
  content: pokemonGammaEmeraldContent
};

export default function PokemonGammaEmeraldPage() {
  return (
    <>
      <GamePageTemplate gameConfig={gameConfig} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGameSchema(gameConfig.metadata)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(pokemonGammaEmeraldContent.faq.items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(gameConfig.metadata.title, gameConfig.metadata.url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(pokemonGammaEmeraldContent.howToPlay, gameConfig.metadata.url)) }} />
    </>
  );
}
