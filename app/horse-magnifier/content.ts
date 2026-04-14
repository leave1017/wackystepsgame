import { content as globalContent } from "@/config/content";

export const horseMagnifierContent = {
  ...globalContent,
  tags: ["Adventure", "Animal", "Indie", "Casual"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Horse Magnifier",
    game: {
      url: "https://html-classic.itch.zone/html/17024718/index.html",
      title: "horse-magnifier",
      externalUrl: "https://wer8888.itch.io/horse-magnifier",
    },
    coverImage: "/assets/horse-magnifier/horse-magnifier.webp",
    logoImage: "/assets/horse-magnifier/horse-magnifier.webp",
  },

  rating: {
    initialRating: 4.9,
    initialVotes: 386,
  },

  features: {
    title: "Horse Magnifier: Unique Indie Game Features",
    items: [
      {
        title: "Zoom Into the Unexpected",
        description:
          "Horse Magnifier is a one-of-a-kind indie game where you use a magnifying lens to explore a horse up close. Each area you examine hides surreal, absurd, and surprisingly detailed secrets that reward patient curiosity.",
      },
      {
        title: "Completely Free, No Download",
        description:
          "Play Horse Magnifier free online directly in your browser — no download, no sign-up, no install required. Works on desktop and mobile instantly.",
      },
      {
        title: "Relaxing, Curiosity-Driven Gameplay",
        description:
          "There are no timers, no enemies, and no fail states. Horse Magnifier is a pure exploration experience designed to be calming, funny, and endlessly surprising at your own pace.",
      },
      {
        title: "Indie Charm with a Quirky Sense of Humor",
        description:
          "Created by indie developer wer8888, Horse Magnifier embraces weird and experimental game design. It turns the most mundane subject — a horse — into a portal of comedic discovery.",
      },
    ],
  },

  whatIs: {
    title: "What Is Horse Magnifier?",
    description:
      "Horse Magnifier is a quirky, experimental indie browser game developed by wer8888 and originally published on itch.io. The concept is deceptively simple: you are given a magnifying glass and a horse. Your job is to look closer.\n\n" +
      "As you move the magnifying lens across the horse, you uncover layers of unexpected detail — unusual textures, hidden visuals, and bizarre elements that give the game its surreal, comedic identity. The deeper you explore, the stranger and more entertaining the experience becomes.\n\n" +
      "Unlike most games, Horse Magnifier has no objectives, no score, and no enemies. It belongs to a growing category of 'walking simulator' and 'exploration game' design — games that prioritize atmosphere, curiosity, and discovery over challenge or competition.\n\n" +
      "The game is completely free to play in your browser. No download or account is needed. It runs on any modern desktop or mobile browser, making it instantly accessible anywhere you have an internet connection.",
    logo: {
      src: "/assets/horse-magnifier/horse-magnifier-what.webp",
      alt: "Horse Magnifier – Indie Exploration Game",
    },
  },

  howToPlay: {
    title: "How to Play Horse Magnifier",
    description:
      "Horse Magnifier is designed to be instantly playable with zero learning curve.\n\n" +
      "**Basic Controls:**\n" +
      "- **Mouse / Touch Movement:** Move your cursor or finger to glide the magnifying lens across the horse\n" +
      "- **Click / Tap:** Zoom in or interact with specific areas to uncover hidden details\n" +
      "- **Drag:** Smoothly scan across the horse's surface to reveal different zones\n\n" +
      "**Gameplay Tips:**\n" +
      "- Explore every corner — even the smallest areas may hide something unexpected\n" +
      "- Move slowly and deliberately; careful observation reveals subtle elements\n" +
      "- Try approaching from different angles to uncover new surprises\n" +
      "- There is no rush — enjoy the experience entirely at your own pace\n" +
      "- Stay curious: the more you experiment, the more interesting your discoveries become\n\n" +
      "The game has no win condition or timer. Your only goal is to see everything there is to find.",
    image: "/assets/horse-magnifier/horse-magnifier-how.webp",
    imageAlt: "Horse Magnifier – How to Play Guide",
  },

  faq: {
    title: "Frequently Asked Questions – Horse Magnifier",
    items: [
      {
        value: "horse-magnifier-free",
        question: "Is Horse Magnifier free to play?",
        answer:
          "Yes. Horse Magnifier is completely free to play online directly in your browser. No download, no sign-up, and no payment is required. The full game experience is available at no cost.",
      },
      {
        value: "horse-magnifier-how-to-play",
        question: "How do you play Horse Magnifier?",
        answer:
          "Use your mouse or touch screen to move a magnifying lens across a horse. Click or tap to zoom into specific areas and uncover hidden surreal details. There are no missions or time limits — just explore at your own pace and see what you find.",
      },
      {
        value: "horse-magnifier-mobile",
        question: "Can you play Horse Magnifier on mobile?",
        answer:
          "Yes. Horse Magnifier runs in any modern mobile browser using touch controls. Drag your finger to move the magnifying lens and tap to zoom in. No app download is needed.",
      },
      {
        value: "horse-magnifier-developer",
        question: "Who made Horse Magnifier?",
        answer:
          "Horse Magnifier was created by indie developer wer8888 and originally published on itch.io. It is an experimental indie game that explores surreal and comedic game design.",
      },
    ],
  },
};
