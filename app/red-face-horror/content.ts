import { content as globalContent } from "@/config/content";

export const redFaceHorrorContent = {
  ...globalContent,
  tags: ["Horror", "Survival", "Action", "3D"],

  gameSection: {
    ...globalContent.gameSection,
    title: "Red Face Horror",
    game: {
      url: "https://gamea.azgame.io/red-face-horror/",
      title: "red-face-horror",
      externalUrl: "https://gamea.azgame.io/red-face-horror/",
    },
    coverImage: "/assets/Red face horror/Red face horror.webp",
    logoImage: "/assets/Red face horror/Red face horror.webp",
  },

  rating: {
    initialRating: 4.2,
    initialVotes: 294,
  },

  features: {
    title: "Red Face Horror: Free Online 3D Horror Game Features",
    items: [
      {
        title: "Tense Survival Horror Gameplay",
        description:
          "Red Face Horror drops you into a terrifying environment where every decision matters. Avoid the monstrous Red Face creature, navigate eerie locations, and survive as long as you can in this heart-pounding free online horror game.",
      },
      {
        title: "Atmospheric 3D Graphics",
        description:
          "Built with Unity WebGL, Red Face Horror delivers immersive 3D visuals directly in your browser. Dark environments, unsettling audio, and detailed character design create a genuinely creepy atmosphere without any download.",
      },
      {
        title: "Free to Play — No Download Needed",
        description:
          "Red Face Horror is completely free to play in your browser. No installation, no sign-up, no payment required. Open the page and start playing instantly on any modern desktop or mobile browser.",
      },
      {
        title: "Unblocked Access Anywhere",
        description:
          "Red Face Horror is fully unblocked and accessible from any network. Whether you're at school, work, or home, you can play this free horror game without restrictions or a VPN.",
      },
    ],
  },

  whatIs: {
    title: "What Is Red Face Horror?",
    description:
      "Red Face Horror is a free online 3D survival horror game playable directly in your browser. You are hunted by the Red Face — a disturbing creature with an unsettling appearance — as you try to explore, survive, and escape increasingly dangerous environments.\n\n" +
      "The game is built with Unity WebGL, which means it delivers genuine 3D graphics and responsive controls without requiring any download or installation. Just open the page and the game loads directly in your browser on desktop or mobile.\n\n" +
      "Red Face Horror belongs to the survival horror genre, emphasizing tension, exploration, and the constant threat of being caught. There are no safe rooms — every area you enter could bring you face to face with the creature. The gameplay rewards careful observation and quick thinking over brute force.\n\n" +
      "The game is completely free to play and fully unblocked, making it accessible from any network. It is one of the most played free horror games available in-browser, with a strong rating from thousands of players.",
    logo: {
      src: "/assets/Red face horror/Red face horror.webp",
      alt: "Red Face Horror – Free Online 3D Survival Horror Game",
    },
  },

  howToPlay: {
    title: "How to Play Red Face Horror",
    description:
      "Red Face Horror uses standard controls that are easy to pick up but require sharp awareness to survive.\n\n" +
      "**Movement Controls:**\n" +
      "- **W / A / S / D** or **Arrow Keys**: Move your character\n" +
      "- **Mouse**: Look around and control camera direction\n" +
      "- **Shift**: Sprint — use sparingly, as noise and stamina matter\n" +
      "- **E / F**: Interact with objects and doors\n\n" +
      "**Survival Tips:**\n" +
      "- Stay quiet — running attracts the Red Face faster\n" +
      "- Check every room carefully before entering; corners hide danger\n" +
      "- Learn the creature's patrol patterns to time your movements\n" +
      "- Manage your stamina — panicked sprinting can get you cornered\n" +
      "- If spotted, break line of sight immediately and find cover\n\n" +
      "The goal is to survive and complete objectives without being caught. The longer you last, the more of the story you uncover.",
    image: "/assets/Red face horror/how to.webp",
    imageAlt: "Red Face Horror – How to Play Guide",
  },

  faq: {
    title: "Red Face Horror – Frequently Asked Questions",
    items: [
      {
        value: "red-face-horror-free",
        question: "Is Red Face Horror free to play?",
        answer:
          "Yes. Red Face Horror is completely free to play online with no download, no sign-up, and no payment required. The full game runs directly in your browser at no cost.",
      },
      {
        value: "red-face-horror-unblocked",
        question: "Is Red Face Horror unblocked?",
        answer:
          "Yes. Red Face Horror is fully unblocked and accessible from any network including school and work. No VPN or special access is needed — just open your browser and play.",
      },
      {
        value: "red-face-horror-how-to-play",
        question: "How do you play Red Face Horror?",
        answer:
          "Use W / A / S / D or arrow keys to move, and your mouse to look around. Press E or F to interact with objects. Avoid the Red Face creature by staying quiet, hiding, and breaking its line of sight. Complete objectives to progress while surviving as long as possible.",
      },
      {
        value: "red-face-horror-mobile",
        question: "Can you play Red Face Horror on mobile?",
        answer:
          "Yes. Red Face Horror runs in modern mobile browsers on Android and iOS via Unity WebGL. Touch controls are supported so you can play on smartphones and tablets without downloading an app.",
      },
    ],
  },
};
