import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "AI", icon: "AI", link: "/domains/ai/" },
  { text: "后端", icon: "server", link: "/domains/backend/" },
  { text: "算法", icon: "code", link: "/domains/algorithms/" },
  { text: "计算机", icon: "computer", link: "/domains/cs-fundamentals/" },
  { text: "程序人生", icon: "coffee", link: "/domains/blog/" },
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
