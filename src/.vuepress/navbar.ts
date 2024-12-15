import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "程序人生", icon: "coffee", link: "/program/" },
  { text: "算法笔记", icon: "book", link: "/algorithm/" },
  { text: "开源项目", icon: "github", link: "/open-project/" },
  {
    text: "技术小结",
    icon: "books",
    children: [
      { text: "计算机", icon: "computer", link: "/computer/" },
      { text: "常用框架", icon: "framework", link: "/framework/" },
      { text: "架构设计", icon: "server", link: "/architecture/" },
    ],
  },
  {
    text: "关于本站",
    icon: "about",
    children: [
      { text: "全部文章", icon: "books", link: "/article/"},
      { text: "关于作者", icon: "about", link: "/intro.html"},
      { text: "更新历史", icon: "history", link: "/timeline/"},
    ],
  },
]);

