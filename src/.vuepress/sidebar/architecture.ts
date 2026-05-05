import { arraySidebar } from "vuepress-theme-hope";

export const architecture = arraySidebar([
  {
    text: "软考-系统架构师",
    icon: "grade",
    prefix: "ruankao/",
    children: [
      { text: "软件工程", prefix: "software-engineering/", collapsible: true, children: "structure" },
      { text: "系统分析与设计", prefix: "system-analysis-design/", collapsible: true, children: "structure" },
      { text: "系统架构师设计", prefix: "system-architect-design/", collapsible: true, children: "structure" },
    ],
  },
  {
    text: "系统设计",
    icon: "design",
    prefix: "system-design/",
    children: [
      { text: "评论系统", prefix: "comment/", collapsible: true, children: "structure" },
      { text: "架构模式", prefix: "pattern/", collapsible: true, children: "structure" },
    ],
  },
]);
