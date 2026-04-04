// @ts-check
const { siteConfig } = require('./config/site');

// 博客文章列表 - 新增文章时同步更新此处
const blogSlugs = [
  { slug: 'wacky-steps-tips-how-to-walk-further',       date: '2026-03-15' },
  { slug: 'best-ragdoll-games-free-online-2026',         date: '2026-03-25' },
  { slug: 'wacky-steps-characters-unlockables-guide',    date: '2026-04-01' },
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
  outDir: './public',
  generateIndexSitemap: false,
  // 博客动态路由需要手动补充
  additionalPaths: async (config) => {
    return blogSlugs.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(post.date).toISOString(),
    }));
  },
  transform: async (config, path) => {
    // 首页
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // 游戏页
    const gamePages = ['/goo-goo-gaga-clicker'];
    if (gamePages.includes(path)) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // 博客列表
    if (path === '/blog') {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // 工具页
    if (['/about', '/contact', '/privacy-policy', '/terms-of-service'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.4, lastmod: new Date().toISOString(), alternateRefs: [] };
    }
    // 默认
    return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString(), alternateRefs: [] };
  },
  robotsTxtOptions: {
    policies: [
      // 常规搜索引擎规则
      {
        userAgent: '*',
        allow: '/',
      },

      // 专用 AI 爬虫 - 仅允许访问 llms 文件
      {
        userAgent: 'GPTBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'OAI-SearchBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Anthropic-AI',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'PerplexityBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'DeepseekBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'cohere-ai',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'YouBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'GoogleOther',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'DuckAssistBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
    ],
    additionalSitemaps: [`${siteConfig.url}/sitemap.xml`],
  },
}
