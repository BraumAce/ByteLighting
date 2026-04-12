import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { llmsPlugin } from "@vuepress/plugin-llms";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
//   base: "/ByteLighting/",

  lang: "zh-CN",
  title: "ByteLighting",
  description: "ByteLighting Wiki - 结构化知识库",

  head: [
    // meta
    [ "meta", { name: "theme-color", content: "#2980b9" }],
    [ "meta", { name: "robots", content: "all" }],
    [ "meta", { name: "author", content: "BraumAce" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    [ "meta", { "http-equiv": "Pragma", content: "no-cache" }],
    [ "meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta", {
        name: "keywords",
        content: "知识库, Wiki, AI, LLM, Java, 算法, 数据库, MySQL, Spring, Redis, 架构设计, 后端开发, 计算机基础",
      },
    ],
    [
      "meta", {
        name: "description",
        content: "ByteLighting Wiki - 结构化知识库",
      },
    ],
    [ "meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
    ],
  ],

  bundler: viteBundler(),

  theme,

  plugins: [
    llmsPlugin({
      domain: "https://blog.bytelighting.cn",
    }),
  ],

  // Enable it with pwa
  shouldPrefetch: false,

  // 组件
  alias: {
    "@theme-hope/components/blog/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    "@BlogHeroOriginal": path.resolve(
      __dirname,
      "../../node_modules/vuepress-theme-hope/dist/client/components/blog/BlogHero.js",
    ),
  },

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    },
  },
});
