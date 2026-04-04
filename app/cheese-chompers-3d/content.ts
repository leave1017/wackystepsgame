import { content as globalContent } from "@/config/content";

export const cheeseChompersContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Cheese Chompers 3D",
    game: {
      url: '/cheese-chompers-3d.embed',
      title: "cheesechompers3d",
      externalUrl: '/game/cheesechompers3d/index.html'
    },
    gameHeight: "h-[70vh] min-h-[540px]",
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Cheese Chompers 3D: Rat Rumble Features - Play Free Online!",
    items: [
      {
        // Highlights the core knockout gameplay with rats
        title: "Rat-tastic Knockout Action",
        description: "Dive into Cheese Chompers 3D, a hilarious free online knockout game! Control a goofy rat and battle it out in a chaotic arena. Knock other players off to be the last rat standing in this fast-paced, unblocked game."
      },
      {
        // Explains its origin and unique theme
        title: "Unique Rodent Makeover",
        description: "Originally modded from Crazy Cattle 3D, Cheese Chompers 3D replaces sheep with comical rats and features an entirely new interface and sound design. Experience a fresh, cheese-fueled challenge in this unique free game."
      },
      {
        // Focuses on a key game mechanic
        title: "Speed-Boosting Flips & Physics",
        description: "Master the fun physics in Cheese Chompers 3D! Perform mid-air flips for temporary speed boosts to outmaneuver opponents or make daring escapes. Unpredictable collisions make every online match exciting."
      },
      {
        // Highlights a satisfying visual/gameplay element
        title: "Explosive Takedown Effects",
        description: "Enjoy the satisfying impact! Cheese Chompers 3D features an exciting explosion effect when you successfully knock another rat off the arena, adding visual flair to your victories in this action-packed online game."
      },
      {
        // Emphasizes accessibility and core keywords
        title: "Instant Web Play - Unblocked Fun",
        description: "Jump straight into the rodent rampage! Cheese Chompers 3D is a browser-based game, meaning no downloads required. Play free and unblocked for instant, energetic fun online anytime."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game type
    title: "Unraveling Cheese Chompers 3D: The Ultimate Rat Knockout Game",
    // Description based on the "knockout rat game" info
    description: "Cheese Chompers 3D is a wildly fun, free online browser game where you control a goofy rat in a fast-paced, knockout arena! Play unblocked anytime. Originally a mod of Crazy Cattle 3D, this version comically replaces sheep with rats, boasts a new interface, sound design, and a uniquely cheese-fueled challenge.\n\n" +
      "Experience the thrill of physics-based collisions, strategic speed-boosting flips, and satisfying explosion effects when you send rivals flying. While currently featuring one action-packed map, Cheese Chompers 3D offers instant unblocked fun for fans of funny animal physics and competitive online games.\n\n" +
      "Ready to play? No downloads needed – just pure, energetic, free rat-battling action that keeps you on your toes. Join the Cheese Chompers 3D games and see if you can be the last rat standing!",
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Alt text updated for the new game concept and keywords
      alt: "Cheese Chompers 3D - Free Online Unblocked Rat Knockout Game Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting the knockout gameplay
    title: "How to Play Cheese Chompers 3D Online Free: Master the Rat Rumble!",
    // Description focused on knockout mechanics
    description: "Playing Cheese Chompers 3D online is all about chaotic fun in this free game! Use your keyboard (WASD or arrow keys) for movement and mouse to control your camera. The main goal in this knockout game? Be the last rat standing by knocking opponents off the arena!\n\n" +
      "Master the hilarious physics of Cheese Chompers 3D. Use mid-air flips (try Spacebar or a designated key) for a speed boost to chase down rivals or make a quick getaway. Strategic positioning and well-timed shoves are key to dominating this unblocked online game. Watch out for those unpredictable collisions!\n\n" +
      "Though Cheese Chompers 3D currently features one intense map, the objective remains: outlast everyone! Learn the layout, use the environment to your advantage, and enjoy the explosive fun of this free browser game. Keep practicing, and you'll be a top rat chompion!",
    // Image path unchanged - I am keeping the placeholder you had. If you have a more relevant image for a rat knockout game, you'd update this path.
    image: "/assets/cheese-chompers-3d/cheese-chompers-3d.png",
    // Alt text updated
    imageAlt: "Cheese Chompers 3D Online Game Guide - Free Unblocked Rat Knockout Controls & Strategy"
  },
  
  faq: {
    // Title updated
    title: "Cheese Chompers 3D: Your Questions Answered (Free Online Knockout Game FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Cheese Chompers 3D hard to play?",
        // Answer reflecting the knockout game's nature
        answer: "Cheese Chompers 3D is easy to pick up for instant fun, making it a great free online game for casual players! However, mastering the physics, speed-boosting flips, and knockout strategies offers a rewarding challenge for those looking to become a top rat. It's all about fast-paced, unblocked action."
      },
      {
        value: "objective", // New relevant question for a knockout game
        question: "What's the main goal in Cheese Chompers 3D online games?",
        answer: "The main goal in Cheese Chompers 3D is to be the last rat standing! You achieve this by skillfully knocking other players' rats off the single, chaotic arena map using physics-based collisions and strategic moves in this free-for-all online game."
      },
      {
        value: "technical-requirements",
        question: "What do I need to play Cheese Chompers 3D unblocked online?",
        answer: "Cheese Chompers 3D is a free browser game, playable unblocked online! You just need a modern web browser (like Chrome, Firefox, Edge) and a stable internet connection. No downloads required for this fun game! It's optimized to run smoothly."
      },
      {
        value: "origin", // New FAQ based on game info
        question: "Is Cheese Chompers 3D related to Crazy Cattle 3D?",
        answer: "Yes! Cheese Chompers 3D was originally modded from Crazy Cattle 3D. This version creatively replaces the sheep with comical rats and introduces an entirely new interface, sound design, and unique cheese-themed knockout challenges. It's a fresh take on the fun animal physics you might know, now as a free online rat game!"
      },
      {
        value: "key-features-game", // New FAQ
        question: "What makes Cheese Chompers 3D a fun game to play?",
        answer: "Players love Cheese Chompers 3D for its hilarious rat theme, fast-paced knockout gameplay, fun speed-boosting flips, and satisfying explosion effects on takedowns. Being a free, unblocked online browser game means you can jump into the action instantly for some chaotic fun!"
      }
    ]
  }
};

