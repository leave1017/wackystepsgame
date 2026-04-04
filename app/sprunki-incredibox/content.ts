import { content as globalContent } from "@/config/content";

export const sprunkiIncrediboxContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Sprunki Incredibox",
    game: {
      url: '/sprunki-incredibox.embed',
      title: "sprunki-incredibox",
      externalUrl: 'https://sprunkiincredibox.org/game/sprunki-original/'
    },
    gameHeight: "h-[75vh] min-h-[560px]",
  },

  // 特性部分配置
  features: {
    // Title emphasizing the fan-made mod nature and Sprunki uniqueness
    title: "Sprunki Incredibox: Unique Fan-Made Music Mod Features - Play Free Online!",
    items: [
      {
        // Highlights the core Incredibox mechanic with a Sprunki twist
        title: "Interactive Music Creation with Sprunki",
        description: "Create amazing beats and melodies in Sprunki Incredibox, a fan-made mod! Drag and drop colorful Sprunki characters to build your unique music compositions in this free online music game inspired by Incredibox."
      },
      {
        // Focuses on the new, unique Sprunki characters
        title: "Meet the Unique Sprunki Character Cast",
        description: "Discover the vibrant, new Sprunki characters in this unblocked game! Each Sprunki in this Incredibox mod brings unique sounds, beats, and melodies. Mix and match for fresh musical combinations."
      },
      {
        // Emphasizes ease of use, linking to original's appeal
        title: "Easy Drag-and-Drop Interface (Incredibox Style)",
        description: "Sprunki Incredibox features an intuitive interface, true to the Incredibox spirit, perfect for all ages. Simply drag Sprunki characters onto the stage and watch your musical masterpiece come to life in this engaging online game."
      },
      {
        // Sharing feature, common in such games
        title: "Share Your Sprunki Music Creations",
        description: "Record and share your unique Sprunki Incredibox compositions with friends! This fun free game (a fan-made mod) lets you save your beats and showcase your creativity."
      },
      {
        // Highlights new sounds and possibilities within the Sprunki mod
        title: "Endless Sprunki Musical Possibilities",
        description: "With new Sprunki sound layers and fresh character combinations, this Incredibox mod offers vast creative potential. Play Sprunki Incredibox online and discover unique tracks every time in this music game."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines it as a fan-made mod of Incredibox featuring Sprunki
    title: "What is Sprunki Incredibox? The Fan-Made Incredibox Mod with Sprunki!",
    // Description rewritten based on the new info, integrating keywords
    description: "Welcome to Sprunki Incredibox, an exciting fan-made mod inspired by the beloved music-mixing game, Incredibox! This free online game, often searched as 'sprunki game' or 'incredibox sprunki', takes the creative fun of the original and adds unique Sprunki flair, new soundscapes, and fresh visuals. Play unblocked and dive into a new musical adventure.\n\n" +
        "Sprunki Incredibox builds upon the intuitive drag-and-drop Incredibox foundation, allowing anyone to craft professional-sounding music tracks. Created by dedicated fans, this mod introduces new Sprunki characters, unique beats, rhythms, and melodies, giving players even more freedom. It's a must-try if you love the original Incredibox or creative music games.\n\n" +
        "Simply drag the distinct Sprunki characters onto the stage to layer sounds and watch your musical vision come to life. Play Sprunki Incredibox now – a fresh, vibrant Incredibox mod experience perfect for music lovers and gamers alike. Discover the Sprunki difference in this free online game!",
    logo: {
      src: "/assets/sprunki-incredibox/sprunki-incredibox-logo.webp", // Path unchanged
      // Alt text updated for the mod concept and keywords
      alt: "Sprunki Incredibox - Free Online Fan-Made Incredibox Music Mod Game Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting it's a Sprunki version of Incredibox gameplay
    title: "How to Play Sprunki Incredibox Online Free: Your Sprunki Music Mod Guide",
    // Description focused on the familiar Incredibox mechanics with Sprunki elements
    description: "Playing Sprunki Incredibox online is easy and fun, just like the original Incredibox! Start by selecting from the unique Sprunki characters at the bottom – each represents new beats, effects, melodies, and voices specific to this fan-made mod. Drag your chosen Sprunki onto the beatboxers to start building your track in this free online game.\n\n" +
        "Experiment with different Sprunki combinations to see how their sounds blend and create your own unique music. You can add or remove Sprunki characters anytime to modify your composition. The game automatically synchronizes all sounds, ensuring everything stays in perfect rhythm. Use the record button to save your Sprunki Incredibox creations and share them!\n\n" +
        "The beauty of this 'sprunki game', an Incredibox mod, lies in endless experimentation. Test different combinations of the new Sprunki sounds to discover your signature style. Play this unblocked music game and unleash your creativity with Sprunki!",
    image: "/assets/sprunki-incredibox/sprunki-incredibox.webp", // Path unchanged
    // Alt text updated
    imageAlt: "Sprunki Incredibox Online Game Guide - Free Music Creation Mod Interface"
  },
  
  faq: {
    // Title updated to reflect mod status and Sprunki
    title: "Sprunki Incredibox: FAQ (Free Online Incredibox Fan Mod with Sprunki)",
    items: [
      {
        value: "what-is-sprunki-incredibox",
        question: "What kind of game is Sprunki Incredibox?",
        // Answer clearly defines it as a fan-made mod featuring Sprunki
        answer: "Sprunki Incredibox is a free-to-play online music creation game, specifically a fan-made mod inspired by Incredibox. It uses the same intuitive drag-and-drop gameplay but features unique 'Sprunki' characters, new sounds, and distinct visuals."
      },
      {
        value: "how-to-create-music",
        question: "How do I create music in the Sprunki Incredibox game?",
        // Answer emphasizes Sprunki characters
        answer: "Creating music is simple! Drag and drop the unique Sprunki characters from the selection panel onto the stage. Each Sprunki adds a different musical element. Combine different Sprunki characters to build your unique musical composition in this free online game, a popular 'sprunki game' choice."
      },
      {
        value: "can-save-music",
        question: "Can I save and share my Sprunki Incredibox music?",
        answer: "Yes! Sprunki Incredibox allows you to record your musical compositions featuring the Sprunki sounds and save them. You can then share your creative beats with friends, showcasing your talents from this fun unblocked game and Incredibox mod."
      },
      {
        value: "is-it-free-to-play",
        question: "Is Sprunki Incredibox free to play online?",
        answer: "Absolutely! Sprunki Incredibox, being a fan-made mod, is completely free to play online. You can access the full music creation experience with the Sprunki characters without any downloads or payments. It's a great 'sprunki game' for instant fun."
      },
      {
        value: "different-from-original-incredibox", // Value kept, answer enhanced
        question: "How is Sprunki Incredibox different from the original Incredibox?",
        // Answer details the Sprunki mod differences
        answer: "Sprunki Incredibox is a fan-made mod that takes Incredibox's core gameplay and enhances it with new, unique 'Sprunki' characters, fresh soundscapes, distinct visuals, and new interactive elements. While you still drag and drop to make music, the sounds and aesthetics are specific to the Sprunki mod, offering a fresh experience for fans of Incredibox games."
      },
      {
        value: "where-to-play-sprunki", // New FAQ based on search terms
        question: "Where can I play the Sprunki Incredibox game or mod?",
        answer: "You can play Sprunki Incredibox online for free on websites that host fan-made games and Incredibox mods. Look for 'Sprunki Incredibox' or 'sprunki game' to find platforms offering this unblocked music creation experience."
      }
    ]
  }
}; 