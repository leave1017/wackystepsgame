export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "wacky-steps": {
    id: "wacky-steps",
    title: "Wacky Steps",
    description: "Play Wacky Steps free online – a ragdoll walking game where you avoid cracks, dodge obstacles, and walk as far as you can!",
    image: "/assets/wacky-steps/wacky-steps.webp",
    url: "/",
  },
  "goo-goo-gaga-clicker": {
    id: "goo-goo-gaga-clicker",
    title: "Goo Goo Gaga Clicker",
    description: "Click your way through the viral Goo Goo Gaga meme universe! Unlock 16 bizarre characters, upgrade your clicking empire, and embrace the absurdity.",
    image: "/assets/goo-goo-gaga-clicker/goo-goo-gaga-clicker.webp",
    url: "/goo-goo-gaga-clicker",
  },
  "brainrot-clicker": {
    id: "brainrot-clicker",
    title: "Italian Brainrot Clicker",
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    image: "/assets/brainrot-clicker/brainrot-clicker.webp",
    url: "/brainrot-clicker",
  },
  "basketball-bros-unblocked": {
    id: "basketball-bros-unblocked",
    title: "Basketball Bros Unblocked",
    description: "Experience exciting basketball action with unique characters. Play online for free, no download required!",
    image: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.webp",
    url: "/basketball-bros-unblocked",
  },
  "horse-magnifier": {
    id: "horse-magnifier",
    title: "Horse Magnifier",
    description: "Zoom into a horse and uncover surreal hidden details in this quirky free indie exploration game. No download needed!",
    image: "/assets/horse-magnifier/horse-magnifier.webp",
    url: "/horse-magnifier",
  },
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



