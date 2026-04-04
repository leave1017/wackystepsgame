import { content as globalContent } from "@/config/content";

export const basketballBrosUnblockedContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Basketball Bros Unblocked",
    game: {
      url: '/basketball-bros-unblocked.embed', // 嵌入链接
      title: "Basketball Bros Unblocked",
      externalUrl: 'https://basketbros.io/', // 外部链接
    },
    gameHeight: "h-[75vh] min-h-[560px]",
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
    description: "Basketball Bros Unblocked is an exhilarating, free online arcade-style basketball game delivering high-energy, fast-paced action! Play unblocked solo against smart AI or go head-to-head with a friend in thrilling 2-player local matches. With its charming pixel graphics and straightforward gameplay, it’s your go-to for slam-dunk fun.\n\n" +
                  "This game offers pure, unfiltered basketball action without overly complex mechanics. Dribble, shoot, and defend across dynamic courts with cool themes. It's easy for anyone to jump into these crazy games, making it perfect for sports enthusiasts and casual gamers looking for an adrenaline-pumping, unblocked experience.",
    logo: {
      src: "/assets/basketball-bros-unblocked/basketball-bros-unblocked-logo.png",
      // Updated alt text
      alt: "Basketball Bros Unblocked - Free Online Pixel Arcade Game Logo"
    }
  },
  
  howToPlay: {
    // Title updated for clarity
    title: "How to Play Basketball Bros Unblocked: Controls & Strategy Guide",
    // Description updated with controls and gameplay details
    description: "Playing Basketball Bros Unblocked online is simple but exciting! In this free game, one player uses arrow keys and the other WASD keys for movement in 2-player mode. Dribble, shoot for the hoop, and defend your basket to outscore your opponent. The gameplay is fast and perfect for quick, crazy matches.\n\n" +
                 "Master basic moves like shooting and dunking, and learn to block shots effectively. Each 'bro' might have a slightly unique feel. Explore dynamic courts, enjoy the retro pixel graphics, and aim to dominate in this fun, unblocked sports game!",
    image: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.png",
    // Updated alt text
    imageAlt: "Basketball Bros Unblocked - Gameplay Guide for Free Online Arcade Action"
  },
  
  faq: {
    // Title updated for comprehensiveness
    title: "Basketball Bros Unblocked: FAQ (Free Online Pixel Arcade Game)",
    items: [
      {
        value: "what-is-basketball-bros",
        question: "What kind of game is Basketball Bros Unblocked?",
        // Enhanced answer with new details
        answer: "Basketball Bros Unblocked is a free-to-play online arcade basketball game with a cool retro pixel art style. It features fast-paced, high-energy action in both solo and 2-player local modes, playable unblocked in your browser. It's one of those crazy fun sports games!"
      },
      {
        value: "how-to-play-online",
        question: "How do I play Basketball Bros Unblocked online?",
        // Reinforced ease of access
        answer: "You can play Basketball Bros Unblocked for free directly on this website. Being an unblocked online game, no download is required. Just load it in your browser and enjoy the instant basketball fun!"
      },
      {
        value: "main-objective-game",
        question: "What's the main goal in Basketball Bros Unblocked games?",
        // Clarified solo and 2-player goal
        answer: "The main goal in this free online game is to win basketball matches by outscoring your opponent. You can challenge clever AI in solo mode or compete against a friend in exciting 2-player local matchups for some crazy fun."
      },
      {
        value: "is-it-free-unblocked", // Combined for clarity
        question: "Is Basketball Bros Unblocked free and truly unblocked?",
        // Stronger affirmation
        answer: "Absolutely! Basketball Bros Unblocked is completely free to play online. Its 'unblocked' nature means you can typically access and play this game from anywhere, like school or work, without restrictions."
      },
      {
        value: "controls-2player", // More specific question
        question: "What are the 2-player controls for Basketball Bros Unblocked?",
        // Added specific control info
        answer: "For 2-player mode in this crazy online game, one player usually uses the W, A, S, D keys for movement and actions, while the other player uses the arrow keys. This setup makes for fun head-to-head local games on a single keyboard!"
      },
      {
        value: "unlockables-game", // New FAQ based on intro
        question: "Can I unlock things in Basketball Bros Unblocked?",
        answer: "Yes! As you play this free game, you can earn coins to unlock new 'bros' (characters), different skins, and various dynamic courts, adding to the replayability and crazy fun of your online matches."
      }
    ]
  }
};
