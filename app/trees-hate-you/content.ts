import { content as globalContent } from "@/config/content";

export const treesHateYouContent = {
  ...globalContent,
  tags: ["Survival", "Action", "Casual", "Indie"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Trees Hate You",
    game: {
      url: 'https://www.miniplay.com/embed/trees-hate-you',
      title: "trees-hate-you",
      externalUrl: 'https://www.miniplay.com/embed/trees-hate-you'
    },
    coverImage: "/assets/trees hate you/what is.webp",
    logoImage: "/assets/trees hate you/what is.webp",
  },

  features: {
    title: "Trees Hate You: Game Features",
    items: [
      {
        title: "Frantic Survival Gameplay",
        description: "Trees Hate You drops you into an environment where the trees themselves are out to get you. Waves of hostile trees close in from every direction, and your only objective is to survive as long as possible while staying mobile and avoiding their relentless advance."
      },
      {
        title: "Simple Controls, High Skill Ceiling",
        description: "The control scheme is intentionally minimal — move and survive. But the difficulty scales quickly, and mastering the movement patterns that keep you alive longest takes real skill. The gap between a first-time player and a veteran shows clearly in the run length."
      },
      {
        title: "Escalating Difficulty",
        description: "Trees Hate You gets progressively harder the longer you survive. Early waves give you room to breathe and learn the game's rhythm. Later waves are relentless, requiring split-second decisions and precise movement to avoid being cornered."
      },
      {
        title: "Instant Play, No Download",
        description: "Trees Hate You runs entirely in your browser with no installation, no account, and no loading times. Open the page and start playing within seconds. Fully unblocked and accessible on any modern device."
      }
    ]
  },

  whatIs: {
    title: "What is Trees Hate You?",
    description: "Trees Hate You is a free online survival browser game where your greatest enemy is the forest itself. The premise is simple and immediately understood: trees are advancing on you from all sides, and your job is to stay alive for as long as possible by moving, dodging, and avoiding their relentless assault. The game strips survival mechanics down to their essentials — no weapons, no complex systems, just you against an increasingly aggressive woodland trying to end your run.\n\n" +
      "The game's appeal lies in how quickly the tension escalates. Early in a run, the trees move slowly and give you room to breathe, learn the layout, and develop a feel for movement. A few waves later, the pacing intensifies noticeably. What felt manageable becomes claustrophobic, and the decisions that seemed easy — which direction to move, where the gaps are — suddenly demand immediate, precise reactions. This escalating pressure is what makes Trees Hate You so replayable: every run feels winnable until the moment it isn't.\n\n" +
      "Trees Hate You embraces the indie game tradition of doing one thing extremely well rather than many things moderately. There are no menus to navigate, no upgrades to manage, no story to follow. The game respects your time by putting you directly into the action and letting the gameplay speak for itself. This focus makes it ideal for short sessions — a five-minute break is enough for several meaningful runs — but it's equally capable of pulling you into extended sessions as you push for a new personal best.\n\n" +
      "The visual design complements the gameplay tone perfectly. The trees are characterful and slightly menacing, and the environment communicates danger clearly without cluttering the screen. When the forest closes in, the visual pressure matches the mechanical pressure — you can see the walls tightening just as you feel them in your movement options narrowing.\n\n" +
      "Play Trees Hate You free online — no download, no login, works on any browser. Survive the forest as long as you can and see how far your reflexes will carry you.",
    logo: {
      src: "/assets/trees hate you/what is.webp",
      alt: "Trees Hate You – Free Online Survival Browser Game"
    }
  },

  howToPlay: {
    title: "How to Play Trees Hate You",
    description: "**Understand the Objective:** Your only goal is survival. Trees will advance toward you from multiple directions, and the run ends when one reaches you. There's no win condition — the game is about lasting as long as possible and beating your previous best distance or time.\n\n" +
      "**Learn the Movement Controls:** Use arrow keys or WASD to move your character around the play area. Movement is the only tool available to you, so developing a feel for how quickly your character responds and how much space you need to clear incoming trees is the core skill of the game.\n\n" +
      "**Read the Wave Patterns:** Trees don't just come from one direction — they approach from multiple angles simultaneously. Train yourself to scan the full play area rather than focusing on the nearest threat. Reacting only to what's closest often means missing a tree closing in from your blind spot.\n\n" +
      "**Find the Gaps:** Even in dense waves, there are usually gaps between the advancing trees. The key skill in Trees Hate You is identifying those gaps quickly and committing to moving through them before they close. Hesitation is your biggest enemy — commit to a direction and execute cleanly.\n\n" +
      "**Manage Your Space:** Avoid backing yourself into corners or edges of the play area. When you're cornered, your movement options drop to near zero, and recovery is very difficult. Always be aware of your position relative to the boundaries and prefer staying in open central space where you have options in all directions.\n\n" +
      "**Stay Calm Under Pressure:** Trees Hate You is designed to spike your stress levels as waves intensify. Panicking leads to erratic movement and poor decisions. The players who last longest tend to keep their movement deliberate and controlled even when the trees are very close — trust your reads and don't overcorrect.",
    image: "/assets/trees hate you/how to.webp",
    imageAlt: "Trees Hate You How to Play Guide – Survive Waves of Angry Trees Online"
  },

  faq: {
    title: "Frequently Asked Questions – Trees Hate You",
    items: [
      {
        value: "is-trees-hate-you-free",
        question: "Is Trees Hate You free to play?",
        answer: "Yes. Trees Hate You is completely free to play in your browser. No download, no account, and no payment is required — just open the page and start playing."
      },
      {
        value: "trees-hate-you-unblocked",
        question: "Is Trees Hate You unblocked?",
        answer: "Yes. Trees Hate You is a browser-based game with no special requirements. It's fully accessible from any network, including school or office environments, without needing a VPN."
      },
      {
        value: "trees-hate-you-mobile",
        question: "Can I play Trees Hate You on mobile?",
        answer: "Yes. The game runs in any modern mobile browser. Touch controls replace keyboard input — swipe or tap to move your character and survive the incoming trees."
      },
      {
        value: "trees-hate-you-tips",
        question: "What's the best strategy to survive longer in Trees Hate You?",
        answer: "Stay in the center of the play area as much as possible to keep your movement options open, scan for gaps in each wave rather than reacting to the nearest tree, and keep your movements deliberate rather than panicking under pressure."
      }
    ]
  },

  rating: {
    ...globalContent.rating,
    title: "Rate Trees Hate You",
    initialRating: 4.6,
    initialVotes: 158
  }
};
