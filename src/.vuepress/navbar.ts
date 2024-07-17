import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "资源汇总", icon: "fa-solid fa-bookmark", link: "/information/" },
  { text: "程序人生", icon: "fa-solid fa-book-open", link: "/program/",},
  { text: "算法笔记", icon: "book", link: "/algorithm/" },
  { text: "开源项目", icon: "fa-brands fa-github", link: "/open-source-project/" },
  {
    text: "技术小结",
    icon: "fa-solid fa-list",
    children: [
      { text: "开发框架", icon: "fa-solid fa-server", link: "/dev-framework/" },
      { text: "中间件", icon: "fa-solid fa-database", link: "/middleware/" },
      { text: "架构设计", icon: "fa-solid fa-network-wired", link: "/architecture/" },
    ],
  },
  {
    text: "关于本站",
    icon: "circle-info",
    children: [
      { text: "关于作者", icon: "circle-info", link: "/intro.html"},
      { text: "更新历史", icon: "history", link: "/timeline/"},
    ],
  },
]);

