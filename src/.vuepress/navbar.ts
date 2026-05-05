import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "AI", icon: "AI", link: "/ai/" },
  { text: "程序人生", icon: "coffee", link: "/program/" },
  { text: "架构设计", icon: "server", link: "/architecture/" },
  {
    text: "计算机",
    icon: "computer",
    children: [
      { text: "通用技术", icon: "books", link: "/computer/technology/" },
      { text: "算法", icon: "code", link: "/computer/algorithm/" },
      { text: "后端设计", icon: "framework", link: "/computer/backend/" },
    ],
  },
  {
    text: "关于本站",
    icon: "about",
    children: [
      { text: "全部文章", icon: "books", link: "/article/" },
      { text: "关于作者", icon: "about", link: "/intro.html" },
      { text: "更新历史", icon: "history", link: "/timeline/" },
    ],
  },
]);
