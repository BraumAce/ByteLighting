import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";

export default defineClientConfig({
  enhance() {},
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
  rootComponents: [],
});