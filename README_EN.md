# Crazy Cattle 3D Game Website

🎮 **Official Website**: [Crazy Cattle 3D Official Website](https://crazy-cattle.net/)

📖 **中文版本**: [README.md](./README.md)

This is the official website project for Crazy Cattle 3D game, built with Next.js. The website provides multiple game embeds, game information display, and optimization for search engines and AI crawlers.

## Project Overview

Crazy Cattle 3D is a physics-based 3D action game that runs directly in browsers without downloads. This project is the official website for the game, now expanded into a multi-game platform offering multiple different types of browser games.

## About the Game

**Crazy Cattle 3D** is an independently developed free online battle royale game featuring explosive physics-based gameplay. Unlike traditional battle royales that focus on weapon collection, Crazy Cattle 3D emphasizes momentum and collision mechanics, creating a unique and chaotic gaming experience.

### Game Highlights

🎮 **Physics-Based Combat**: Master authentic cattle movement with a groundbreaking physics engine designed for realistic environmental interactions and precise collision detection.

🌍 **Three Battle Environments**: Fight across Ireland's rolling hills, Iceland's volcanic terrain, and New Zealand's mountainous landscapes - each offering unique strategic opportunities.

⚡ **Skill-Based Progression**: No paid advantages, just pure tactical gameplay. Perfect your timing for devastating impacts and strategic positioning.

🎯 **Easy to Learn, Hard to Master**: Intuitive WASD controls with mouse steering, but deep mechanics reward advanced techniques and strategic thinking.

### Why Play Crazy Cattle 3D?

- **Free & Unblocked**: Play instantly in your browser without downloads
- **Cross-Platform**: Compatible with Windows, Mac, Linux, and mobile devices
- **Unique Gameplay**: Experience physics-based battle royale like no other game
- **Regular Updates**: Continuously improved with new features and optimizations

The game delivers 30-minute matches of pure explosive action, where strategic positioning matters more than aggressive charging. Whether you're a newcomer learning the basics or a veteran mastering advanced techniques, Crazy Cattle 3D offers consistently engaging combat scenarios that keep you coming back for more.

### Supported Games List

1. **[Crazy Cattle 3D](https://crazy-cattle.net/)** - Main game, physics-based 3D action game
2. **[Crazy Cow 3D](https://crazy-cattle.net/crazy-cow-3d)** - Crazy cow version with physics-based chaotic gameplay
3. **[Cheese Chompers 3D](https://crazy-cattle.net/cheese-chompers-3d)** - Rat-themed knockout game
4. **[Italian Brainrot Clicker](https://crazy-cattle.net/brainrot-clicker)** - Italian meme clicker game
5. **[Basketball Bros Unblocked](https://crazy-cattle.net/basketball-bros-unblocked)** - Basketball action game
6. **[Pokemon Gamma Emerald](https://crazy-cattle.net/pokemon-gamma-emerald)** - Enhanced Pokemon fan-made version
7. **[Crazy Chicken 3D](https://crazy-cattle.net/crazy-chicken-3d)** - Crazy chicken physics battle game
8. **[Sprunki Incredibox](https://crazy-cattle.net/sprunki-incredibox)** - Interactive music creation fan-mod game
9. **[Futbol Libre](https://crazy-cattle.net/futbol-libre)** - Watch live football matches online for free.

### Main Features

- **Multi-Game Embed & Display** - Supports multiple different types of browser games
- **Unified Game Page Template** - Each game has complete introduction, features, gameplay and FAQ
- **Game Features, Gameplay & FAQ Introduction** - Detailed game guides and common questions
- **Search Engine Optimization (SEO)** - Complete meta tags and structured data
- **AI Crawler Special Content Optimization** - Dedicated llms.txt files
- **Responsive Design** - Supports various devices and screen sizes
- **Game Recommendation System** - Recommends other games on each game page

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI (Complete accessibility component library)
- **Deployment**: Vercel
- **SEO**: next-sitemap 4.2.3
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```
/
├── app/                    # Next.js App Directory (App Router)
│   ├── crazy-cow-3d/       # Crazy Cow 3D game page
│   ├── crazy-chicken-3d/   # Crazy Chicken 3D game page
│   ├── cheese-chompers-3d/ # Cheese Chompers 3D game page
│   ├── brainrot-clicker/   # Italian Brainrot Clicker game page
│   ├── basketball-bros-unblocked/ # Basketball Bros game page
│   ├── pokemon-gamma-emerald/     # Pokemon Gamma Emerald game page
│   ├── sprunki-incredibox/ # Sprunki Incredibox game page
│   ├── games/              # Game list and data configuration
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy policy page
│   ├── terms-of-service/   # Terms of service page
│   ├── layout.tsx          # Global layout
│   ├── page.tsx            # Homepage (Crazy Cattle 3D)
│   ├── schema.ts           # Structured data configuration
│   └── globals.css         # Global styles
├── components/             # React component library
│   ├── game-section/       # Game display components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── templates/          # Page templates (GamePageTemplate)
│   ├── home/               # Homepage components
│   ├── features/           # Game features components
│   ├── what-is/            # Game introduction components
│   ├── how-to-play/        # Gameplay instruction components
│   ├── faq/                # FAQ components
│   ├── other-games/        # Other games recommendation components
│   ├── rating/             # Rating components
│   └── ui/                 # Basic UI components (based on Radix UI)
├── config/                 # Configuration files
│   ├── site.ts/js          # Site basic configuration
│   ├── content.ts          # Game content configuration
│   ├── layout.ts           # Layout configuration
│   └── theme.ts            # Theme configuration
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility function library
├── public/                 # Static assets
│   ├── assets/             # Images and other resources
│   │   ├── crazy-cow-3d/   # Crazy Cow 3D related images
│   │   ├── crazy-chicken-3d/ # Crazy Chicken 3D related images
│   │   ├── cheese-chompers-3d/ # Cheese Chompers 3D related images
│   │   ├── brainrot-clicker/ # Brainrot Clicker related images
│   │   ├── basketball-bros-unblocked/ # Basketball Bros related images
│   │   ├── pokemon-gamma-emerald/ # Pokemon related images
│   │   ├── sprunki-incredibox/ # Sprunki Incredibox related images
│   │   └── img/            # Site common images
│   ├── game/               # Game files directory
│   │   ├── crazycattle3d/  # Crazy Cattle 3D game files
│   │   ├── crazycow3d/     # Crazy Cow 3D game files
│   │   ├── crazy-chicken-3d/ # Crazy Chicken 3D game files
│   │   ├── cheesechompers3d/ # Cheese Chompers 3D game files
│   │   ├── brainrot-clicker/ # Brainrot Clicker game files
│   │   ├── basketball-bros-unblocked/ # Basketball Bros game files
│   │   ├── pokemon-gamma-emerald/ # Pokemon game files
│   │   └── sprunki-incredibox/ # Sprunki Incredibox game files
│   ├── llms.txt            # AI crawler dedicated content summary
│   ├── llms-full.txt       # AI crawler dedicated full content
│   ├── robots.txt          # Search engine crawler rules
│   └── sitemap.xml         # Site map
├── next.config.js          # Next.js configuration (includes game route rewrites)
├── next-sitemap.config.js  # Sitemap and robots.txt configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── components.json         # shadcn/ui component configuration
```

## Development Guide

### Environment Requirements

- Node.js 16.x or higher
- npm or yarn

### Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
# Google Analytics Configuration
# Replace with your own Google Analytics ID
# How to get: https://analytics.google.com/ → Admin → Data Streams → Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other optional configurations
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: 
- The `.env.local` file is included in `.gitignore` and will not be committed to the repository
- Please replace `G-XXXXXXXXXX` with your own Google Analytics Measurement ID

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to view the website.

### Build Project

```bash
npm run build
# or
yarn build
```

### Generate Sitemap

```bash
npm run sitemap
# or
yarn sitemap
```

### Clean Sitemap

```bash
npm run clean-sitemap
```

## Game Embed Guide

The website embeds games through iframe, each game has corresponding embed routes:

- `/crazy-cattle-3d.embed` → `/game/crazycattle3d/index.html`
- `/crazy-cow-3d.embed` → `/game/crazycow3d/index.html`
- `/cheese-chompers-3d.embed` → `/game/cheesechompers3d/index.html`
- `/brainrot-clicker.embed` → `/game/brainrot-clicker/index.html`
- `/basketball-bros-unblocked.embed` → `/game/basketball-bros-unblocked/index.html`
- `/pokemon-gamma-emerald.embed` → `/game/pokemon-gamma-emerald/index.html`
- `/crazy-chicken-3d.embed` → `/game/crazy-chicken-3d/index.html`
- `/sprunki-incredibox.embed` → `/game/sprunki-incredibox/index.html`

For detailed game localization deployment guide, refer to `IFRAME_DOWNLOAD_README.md`.

## Adding New Games Guide

To add new games, follow these steps:

1. **Add Game Files**: Place game files in `public/game/[game-name]/` directory
2. **Create Game Page**: Create page directory and files in `app/[game-name]/`
3. **Configure Game Data**: Add game information in `app/games/game-data.ts`
4. **Add Game Content**: Create game's `content.ts` configuration file
5. **Configure Route Rewrites**: Add embed routes in `next.config.js`
6. **Add Game Assets**: Add related images in `public/assets/[game-name]/`

## Related Links and Resources

### Official Pages
- 🏠 **Homepage**: [Crazy Cattle 3D Official Website](https://crazy-cattle.net/)
- 📞 **Contact Us**: [Contact Us](https://crazy-cattle.net/contact)
- ℹ️ **About Us**: [About Us](https://crazy-cattle.net/about)
- 🔒 **Privacy Policy**: [Privacy Policy](https://crazy-cattle.net/privacy-policy)
- 📋 **Terms of Service**: [Terms of Service](https://crazy-cattle.net/terms-of-service)

### External Links (Footer Quick Links)
- 🐍 **Snake Game**: [Online Snake Game](https://snake-game.online)
- 📝 **Evernote**: [Evernote Notes](https://lite.evernote.com/note/a7633e02-bcf7-d080-171a-a858eec4a9d2)
- 📅 **CAL**: [Vincent AI Calendar Booking](https://cal.com/vincent-ai)
- 💰 **Patreon**: [Patreon Support Page](https://www.patreon.com/posts/crazy-cattle-3d-129397709)
- 📌 **Pinterest**: [Pinterest Image Sharing](https://www.pinterest.com/pin/581245895696208484/)
- 🔗 **Linktr**: [Linktr Link Tree](https://linktr.ee/vincent20250520)
- 📰 **Substack**: [Substack Blog](https://substack.com/@vincent879601/posts)
- 🎨 **Creem**: [Creem Creative Platform](https://www.creem.io/bip/vincent-ai)
- 💻 **CrazyCattle3d Github**: [Project English Documentation](https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md)

## AI Crawler Optimization

This project has special optimization for AI crawlers:

1. **Dedicated Content Files**: Provides `llms.txt` and `llms-full.txt` files containing structured game information
2. **robots.txt Configuration**: Guides AI crawlers to access dedicated files while restricting access to other parts of the website
3. **Supported AI Crawlers**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot, etc.

For detailed configuration, see `next-sitemap.config.js`.

## OG Image Generation

For social media preview image generation guide, refer to `OG_IMAGE_README.md`.

## Deployment

The project is configured for automatic deployment through Vercel. Changes pushed to the main branch will automatically deploy to production.

### Vercel Environment Variables Setup

Configure the following environment variables in Vercel Console:

1. Login to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
Environment: Production, Preview, Development
```

**Or using Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variable
vercel env add NEXT_PUBLIC_GA_ID
# Enter value: G-XXXXXXXXXX
# Select environments: Production, Preview, Development
```

### Automatic Deployment

- **Production**: Push to `main` branch triggers automatic deployment
- **Preview**: Creating Pull Requests automatically generates preview links
- **Development**: Use `vercel dev` for local development

## License

© 2025 Crazy Cattle 3D. All rights reserved. 