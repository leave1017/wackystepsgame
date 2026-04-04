export const layout = {
  header: {
    isVisible: true,
    maxWidth: "max-w-sm",
    searchEnabled: true,
    logoSize: "text-2xl",
    container: {
      padding: "px-4 md:px-8",
    },
    logo: {
      src: "/assets/wacky-steps/wacky-steps-logo.png",
      size: "w-12 h-12", // 增加到 48x48 显示尺寸
    }
  },
  gameSection: {
    isVisible: {
      title: false  // 控制游戏区标题是否显示
    }
  },
  footer: {
    isVisible: true,
    sections: {
      about: true,
      quickLinks: true,
      social: true,
      legal: true,
      games: true,  // 添加 games section
    }
  },
  whatIs: {
    sectionId: "what-is",
    grid: {
      columns: "grid grid-cols-1 md:grid-cols-2 gap-8 items-start",
      gap: "gap-8",
    },
    content: {
      span: "md:col-span-1"
    },
    logo: {
      size: {
        width: "w-full",
        height: "h-auto"
      }
    }
  },
  faq: {
    sectionId: "faq",
    accordion: {
      type: "single",
      collapsible: true
    }
  }
} as const;






