import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Home", href: "/" },
        { text: "New Games", href: "/games/new" },
        { text: "Hot Games", href: "/games" },
        { text: "Blog", href: "/blog" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - a free ragdoll walking browser game. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Telegram - Free Unblocked Games", href: "https://t.me/s/free_unblocked_games" },
        { text: "H5 Joy Games", href: "https://h5joy.org" },
        { text: "Geometry Dash", href: "https://geometrydash.io" },
        { text: "Slope Game", href: "https://slope-game.com" },
        { text: "1v1 LOL", href: "https://1v1.lol" },
        { text: "Cookie Clicker", href: "https://orteil.dashnet.org/cookieclicker/" },
        { text: "Shell Shockers", href: "https://shellshock.io" },
      ]
    },
    games: {
      title: "Games",
      links: [
        { text: "Wacky Steps", href: "/" },
        { text: "Goo Goo Gaga Clicker", href: "/goo-goo-gaga-clicker" },
        { text: "Crazy Cattle 3D", href: "https://crazycattle3d.io" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" },
        { text: "DMCA", href: "/dmca" }
      ]
    },
    copyright: {
      text: "© {year} Wacky Steps. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Wacky Steps",
    votes: "votes",
    initialRating: 4.7,
    initialVotes: 187
  },
  tags: ["Skill", "Action", "Physics", "Ragdoll", "Singleplayer"],
  gameSection: {
    title: "Wacky Steps",
    game: {
      url: 'https://www.miniplay.com/embed/wacky-steps',
      title: "wacky-steps",
      externalUrl: 'https://www.miniplay.com/embed/wacky-steps'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: "How to Play Wacky Steps",
    description: "Wacky Steps is controlled with a single input — click or tap — but mastering it takes real practice. Each press of the button makes your ragdoll character take one step forward. A short tap produces a small, controlled stride. A longer hold produces a bigger step that covers more ground but puts your balance at greater risk. Learning to feel the difference is the core skill of the game.\n\n" +
      "**Basic Controls:** Click or tap to step. Short taps for precision near hazards, longer holds to cover distance on clear stretches. On mobile, touch controls work the same way — tap anywhere on the screen to step.\n\n" +
      "**Avoid the Cracks:** Sidewalk cracks are the primary hazard throughout the game. Stepping directly on one ends your run immediately. The cracks are visible ahead of you, so learn to read the path two or three tiles in advance and plan your stride length accordingly.\n\n" +
      "**Survive Traffic:** As you walk further, traffic appears on the road sections. Cars and obstacles move across your path at increasing speeds. Short, rapid taps are the safest way through — they give you more decision points and let you react faster than a single long stride would.\n\n" +
      "**Watch for Explosive Tiles:** Certain sections of the pavement contain explosive tiles that trigger if stepped on. These are usually marked visually but require quick recognition. When you spot one, slow your tempo and choose your line carefully before committing to the next step.\n\n" +
      "**Collect Coins:** Coins appear along the route and are collected automatically when you walk over them. They accumulate across runs and can be spent in the unlock menu to access new characters and outfit styles. Prioritize distance over coin-chasing — longer runs naturally earn more coins than short detours for individual pickups.\n\n" +
      "The game gets harder the further you walk. New hazard types appear, timing windows tighten, and the terrain becomes less predictable. There is no finish line — your only goal is to walk as far as possible before your ragdoll takes one step too many.",
    image: "/assets/wacky-steps/wacky-steps-how-to.webp",
    imageAlt: "Wacky Steps Game Guide - How to Play, Controls, and Tips"
  },
  whatIs: {
    title: "What is Wacky Steps?",
    description: "Wacky Steps is a free online ragdoll walking game built on physics-based movement. You control a wobbly character navigating an endless sidewalk filled with cracks, traffic, explosive tiles, and gaps in the pavement. The goal is simple: walk as far as possible without falling. The execution is anything but simple.\n\n" +
      "The game belongs to the endless runner genre, but unlike most runners where the character moves automatically, Wacky Steps puts every single step under your control. Each tap or click determines how far your foot lands, what surface it hits, and whether your ragdoll body stays upright or tumbles. That level of direct control — combined with unpredictable physics — creates a playing experience that is uniquely skill-expressive.\n\n" +
      "Wacky Steps is designed for instant play. There are no accounts, no downloads, no installations. Open the page and start walking. The game runs in any modern browser on desktop and mobile, with touch controls that work just as naturally as mouse clicks. Whether you have two minutes between meetings or an hour to grind for a personal best, the session length is entirely yours to decide.\n\n" +
      "The unlock system gives the game long-term structure. Coins collected during runs can be spent on new characters and outfit styles. None of the unlocks change the difficulty or give mechanical advantages — they are pure rewards for playing, offering visual variety and a reason to keep coming back beyond chasing records.\n\n" +
      "Play Wacky Steps online free — no download needed, works on browser, unblocked on any network.",
    logo: {
      src: "/assets/wacky-steps/wacky-steps.webp",
      alt: "Wacky Steps - Free Online Ragdoll Walking Game"
    }
  },
  faq: {
    title: "Frequently Asked Questions About Wacky Steps",
    items: [
      {
        value: "is-wacky-steps-free",
        question: "Is Wacky Steps free to play?",
        answer: "Yes. Play Wacky Steps online free directly in your browser — no download or sign-up needed. The full game is available at no cost, with no paywalls or premium features locked behind payment."
      },
      {
        value: "wacky-steps-unblocked",
        question: "Is Wacky Steps unblocked?",
        answer: "Yes. Wacky Steps unblocked is available here anytime, playable on any network including school and office networks. No VPN or special access required."
      },
      {
        value: "what-type-of-game",
        question: "What type of game is Wacky Steps?",
        answer: "Wacky Steps is a physics-based ragdoll walking game in the endless runner genre. You control every individual step your character takes, avoiding sidewalk cracks, traffic, and other hazards while trying to walk as far as possible."
      },
      {
        value: "play-on-mobile",
        question: "Can I play Wacky Steps on mobile?",
        answer: "Yes. Wacky Steps browser game works on both desktop and mobile devices. On mobile, tap anywhere on the screen to step — the touch controls feel natural and responsive. No app download is required."
      },
      {
        value: "how-to-control",
        question: "How do I control my character in Wacky Steps?",
        answer: "Click or tap to take a step. A short tap produces a small controlled stride; a longer hold produces a bigger step. Balancing tap length based on what's ahead is the core skill of the game. Short taps near hazards, longer taps on clear stretches."
      },
      {
        value: "tips-for-walking-further",
        question: "What are some tips to walk further in Wacky Steps?",
        answer: "Use short taps when hazards are near — you get more decision points and can react faster. Look two or three tiles ahead rather than at your current foot position. Let your character stabilize after a wobble before your next input. Most players fall from overextending, not from going too slow."
      },
      {
        value: "what-are-coins-for",
        question: "What are coins used for in Wacky Steps?",
        answer: "Coins are collected automatically as you walk over them during a run. They accumulate across all runs and can be spent in the unlock menu to access new characters and outfit styles. Unlocks are cosmetic — they add visual variety but do not change game mechanics or difficulty."
      },
      {
        value: "does-difficulty-increase",
        question: "Does Wacky Steps get harder the further you walk?",
        answer: "Yes. New hazard types appear as your distance increases, timing windows get tighter, and the terrain becomes less predictable. There is no finish line — the game continues until you fall, with difficulty scaling continuously with distance."
      }
    ]
  },
  features: {
    title: "Wacky Steps Game Features",
    items: [
      {
        title: "Physics-Based Ragdoll Walking",
        description: "Wacky Steps delivers genuinely unpredictable movement thanks to its real-time physics engine. Every step your ragdoll takes has weight, momentum, and tipping points — no two runs feel identical. The wobbly, reactive movement is both the central challenge and the source of the game's comedy. Mastering the physics separates long runs from short tumbles in this wacky steps ragdoll game."
      },
      {
        title: "Endless Runner with Escalating Hazards",
        description: "There is no finish line in Wacky Steps — only distance. The endless runner format introduces new obstacle types the further you walk: traffic corridors, explosive tiles, pavement gaps, and increasingly narrow safe zones. Wacky Steps online free play means you can restart instantly after every fall and compete for a new personal best without any load time."
      },
      {
        title: "Unlockable Characters and Outfit Styles",
        description: "Collect coins during runs and spend them on new characters and outfit variations in the unlock menu. Each character has its own visual identity and a slightly different ragdoll weight distribution. None of the unlocks change difficulty — they reward continued play with genuine visual variety and give long-term players something to work toward beyond raw distance records."
      },
      {
        title: "Instant Play on Any Device",
        description: "Wacky Steps browser game requires zero downloads, no accounts, and no paywalls. Load it instantly on desktop or mobile and start walking within seconds. Touch controls work seamlessly for mobile players. Wacky Steps is unblocked and playable on any network. Play Wacky Steps walking game anywhere, anytime — completely free, no installation needed."
      }
    ]
  }
} as const;
