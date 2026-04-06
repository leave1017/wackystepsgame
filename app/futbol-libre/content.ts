import { content as globalContent } from "@/config/content";

export const futbolLibreContent = {
  // 基础内容继承自全局配置
  ...globalContent,
  tags: ["Sports", "Football", "Streaming"],

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Futbol Libre",
    game: {
      url: '/futbol-libre.embed',
      title: "futbollibre",
      externalUrl: '/game/futbol-libre/index.html'
    },
    gameHeight: "h-[75vh] min-h-[560px]",
  },

  // 特性部分配置
  features: {
    // Title emphasizing the game's theme and keywords
    title: "Futbol Libre: Fast-Paced Online Soccer Game Features - Play Free!",
    items: [
      {
        // Highlights core arcade soccer gameplay
        title: "Vibrant Arcade Soccer Action",
        description: "Experience exhilarating, free-to-play arcade soccer with Futbol Libre! Simple controls, lively characters, and fast-paced 1v1 or team matches await in this exciting online game."
      },
      {
        // Focuses on multiplayer aspect
        title: "Thrilling Multiplayer Matches",
        description: "Challenge friends or compete against global opponents in Futbol Libre's engaging multiplayer modes. Play unblocked and showcase your soccer skills in quick, competitive online games."
      },
      {
        // Details power-ups and customization
        title: "Unique Power-Ups & Customization",
        description: "Unlock special power-ups like speed boosts and super shots to gain an edge in Futbol Libre! Customize your players or teams for a unique look in this fun free soccer game."
      },
      {
        // Emphasizes accessibility and retro charm (if applicable)
        title: "Simple Controls, Retro Charm",
        description: "Futbol Libre features easy-to-learn controls (WASD/Arrows & Spacebar) perfect for all players. Enjoy the vibrant, perhaps retro-inspired, graphics as you play this unblocked game."
      },
      {
        // Highlights instant browser play
        title: "Instant Online Fun, No Downloads",
        description: "Play Futbol Libre directly in your browser! No downloads or fees required for this free online soccer game. Jump straight into the action anytime, anywhere."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game
    title: "What is Futbol Libre? The Exciting Online Arcade Soccer Game",
    // Description based on Football Bros model, adapted for Futbol Libre
    description: "Futbol Libre is a vibrant, free-to-play online soccer game that delivers fast-paced, competitive matches with simple controls and lively, perhaps cartoon-style, graphics. Play unblocked and enjoy the thrill of 1v1 or team-based arcade soccer action. It’s perfect for both soccer enthusiasts and casual gamers looking for quick fun.\n\n" +
                  "Inspired by classic arcade sports games, Futbol Libre focuses on delivering an engaging and accessible soccer experience. Score epic goals, utilize unique power-ups, and master intuitive controls. This online game is designed for instant browser-based play, making it a hit among fans of free unblocked games.\n\n" +
                  "Whether you're looking for a quick match or a more competitive session, Futbol Libre offers endless soccer fun. Ready to play and conquer the pitch?",
    logo: {
      // Placeholder - update if you have a specific logo for Futbol Libre
      src: "/assets/futbol-libre/futbol-libre-logo.webp",
      // Alt text updated for the game concept and keywords
      alt: "Futbol Libre - Free Online Arcade Soccer Game Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting the game and keywords
    title: "How to Play Futbol Libre Online Free: A Soccer Game Guide",
    // Description focused on controls and core gameplay loop
    description: "Playing Futbol Libre online is easy and exciting! Use the Arrow Keys or WASD to move your player on the pitch. The Spacebar is typically used for passing, shooting, and tackling in this free soccer game. Your main objective is to score more goals than your opponent within the time limit.\n\n" +
                  "Master the simple controls to dribble, make strategic passes, and unleash powerful shots. Keep an eye out for power-ups that can give you a temporary advantage. This unblocked online game is all about quick reflexes and smart plays. Play Futbol Libre now and enjoy the action!\n\n" +
                  "Learn different offensive and defensive strategies to dominate your matches. Whether playing solo against AI or with friends in multiplayer games, Futbol Libre offers a fun and competitive experience.",
    // Placeholder - update if you have a specific gameplay image
    image: "/assets/futbol-libre/futbol-libre.webp",
    // Alt text updated
    imageAlt: "Futbol Libre Online Soccer Game Guide - Free Unblocked Play Controls"
  },
  
  faq: {
    // Title updated for clarity
    title: "Futbol Libre: FAQ (Free Online Arcade Soccer Game)",
    items: [
      {
        value: "what-is-futbol-libre",
        question: "What kind of game is Futbol Libre?",
        answer: "Futbol Libre is a competitive, free-to-play online arcade soccer game. It features fast-paced matches, simple controls, and is designed for both casual fun and competitive play. You can play this game unblocked in your browser."
      },
      {
        value: "how-to-play-online",
        question: "How do I play Futbol Libre online?",
        answer: "You can play Futbol Libre for free directly on websites offering online games. No download is required. Just load the game in your browser and start your soccer adventure instantly!"
      },
      {
        value: "controls-game",
        question: "What are the controls for Futbol Libre?",
        answer: "Futbol Libre typically uses Arrow Keys or WASD for movement, and the Spacebar for actions like passing, shooting, or tackling. These intuitive controls make it easy to jump into this free online soccer game."
      },
      {
        value: "multiplayer-options",
        question: "Does Futbol Libre have multiplayer modes?",
        answer: "Yes, Futbol Libre often includes multiplayer modes, allowing you to play 1v1 matches against friends locally or compete against other players online, making it a great choice among unblocked multiplayer games."
      },
      {
        value: "power-ups-available",
        question: "Are there power-ups in Futbol Libre?",
        answer: "Many versions of arcade soccer games like Futbol Libre feature exciting power-ups, such as speed boosts or super shots, that can randomly appear during a match to give you a temporary advantage. Play strategically to use them well!"
      },
      {
        value: "is-it-free-unblocked",
        question: "Is Futbol Libre free to play and unblocked?",
        answer: "Yes! Futbol Libre is designed as a free-to-play online game. You can usually find unblocked versions on various gaming websites, allowing you to play instantly without cost or downloads. Enjoy the best of free soccer games!"
      }
    ]
  }
};


