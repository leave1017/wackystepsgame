// @ts-check
const { siteConfig } = require('./config/site');

const blogSlugs = [
  { slug: 'wacky-steps-tips-how-to-walk-further',       date: '2026-03-15' },
  { slug: 'best-ragdoll-games-free-online-2026',         date: '2026-03-25' },
  { slug: 'wacky-steps-characters-unlockables-guide',    date: '2026-04-01' },
];

const gamePages = [
  '/cheese-chompers-3d',
  '/brainrot-clicker',
  '/basketball-bros-unblocked',
  '/goo-goo-gaga-clicker',
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
  outDir: './public',
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const blogPaths = blogSlugs.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(post.date).toISOString(),
    }));
    const gamePaths = gamePages.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
    return [...gamePaths, ...blogPaths];
  },
  transform: async (config, path) => {
    // Homepage
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // Hot Games listing
    if (path === '/games') {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // Blog listing
    if (path === '/blog') {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // Legal / info pages
    if (['/about', '/contact', '/privacy-policy', '/terms-of-service', '/dmca'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.4, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // Default
    return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString(), alternateRefs: [] };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot',       disallow: '/' },
      { userAgent: 'ChatGPT-User', disallow: '/' },
      { userAgent: 'OAI-SearchBot',disallow: '/' },
      { userAgent: 'Claude-Web',   disallow: '/' },
      { userAgent: 'Anthropic-AI', disallow: '/' },
      { userAgent: 'ClaudeBot',    disallow: '/' },
      { userAgent: 'PerplexityBot',disallow: '/' },
      { userAgent: 'DeepseekBot',  disallow: '/' },
      { userAgent: 'cohere-ai',    disallow: '/' },
      { userAgent: 'YouBot',       disallow: '/' },
      { userAgent: 'GoogleOther',  disallow: '/' },
      { userAgent: 'DuckAssistBot',disallow: '/' },
      { userAgent: 'Bytespider',   disallow: '/' },
    ],
    additionalSitemaps: [`${siteConfig.url}/sitemap.xml`],
  },
};
