import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/ByteLighting/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "字节流光",
      description: "记录日常学习和技术钻研",
    },
    "/en/": {
      lang: "en-US",
      title: "Byte-Lighting",
      description: "Record daily study and technical research",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
