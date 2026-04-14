import { content as globalContent } from "@/config/content";

export const basketballBrosUnblockedContent = {
  // 基础内容继承自全局配置
  ...globalContent,
  tags: ["Sports", "Action", "Multiplayer"],

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Basketball Bros Unblocked",
    game: {
      url: '/basketball-bros-unblocked.embed', // 嵌入链接
      title: "Basketball Bros Unblocked",
      externalUrl: 'https://basketbros.io/', // 外部链接
    },
    coverImage: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.webp",
    logoImage: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.webp",
  },

  // 特性部分配置 (占位符内容)
  features: {
    // Enhanced title with "Arcade" and "Crazy"
    title: "Basketball Bros Unblocked: Crazy Arcade Game Features - Play Free!",
    items: [
      {
        // Adding details from new intro: arcade, pixel, solo/2-player
        title: "High-Energy Arcade Basketball",
        description: "Experience exhilarating, arcade-style basketball with pixel-powered graphics! Play solo or challenge a friend in 2-player mode in this crazy, free online game."
      },
      {
        // Emphasizing local 2-player and quick rounds
        title: "Thrilling 2-Player Showdowns",
        description: "Go head-to-head with a friend in exciting local multiplayer matches. Basketball Bros Unblocked offers quick rounds perfect for casual fun or intense unblocked game tournaments."
      },
      {
        // Specifying unlockables: bros, skins, courts
        title: "Unlockable Bros, Skins & Courts",
        description: "Earn coins as you play this free online game to unlock new basketball bros, unique skins, and dynamic courts, adding crazy customization to your gameplay."
      },
      {
        // Reinforcing simple yet deep, and retro feel
        title: "Simple Controls, Retro Pixel Fun",
        description: "Easy-to-learn, intuitive controls make this unblocked game accessible for all, while charming pixel art delivers a vibrant, retro feel. Prepare for some crazy basketball action!"
      },
      {
        // Highlighting browser play and accessibility
        title: "Instant Unblocked Action Online",
        description: "Play Basketball Bros Unblocked directly in your browser. No downloads needed for this free game – just instant, fast-paced fun, accessible anywhere, anytime."
      }
    ]
  },
  
  whatIs: {
    // More descriptive title based on new info
    title: "What is Basketball Bros Unblocked? The Pixel Arcade Sports Game",
    // Rewritten description incorporating new details
    description: "Basketball Bros Unblocked is a free online arcade-style basketball game delivering high-energy, fast-paced action with charming pixel graphics. Play unblocked solo against smart AI opponents or challenge a friend in thrilling 2-player local matches. Every game is quick, fun, and perfectly designed for competitive pickup matches or casual sessions. The gameplay is pure basketball without unnecessary complexity — just dribble, shoot, defend, and dominate.\n\n" +
                  "What makes Basketball Bros Unblocked unique is its perfect balance of accessibility and competitive depth. New players pick up the basic controls within seconds, yet experienced players discover advanced movement techniques and strategic positioning that separate casual players from champions. The pixel art style gives the game a timeless arcade charm that appeals to both retro gaming enthusiasts and modern casual gamers alike.\n\n" +
                  "Basketball Bros Unblocked is designed for instant play with zero barriers. No downloads required, no account creation, no paywalls — just load the page in your browser and start playing immediately. The game runs smoothly on desktop and mobile devices, with intuitive controls that feel natural whether you’re using a keyboard or touch controls. Being truly unblocked, you can access it anywhere, anytime, from any network.\n\n" +
                  "The progression system rewards continued play through unlockable characters, skins, and courts. Earn coins during matches and spend them to customize your experience with new basketball bros, unique visual styles, and dynamic court themes. These unlocks add visual variety and replayability without changing the core mechanics or giving unfair competitive advantages.\n\n" +
                  "Play Basketball Bros Unblocked free online — no download needed, works on any browser, unblocked on any network. Challenge yourself against the AI, go head-to-head with a friend, and discover why Basketball Bros is one of the best free online sports games.",
    logo: {
      src: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.webp",
      // Updated alt text
      alt: "Basketball Bros Unblocked - Free Online Pixel Arcade Game Logo"
    }
  },
  
  howToPlay: {
    // Title updated for clarity
    title: "How to Play Basketball Bros Unblocked: Controls & Strategy Guide",
    // Description updated with controls and gameplay details
    description: "**Basic Controls:** In Basketball Bros Unblocked, movement is intuitive and responsive. In 2-player mode, one player uses the arrow keys (↑↓←→) for movement while the other player uses WASD keys. Single-player matches pit you against the AI with the same control scheme. Press the spacebar or designated button to shoot, and hold the button for power shots. Movement fluidity is key — smooth direction changes and well-timed shots make the difference between victory and defeat.\n\n" +
                 "**Master the Dribble & Ball Control:** Keeping the ball during play is fundamental. The ball naturally follows your character's movement, but timing your approach to defenders matters greatly. Dribble with purpose rather than careless movement — avoid walking directly into opponent defense. Use quick directional changes to create space for open shots. The timing window for ball collection and passes is tight, rewarding precise input over button mashing.\n\n" +
                 "**Shooting Mechanics & Scoring:** Shooting is about angle and timing. Press the shoot button and watch the power meter fill — release at the right moment for a perfect shot. Different positions on the court have different shooting distances and angles. Dunking when close to the hoop gives higher probability of scoring. Learn to read the shot meter and develop a feel for full-court shots versus close-range layups.\n\n" +
                 "**Defensive Strategy & Blocking:** Defense is not passive — you must actively position yourself between your opponent and the basket. Block incoming shots by jumping at the right moment. The timing for blocks is critical; jump too early or too late and you'll foul or miss the block entirely. Keep constant pressure on your opponent to force rushed shots and turnovers.\n\n" +
                 "**Court Awareness & Positioning:** Understanding court zones improves your game dramatically. Know the optimal positions for shooting from different distances. Control the paint (the area near the basket) for easier scoring and defensive rebounds. Stay aware of where your opponent is positioned and adjust your strategy accordingly — predictable movement gets punished in competitive matches.\n\n" +
                 "**Compete in Solo & 2-Player Modes:** Solo mode against AI teaches you the fundamentals — the AI adjusts difficulty based on your skill level, providing appropriate challenge. 2-player matches are the true test where human unpredictability and competitive strategy define outcomes. Quick, intense rounds mean every possession matters. Matches escalate in intensity the more evenly matched players are.",
    image: "/assets/basketball-bros-unblocked/Basketball Bros Unblocked-how to.webp",
    // Updated alt text
    imageAlt: "Basketball Bros Unblocked - Gameplay Guide for Free Online Arcade Action"
  },
  
  faq: {
    title: "Basketball Bros Unblocked – FAQ",
    items: [
      {
        value: "is-it-free-unblocked",
        question: "Is Basketball Bros Unblocked free and truly unblocked?",
        answer: "Yes. Basketball Bros Unblocked is completely free to play with no download required. It is fully unblocked, so you can access it from any network including school and work — just open your browser and play instantly."
      },
      {
        value: "controls-2player",
        question: "What are the controls for Basketball Bros Unblocked 2-player mode?",
        answer: "In 2-player mode, Player 1 uses W, A, S, D keys for movement and actions, while Player 2 uses the arrow keys. Both players share the same keyboard, making it easy to challenge a friend head-to-head without any extra setup."
      },
      {
        value: "what-is-basketball-bros",
        question: "What kind of game is Basketball Bros Unblocked?",
        answer: "Basketball Bros Unblocked is a free online arcade basketball game with retro pixel art graphics. It offers fast-paced 1-player and 2-player local modes, character unlocks, and dynamic courts — all playable directly in your browser with no download needed."
      },
      {
        value: "mobile-play",
        question: "Can I play Basketball Bros Unblocked on mobile?",
        answer: "Yes. Basketball Bros Unblocked runs in modern mobile browsers on Android and iOS. Touch controls replace keyboard input on mobile devices, so you can enjoy the game anywhere without downloading an app."
      }
    ]
  }
};
