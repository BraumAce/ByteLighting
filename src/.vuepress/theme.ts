import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.braumace.cn",
  darkmode: "switch",
  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  author: {
    name: "BraumAce",
    url: "https://blog.braumace.cn/article",
  },

  // 图标库
  iconAssets: "fontawesome-with-brands",

  repo: "BraumAce/ByteLighting",
  docsDir: "src",

  navbar,
  sidebar,
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2023016031号-2</a>',
  displayFooter: false,

  pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],

  blog: {
    description: "一个后端开发者",
    sidebarDisplay: "mobile",
    intro: "/intro.html",
    medias: {
      Email: "mailto:1693717911@qq.com",
      Gitee: "https://gitee.com/BraumAce",
      GitHub: "https://github.com/BraumAce",
      // Gitlab: "https://example.com",
      // Lark: "https://www.feishu.cn/invitation/page/add_contact/?token=e16lc6b4-120b-4742-b51f-ca731b693bfa&amp;unique_id=UBZmuOUVhQ7tEjVABCoQtQ==",
      QQ: "tencent://message/?uin=1693717911&Site=&Menu=yes",
      Wechat: "weixin://dl/business/?t=Pithy-SeeYou",
      Zhihu: "https://www.zhihu.com/people/18779889803",
      BiliBili: "https://space.bilibili.com/351506386",
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 加密文章
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,

    // 搜索框
    searchPro: {
      // 索引全部内容
      indexContent: true,
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
      components: ["Badge", "VPCard"],
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

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

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
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
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
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
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
});
