import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/ByteLighting/",

  lang: "zh-CN",
  title: "ByteLighting",
  description: "记录日常学习和技术钻研",

  head: [
    [ "meta", { rel: "icon", href: "/favicon.ico" }],
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
        content: "Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发",
      },
    ],
    [
      "meta", {
        name: "description",
        content: "记录日常学习和技术钻研",
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

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  // 组件
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    },
  },
});
