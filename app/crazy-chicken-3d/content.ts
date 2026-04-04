import { content as globalContent } from "@/config/content";

export const crazyChickenContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Crazy Chicken 3D",
    game: {
      url: '/crazy-chicken-3d.embed',
      title: "crazychicken3d",
      externalUrl: '/game/crazy-chicken-3d/index.html'
    },
    gameHeight: "h-[70vh] min-h-[540px]",
  },

  // 特性部分配置
  features: {
    // Title emphasizing the chicken theme and keywords
    title: "Crazy Chicken 3D: Feathered Fury Features - Play Free Online!",
    items: [
      {
        // Highlights the core Battle Royale gameplay with chickens
        title: "Hilarious Chicken Battle Royale",
        description: "Cluck your way to victory in Crazy Chicken 3D, a physics-based battle royale game! Play as a chaotic chicken, ram opponents, and be the last one standing in this free online game."
      },
      {
        // Emphasizes the connection to Crazy Cattle 3D but with a twist
        title: "Familiar Madness, More Feathers",
        description: "If you love Crazy Cattle 3D, you'll adore Crazy Chicken 3D! This unblocked game keeps the same quirky physics and fun mechanics but with a hilarious feathered twist and new chicken animations."
      },
      {
        // Focuses on the unique chicken-themed arenas
        title: "New Barnyard Arenas & Hazards",
        description: "Battle across fresh arenas inspired by barnyards and coops in this online game! Dodge spinning windmills, slippery mud, and bouncing hay bales. Each Crazy Chicken 3D map offers new tactical challenges."
      },
      {
        // Details the customization options
        title: "Customize Your Clucker",
        description: "Unlock comical skins, silly accessories, and quirky hats for your chicken as you play Crazy Chicken 3D. Personalize your feathered warrior in this fun free game and stand out in the coop!"
      },
      {
        // Highlights the physics and controls
        title: "Master Chicken Momentum & Physics",
        description: "Crazy Chicken 3D features intuitive controls (WASD/Mouse) but mastering the physics-based movement is key! Timing, angles, and momentum matter more than raw speed in this engaging online battle royale game."
      }
    ]
  },

  whatIs: {
    // Title clearly defines the game and its core appeal
    title: "What is Crazy Chicken 3D? The Clucking Battle Royale Game",
    // Description based on provided info, integrating keywords
    description: "Welcome to the coop of chaos! Crazy Chicken 3D is a hilarious, action-packed free online spin-off of the popular Crazy Cattle 3D. This physics-based battle royale game puts you in control of a feisty chicken, ready to cluck, peck, and ram your way to victory. Play unblocked and experience the madness!\n\n" +
      "Crazy Chicken 3D retains the core absurdly fun gameplay of its predecessor – quirky physics, fast-paced battles – but with a fresh, feathered personality. Battle other chickens using momentum, dodging, and environmental hazards across new barnyard-themed arenas. It's a standout among free online games for its comical chaos.\n\n" +
      "If you're looking for a familiar yet unique battle royale experience, or loved Crazy Cattle 3D, then play Crazy Chicken 3D! No downloads needed, just instant, feather-flying fun. Can you be the top chicken?",
    logo: {
      // Placeholder - update if you have a specific logo for Crazy Chicken 3D
      src: "/assets/crazy-chicken-3d/crazy-chicken-3d-logo.webp",
      // Alt text updated for the game concept and keywords
      alt: "Crazy Chicken 3D - Free Online Battle Royale Game Logo"
    }
  },

  howToPlay: {
    // Title reflecting the game and keywords
    title: "How to Play Crazy Chicken 3D Online Free: A Feathered Guide",
    // Description focused on controls and core gameplay loop
    description: "Playing Crazy Chicken 3D online is an egg-cellent adventure! Control your chicken using WASD or Arrow Keys for movement, and use your Mouse to aim and control your view in this free game. Left Click to execute a targeted peck-ram at your opponents. The goal in this unblocked battle royale game is to be the last chicken standing!\n\n" +
      "Master the physics-based movement. Momentum, timing, and angles are crucial for success in Crazy Chicken 3D. Use the environment to your advantage, dodge incoming attacks, and strategically ram other chickens off the new barnyard-themed arenas. If eliminated, the Spacebar often allows you to restart or use special abilities (if applicable in this version of the game).\n\n" +
      "Explore different arenas, learn their unique hazards, and adapt your tactics to survive the feathered frenzy. Keep practicing, and you'll soon rule the roost in this hilarious online game. Play Crazy Chicken 3D now for free!",
    // Placeholder - update if you have a specific gameplay image
    image: "/assets/crazy-chicken-3d/crazy-chicken-3d.webp",
    // Alt text updated
    imageAlt: "Crazy Chicken 3D Online Game Guide - Free Unblocked Battle Royale Controls"
  },

  faq: {
    // Title updated for clarity
    title: "Crazy Chicken 3D: FAQ (Free Online Battle Royale Game)",
    items: [
      {
        value: "what-is-crazy-chicken-3d",
        question: "What kind of game is Crazy Chicken 3D?",
        answer: "Crazy Chicken 3D is a hilarious, free-to-play online physics-based battle royale game. It's a spin-off of Crazy Cattle 3D, where you play as a chicken trying to be the last one standing in chaotic arenas. It’s available as an unblocked game for instant fun."
      },
      {
        value: "how-to-play-online",
        question: "How do I play Crazy Chicken 3D online?",
        answer: "You can play Crazy Chicken 3D for free directly in your browser on websites offering unblocked games. No downloads are required! Just load the game and start your clucking adventure."
      },
      {
        value: "controls-game",
        question: "What are the controls for Crazy Chicken 3D?",
        answer: "Crazy Chicken 3D typically uses WASD/Arrow Keys for chicken movement, Mouse movement for aiming, Left Click for a peck-ram attack, and sometimes Spacebar for special abilities or restarting. These controls are common in many free online games."
      },
      {
        value: "vs-crazy-cattle",
        question: "How is Crazy Chicken 3D different from Crazy Cattle 3D?",
        answer: "Crazy Chicken 3D shares the core physics-based battle royale gameplay with Crazy Cattle 3D. The main difference is the theme: you play as chickens instead of cattle, with new chicken-specific animations, sounds, and fresh barnyard-themed arenas. If you enjoyed one, you'll likely enjoy playing the other free game!"
      },
      {
        value: "unlockables-in-game",
        question: "Can I unlock things in Crazy Chicken 3D?",
        answer: "Yes! As you play and win battles in Crazy Chicken 3D, you can often unlock new skins, silly accessories, and hats to customize your chicken, adding a personal touch to this fun online game."
      },
      {
        value: "is-it-free-unblocked",
        question: "Is Crazy Chicken 3D free to play and unblocked?",
        answer: "Absolutely! Crazy Chicken 3D is designed as a free-to-play online game. You can usually find unblocked versions on various gaming websites, allowing you to play instantly without cost or downloads."
      }
    ]
  }
};


