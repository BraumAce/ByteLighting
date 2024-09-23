import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.braumace.cn",
  logo: "logo.png",
  favicon: "/favicon.ico",

  author: {
    name: "BraumAce",
    url: "https://blog.braumace.cn/article",
  },

  // 图标库
//   iconAssets: "fontawesome-with-brands",
   iconAssets: "//at.alicdn.com/t/c/font_4608718_rak4bm2mgkp.css",

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
  headerDepth: 3,
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2023016031号-2</a>',
  displayFooter: true,

  // 关闭路径导航
  breadcrumb: false,

  pageInfo: ["Author", "Date", "Category", "Tag", "Original", "Word", "ReadingTime"],

  blog: {
    articlePerPage: 20,
    avatar: "BraumAce.jpg",
    description: "一个后端开发者",
    sidebarDisplay: "mobile",
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

  // page meta
  metaLocales: {
    lastUpdated: "上次更新",
    editLink: "在 GitHub 上编辑此页",
  },

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

  plugins: {
    blog: {
      type: [
        {
          key: "reprint",
          filter: (page) => page.frontmatter.reprint,
          sorter: (pageA, pageB) =>
            compareDate(new Date(pageA.frontmatter.date), new Date(pageB.frontmatter.date)),
        },
      ],
    },

    // 搜索框
    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
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

    components: {
      components: ["Badge", "VPCard", "BiliBili", "PDF"],
      componentOptions: {
        share: {
            services: ["email", "qq", "qrcode", "qzone", "facebook", "telegram", "twitter", "weibo", "wordpress"],
        },
      },
    },

    copyright: {
      global: true,
      canonical: "https://blog.braumace.cn/",
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
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
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      hint: true,

      chart: true,
      echarts: true,
      flowchart: true,

      katex: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // PWA支持
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
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

function compareDate(dateA, dateB) {
    // 比较两个日期对象的时间戳
    return dateB - dateA;
}