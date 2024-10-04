import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent, onMounted } from 'vue';
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
// import "vuepress-theme-hope/presets/left-blog-info.scss";    // 左侧信息面板
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";    // 圆形头像
import "vuepress-theme-hope/presets/bounce-icon.scss";    // 图标悬停跳动

const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));

export default defineClientConfig({
  enhance( { app } ) {
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
    // setupRunningTimeFooter(
    //   new Date("2024-06-30"),
    //   {
    //     "/": "已运行 :day 天 :hour 小时 :minute 分钟",
    //   },
    //   true,
    // );
    setupTransparentNavbar({
      type: "homepage",
    })
  },
  // 添加新布局
  layouts: {},
  rootComponents: [
    BlogBeautify,
    NavMusic,
    TopNavBeautify,
  ],
});