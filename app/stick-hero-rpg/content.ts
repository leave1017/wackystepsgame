import { content as globalContent } from "@/config/content";

export const stickHeroRpgContent = {
  ...globalContent,
  tags: ["Action", "RPG", "Adventure", "Stick Figure"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Stick Hero RPG",
    game: {
      url: "https://zapgames.io/stick-hero-rpg.embed",
      title: "stick-hero-rpg",
      externalUrl: "https://zapgames.io/stick-hero-rpg",
    },
    coverImage: "/assets/stick hero rpg/what is.webp",
    logoImage: "/assets/stick hero rpg/what is.webp",
  },

  rating: {
    initialRating: 4.6,
    initialVotes: 342,
  },

  features: {
    title: "Stick Hero RPG: Key Features",
    items: [
      {
        title: "Classic Stick Figure Combat",
        description:
          "Battle hordes of enemies using fast, fluid stick figure animations. Stick Hero RPG captures the satisfying crunch of classic stickman fighting with modern RPG depth added on top.",
      },
      {
        title: "Level Up Your Hero",
        description:
          "Gain experience from every fight and level up your stick hero. Unlock new abilities, boost your stats, and customize your fighting style as you progress through increasingly tough enemies.",
      },
      {
        title: "Free to Play in Browser",
        description:
          "Play Stick Hero RPG completely free online — no download, no installation, no account required. Jump straight into the action from any modern desktop browser.",
      },
      {
        title: "Endless Replayability",
        description:
          "With varied enemy types, multiple upgrade paths, and escalating difficulty, every run in Stick Hero RPG feels fresh. Can you master every ability and defeat the final boss?",
      },
    ],
  },

  whatIs: {
    title: "What Is Stick Hero RPG?",
    description:
      "Stick Hero RPG is a free online action-RPG browser game that blends classic stickman combat with role-playing progression mechanics. You control a stick figure hero on a mission to battle through waves of enemies, bosses, and obstacles using timing-based attacks and special abilities.\n\n" +
      "Unlike traditional beat-em-ups, Stick Hero RPG adds a layer of RPG depth: your character gains experience points after each fight, levels up, and can unlock a growing arsenal of skills and stat upgrades. This means every session feels rewarding — you always come away stronger than before.\n\n" +
      "The game features smooth stick figure animations that make combat visually satisfying, while the escalating difficulty keeps veterans challenged. Whether you're a fan of stickman games, action RPGs, or casual browser games, Stick Hero RPG delivers an engaging experience without any barrier to entry.\n\n" +
      "The game runs entirely in your browser via ZapGames. No download, plugin, or account is needed — just click Play and start fighting.",
    logo: {
      src: "/assets/stick hero rpg/what is.webp",
      alt: "Stick Hero RPG – Action RPG Browser Game",
    },
  },

  howToPlay: {
    title: "How to Play Stick Hero RPG",
    description:
      "Stick Hero RPG is easy to pick up but rewards skilled play.\n\n" +
      "**Basic Controls:**\n" +
      "- **Arrow Keys / WASD:** Move your stick hero left and right\n" +
      "- **Z / J:** Basic attack — strike nearby enemies\n" +
      "- **X / K:** Special ability — use unlocked skills\n" +
      "- **Space:** Jump — dodge attacks and reach higher platforms\n\n" +
      "**RPG Tips:**\n" +
      "- Defeat every enemy in a stage to maximize XP gain\n" +
      "- Prioritize upgrading attack speed early — it makes combos easier\n" +
      "- Watch enemy attack animations; most have a brief wind-up you can dodge\n" +
      "- Boss fights require patience — learn their patterns before committing\n" +
      "- Spend skill points wisely; a balanced build handles more enemy types\n\n" +
      "Progress is automatic — every enemy you defeat brings you closer to the next level-up.",
    image: "/assets/stick hero rpg/how to.webp",
    imageAlt: "Stick Hero RPG – How to Play Guide",
  },

  faq: {
    title: "Frequently Asked Questions – Stick Hero RPG",
    items: [
      {
        value: "stick-hero-rpg-free",
        question: "Is Stick Hero RPG free to play?",
        answer:
          "Yes. Stick Hero RPG is completely free to play in your browser. No download, sign-up, or payment is required — just visit the page and click Play.",
      },
      {
        value: "stick-hero-rpg-controls",
        question: "What are the controls for Stick Hero RPG?",
        answer:
          "Use Arrow Keys or WASD to move, Z or J to attack, X or K to use special abilities, and Space to jump. Controls are displayed in-game as well.",
      },
      {
        value: "stick-hero-rpg-rpg-elements",
        question: "What RPG elements does Stick Hero RPG have?",
        answer:
          "The game features experience points, character leveling, stat upgrades, and unlockable skills. Defeating enemies earns XP that powers up your stick hero over time.",
      },
      {
        value: "stick-hero-rpg-mobile",
        question: "Can I play Stick Hero RPG on mobile?",
        answer:
          "Stick Hero RPG is designed for desktop play with keyboard controls. Mobile support may be limited — for the best experience, play on a desktop or laptop browser.",
      },
    ],
  },
};
