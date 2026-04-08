import { content as globalContent } from "@/config/content";

export const brainrotClickerContent = {
  // 基础内容继承自全局配置
  ...globalContent,
  tags: ["Clicker", "Idle", "Casual", "Meme"],

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Italian Brainrot Clicker",
    game: {
      url: '/brainrot-clicker.embed', // 嵌入链接，后续可能需要调整
      title: "brainrot-clicker",
      externalUrl: 'https://game.azgame.io/italian-brainrot-clicker/'
    },
    gameHeight: "h-[780px]",
    coverImage: "/assets/brainrot-clicker/brainrot-clicker.webp",
    logoImage: "/assets/brainrot-clicker/brainrot-clicker.webp",
  },

  // 特性部分配置
  features: {
    // Title reflecting the game's unique theme and keywords
    title: "Italian Brainrot Clicker: Meme-Powered Online Game Features - Play Free!",
    items: [
      {
        // Highlights the core clicker mechanic and meme theme
        title: "Tap Into Meme-Fueled Madness",
        description: "Dive into Italian Brainrot Clicker, a hilarious free online clicker game! Tap your way through layers of internet absurdity inspired by Italian Brainrot. Unlock bizarre characters and chaotic upgrades in this unblocked game experience."
      },
      {
        // Focuses on the character collection aspect
        title: "Outrageous Viral Character Roster",
        description: "Collect an army of eccentric meme icons straight from the Italian Brainrot scene! From Cappuccino Assasino to Chimpanzini Bananini, each character in this online game brings unique, comical animations and sounds."
      },
      {
        // Describes the addictive gameplay loop
        title: "Addictive Click, Upgrade, Repeat Gameplay",
        description: "The core of this free game is simple: click to earn, then upgrade your Italian Brainrot army! Italian Brainrot Clicker offers fast-paced progression and fills your screen with colorful, unpredictable madness. Perfect for fans of incremental io games."
      },
      {
        // Emphasizes the game's unique selling points
        title: "Unpredictable Surprises & Boosts",
        description: "What sets Italian Brainrot Clicker apart when you play online? Expect the unexpected! Special effects, surprise character appearances, and powerful boosts keep you engaged and laughing as the meme chaos unfolds in this free unblocked game."
      },
      {
        // Highlights accessibility and play style
        title: "Instant Fun for All Players",
        description: "No learning curve here! Just dive into Italian Brainrot Clicker and start tapping. This free online game is perfect for short bursts of fun or longer meme-binging sessions. Play unblocked anytime, anywhere."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game and includes keywords
    title: "What is Italian Brainrot Clicker? The Viral Meme Online Game Explained",
    // Description based on the provided info, integrating keywords
    description: "Italian Brainrot Clicker is a free online incremental clicker game that celebrates the viral Italian Brainrot meme trend with hilarious gameplay and absurdist humor. Click to earn points, unlock bizarre meme characters, and build your personal army of comedic Italian personas. This unblocked clicker game is designed for instant play in any modern web browser – no downloads, no account creation, and no paywalls. Just pure, meme-powered clicking fun.\n\n" +
      "The game features a dynamic roster of outrageous characters pulled straight from the Italian Brainrot universe. From Cappuccino Assasino to Bombardino Crocodilo, each character brings unique animations, sound effects, and bonus multipliers to your clicking power. Unlock them all as you progress through increasingly chaotic levels. Every unlock is a moment of pure comedic joy as the absurdity escalates with each new character you discover.\n\n" +
      "What makes Italian Brainrot Clicker stand out is its perfect balance of accessibility and depth. New players can start clicking immediately and understand the core loop within seconds, but veterans of incremental games will appreciate the strategic layer of choosing when and which characters to unlock for maximum progression efficiency. The game respects your time whether you play for quick 5-minute sessions or commit to longer gameplay stretches.\n\n" +
      "The progression system rewards both active clicking and passive income. Purchase upgrades like cursor multipliers, auto-clickers, and character farms to accelerate your journey into meme chaos. Watch your earnings multiply as you strategically invest in upgrades that compound your progress. Special effects and surprise character appearances keep the experience fresh and unpredictable, ensuring every session feels different.\n\n" +
      "Play Italian Brainrot Clicker free directly in your browser – whether on desktop, laptop, or mobile, the game loads in seconds and is always free. No artificial limitations or paywalls prevent you from experiencing the full Italian Brainrot meme madness. Are you ready to tap your way through the viral absurdity and embrace the brainrot?",
    logo: {
      // Updated to match the correct image file
      src: "/assets/brainrot-clicker/brainrot-clicker.webp",
      // Alt text updated for the new game concept and keywords
      alt: "Italian Brainrot Clicker - Free Online Unblocked Meme Clicker Game Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting the game and keywords
    title: "How to Play Italian Brainrot Clicker Online Free: Guide to Meme Madness",
    // Description focused on clicker mechanics and progression
    description: "**Start Clicking:** The core mechanic of Italian Brainrot Clicker is beautifully simple – tap the screen or click your mouse to start earning Italian Brainrot points. Each click generates currency that you'll immediately begin spending on upgrades and character unlocks. You can click rapidly for maximum points, or let your passive income generators do the work while you watch the madness unfold.\n\n" +
      "**Earn Points & Multiply Your Income:** Every tap earns you points that serve as your primary currency. As you accumulate points, you'll notice the growth accelerating – this is the magic of the clicker genre. Purchase cursor upgrades to increase points per click, or invest in auto-clickers for passive income while you're away. The strategic layer emerges when you decide whether to spend your points immediately on new upgrades or save for that expensive character unlock that will give massive multiplier bonuses.\n\n" +
      "**Unlock Bizarre Meme Characters:** Your primary goal is unlocking all the eccentric Italian Brainrot personalities. Each character has a unique unlock cost and provides bonus multipliers to your overall earning rate. Characters like Cappuccino Assasino, Bombardino Crocodilo, and Tung Tung Tung Sahur each bring their own comedic animations and audio effects that celebrate the viral Italian Brainrot trend. Unlocking them all is a satisfying long-term goal that keeps you returning to the game.\n\n" +
      "**Strategic Upgrades & Progression:** Once unlocked, characters can be upgraded with your earned points to boost their individual output. Combine this with cursor multipliers, click power enhancements, and farming upgrades to create a system of compounding growth. The more you optimize your upgrade path, the faster you progress. Pay attention to which upgrades offer the best return on investment for your current playstyle.\n\n" +
      "**Balance Active & Passive Gameplay:** Italian Brainrot Clicker accommodates both active clickers and idle players. If you prefer constant clicking, tap away and watch your points skyrocket. If you prefer a more relaxed approach, invest in passive income generators and let the game run in the background. The beauty of the game is it rewards both playstyles equally, allowing you to progress at your own pace.\n\n" +
      "**Master the Madness & Escalate:** The deeper you progress, the more chaos the game introduces. Special effects multiply, surprise character appearances keep things fresh, and the difficulty of unlocking new milestones escalates naturally. Keep your eyes on your total earning rate, watch for new characters becoming affordable, and plan your next upgrade sequence. The game continuously reveals new layers of absurdity as you climb higher.",
    // Updated to match the correct image file
    image: "/assets/brainrot-clicker/brainrot-clicker how to.webp",
    // Alt text updated
    imageAlt: "Italian Brainrot Clicker Online Game Guide - Free Unblocked Meme Clicker Controls & Upgrades"
  },
  
  faq: {
    // Title updated
    title: "Italian Brainrot Clicker: Your Questions Answered (Free Online Meme Game FAQ)",
    items: [
      {
        value: "what-is-brainrot-clicker", // More specific value
        question: "What kind of game is Italian Brainrot Clicker?",
        answer: "Italian Brainrot Clicker is a free online incremental clicker game powered by the hilarious Italian Brainrot meme trend. You tap to earn points, unlock bizarre meme characters, and upgrade them to progress through increasingly chaotic levels. It's a fun, unblocked game perfect for quick plays or longer sessions."
      },
      {
        value: "how-to-play-online",
        question: "How do I play Italian Brainrot Clicker online?",
        answer: "Playing Italian Brainrot Clicker is easy! It's a free browser game, so no download is needed. Just visit the game page and start clicking. The more you click, the more points you get to unlock upgrades and new meme characters. It’s a classic clicker game experience, unblocked for instant access."
      },
      {
        value: "main-objective-game",
        question: "What's the main goal in Italian Brainrot Clicker games?",
        answer: "The main goal in Italian Brainrot Clicker is to click your way through the viral Italian Brainrot universe, unlocking all the meme characters (like Cappuccino Assasino, Bobritto Bandito) and their upgrades. It's about embracing the absurdity and seeing how far your meme army can progress in this free online game!"
      },
      {
        value: "are-io-games-similar", // Connecting to io games keyword
        question: "Is Italian Brainrot Clicker like other io games?",
        answer: "While Italian Brainrot Clicker is primarily an incremental clicker game, it shares the instant accessibility and often chaotic fun found in many popular free io games. It's browser-based, unblocked, and offers a simple yet addictive gameplay loop that many io games players enjoy."
      },
      {
        value: "mobile-play",
        question: "Can I play Italian Brainrot Clicker on my phone?",
        answer: "Yes! You can play Italian Brainrot Clicker, this fun free online game, on your phone or most other devices with a modern web browser. Being unblocked and browser-based makes it easily accessible."
      },
      {
        value: "what-is-brainrot-meme",
        question: "What is an 'Italian Brainrot' meme, as seen in the game?",
        answer: "An 'Italian Brainrot' meme, like those featured in the Italian Brainrot Clicker game, typically refers to viral internet trends, sounds, or characters that become incredibly pervasive, often repeated without deep meaning but for sheer absurdist humor. This free online game celebrates that culture!"
      },
      {
        value: "strategy-tips-progression",
        question: "What are some tips for faster progression in Italian Brainrot Clicker?",
        answer: "The key to progressing faster is balancing active clicking with strategic upgrades. Early on, prioritize cursor multipliers and auto-click upgrades to build passive income. Watch for characters that are about to become affordable and save up for them – character unlocks often provide the biggest multiplier boosts. As you progress, focus on upgrades that synergize with your playstyle, whether that's active clicking power or passive income generation. Don't ignore special effects and surprise boosts when they appear!"
      },
      {
        value: "what-to-unlock-first",
        question: "What upgrades or characters should I prioritize unlocking first?",
        answer: "Start by unlocking your first meme character as soon as possible – this usually provides a significant income boost. Then focus on auto-click upgrades to generate passive income, which lets you progress faster even while away from the game. Continue alternating between cursor multipliers and new character unlocks as you earn enough points. Don't save up indefinitely for expensive characters early on; steady progression through cheaper upgrades often gives better returns. As you unlock more characters, their stacking multiplier bonuses accelerate your overall earnings dramatically."
      }
    ]
  }
};
