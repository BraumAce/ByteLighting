import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/ByteLighting/",

  lang: "zh-CN",
  title: "字节流光",
  description: "记录日常学习和技术钻研",

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
