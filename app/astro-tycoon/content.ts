import { content as globalContent } from "@/config/content";

export const astroTycoonContent = {
  ...globalContent,
  tags: ["Tycoon", "Idle", "Space", "Strategy", "Casual"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Astro Tycoon",
    game: {
      url: "https://gamea.azgame.io/astro-tycoon/",
      title: "astro-tycoon",
      externalUrl: "https://gamea.azgame.io/astro-tycoon/",
    },
    gameHeight: "h-[75vh] min-h-[560px]",
    coverImage: "/assets/astro tycoon/astro-tycoon-what is.webp",
    logoImage: "/assets/astro tycoon/astro-tycoon-what is.webp",
  },

  rating: {
    initialRating: 4.6,
    initialVotes: 278,
  },

  features: {
    title: "Astro Tycoon: Free Online Space Tycoon Game Features",
    items: [
      {
        title: "Build Your Space Empire",
        description:
          "Astro Tycoon puts you in charge of building and managing a thriving space business. Launch rockets, expand to new planets, hire crew, and grow your interstellar empire from a small startup into a galactic powerhouse.",
      },
      {
        title: "Deep Idle Progression System",
        description:
          "Earn resources passively while away and return to major upgrades. Astro Tycoon blends active management with idle mechanics so your empire keeps growing even when you're not playing.",
      },
      {
        title: "Free to Play — No Download Needed",
        description:
          "Astro Tycoon is completely free to play in your browser with no installation, no sign-up, and no payment required. Start building your space empire instantly on any modern desktop or mobile browser.",
      },
      {
        title: "Unblocked Anywhere",
        description:
          "Astro Tycoon is fully unblocked and playable from any network including school and work. No VPN needed — open your browser and launch your first rocket right away.",
      },
    ],
  },

  whatIs: {
    title: "What Is Astro Tycoon?",
    description:
      "Astro Tycoon is a free online space-themed tycoon and idle simulation game playable directly in your browser. You start with a modest space operation and gradually build it into a vast interstellar empire by launching rockets, colonizing planets, managing resources, and unlocking new technologies.\n\n" +
      "The game combines the addictive progression of idle clicker games with the strategic depth of tycoon simulators. Every decision you make — which planet to expand to, which upgrades to prioritize, how to allocate your crew — shapes how quickly your empire grows.\n\n" +
      "Astro Tycoon is built with Unity WebGL, delivering smooth 3D visuals and responsive gameplay directly in your browser without any download or installation. It works on both desktop and mobile devices.\n\n" +
      "The game is completely free and fully unblocked, making it accessible from any network. Whether you have five minutes or five hours, Astro Tycoon scales to your session — check in for quick upgrades or settle in for a long strategic session.",
    logo: {
      src: "/assets/astro tycoon/astro-tycoon-what is.webp",
      alt: "Astro Tycoon – Free Online Space Tycoon Game",
    },
  },

  howToPlay: {
    title: "How to Play Astro Tycoon",
    description:
      "Astro Tycoon is designed to be intuitive — start small and grow your space empire at your own pace.\n\n" +
      "**Getting Started:**\n" +
      "- **Click / Tap**: Interact with buildings, launch rockets, and collect resources\n" +
      "- **Mouse Drag / Touch Drag**: Pan around your base and explore the map\n" +
      "- **Scroll / Pinch**: Zoom in and out to see your empire\n\n" +
      "**Core Gameplay Loop:**\n" +
      "- Collect resources and spend them on new buildings and upgrades\n" +
      "- Launch rockets to expand to new planets and unlock better resources\n" +
      "- Hire and assign crew to automate resource collection passively\n" +
      "- Research new technologies to unlock powerful multipliers\n" +
      "- Keep expanding — there is always a bigger planet and a better upgrade waiting\n\n" +
      "**Strategy Tips:**\n" +
      "- Prioritize passive income upgrades early to keep resources flowing while idle\n" +
      "- Always keep a rocket ready to launch — expansion is the fastest path to growth\n" +
      "- Balance spending between immediate upgrades and saving for bigger unlocks",
    image: "/assets/astro tycoon/astro-tycoon-how to.webp",
    imageAlt: "Astro Tycoon – How to Play Guide",
  },

  faq: {
    title: "Astro Tycoon – Frequently Asked Questions",
    items: [
      {
        value: "astro-tycoon-free",
        question: "Is Astro Tycoon free to play?",
        answer:
          "Yes. Astro Tycoon is completely free to play online with no download, no sign-up, and no payment required. The full game runs in your browser at no cost.",
      },
      {
        value: "astro-tycoon-unblocked",
        question: "Is Astro Tycoon unblocked?",
        answer:
          "Yes. Astro Tycoon is fully unblocked and accessible from any network including school and work. No VPN needed — just open your browser and start playing.",
      },
      {
        value: "astro-tycoon-how-to-play",
        question: "How do you play Astro Tycoon?",
        answer:
          "Click or tap to collect resources, construct buildings, and launch rockets. Expand to new planets to unlock better resources and upgrades. Hire crew to generate passive income automatically. The goal is to build the largest space empire possible.",
      },
      {
        value: "astro-tycoon-mobile",
        question: "Can you play Astro Tycoon on mobile?",
        answer:
          "Yes. Astro Tycoon runs in modern mobile browsers on Android and iOS via Unity WebGL. Use touch controls to tap, drag, and pinch-zoom your way through the game — no app download needed.",
      },
    ],
  },
};
