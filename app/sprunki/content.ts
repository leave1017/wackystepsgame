import { content as globalContent } from "@/config/content";

export const sprunkiContent = {
  ...globalContent,
  tags: ["Music", "Creative", "Casual", "Rhythm"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Sprunki",
    game: {
      url: 'https://playgama.com/export/game/sprunki-2c27-1',
      title: "sprunki",
      externalUrl: 'https://playgama.com/export/game/sprunki-2c27-1'
    },
    coverImage: "/assets/sprunki/what is.webp",
    logoImage: "/assets/sprunki/what is.webp",
  },

  features: {
    title: "Sprunki: Game Features",
    items: [
      {
        title: "Drag-and-Drop Music Creation",
        description: "Sprunki's core mechanic lets you drag colorful characters onto a stage and instantly hear the beat they contribute. Every character represents a unique sound loop — percussion, bass, melody, or vocals — and stacking them creates a layered music track you designed yourself."
      },
      {
        title: "Dozens of Unique Sound Characters",
        description: "Sprunki features a growing roster of animated characters, each mapped to a distinct musical loop. Mixing and matching different combinations produces wildly different results — from chill lo-fi grooves to chaotic experimental tracks. Discovering which characters complement each other is half the fun."
      },
      {
        title: "Hidden Bonus Animations",
        description: "Certain character combinations unlock hidden bonus animations and secret sound effects. Discovering these Easter eggs adds a layer of exploration to the music-making experience, rewarding curious players who experiment beyond the obvious combinations."
      },
      {
        title: "No Music Knowledge Required",
        description: "Sprunki is designed for everyone, not just musicians. The game's intuitive drag-and-drop interface means anyone can create a satisfying track within seconds of opening the game — no music theory, no instruments, no experience needed."
      }
    ]
  },

  whatIs: {
    title: "What is Sprunki?",
    description: "Sprunki is a free online music creation game inspired by the beloved Incredibox format, letting you compose original tracks by dragging and dropping animated characters onto a virtual stage. Each character represents a unique audio loop — basslines, percussion hits, melodic riffs, or vocal samples — and layering them together in real time produces fully formed musical compositions. The game runs entirely in your browser with no download required, making it instantly accessible to anyone with a modern device.\n\n" +
      "What makes Sprunki stand out is how naturally it bridges the gap between gaming and music creation. You're not reading sheet music or programming a sequencer — you're visually placing quirky animated figures onto a stage and listening as they instantly contribute to a growing soundscape. The feedback loop between placing a character and hearing the result is immediate and deeply satisfying, which is why Sprunki has developed such a dedicated community of players who return daily to experiment with new combinations.\n\n" +
      "The character roster in Sprunki is one of its greatest strengths. Each character has a distinct visual personality that hints at the type of sound they produce — chunky characters often carry bass or percussion loops, while slimmer, expressive ones tend toward melody and vocals. Learning each character's sound signature transforms the experience from random experimentation into intentional composition. Veterans of the game develop a feel for which characters synergize, and recreating favorite combinations becomes a satisfying skill in itself.\n\n" +
      "Sprunki also rewards exploration through its hidden bonus content. Specific character combinations trigger secret animations, alternate sound layers, and bonus visual effects that regular play won't reveal. This discovery mechanic gives experienced players a deeper game to engage with beyond pure music creation — there's always one more hidden combination to uncover.\n\n" +
      "Play Sprunki free online — no login, no download, works on any browser. Whether you're crafting a beat to share with friends or simply experimenting for fun, Sprunki turns music creation into a game anyone can enjoy.",
    logo: {
      src: "/assets/sprunki/what is.webp",
      alt: ""
    }
  },

  howToPlay: {
    title: "How to Play Sprunki",
    description: "**Select Your Characters:** At the bottom of the screen you'll see a row of animated characters, each representing a different sound loop. Hover over any character to preview the sound they'll contribute before committing — this helps you plan the track you're building.\n\n" +
      "**Drag Characters onto the Stage:** Drag any character from the selection row up to one of the empty slots on the stage. The moment they land, their audio loop begins playing. The character animates in sync with their sound, giving the whole experience a lively, visual feel.\n\n" +
      "**Layer Sounds to Build Your Track:** Adding more characters stacks their sounds on top of each other. A good starting point is placing a percussion character first to establish the beat, then adding a bass loop, then layering melodies on top. Sprunki handles all the syncing automatically — every loop is in the same tempo and key.\n\n" +
      "**Remove Characters to Adjust the Mix:** Click on any character already on the stage to remove them and silence their loop. This lets you swap out sounds that aren't working and try something different. Experimenting freely is the fastest way to find combinations that click.\n\n" +
      "**Discover Hidden Bonus Combinations:** Certain character pairings unlock secret bonus content — special animations play, new sounds emerge, and the visual stage transforms. There's no in-game hint for which combinations trigger these effects, so try unusual pairings and pay attention to what happens. The community has documented many known triggers if you want a head start.\n\n" +
      "**Share Your Creation:** Once you've built a track you love, you can record and share it. Sprunki's sharing features let you export or link to your composition so friends can hear what you made — or use it as a starting point for their own remix.",
    image: "/assets/sprunki/how to.webp",
    imageAlt: ""
  },

  faq: {
    title: "Frequently Asked Questions – Sprunki",
    items: [
      {
        value: "is-sprunki-free",
        question: "Is Sprunki free to play?",
        answer: "Yes. Sprunki is completely free to play in your browser with no download, no account, and no payment required. The full game and all characters are available at zero cost."
      },
      {
        value: "sprunki-incredibox-difference",
        question: "How is Sprunki different from Incredibox?",
        answer: "Sprunki is a fan-made game inspired by Incredibox but with its own original characters, sounds, and hidden bonus combinations. It plays very similarly but features entirely different audio content and visual design."
      },
      {
        value: "sprunki-on-mobile",
        question: "Can I play Sprunki on mobile?",
        answer: "Yes. Sprunki runs in any modern mobile browser. Touch controls work in place of mouse drag-and-drop — tap and drag characters onto the stage just as you would on desktop."
      },
      {
        value: "sprunki-hidden-combinations",
        question: "Are there secret combinations in Sprunki?",
        answer: "Yes. Certain character pairings trigger hidden bonus animations and extra sound effects. Experimenting with unusual combinations is the best way to discover them — there's no in-game guide, so exploration is key."
      }
    ]
  },

  rating: {
    ...globalContent.rating,
    title: "Rate Sprunki",
    initialRating: 4.8,
    initialVotes: 241
  }
};
