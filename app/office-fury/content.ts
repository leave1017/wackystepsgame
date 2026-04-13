import { content as globalContent } from "@/config/content";

export const officeFuryContent = {
  ...globalContent,
  tags: ["Action", "Casual", "Office", "Rage"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Office Fury",
    game: {
      url: "https://gamea.azgame.io/office-fury/",
      title: "office-fury",
      externalUrl: "https://gamea.azgame.io/office-fury/",
    },
    gameHeight: "h-[75vh] min-h-[560px]",
    coverImage: "/assets/office-fury/office-fury-what is.webp",
    logoImage: "/assets/office-fury/office-fury-what is.webp",
  },

  rating: {
    initialRating: 4.5,
    initialVotes: 312,
  },

  features: {
    title: "Office Fury: Free Online Action Game Features",
    items: [
      {
        title: "Unleash Your Office Rage",
        description:
          "Office Fury lets you smash, destroy, and wreak havoc through an entire office environment. Take out your frustration on computers, furniture, and everything in between in this wildly satisfying free online action game.",
      },
      {
        title: "3D Physics-Based Destruction",
        description:
          "Built with Unity WebGL, Office Fury delivers realistic 3D physics so every object you throw, smash, or kick reacts authentically. The destruction feels genuinely satisfying and plays directly in your browser.",
      },
      {
        title: "Free to Play — No Download Needed",
        description:
          "Office Fury is completely free to play in your browser with no installation, no sign-up, and no payment required. Open the page and start destroying instantly on any modern desktop or mobile browser.",
      },
      {
        title: "Unblocked and Instantly Accessible",
        description:
          "Office Fury is fully unblocked, meaning you can play it from any network including school and work. No VPN required — just open your browser and let the fury begin.",
      },
    ],
  },

  whatIs: {
    title: "What Is Office Fury?",
    description:
      "Office Fury is a free online 3D destruction and rage game where you are let loose inside an office with one mission: cause as much chaos as possible. Smash monitors, flip desks, throw chairs, and demolish everything in sight without any rules or consequences.\n\n" +
      "The game is built with Unity WebGL, delivering smooth 3D physics-based destruction directly in your browser — no download or installation needed. Every object in the office reacts to your actions with realistic physics, making each playthrough feel chaotic and satisfying.\n\n" +
      "Office Fury belongs to the stress-relief and destruction game genre — games designed to be purely fun and cathartic. There are no timers forcing you to rush and no penalties for breaking things. The more destruction, the better.\n\n" +
      "The game is completely free and fully unblocked, accessible from any network. It is one of the most entertaining free browser games available for anyone who has ever wanted to take out their frustrations in a consequence-free virtual office.",
    logo: {
      src: "/assets/office-fury/office-fury-what is.webp",
      alt: "Office Fury – Free Online 3D Office Destruction Game",
    },
  },

  howToPlay: {
    title: "How to Play Office Fury",
    description:
      "Office Fury is easy to pick up — the only goal is maximum destruction.\n\n" +
      "**Movement Controls:**\n" +
      "- **W / A / S / D** or **Arrow Keys**: Move around the office\n" +
      "- **Mouse**: Look around and aim\n" +
      "- **Left Click**: Punch or grab objects\n" +
      "- **Right Click**: Throw or interact with items\n" +
      "- **Space**: Jump\n\n" +
      "**Tips for Maximum Destruction:**\n" +
      "- Target electronics first — computers and monitors shatter satisfyingly\n" +
      "- Chain reactions create bigger chaos — knock one thing into another\n" +
      "- Explore every room to find new objects to destroy\n" +
      "- Throwing heavy objects creates the most dramatic physics reactions\n" +
      "- There are no rules — experiment freely and find your own path to destruction\n\n" +
      "The game has no win condition. Your only objective is to have fun.",
    image: "/assets/office-fury/office-fury-how to.webp",
    imageAlt: "Office Fury – How to Play Guide",
  },

  faq: {
    title: "Office Fury – Frequently Asked Questions",
    items: [
      {
        value: "office-fury-free",
        question: "Is Office Fury free to play?",
        answer:
          "Yes. Office Fury is completely free to play online with no download, no sign-up, and no payment required. The full game runs directly in your browser at no cost.",
      },
      {
        value: "office-fury-unblocked",
        question: "Is Office Fury unblocked?",
        answer:
          "Yes. Office Fury is fully unblocked and accessible from any network including school and work. No VPN or special access needed — just open your browser and play.",
      },
      {
        value: "office-fury-how-to-play",
        question: "How do you play Office Fury?",
        answer:
          "Use W / A / S / D to move and your mouse to look around. Left click to punch or grab objects, right click to throw them, and Space to jump. The goal is simply to destroy as much of the office as possible — there are no rules or penalties.",
      },
      {
        value: "office-fury-mobile",
        question: "Can you play Office Fury on mobile?",
        answer:
          "Yes. Office Fury runs in modern mobile browsers via Unity WebGL. Touch controls are supported on Android and iOS devices, so you can play without downloading an app.",
      },
    ],
  },
};
