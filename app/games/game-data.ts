export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  isNew?: boolean;
  isHot?: boolean;
}

export const games: Record<string, Game> = {
  "wacky-steps": {
    id: "wacky-steps",
    title: "Wacky Steps",
    description: "Play Wacky Steps free online – a ragdoll walking game where you avoid cracks, dodge obstacles, and walk as far as you can!",
    image: "/assets/wacky-steps/wacky-steps.webp",
    url: "/",
    tags: ["action", "casual"],
    isHot: true,
  },
  "goo-goo-gaga-clicker": {
    id: "goo-goo-gaga-clicker",
    title: "Goo Goo Gaga Clicker",
    description: "Click your way through the viral Goo Goo Gaga meme universe! Unlock 16 bizarre characters, upgrade your clicking empire, and embrace the absurdity.",
    image: "/assets/goo-goo-gaga-clicker/goo-goo-gaga-clicker.webp",
    url: "/goo-goo-gaga-clicker",
    tags: ["tycoon", "casual"],
    isHot: true,
  },
  "brainrot-clicker": {
    id: "brainrot-clicker",
    title: "Italian Brainrot Clicker",
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    image: "/assets/brainrot-clicker/brainrot-clicker.webp",
    url: "/brainrot-clicker",
    tags: ["tycoon", "casual"],
    isHot: true,
  },
  "basketball-bros-unblocked": {
    id: "basketball-bros-unblocked",
    title: "Basketball Bros Unblocked",
    description: "Experience exciting basketball action with unique characters. Play online for free, no download required!",
    image: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.webp",
    url: "/basketball-bros-unblocked",
    tags: ["sports", "action"],
  },
  "horse-magnifier": {
    id: "horse-magnifier",
    title: "Horse Magnifier",
    description: "Zoom into a horse and uncover surreal hidden details in this quirky free indie exploration game. No download needed!",
    image: "/assets/horse-magnifier/horse-magnifier.webp",
    url: "/horse-magnifier",
    tags: ["adventure", "casual"],
    isNew: true,
  },
  "red-face-horror": {
    id: "red-face-horror",
    title: "Red Face Horror",
    description: "Survive the terrifying Red Face creature in this free online 3D horror game. No download needed — play unblocked in your browser!",
    image: "/assets/Red face horror/Red face horror.webp",
    url: "/red-face-horror",
    tags: ["horror", "action"],
    isNew: true,
  },
  "office-fury": {
    id: "office-fury",
    title: "Office Fury",
    description: "Smash, destroy, and wreak havoc through an entire office in this free online 3D rage game. No download — play unblocked now!",
    image: "/assets/office-fury/office-fury-what is.webp",
    url: "/office-fury",
    tags: ["action", "casual"],
    isNew: true,
  },
  "astro-tycoon": {
    id: "astro-tycoon",
    title: "Astro Tycoon",
    description: "Build your space empire, launch rockets, and colonize planets in this free online idle tycoon game. No download needed!",
    image: "/assets/astro tycoon/astro-tycoon-what is.webp",
    url: "/astro-tycoon",
    tags: ["tycoon", "casual"],
    isNew: true,
  },
};

export function getOtherGames(): Game[] {
  return Object.values(games);
}

export function getGamesByCategory(category: string): Game[] {
  if (category === "new") return Object.values(games).filter(g => g.isNew);
  if (category === "hot") return Object.values(games).filter(g => g.isHot);
  return Object.values(games).filter(g => g.tags.includes(category));
}

export const categories = [
  { slug: "new",       label: "New Games",  icon: "🆕" },
  { slug: "hot",       label: "Hot Games",  icon: "🔥" },
  { slug: "action",    label: "Action",     icon: "🎯" },
  { slug: "casual",    label: "Casual",     icon: "🎲" },
  { slug: "tycoon",    label: "Tycoon",     icon: "💰" },
  { slug: "sports",    label: "Sports",     icon: "🏆" },
  { slug: "horror",    label: "Horror",     icon: "👻" },
  { slug: "adventure", label: "Adventure",  icon: "🌟" },
];
