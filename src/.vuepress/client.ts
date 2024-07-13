import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";    // 左侧信息面板
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";    // 圆形头像
import "vuepress-theme-hope/presets/bounce-icon.scss";    // 图标悬停跳动
import BlogBeautify from "./components/BlogBeautify.vue";
import TopNavBeautify from "./components/TopNavBeautify.vue";
import NavMusic from "./components/NavMusic.vue";
import MyIcon from "./components/MyIcon.vue";

export default defineClientConfig({
  enhance( { app } ) {
    app.component('MyIcon', MyIcon);
  },
  setup() {
    setupRunningTimeFooter(
      new Date("2024-06-30"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟",
      },
      true,
    );
    setupTransparentNavbar({
      type: "homepage",
    })
  },
  layouts: {},
  rootComponents: [
    BlogBeautify,
    TopNavBeautify,
    NavMusic,
  ],
});