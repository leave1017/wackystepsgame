# Goo Goo Gaga Clicker

**官方网站**: [googoogagaclicker.org](https://googoogagaclicker.org/)

基于 Next.js 构建的多游戏平台网站，主打 Goo Goo Gaga Clicker 点击游戏，并收录多款浏览器游戏。所有游戏均可直接在浏览器中运行，无需下载。

## 游戏列表

| 游戏 | 页面路径 | 描述 |
|------|----------|------|
| **Goo Goo Gaga Clicker** | `/` | 主游戏，点击解锁16个梗文化角色 |
| **Crazy Cattle 3D** | `/crazy-cattle-3d` | 物理引擎3D动作游戏 |
| **Crazy Cow 3D** | `/crazy-cow-3d` | 疯狂奶牛物理混乱玩法 |
| **Cheese Chompers 3D** | `/cheese-chompers-3d` | 老鼠主题淘汰赛游戏 |
| **Italian Brainrot Clicker** | `/brainrot-clicker` | 意大利梗点击游戏 |
| **Basketball Bros Unblocked** | `/basketball-bros-unblocked` | 篮球动作游戏 |
| **Pokemon Gamma Emerald** | `/pokemon-gamma-emerald` | 宝可梦同人增强版 |
| **Crazy Chicken 3D** | `/crazy-chicken-3d` | 疯狂小鸡物理战斗游戏 |
| **Futbol Libre** | `/futbol-libre` | 免费在线观看足球直播 |
| **Sprunki Incredibox** | `/sprunki-incredibox` | 音乐创作游戏 |

## 技术栈

- **框架**: Next.js 13.5 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI / shadcn-ui
- **部署**: Vercel
- **SEO**: next-sitemap

## 项目结构

```
/
├── app/                          # Next.js App Router 页面目录
│   ├── page.tsx                  # 首页 (Goo Goo Gaga Clicker)
│   ├── layout.tsx                # 全局布局
│   ├── [game-name]/              # 各游戏页面目录
│   ├── games/                    # 游戏列表和数据配置
│   ├── blog/                     # 博客页面
│   ├── about/                    # 关于页面
│   ├── contact/                  # 联系页面
│   ├── privacy-policy/           # 隐私政策
│   └── terms-of-service/         # 服务条款
├── components/                   # 公共组件
│   ├── layout/                   # Header、Footer 等布局组件
│   ├── templates/                # 游戏页面统一模板
│   ├── features/                 # 游戏特性展示
│   ├── how-to-play/              # 玩法说明
│   ├── faq/                      # FAQ
│   ├── other-games/              # 游戏推荐
│   └── ui/                       # 基础 UI 组件
├── config/                       # 站点全局配置
│   ├── site.js / site.ts         # 站点基本信息
│   └── content.ts                # 默认内容配置
├── public/
│   ├── game/                     # 游戏静态文件 (iframe 嵌入)
│   ├── assets/                   # 图片等静态资源
│   ├── llms.txt                  # AI 爬虫摘要
│   ├── llms-full.txt             # AI 爬虫完整内容
│   └── robots.txt                # 爬虫规则
└── next-sitemap.config.js        # Sitemap 配置
```

## 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 环境变量

在项目根目录创建 `.env.local`：

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 安装与运行

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 生成 Sitemap
npm run sitemap
```

访问 http://localhost:3000 查看网站。

## 游戏嵌入

游戏通过 iframe 嵌入，路由重写规则在 `next.config.js` 中配置：

```
/[game-name].embed  →  /game/[game-folder]/index.html
```

游戏静态文件放置于 `public/game/[游戏名]/` 目录下。

## 添加新游戏

1. 将游戏文件放入 `public/game/[游戏名]/`
2. 在 `app/[游戏名]/` 创建页面文件
3. 在 `app/games/game-data.ts` 中注册游戏信息
4. 创建 `app/[游戏名]/content.ts` 配置游戏内容
5. 在 `next.config.js` 添加 iframe 嵌入路由
6. 在 `public/assets/[游戏名]/` 添加游戏封面图

## 部署

通过 Vercel 自动部署，推送到 `main` 分支即触发生产部署。

在 Vercel 控制台 **Settings → Environment Variables** 中添加 `NEXT_PUBLIC_GA_ID`。

## 许可证

© 2025 Goo Goo Gaga Clicker. 保留所有权利。
