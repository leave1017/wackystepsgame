import { siteConfig } from "@/config/site";

export const generateGameSchema = (game: {
  title: string;
  description: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.description,
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game",
    "gamePlatform": ["Web Browser"],
    "url": `${siteConfig.url}${game.url}`,
    "inLanguage": "en",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteConfig.url}/assets/wacky-steps/wacky-steps-logo.png`,
    "width": 512,
    "height": 512
  },
  "sameAs": [
    `https://twitter.com/${siteConfig.social.twitter}`,
    `https://facebook.com/${siteConfig.social.facebook}`
  ]
};

import { content } from "@/config/content";

export const howToPlaySchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": content.howToPlay.title,
  "url": siteConfig.url,
  "inLanguage": "en",
  "image": {
    "@type": "ImageObject",
    "url": content.howToPlay.image
  },
  "step": [{
    "@type": "HowToStep",
    "position": "1",
    "name": content.howToPlay.title,
    "text": content.howToPlay.description,
    "image": content.howToPlay.image
  }]
};

export const generateHowToSchema = (
  howToPlay: { title: string; description: string; image: string },
  pageUrl: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howToPlay.title,
    "url": `${siteConfig.url}${pageUrl}`,
    "inLanguage": "en",
    "image": {
      "@type": "ImageObject",
      "url": howToPlay.image
    },
    "step": [{
      "@type": "HowToStep",
      "position": "1",
      "name": howToPlay.title,
      "text": howToPlay.description,
      "image": howToPlay.image
    }]
  };
};

export const generateBreadcrumbSchema = (title: string, pageUrl: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Games", "item": `${siteConfig.url}/#other-games` },
      { "@type": "ListItem", "position": 3, "name": title, "item": `${siteConfig.url}${pageUrl}` }
    ]
  };
};

export const generateFAQSchema = (items: readonly { question: string; answer: string; value: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
};

export const generateRatingSchema = (rating: number, votes: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": siteConfig.name,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": votes,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
};



