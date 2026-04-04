import { content as globalContent } from "@/config/content";

export const crazyCowContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Crazy Cow 3D",
    game: {
      url: '/crazy-cow-3d.embed',
      title: "crazycow3d",
      externalUrl: '/game/crazycow3d/index.html'
    },
    gameHeight: "h-[70vh] min-h-[540px]",
  },

  // 特性部分配置
  features: {
    // Title subtly hints at online aspect
    title: "Crazy Cow 3D: Online Game Features & Mayhem",
    items: [
      {
        title: "Hilarious Physics-Based Mayhem",
        // Added "free online game"
        description: "Experience unpredictable fun with Crazy Cow 3D's physics engine! Send objects flying, bounce off walls, and discover comical interactions in this action-packed free online game. Every crash and smash leads to laugh-out-loud moments."
      },
      {
        title: "Simple Controls, Instant Fun",
        // Added "unblocked game"
        description: "Jump straight into the action! Crazy Cow 3D features intuitive controls (keyboard or touchscreen) that are easy to learn for players of all ages. Start running, jumping, and smashing within seconds – perfect for quick bursts of fun in this unblocked game."
      },
      {
        title: "Exciting Power-Ups & Boosts",
        // Added "free game" context
        description: "Amp up the chaos with awesome power-ups found throughout this free game! Grab rocket boosts for supersonic speed, activate super jumps to reach new heights, or become invincible. These boosts add thrilling variety to your mayhem-filled runs in Crazy Cow 3D."
      },
      {
        title: "Diverse & Quirky Environments",
        // Added "online game"
        description: "Cause delightful destruction across a range of colorful 3D environments in this online game. From peaceful pastures ready for disruption to bustling cities perfect for maximum chaos, each level in Crazy Cow 3D offers new opportunities for outrageous stunts and high scores."
      },
      {
        title: "Endless Fun & Replayability",
        // Added "free online games" category reference
        description: "The fun never stops in Crazy Cow 3D, a standout among casual free online games! With an endless mode and randomized elements, you'll always find new ways to cause trouble and beat your high score. It's pure, stress-free entertainment designed to keep you coming back."
      }
    ]
  },

  whatIs: {
    title: "What Exactly is Crazy Cow 3D?",
    // Reinforced "free online browser game", added "unblocked"
    description: "Crazy Cow 3D is a light-hearted and action-packed free online browser game where you control a wonderfully chaotic cow! Play unblocked anytime. Forget complex strategies; your mission is pure fun: run, jump, smash, and crash through colorful 3D environments to cause maximum mayhem and rack up high scores.\n\n" +
      // Added "free game"
      "Built on humorous physics and simple controls, Crazy Cow 3D is all about unpredictable fun. Discover hilarious interactions, grab exciting power-ups, and enjoy the quirky charm of this free game. It's perfect for casual gamers looking for stress-free entertainment.\n\n" +
      // Added "online", reinforced "free"
      "Play Crazy Cow 3D instantly online in your browser – no downloads needed! Just pure, addictive, free cow-smashing fun that's great for players of all ages. Ready to unleash the chaos?",
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Added keywords to alt text
      alt: "Crazy Cow 3D Free Online Unblocked Game Logo"
    }
  },

  howToPlay: {
    // Added "Online Free" to title
    title: "How to Play Crazy Cow 3D Online Free: Unleash the Mayhem!",
    // Added "online", "free game"
    description: "Playing Crazy Cow 3D online is simple and fun! Use your keyboard or touchscreen controls to move your cow around the 3D world of this free game. The main goal? Cause as much chaos as possible by running, jumping, and smashing into objects to earn points!\n\n" +
      // Added "online game"
      "Master the physics! Use momentum to launch your cow for spectacular crashes and longer airtime – both great ways to boost your score in Crazy Cow 3D. Keep an eye out for power-ups to maximize your mayhem potential in this fun online game.\n\n" +
      // Added "unblocked", reinforced "free browser game"
      "Explore each environment in Crazy Cow 3D unblocked to find the best spots for stunts. Don't worry about winning; focus on having fun, experimenting with the physics, and beating your personal best score. It's all about enjoying the hilarious ride in this free browser game!",
    // Image path unchanged
    image: "/assets/crazy-cow-3d/crazy-cow-3d.png",
    // Added keywords to alt text
    imageAlt: "Crazy Cow 3D Gameplay Guide - Controls for Free Online Unblocked Fun"
  },

  faq: {
    title: "Crazy Cow 3D: Frequently Asked Questions (FAQ)", // Added FAQ acronym for clarity
    items: [
      {
        value: "difficulty",
        question: "Is Crazy Cow 3D hard to play?",
        // Added "free online game"
        answer: "Not at all! Crazy Cow 3D is designed to be an easy and fun free online game. The controls are simple, and the focus is on light-hearted mayhem rather than intense difficulty. It's perfect for casual players looking for immediate, stress-free fun."
      },
      {
        value: "objective",
        question: "What's the main goal in Crazy Cow 3D?",
        // Added "this online game"
        answer: "The main goal in this online game is to have fun and score points! You earn points by smashing objects, performing stunts, and generally causing amusing chaos with your cow. Aim to beat your own high score in the endless mode!"
      },
      {
        value: "game-modes",
        question: "What game modes does Crazy Cow 3D offer?",
        // Added "free online game"
        answer: "Crazy Cow 3D primarily features an addictive endless mode where the goal is to survive as long as possible while racking up the highest score. The randomized elements keep the fun fresh every time you play this free online game."
      },
      {
        value: "power-ups",
        question: "How do power-ups work in Crazy Cow 3D?",
        // Added "free game"
        answer: "You'll find various power-ups scattered throughout the levels in this free game, like rocket boosts or super jumps. Simply run into them to activate their effects temporarily! They add extra excitement and help you cause even more spectacular mayhem in Crazy Cow 3D."
      },
      {
        value: "technical-requirements",
        // Added "unblocked" to question for relevance
        question: "What do I need to play Crazy Cow 3D unblocked online?",
        // Added "free browser game", "online", "unblocked"
        answer: "Crazy Cow 3D is a free browser game, playable unblocked online! You just need a modern web browser (like Chrome, Firefox, Edge) and a stable internet connection. No downloads required! It's optimized to run smoothly on most computers and mobile devices."
      }
    ]
  }
};
