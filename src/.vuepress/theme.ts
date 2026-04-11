import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.bytelighting.cn",
  logo: "logo.png",
  favicon: "/favicon.ico",

  author: {
    name: "BraumAce",
    url: "https://blog.bytelighting.cn/article",
  },

  // 图标库（已迁移到 plugins.icon.assets）

  repo: "https://github.com/BraumAce/ByteLighting",
  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Search", "Links", "Repo", "Outlook"],
  },
  navbar,
  sidebar,
  sidebarSorter: "order",
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2023016031号-4</a>',
  displayFooter: true,

  // 路径导航
  breadcrumb: false,

  pageInfo: ["Author", "Date", "Category", "Tag", "Original", "Word", "ReadingTime"],

  blog: {
    articlePerPage: 20,
    avatar: "BraumAce.jpg",
    description: "学而不思则罔 思而不学则殆",
    intro: "/intro.html",
    medias: {
      Email: "mailto:1693717911@qq.com",
      Gitee: "https://gitee.com/BraumAce",
      GitHub: "https://github.com/BraumAce",
      // Gitlab: "https://example.com",
      // Lark: "https://www.feishu.cn/invitation/page/add_contact/?token=e16lc6b4-120b-4742-b51f-ca731b693bfa&amp;unique_id=UBZmuOUVhQ7tEjVABCoQtQ==",
      QQ: "QQ.jpg",
      Wechat: "WX.jpg",
      Zhihu: "https://www.zhihu.com/people/18779889803",
      BiliBili: "https://space.bilibili.com/351506386",
    },
  },

  // page meta（lastUpdated/editLink 已由 @vuepress/plugin-git 自动处理，中文 locale 默认生效）

  // 加密文章
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  hotReload: true,

  blogLocales: {
    reprint: "转载",
  },

  // Markdown 增强（从 plugins.mdEnhance / plugins.markdownXxx 迁移而来）
  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    gfm: true,
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,

    chartjs: true,
    echarts: true,
    flowchart: true,

    playground: {
      presets: ["ts", "vue"],
    },

    // 从 plugins.markdownHint 迁移
    hint: true,
    alert: true,

    // 从 plugins.markdownMath 迁移
    math: {
      type: 'katex',
      copy: true,
      mhchem: true,
    },

    // 从 plugins.markdownTab 迁移
    tabs: true,
    codeTabs: true,

    // 从 plugins.revealjs 迁移
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },

    // 从 plugins.markdownImage 迁移
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    obsidianImgSize: true,
  },

  plugins: {

    // 图标（从顶层 iconAssets 迁移）
    icon: {
      assets: "//at.alicdn.com/t/c/font_4608718_q9hih6ec37.css",
    },

    // RSS
    feed: {
      atom: true,
      rss: true,
      image: "/logo.png",
      icon: "/favicon.ico",
      count: 1000,
      devServer: true,
      devHostname: "http://localhost:8080",
    },

    blog: {
      type: [
        {
          key: "reprint",
          filter: (page) => !!page.frontmatter.reprint,
          sorter: (pageA, pageB) =>
            compareDate(new Date(pageA.frontmatter.date), new Date(pageB.frontmatter.date)),
        },
      ],
    },

    // 搜索框（从 search/searchPro 迁移到 slimsearch）
    slimsearch: {
      indexContent: true,
      suggestion: true,
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            '/': '分类：$content',
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            '/': '标签：$content',
          },
        },
      ],
    },

    // 评论功能
    comment: {
      provider: 'Giscus',
      repo: "BraumAce/ByteLighting",
      repoId: "R_kgDOMP-taA",
      category: "Announcements",
      categoryId: "DIC_kwDOMP-taM4CghxQ",
    },

    // 组件配置（移除已废弃的 FontIcon）
    components: {
      components: ["Badge", "VPCard", "Share", "SiteInfo", "PDF", "BiliBili"],
      componentOptions: {
        share: {
          services: ["email", "qq", "qrcode", "qzone", "facebook", "telegram", "twitter", "weibo", "wordpress"],
        },
      },
    },

    // 版权信息
    copyright: {
      global: true,
      canonical: "https://blog.bytelighting.cn/",
    },

    // PWA 支持
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "ByteLighting",
            short_name: "Byte",
            url: "/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
}, { custom: true, });

function compareDate(dateA: Date, dateB: Date): number {
    return dateB.getTime() - dateA.getTime();
}