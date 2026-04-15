import { content as globalContent } from "@/config/content";

export const liftOff2Content = {
  ...globalContent,
  tags: ["Casual", "Arcade", "Flying", "Physics"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Lift Off 2",
    game: {
      url: "https://gamea.azgame.io/lift-off-2/",
      title: "lift-off-2",
      externalUrl: "https://azgame.io/lift-off-2/",
    },
    coverImage: "/assets/lift off 2/what is.webp",
    logoImage: "/assets/lift off 2/what is.webp",
  },

  rating: {
    initialRating: 4.4,
    initialVotes: 298,
  },

  features: {
    title: "Lift Off 2: Key Features",
    items: [
      {
        title: "Physics-Based Launch Gameplay",
        description:
          "Lift Off 2 challenges you to launch your character as high and as far as possible using carefully timed power and angle. Every launch feels different thanks to a realistic physics engine that rewards precision.",
      },
      {
        title: "Upgrade Your Equipment",
        description:
          "Earn coins from each flight and invest them in upgrades — better rockets, improved fuel, stronger boosters, and more. Each upgrade meaningfully improves your launch distance and height.",
      },
      {
        title: "Free Browser Game — No Download",
        description:
          "Play Lift Off 2 instantly free in your browser. No download, no installation, and no account needed. Just click Play and start launching!",
      },
      {
        title: "Endless Progression Loop",
        description:
          "Lift Off 2 features satisfying idle-style progression. Each run earns resources, which fund upgrades, which enable longer flights. The loop keeps you coming back for one more launch.",
      },
    ],
  },

  whatIs: {
    title: "What Is Lift Off 2?",
    description:
      "Lift Off 2 is a free online physics-based launch game where your goal is to propel a character as high into the sky as possible. Using a combination of precise timing, angle adjustment, and increasingly powerful equipment, you work to break your own distance records with every flight.\n\n" +
      "The game belongs to the popular 'launcher' genre of casual browser games — think Burrito Bison or Learn to Fly — where each run generates resources you can reinvest into better gear. Over time, your rocket becomes powerful enough to reach stratospheric heights.\n\n" +
      "Lift Off 2 builds on the original with improved visuals, more upgrades, and tighter physics. Whether you're a fan of idle games, casual arcade games, or satisfying progression loops, Lift Off 2 delivers a quick-to-learn but hard-to-put-down experience.\n\n" +
      "The game is completely free to play in your browser via AZGame. No download, plugin, or registration required.",
    logo: {
      src: "/assets/lift off 2/what is.webp",
      alt: "Lift Off 2 – Physics Launch Browser Game",
    },
  },

  howToPlay: {
    title: "How to Play Lift Off 2",
    description:
      "Lift Off 2 is simple to start but rewarding to master.\n\n" +
      "**Basic Controls:**\n" +
      "- **Mouse Click / Space:** Launch your character — timing matters!\n" +
      "- **Arrow Keys / Mouse:** Adjust angle before launch for optimal trajectory\n" +
      "- **Click mid-air:** Activate boosters to extend your flight\n\n" +
      "**Tips for Maximum Height:**\n" +
      "- Aim for a 45° launch angle — it typically maximizes both distance and height\n" +
      "- Spend your coins on fuel upgrades first — more fuel means more booster time\n" +
      "- Activate boosters at the peak of your arc for maximum upward extension\n" +
      "- Don't skip small upgrades — cumulative improvements add up fast\n" +
      "- Watch for bonus coins during flight — collecting them speeds up your upgrade progress\n\n" +
      "The goal is simple: go higher with every launch and unlock the best equipment available.",
    image: "/assets/lift off 2/how to.webp",
    imageAlt: "Lift Off 2 – How to Play Guide",
  },

  faq: {
    title: "Frequently Asked Questions – Lift Off 2",
    items: [
      {
        value: "lift-off-2-free",
        question: "Is Lift Off 2 free to play?",
        answer:
          "Yes. Lift Off 2 is completely free to play online in your browser. No download, sign-up, or payment is required — just open the page and start launching.",
      },
      {
        value: "lift-off-2-how-to-play",
        question: "How do you play Lift Off 2?",
        answer:
          "Click or press Space to launch your character at an angle, then use boosters mid-air to extend your flight. Earn coins each run and spend them on upgrades to reach greater heights.",
      },
      {
        value: "lift-off-2-vs-original",
        question: "What is different about Lift Off 2 compared to the original?",
        answer:
          "Lift Off 2 features improved physics, more upgrade options, better visuals, and additional mid-flight mechanics. It expands on the original launcher formula with a richer progression system.",
      },
      {
        value: "lift-off-2-mobile",
        question: "Can I play Lift Off 2 on mobile?",
        answer:
          "Lift Off 2 supports touch controls on mobile browsers. Tap to launch and tap again to activate boosters. For the best experience, a stable internet connection is recommended.",
      },
    ],
  },
};
