import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "资源汇总", icon: "", link: "/information/" },
  { text: "程序人生", icon: "", link: "/program/",},
  { text: "算法笔记", icon: "", link: "/algorithm/" },
  { text: "开源项目", icon: "fa-brands fa-github", link: "/open-source-project/" },
  {
    text: "技术小结",
    icon: "",
    prefix: "/technology/",
    children: [
      { text: "开发框架", icon: "", link: "" },
      { text: "中间件", icon: "", link: "" },
      { text: "架构设计", icon: "", link: "" },
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

